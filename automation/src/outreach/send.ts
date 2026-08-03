import { generateOutreachEmail } from "../ai/personalize.js";
import { getDb, touchProspect, type Prospect } from "../db/client.js";
import { sendMail, notifyOperator } from "../graph/mail.js";
import { logger } from "../lib/logger.js";
import { kan_kontaktas } from "./quarantine.js";

export async function sendToProspect(prospect: Prospect): Promise<boolean> {
  const gate = kan_kontaktas(prospect.id);
  if (!gate.ok) {
    logger.info({ id: prospect.id, reason: gate.reason }, "Skip send — quarantine");
    return false;
  }

  try {
    const email = await generateOutreachEmail({
      company: prospect.company,
      website: prospect.website,
      industry: prospect.industry,
      email: prospect.email,
    });

    await sendMail({
      to: prospect.email,
      subject: email.subject,
      bodyHtml: email.bodyHtml,
    });

    const today = new Date().toISOString().slice(0, 10);
    getDb()
      .prepare(
        `INSERT INTO messages (prospect_id, direction, subject, body, status, sent_at)
         VALUES (?, 'out', ?, ?, 'skickat', datetime('now'))`
      )
      .run(prospect.id, email.subject, email.bodyHtml);

    touchProspect(prospect.id, {
      status: "kontaktad",
      senast_kontaktad: today,
    });

    logger.info(
      { prospectId: prospect.id, email: prospect.email, note: email.personalizationNote },
      "Outreach sent"
    );
    return true;
  } catch (e) {
    logger.error({ err: e, prospectId: prospect.id }, "Send failed");
    getDb()
      .prepare(
        `INSERT INTO messages (prospect_id, direction, subject, body, status)
         VALUES (?, 'out', ?, ?, 'failed')`
      )
      .run(prospect.id, "(failed)", String(e));
    await notifyOperator(
      "[Crisha Automation] Utskick misslyckades",
      `<p>Kunde inte skicka till <strong>${prospect.email}</strong> (${prospect.company}).</p><pre>${String(e)}</pre>`
    ).catch(() => undefined);
    return false;
  }
}
