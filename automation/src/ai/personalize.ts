import { completeJson } from "./client.js";
import { logger } from "../lib/logger.js";

export type PersonalizedEmail = {
  subject: string;
  bodyHtml: string;
  personalizationNote: string;
};

async function fetchSiteSnippet(website: string | null): Promise<string> {
  if (!website) return "";
  try {
    const url = website.startsWith("http") ? website : `https://${website}`;
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": "CrishaBot/1.0 (+https://www.crisha.se)" },
    });
    clearTimeout(t);
    const html = await res.text();
    const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() ?? "";
    const desc =
      html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/i)?.[1] ??
      html.match(/content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1] ??
      "";
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .slice(0, 1200);
    return `Title: ${title}\nDescription: ${desc}\nSnippet: ${text}`;
  } catch (e) {
    logger.warn({ website, err: e }, "Site fetch failed");
    return "";
  }
}

export async function generateOutreachEmail(input: {
  company: string;
  website: string | null;
  industry: string | null;
  email: string;
}): Promise<PersonalizedEmail> {
  const research = await fetchSiteSnippet(input.website);
  try {
    return await completeJson<PersonalizedEmail>(
      `Du skriver korta, personliga B2B cold emails på svenska för Crisha Marketing
(digital marknadsföringsbyrå: Meta Ads, Google Ads, TikTok Ads, webbdesign, SEO).
Ton: professionell, hjälpsam, inte säljande. Max 120 ord i brödtexten.
Erbjud en gratis revision. Inkludera INTE spamord. HTML med <p>-taggar.
JSON-nycklar: subject, bodyHtml, personalizationNote.`,
      `Företag: ${input.company}
E-post: ${input.email}
Bransch: ${input.industry ?? "okänd"}
Hemsida: ${input.website ?? "saknas"}
Research:
${research || "(ingen research — använd branschgenerisk personalisering)"}`
    );
  } catch (e) {
    logger.warn({ err: e }, "AI personalize failed — using template");
    return {
      subject: `${input.company} — snabb fråga om er digitala tillväxt`,
      bodyHtml: `<p>Hej,</p>
<p>Jag heter Cristoffer från Crisha Marketing. Vi hjälper svenska bolag med Meta Ads, Google Ads, TikTok Ads och webbdesign.</p>
<p>Jag såg ${input.company}${input.industry ? ` inom ${input.industry}` : ""} och ville erbjuda en <strong>gratis revision</strong> av er nuvarande annonsering/webb — utan förpliktelser.</p>
<p>Vill ni att jag skickar 3 konkreta förbättringsförslag?</p>
<p>Med vänliga hälsningar<br/>Crisha Marketing<br/>https://www.crisha.se</p>`,
      personalizationNote: "fallback_template",
    };
  }
}

export async function generateFollowUpReply(input: {
  company: string;
  theirMessage: string;
  originalSubject: string;
}): Promise<string> {
  const res = await completeJson<{ bodyHtml: string }>(
    `Du svarar på svenska i en pågående cold email-tråd för Crisha Marketing.
Var hjälpsam, konkret, kort (max 150 ord). HTML med <p>. JSON: { "bodyHtml": "..." }`,
    `Företag: ${input.company}
Ursprungligt ämne: ${input.originalSubject}
Deras svar:
${input.theirMessage}`
  );
  return res.bodyHtml;
}
