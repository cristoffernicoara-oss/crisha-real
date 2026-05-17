import type { ContactMailSource } from "@/lib/contact-mail";

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; code?: string; message?: string };

export async function submitContactMail(
  source: ContactMailSource,
  fields: Record<string, string>,
  honeypot: string
): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, fields, _honey: honeypot }),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      code?: string;
      message?: string;
    };

    if (!res.ok || data.ok !== true) {
      return { ok: false, code: data.code, message: data.message };
    }
    return { ok: true };
  } catch {
    return { ok: false, code: "NETWORK_ERROR" };
  }
}

export async function fetchContactMailReady(): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", { method: "GET" });
    if (!res.ok) return false;
    const data = (await res.json()) as { ready?: boolean };
    return data.ready === true;
  } catch {
    return false;
  }
}
