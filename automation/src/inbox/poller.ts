import { config } from "../config.js";
import { getDb } from "../db/client.js";
import { listRecentInbox } from "../graph/mail.js";
import { logger } from "../lib/logger.js";
import { sleep } from "../lib/time.js";
import { handleInboundReply } from "./classify-and-act.js";
import { processOperatorCommands } from "./command-listener.js";
import { notifyTechnicalError } from "./escalate.js";

async function checkBounceStorm(): Promise<void> {
  const row = getDb()
    .prepare(
      `SELECT COUNT(*) AS c FROM messages
       WHERE status = 'bounce' AND date(sent_at) = date('now')`
    )
    .get() as { c: number };
  if (row.c >= config.BOUNCE_ALERT_THRESHOLD) {
    await notifyTechnicalError(
      "För många bounces idag",
      `${row.c} bounces registrerade idag (tröskel ${config.BOUNCE_ALERT_THRESHOLD}). Överväg att pausa outreach.`
    );
  }
}

export async function pollInboxOnce(): Promise<void> {
  const messages = await listRecentInbox(50);
  for (const m of messages) {
    if (m.from === config.OPERATOR_EMAIL.toLowerCase()) continue;
    // Skip our own outbound echoes
    if (config.OUTLOOK_USER && m.from === config.OUTLOOK_USER.toLowerCase()) continue;
    try {
      await handleInboundReply({
        from: m.from,
        subject: m.subject,
        bodyHtml: m.bodyHtml,
        graphMessageId: m.id,
        conversationId: m.conversationId,
      });
    } catch (e) {
      logger.error({ err: e, id: m.id }, "Failed handling inbound");
      await notifyTechnicalError("Inbox-hantering misslyckades", String(e));
    }
  }
  await processOperatorCommands();
  await checkBounceStorm();
}

export async function startInboxLoop(): Promise<void> {
  logger.info({ intervalMs: config.INBOX_POLL_MS }, "Inbox poller started");
  for (;;) {
    try {
      await pollInboxOnce();
    } catch (e) {
      logger.error({ err: e }, "Inbox poll error");
      await notifyTechnicalError("Inbox poll-fel", String(e)).catch(() => undefined);
    }
    await sleep(config.INBOX_POLL_MS);
  }
}
