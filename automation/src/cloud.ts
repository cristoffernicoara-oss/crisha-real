import { logger } from "./lib/logger.js";
import { startInboxLoop } from "./inbox/poller.js";
import { startOutreachLoop } from "./outreach/scheduler.js";

/**
 * Always-on cloud entrypoint: outreach + inbox in parallel.
 * Blog runs separately via GitHub Actions (daily-blog.yml).
 *
 * Deploy on Railway / Render / Fly / any VPS with a persistent volume for /app/data
 * so SQLite + Graph token cache survive restarts.
 */
export async function startCloudWorkers(): Promise<void> {
  logger.info("Cloud workers starting (outreach + inbox). Blog = GitHub Actions.");

  await Promise.all([
    startOutreachLoop().catch((e) => {
      logger.error({ err: e }, "Outreach loop crashed");
      process.exit(1);
    }),
    startInboxLoop().catch((e) => {
      logger.error({ err: e }, "Inbox loop crashed");
      process.exit(1);
    }),
  ]);
}
