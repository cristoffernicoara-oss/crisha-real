import { getDb, type Prospect } from "../db/client.js";
import { kan_kontaktas } from "./quarantine.js";

/** Next prospects eligible for send (aktiv + passes quarantine). */
export function nextEligibleProspects(limit: number): Prospect[] {
  const rows = getDb()
    .prepare(
      `SELECT * FROM prospects
       WHERE status = 'aktiv'
       ORDER BY id ASC
       LIMIT ?`
    )
    .all(limit * 3) as Prospect[];

  const out: Prospect[] = [];
  for (const p of rows) {
    const gate = kan_kontaktas(p.id);
    if (gate.ok) out.push(p);
    if (out.length >= limit) break;
  }
  return out;
}

export function countSentToday(dateKey: string): number {
  // dateKey YYYY-MM-DD — compare date(sent_at)
  const row = getDb()
    .prepare(
      `SELECT COUNT(*) AS c FROM messages
       WHERE direction = 'out' AND status = 'skickat'
       AND date(sent_at) = date(?)`
    )
    .get(dateKey) as { c: number };
  return row.c;
}
