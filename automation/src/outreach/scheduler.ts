import { config, dailyCapForWeek } from "../config.js";
import { getSetting, setSetting } from "../db/client.js";
import { logger } from "../lib/logger.js";
import {
  getZonedParts,
  isBusinessSendWindow,
  randomDelayMs,
  sleep,
  weeksSince,
} from "../lib/time.js";
import { countSentToday, nextEligibleProspects } from "./queue.js";
import { sendToProspect } from "./send.js";

function ensureRampStart(): string {
  let start = getSetting("ramp_week_start");
  if (!start) {
    start = new Date().toISOString().slice(0, 10);
    setSetting("ramp_week_start", start);
  }
  return start;
}

export async function runOutreachOnce(): Promise<{ sent: number; cap: number }> {
  if (!config.OUTREACH_ENABLED || getSetting("outreach_enabled") === "false") {
    logger.info("Outreach pausad (OUTREACH_ENABLED / settings)");
    return { sent: 0, cap: 0 };
  }

  if (!isBusinessSendWindow(new Date(), config.TIMEZONE)) {
    logger.info("Utanför sändfönster (mån–fre 08–16 Stockholm)");
    return { sent: 0, cap: 0 };
  }

  const rampStart = ensureRampStart();
  const week = weeksSince(rampStart);
  const cap = dailyCapForWeek(week);
  const { dateKey } = getZonedParts(new Date(), config.TIMEZONE);
  const already = countSentToday(dateKey);
  const remaining = Math.max(0, cap - already);

  logger.info({ week, cap, already, remaining, dryRun: config.DRY_RUN }, "Outreach once");

  if (remaining === 0) return { sent: 0, cap };

  const prospects = nextEligibleProspects(remaining);
  let sent = 0;
  for (const p of prospects) {
    if (!isBusinessSendWindow(new Date(), config.TIMEZONE)) break;
    const ok = await sendToProspect(p);
    if (ok) sent++;
    if (sent < remaining && prospects.indexOf(p) < prospects.length - 1) {
      const delay = randomDelayMs(15, 30);
      logger.info({ delayMin: Math.round(delay / 60000) }, "Waiting before next send");
      await sleep(delay);
    }
  }
  return { sent, cap };
}

export async function startOutreachLoop(): Promise<void> {
  logger.info("Outreach loop started");
  for (;;) {
    try {
      if (
        config.OUTREACH_ENABLED &&
        getSetting("outreach_enabled") !== "false" &&
        isBusinessSendWindow(new Date(), config.TIMEZONE)
      ) {
        const { dateKey } = getZonedParts(new Date(), config.TIMEZONE);
        const week = weeksSince(ensureRampStart());
        const cap = dailyCapForWeek(week);
        if (countSentToday(dateKey) < cap) {
          await runOutreachOnce();
        }
      }
    } catch (e) {
      logger.error({ err: e }, "Outreach loop error");
    }
    await sleep(60_000);
  }
}
