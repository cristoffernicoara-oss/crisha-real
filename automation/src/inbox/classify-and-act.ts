import { classifyReply } from "../ai/classify.js";
import { generateFollowUpReply } from "../ai/personalize.js";
import { config } from "../config.js";
import { getDb, getProspectByEmail, touchProspect } from "../db/client.js";
import { sendMail } from "../graph/mail.js";
import { logger } from "../lib/logger.js";
import { sendBookingNotice, sendUnclearNotice } from "./escalate.js";

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function handleInboundReply(input: {
  from: string;
  subject: string;
  bodyHtml: string;
  graphMessageId: string;
  conversationId?: string;
}): Promise<void> {
  const prospect = getProspectByEmail(input.from);
  if (!prospect) {
    logger.debug({ from: input.from }, "Inbound from unknown sender — ignore");
    return;
  }

  const existing = getDb()
    .prepare("SELECT id FROM messages WHERE graph_message_id = ?")
    .get(input.graphMessageId);
  if (existing) return;

  const text = stripHtml(input.bodyHtml) || input.subject;
  const insert = getDb()
    .prepare(
      `INSERT INTO messages (prospect_id, direction, graph_message_id, conversation_id, subject, body, status)
       VALUES (?, 'in', ?, ?, ?, ?, 'svar')`
    )
    .run(
      prospect.id,
      input.graphMessageId,
      input.conversationId ?? null,
      input.subject,
      text
    );
  const inboundId = Number(insert.lastInsertRowid);

  const classification = await classifyReply(text);
  getDb()
    .prepare(
      `INSERT INTO classifications (message_id, label, rationale) VALUES (?, ?, ?)`
    )
    .run(inboundId, classification.label, classification.rationale);

  logger.info(
    { prospectId: prospect.id, label: classification.label },
    "Reply classified"
  );

  const lastOut = getDb()
    .prepare(
      `SELECT subject, body FROM messages WHERE prospect_id = ? AND direction = 'out'
       ORDER BY id DESC LIMIT 1`
    )
    .get(prospect.id) as { subject: string; body: string } | undefined;

  const today = new Date().toISOString().slice(0, 10);

  switch (classification.label) {
    case "intresserad_vill_boka_möte": {
      await sendBookingNotice({
        company: prospect.company,
        email: prospect.email,
        summary: classification.summary,
      });
      await sendMail({
        to: prospect.email,
        subject: `Re: ${input.subject}`,
        bodyHtml: `<p>Tack för svaret — här är en länk för att boka tid:</p><p><a href="${config.CALENDLY_URL}">${config.CALENDLY_URL}</a></p>`,
        replyToMessageId: input.graphMessageId,
      });
      touchProspect(prospect.id, { status: "bokat", senast_kontaktad: today });
      break;
    }
    case "intresserad_men_har_frågor": {
      const replyHtml = await generateFollowUpReply({
        company: prospect.company,
        theirMessage: text,
        originalSubject: lastOut?.subject ?? input.subject,
      });
      await sendMail({
        to: prospect.email,
        subject: `Re: ${input.subject}`,
        bodyHtml: replyHtml,
        replyToMessageId: input.graphMessageId,
      });
      getDb()
        .prepare(
          `INSERT INTO messages (prospect_id, direction, subject, body, status)
           VALUES (?, 'out', ?, ?, 'skickat')`
        )
        .run(prospect.id, `Re: ${input.subject}`, replyHtml);
      touchProspect(prospect.id, { status: "kontaktad", senast_kontaktad: today });
      break;
    }
    case "inte_intresserad": {
      touchProspect(prospect.id, {
        status: "inte_intresserad",
        senast_kontaktad: today,
      });
      break;
    }
    case "avregistrera": {
      touchProspect(prospect.id, {
        status: "avregistrera",
        senast_kontaktad: today,
      });
      break;
    }
    case "oklart": {
      await sendUnclearNotice({
        prospectId: prospect.id,
        company: prospect.company,
        outreachSummary: lastOut?.subject ?? "(saknas)",
        replyText: text,
        rationale: classification.rationale,
        inboundMessageId: inboundId,
      });
      break;
    }
  }
}
