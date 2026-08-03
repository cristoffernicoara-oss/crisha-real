import { config } from "../config.js";
import { getSetting } from "../db/client.js";
import { logger } from "../lib/logger.js";
import { getZonedParts, sleep } from "../lib/time.js";
import { runBlogJob } from "./generate.js";

const BLOG_HOUR = 7; // 07:00 Europe/Stockholm

/**
 * Runs forever: once per calendar day at 07:00 Stockholm, generate one article.
 * The host (PC/VPS) must stay on with this process running — nothing runs if the machine is off.
 */
export async function startBlogLoop(): Promise<void> {
  logger.info(
    { hour: BLOG_HOUR, tz: config.TIMEZONE },
    "Blog scheduler started — needs host online"
  );

  let lastRunDateKey = "";

  for (;;) {
    try {
      if (!config.BLOG_ENABLED || getSetting("blog_enabled") === "false") {
        await sleep(60_000);
        continue;
      }

      const { hour, minute, dateKey } = getZonedParts(new Date(), config.TIMEZONE);
      const inWindow = hour === BLOG_HOUR && minute < 5;

      if (inWindow && lastRunDateKey !== dateKey) {
        logger.info({ dateKey }, "Daily blog job starting (07:00 window)");
        await runBlogJob();
        lastRunDateKey = dateKey;
      }
    } catch (e) {
      logger.error({ err: e }, "Blog scheduler error");
    }

    await sleep(60_000);
  }
}
