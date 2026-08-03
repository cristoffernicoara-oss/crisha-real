import { config } from "../config.js";
import {
  getDb,
  getProspectById,
  type Prospect,
} from "../db/client.js";
import { logger } from "../lib/logger.js";
import { monthsAgoIso } from "../lib/time.js";

export type QuarantineReason =
  | "opt_out"
  | "within_7_months"
  | "not_interested_cooldown"
  | "missing_prospect";

export type KanKontaktasResult =
  | { ok: true }
  | { ok: false; reason: QuarantineReason; detail: string };

function logSkip(prospectId: number, reason: QuarantineReason, detail: string): void {
  getDb()
    .prepare(
      `INSERT INTO quarantine_skips (prospect_id, reason, detail) VALUES (?, ?, ?)`
    )
    .run(prospectId, reason, detail);
  logger.info({ prospectId, reason, detail }, "Quarantine skip");
}

/**
 * Gate before every outbound send. New imports cannot bypass this.
 */
export function kan_kontaktas(prospectId: number): KanKontaktasResult {
  const prospect = getProspectById(prospectId);
  if (!prospect) {
    return { ok: false, reason: "missing_prospect", detail: "Prospect saknas" };
  }
  return kanKontaktasProspect(prospect, true);
}

export function kanKontaktasProspect(
  prospect: Prospect,
  writeLog = false
): KanKontaktasResult {
  if (prospect.status === "avregistrera") {
    const result: KanKontaktasResult = {
      ok: false,
      reason: "opt_out",
      detail: "Status avregistrera — kontakta aldrig igen",
    };
    if (writeLog) logSkip(prospect.id, result.reason, result.detail);
    return result;
  }

  const cutoff = monthsAgoIso(config.QUARANTINE_MONTHS);
  if (prospect.senast_kontaktad && prospect.senast_kontaktad > cutoff) {
    const result: KanKontaktasResult = {
      ok: false,
      reason: "within_7_months",
      detail: `Senast kontaktad ${prospect.senast_kontaktad} (karantän ${config.QUARANTINE_MONTHS} mån, cutoff ${cutoff})`,
    };
    if (writeLog) logSkip(prospect.id, result.reason, result.detail);
    return result;
  }

  if (prospect.status === "inte_intresserad") {
    if (!prospect.senast_kontaktad || prospect.senast_kontaktad > cutoff) {
      const result: KanKontaktasResult = {
        ok: false,
        reason: "not_interested_cooldown",
        detail: `inte_intresserad — vänta tills ${config.QUARANTINE_MONTHS} mån efter ${prospect.senast_kontaktad ?? "okänt datum"}`,
      };
      if (writeLog) logSkip(prospect.id, result.reason, result.detail);
      return result;
    }
  }

  return { ok: true };
}
