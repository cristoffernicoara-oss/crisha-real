import { Resend } from "resend";
import { NextResponse } from "next/server";

import { CONTACT_MAIL_SUBJECT_MAP, type ContactMailSource } from "@/lib/contact-mail";

export const runtime = "nodejs";

/** Form notifications go here (temporary; footer/contact still uses CONTACT.email). */
const MAIL_TO_INBOX = "cristoffer.nicoara@hotmail.com";

/** From-header i Resend — alltid Crisha Marketing <info@crisha.se> (Verifiera domän/adress i Resend). */
const RESEND_MAIL_FROM = "Crisha Marketing <info@crisha.se>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function validateFields(source: ContactMailSource, fields: Record<string, string>): string | null {
  const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

  if (source === "contactFull") {
    if (!fields.firstName?.trim()) return "firstName";
    if (!fields.lastName?.trim()) return "lastName";
    if (!fields.email?.trim() || !emailOk(fields.email)) return "email";
    if (!fields.phone?.trim() || fields.phone.replace(/\s/g, "").length < 10) return "phone";
    if (!fields.service?.trim()) return "service";
    if (!fields.budget?.trim()) return "budget";
    return null;
  }
  if (source === "contactCta") {
    if (!fields.name?.trim()) return "name";
    if (!fields.phone?.trim()) return "phone";
    if (!fields.email?.trim() || !emailOk(fields.email)) return "email";
    if (!fields.service?.trim()) return "service";
    if (!fields.message?.trim()) return "message";
    return null;
  }
  if (source === "careers") {
    if (!fields.firstName?.trim()) return "firstName";
    if (!fields.lastName?.trim()) return "lastName";
    if (!fields.email?.trim() || !emailOk(fields.email)) return "email";
    if (!fields.position?.trim()) return "position";
    if (!fields.why?.trim()) return "why";
    return null;
  }
  return "source";
}

export async function GET() {
  const ready = !!process.env.RESEND_API_KEY?.trim();
  return NextResponse.json({ ready });
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = RESEND_MAIL_FROM;
  if (!apiKey) {
    return NextResponse.json({ ok: false, code: "MAIL_NOT_CONFIGURED" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, code: "BAD_JSON" }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (typeof body._honey === "string" && body._honey.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const sourceRaw = str(body.source);
  if (!(sourceRaw in CONTACT_MAIL_SUBJECT_MAP)) {
    return NextResponse.json({ ok: false, code: "BAD_SOURCE" }, { status: 400 });
  }
  const source = sourceRaw as ContactMailSource;

  const rawFields = body.fields;
  if (!isRecord(rawFields)) {
    return NextResponse.json({ ok: false, code: "BAD_FIELDS" }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(rawFields)) {
    fields[k] = typeof v === "string" ? v : "";
  }

  const bad = validateFields(source, fields);
  if (bad) {
    return NextResponse.json({ ok: false, code: "VALIDATION", field: bad }, { status: 400 });
  }

  const replyTo =
    typeof fields.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())
      ? fields.email.trim()
      : undefined;

  const subject = CONTACT_MAIL_SUBJECT_MAP[source];
  const rows = Object.entries(fields)
    .filter(([, v]) => v.trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`
    )
    .join("");

  const html = `<p style="font-family:system-ui,sans-serif;font-size:15px;color:#111">Nytt formulär från crisha.se (<strong>${escapeHtml(source)}</strong>).</p>
<table style="border-collapse:collapse;max-width:640px">${rows}</table>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [MAIL_TO_INBOX],
    ...(replyTo ? { replyTo: [replyTo] } : {}),
    subject,
    html,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, code: "RESEND_ERROR", message: error.message },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
