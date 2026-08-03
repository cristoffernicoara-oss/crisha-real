import { config } from "../config.js";
import { getDb } from "../db/client.js";
import { notifyOperator } from "../graph/mail.js";
import { logger } from "../lib/logger.js";

export async function sendUnclearNotice(input: {
  prospectId: number;
  company: string;
  outreachSummary: string;
  replyText: string;
  rationale: string;
  inboundMessageId: number;
}): Promise<void> {
  const subject = `[Oklart svar] ${input.company} behöver din bedömning`;
  const bodyHtml = `
<p><strong>Ursprungligt outreach-mail:</strong> ${escapeHtml(input.outreachSummary)}</p>
<p><strong>Prospectens svar:</strong></p>
<blockquote>${escapeHtml(input.replyText)}</blockquote>
<p><strong>AI:ns osäkerhet:</strong> ${escapeHtml(input.rationale)}</p>
<hr/>
<p>Svara på detta mail med ETT av följande kommandon:</p>
<ul>
  <li><code>BOKA</code> — skicka Calendly-länk och markera som möte bokat</li>
  <li><code>SVARA: [din text här]</code> — skicka exakt den texten till prospecten</li>
  <li><code>AVSLUTA</code> — markera som inte intresserad</li>
</ul>
<p><!--CRISHA_ESC:${input.prospectId}:${input.inboundMessageId}--></p>
`.trim();

  await notifyOperator(subject, bodyHtml);

  getDb()
    .prepare(
      `INSERT INTO escalations (prospect_id, inbound_message_id, status)
       VALUES (?, ?, 'pending')`
    )
    .run(input.prospectId, input.inboundMessageId);

  logger.info({ prospectId: input.prospectId }, "Unclear escalation sent");
}

export async function sendBookingNotice(input: {
  company: string;
  email: string;
  summary: string;
}): Promise<void> {
  await notifyOperator(
    `[Intresse] ${input.company} vill boka möte`,
    `<p><strong>${escapeHtml(input.company)}</strong> (${escapeHtml(input.email)})</p>
     <p>${escapeHtml(input.summary)}</p>
     <p>Föreslagen länk: <a href="${config.CALENDLY_URL}">${config.CALENDLY_URL}</a></p>`
  );
}

export async function notifyTechnicalError(title: string, detail: string): Promise<void> {
  await notifyOperator(
    `[Crisha Automation] ${title}`,
    `<p>${escapeHtml(detail)}</p>`
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
