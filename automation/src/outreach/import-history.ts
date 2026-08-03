import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import * as XLSX from "xlsx";
import {
  emailDomain,
  getDb,
  normalizeEmail,
} from "../db/client.js";
import { logger } from "../lib/logger.js";
import { parseFlexibleDate } from "../lib/time.js";

type RawRow = Record<string, unknown>;

function normalizeHeader(h: string): string {
  return h
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o");
}

function pickField(row: RawRow, aliases: string[]): string | number | undefined {
  const map = new Map<string, unknown>();
  for (const [k, v] of Object.entries(row)) {
    map.set(normalizeHeader(k), v);
  }
  for (const a of aliases) {
    const v = map.get(a);
    if (v !== undefined && v !== null && String(v).trim() !== "") return v as string | number;
  }
  return undefined;
}

function readRows(filePath: string): RawRow[] {
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) throw new Error(`Filen finns inte: ${abs}`);
  const ext = path.extname(abs).toLowerCase();

  if (ext === ".csv" || ext === ".txt") {
    const text = fs.readFileSync(abs, "utf8");
    return parse(text, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true,
      bom: true,
    }) as RawRow[];
  }

  if (ext === ".xlsx" || ext === ".xls") {
    const wb = XLSX.readFile(abs);
    const sheet = wb.Sheets[wb.SheetNames[0]];
    return XLSX.utils.sheet_to_json<RawRow>(sheet, { defval: "" });
  }

  throw new Error(`Okänt format: ${ext}. Använd .csv eller .xlsx`);
}

export type HistoryImportResult = {
  inserted: number;
  updated: number;
  skipped: number;
  errors: string[];
};

/**
 * DEL 0: Import earlier manual outreach history.
 * Upsert by email; keep later senast_kontaktad; status = kontaktad_manuellt.
 */
export function importHistory(filePath: string): HistoryImportResult {
  const rows = readRows(filePath);
  const result: HistoryImportResult = {
    inserted: 0,
    updated: 0,
    skipped: 0,
    errors: [],
  };
  const db = getDb();
  db.exec("BEGIN");
  try {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const companyRaw = pickField(row, [
        "foretagsnamn",
        "företagsnamn",
        "company",
        "namn",
        "name",
        "foretag",
      ]);
      const emailRaw = pickField(row, [
        "mailadress",
        "email",
        "e-post",
        "epost",
        "mail",
      ]);
      const dateRaw = pickField(row, [
        "datum_skickat",
        "datum",
        "date",
        "sent_at",
        "skickat",
        "senast_kontaktad",
      ]);

      if (!emailRaw) {
        result.skipped++;
        result.errors.push(`Rad ${i + 2}: saknar mailadress`);
        continue;
      }

      const email = normalizeEmail(String(emailRaw));
      if (!email.includes("@")) {
        result.skipped++;
        result.errors.push(`Rad ${i + 2}: ogiltig e-post "${email}"`);
        continue;
      }

      const date = dateRaw != null ? parseFlexibleDate(dateRaw) : null;
      if (!date) {
        result.skipped++;
        result.errors.push(`Rad ${i + 2}: ogiltigt datum`);
        continue;
      }

      const company = String(companyRaw ?? email.split("@")[0]).trim();
      const domain = emailDomain(email);

      const existing = db
        .prepare("SELECT id, senast_kontaktad FROM prospects WHERE email = ?")
        .get(email) as { id: number; senast_kontaktad: string | null } | undefined;

      if (!existing) {
        db.prepare(
          `INSERT INTO prospects (company, email, email_domain, status, senast_kontaktad)
           VALUES (?, ?, ?, 'kontaktad_manuellt', ?)`
        ).run(company, email, domain, date);
        result.inserted++;
        continue;
      }

      const prev = existing.senast_kontaktad;
      const keepDate = !prev || date >= prev ? date : prev;
      db.prepare(
        `UPDATE prospects SET
          company = CASE WHEN ? != '' THEN ? ELSE company END,
          status = 'kontaktad_manuellt',
          senast_kontaktad = ?,
          updated_at = datetime('now')
        WHERE id = ?`
      ).run(company, company, keepDate, existing.id);
      result.updated++;
    }
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
  logger.info(result, "History import done");
  return result;
}
