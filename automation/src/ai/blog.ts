import { completeJson } from "./client.js";

export type BlogArticleDraft = {
  slug: string;
  title: string;
  keyword: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  imagePrompt: string;
  bodyMarkdown: string;
};

export async function researchKeyword(usedKeywords: string[]): Promise<string> {
  const res = await completeJson<{ keyword: string; rationale: string }>(
    `Du är SEO-strateg för svenska marknaden (digital marknadsföring, Meta Ads, Google Ads, TikTok Ads, webbdesign).
Föreslå ETT lågkonkurrens long-tail-sökord på svenska som INTE finns i listan.
JSON: { "keyword", "rationale" }`,
    `Redan använda: ${usedKeywords.slice(0, 80).join(", ") || "(inga)"}`
  );
  return res.keyword;
}

export async function generateBlogArticle(keyword: string): Promise<BlogArticleDraft> {
  return completeJson<BlogArticleDraft>(
    `Skriv en SEO-artikel på svenska för Crisha Marketing (1000–1500 ord i bodyMarkdown).
Struktur: H1 (title), H2/H3 i markdown. Naturlig sökordsanvändning.
JSON-nycklar: slug (kebab-case), title, keyword, excerpt (max 160 tecken),
metaTitle (max 60), metaDescription (max 155), imagePrompt, bodyMarkdown.
Inkludera INTE något date-fält — publiceringsdatum sätts automatiskt till dagens datum.`,
    `Primärt sökord: ${keyword}`
  );
}
