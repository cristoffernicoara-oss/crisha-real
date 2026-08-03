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
import { kanKontaktasProspect } from "./quarantine.js";

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

function pick(row: RawRow, aliases: string[]): string {
  const map = new Map<string, unknown>();
  for (const [k, v] of Object.entries(row)) {
    map.set(normalizeHeader(k), v);
  }
  for (const a of aliases) {
    const v = map.get(a);
    if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
  }
  return "";
}

function readRows(filePath: string): RawRow[] {
  const abs = path.resolve(filePath);
  const ext = path.extname(abs).toLowerCase();
  if (ext === ".csv" || ext === ".txt") {
    return parse(fs.readFileSync(abs, "utf8"), {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      bom: true,
    }) as RawRow[];
  }
  if (ext === ".xlsx" || ext === ".xls") {
    const wb = XLSX.readFile(abs);
    return XLSX.utils.sheet_to_json<RawRow>(wb.Sheets[wb.SheetNames[0]], {
      defval: "",
    });
  }
  throw new Error(`Okänt format: ${ext}`);
}

export type ProspectImportResult = {
  inserted: number;
  updated: number;
  skipped_quarantine: number;
  errors: string[];
};

/** Import new prospect queue (name, email, website, industry). */
export function importProspects(filePath: string): ProspectImportResult {
  const rows = readRows(filePath);
  const result: ProspectImportResult = {
    inserted: 0,
    updated: 0,
    skipped_quarantine: 0,
    errors: [],
  };
  const db = getDb();
  db.exec("BEGIN");
  try {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const company = pick(row, ["foretagsnamn", "company", "namn", "name", "foretag"]);
      const emailRaw = pick(row, ["mailadress", "email", "e-post", "epost", "mail"]);
      const website = pick(row, ["hemsida", "website", "url", "web"]);
      const industry = pick(row, ["bransch", "industry", "vertical"]);

      if (!emailRaw || !emailRaw.includes("@")) {
        result.errors.push(`Rad ${i + 2}: ogiltig e-post`);
        continue;
      }
      const email = normalizeEmail(emailRaw);
      const domain = emailDomain(email);
      const existing = db
        .prepare("SELECT * FROM prospects WHERE email = ?")
        .get(email) as
        | {
            id: number;
            status: string;
            senast_kontaktad: string | null;
            company: string;
          }
        | undefined;

      if (existing) {
        const gate = kanKontaktasProspect(
          {
            id: existing.id,
            company: existing.company,
            email,
            email_domain: domain,
            website: website || null,
            industry: industry || null,
            status: existing.status as never,
            senast_kontaktad: existing.senast_kontaktad,
            created_at: "",
            updated_at: "",
          },
          true
        );
        if (!gate.ok && existing.status === "avregistrera") {
          result.skipped_quarantine++;
          continue;
        }
        db.prepare(
          `UPDATE prospects SET
            company = COALESCE(NULLIF(?, ''), company),
            website = COALESCE(NULLIF(?, ''), website),
            industry = COALESCE(NULLIF(?, ''), industry),
            status = CASE WHEN status = 'avregistrera' THEN status
                          WHEN status IN ('inte_intresserad', 'kontaktad', 'kontaktad_manuellt', 'bokat') THEN status
                          ELSE 'aktiv' END,
            updated_at = datetime('now')
          WHERE id = ?`
        ).run(company, website, industry, existing.id);
        result.updated++;
      } else {
        db.prepare(
          `INSERT INTO prospects (company, email, email_domain, website, industry, status)
           VALUES (?, ?, ?, ?, ?, 'aktiv')`
        ).run(company || email.split("@")[0], email, domain, website || null, industry || null);
        result.inserted++;
      }
    }
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
  logger.info(result, "Prospect import done");
  return result;
}
