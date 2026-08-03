import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { config } from "../config.js";
import { logger } from "../lib/logger.js";

export type ProspectStatus =
  | "aktiv"
  | "kontaktad"
  | "kontaktad_manuellt"
  | "avslutad"
  | "karantan"
  | "inte_intresserad"
  | "avregistrera"
  | "bokat";

export type Prospect = {
  id: number;
  company: string;
  email: string;
  email_domain: string;
  website: string | null;
  industry: string | null;
  status: ProspectStatus;
  senast_kontaktad: string | null;
  created_at: string;
  updated_at: string;
};

let db: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (db) return db;
  fs.mkdirSync(path.dirname(config.dbPath), { recursive: true });
  db = new DatabaseSync(config.dbPath);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");
  const schema = fs.readFileSync(config.schemaPath, "utf8");
  db.exec(schema);
  logger.info({ path: config.dbPath }, "SQLite ready (node:sqlite)");
  return db;
}

export function getSetting(key: string): string | null {
  const row = getDb()
    .prepare("SELECT value FROM settings WHERE key = ?")
    .get(key) as { value: string } | undefined;
  return row?.value ?? null;
}

export function setSetting(key: string, value: string): void {
  getDb()
    .prepare(
      `INSERT INTO settings (key, value) VALUES (?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value`
    )
    .run(key, value);
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function emailDomain(email: string): string {
  const parts = normalizeEmail(email).split("@");
  return parts[1] ?? "";
}

export function getProspectById(id: number): Prospect | undefined {
  return getDb().prepare("SELECT * FROM prospects WHERE id = ?").get(id) as
    | Prospect
    | undefined;
}

export function getProspectByEmail(email: string): Prospect | undefined {
  return getDb()
    .prepare("SELECT * FROM prospects WHERE email = ?")
    .get(normalizeEmail(email)) as Prospect | undefined;
}

export function touchProspect(
  id: number,
  fields: Partial<
    Pick<Prospect, "status" | "senast_kontaktad" | "company" | "website" | "industry">
  >
): void {
  const current = getProspectById(id);
  if (!current) return;
  getDb()
    .prepare(
      `UPDATE prospects SET
        company = ?,
        website = ?,
        industry = ?,
        status = ?,
        senast_kontaktad = ?,
        updated_at = datetime('now')
      WHERE id = ?`
    )
    .run(
      fields.company ?? current.company,
      fields.website !== undefined ? fields.website : current.website,
      fields.industry !== undefined ? fields.industry : current.industry,
      fields.status ?? current.status,
      fields.senast_kontaktad !== undefined
        ? fields.senast_kontaktad
        : current.senast_kontaktad,
      id
    );
}
