import { config } from "../config.js";
import { getDb, getProspectById, touchProspect } from "../db/client.js";
import { listRecentInbox, notifyOperator, sendMail } from "../graph/mail.js";
import { logger } from "../lib/logger.js";

function parseCommand(body: string):
  | { type: "BOKA" }
  | { type: "AVSLUTA" }
  | { type: "SVARA"; text: string }
  | { type: "INVALID" } {
  const text = body
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (/^BOKA\b/i.test(text)) return { type: "BOKA" };
  if (/^AVSLUTA\b/i.test(text)) return { type: "AVSLUTA" };
  const m = text.match(/^SVARA:\s*([\s\S]+)/i);
  if (m) return { type: "SVARA", text: m[1].trim() };
  return { type: "INVALID" };
}

function extractEscalationIds(html: string): { prospectId: number; inboundId: number } | null {
  const m = html.match(/<!--CRISHA_ESC:(\d+):(\d+)-->/);
  if (!m) return null;
  return { prospectId: Number(m[1]), inboundId: Number(m[2]) };
}

const processedNoticeReplies = new Set<string>();

export async function processOperatorCommands(): Promise<void> {
  if (!config.OPERATOR_EMAIL) return;
  const inbox = await listRecentInbox(30);
  const fromOperator = inbox.filter(
    (m) => m.from === config.OPERATOR_EMAIL.toLowerCase()
  );

  for (const msg of fromOperator) {
    if (processedNoticeReplies.has(msg.id)) continue;
    if (!msg.subject.toLowerCase().includes("oklart svar")) {
      // Might be a reply that kept Re: — still try body marker
    }

    // Find parent notice via conversation: look for CRISHA_ESC in this message or we need prospect from subject
    let ids = extractEscalationIds(msg.bodyHtml);

    if (!ids) {
      // Try pending escalations matching company in subject
      const companyMatch = msg.subject.match(/\[Oklart svar\]\s*(.+?)\s*behöver/i);
      if (companyMatch) {
        const company = companyMatch[1].trim();
        const esc = getDb()
          .prepare(
            `SELECT e.id, e.prospect_id, e.inbound_message_id FROM escalations e
             JOIN prospects p ON p.id = e.prospect_id
             WHERE e.status = 'pending' AND p.company = ?
             ORDER BY e.id DESC LIMIT 1`
          )
          .get(company) as
          | { id: number; prospect_id: number; inbound_message_id: number }
          | undefined;
        if (esc) {
          ids = { prospectId: esc.prospect_id, inboundId: esc.inbound_message_id };
        }
      }
    }

    if (!ids) continue;

    const prospect = getProspectById(ids.prospectId);
    if (!prospect) continue;

    const cmd = parseCommand(msg.bodyHtml || msg.bodyPreview);
    processedNoticeReplies.add(msg.id);

    if (cmd.type === "INVALID") {
      await notifyOperator(
        `Re: ${msg.subject}`,
        `<p>Ogiltigt kommando. Svara med exakt:</p>
         <ul><li><code>BOKA</code></li><li><code>SVARA: din text</code></li><li><code>AVSLUTA</code></li></ul>
         <p><!--CRISHA_ESC:${ids.prospectId}:${ids.inboundId}--></p>`
      );
      continue;
    }

    const inbound = getDb()
      .prepare("SELECT graph_message_id, subject FROM messages WHERE id = ?")
      .get(ids.inboundId) as { graph_message_id: string | null; subject: string } | undefined;

    const today = new Date().toISOString().slice(0, 10);

    if (cmd.type === "BOKA") {
      await sendMail({
        to: prospect.email,
        subject: `Re: ${inbound?.subject ?? "Möte"}`,
        bodyHtml: `<p>Tack — boka gärna tid här:</p><p><a href="${config.CALENDLY_URL}">${config.CALENDLY_URL}</a></p>`,
        replyToMessageId: inbound?.graph_message_id ?? undefined,
      });
      touchProspect(prospect.id, { status: "bokat", senast_kontaktad: today });
    } else if (cmd.type === "SVARA") {
      await sendMail({
        to: prospect.email,
        subject: `Re: ${inbound?.subject ?? "Uppföljning"}`,
        bodyHtml: `<p>${cmd.text.replace(/\n/g, "<br/>")}</p>`,
        replyToMessageId: inbound?.graph_message_id ?? undefined,
      });
      touchProspect(prospect.id, { status: "kontaktad", senast_kontaktad: today });
    } else if (cmd.type === "AVSLUTA") {
      touchProspect(prospect.id, {
        status: "inte_intresserad",
        senast_kontaktad: today,
      });
    }

    getDb()
      .prepare(
        `UPDATE escalations SET status = 'resolved', resolved_at = datetime('now')
         WHERE prospect_id = ? AND status = 'pending'`
      )
      .run(prospect.id);

    logger.info({ prospectId: prospect.id, cmd: cmd.type }, "Operator command applied");
  }
}
