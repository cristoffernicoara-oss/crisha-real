import type { ServiceBrand } from "@/components/icons/ServiceBrandMark";
import type { Locale } from "@/lib/i18n/types";

export type BlogPreviewPost = {
  id: number;
  tag: string;
  tagColor: string;
  brandMark: ServiceBrand;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
};

const SV: BlogPreviewPost[] = [
  {
    id: 4,
    tag: "Meta Ads",
    tagColor: "#2563EB",
    brandMark: "facebook",
    title: "Meta Ads byrå Sverige: Därför räcker det inte att \"boosta\" inlägg 2026",
    excerpt:
      "Samma fel i gratis revisioner: budget på boost istället för struktur och spårning. Som Meta Ads-byrå i Sverige förklarar vi varför — och vad som gäller 2026.",
    date: "2026-05-18",
    readTime: "8 min läsning",
    slug: "meta-ads-2026-slutboosta-inlagg",
  },
  {
    id: 1,
    tag: "Meta Ads",
    tagColor: "#2563EB",
    brandMark: "facebook",
    title: "Hur vi ökade ROAS för en modekund från 1,4× till 3,8× på 4 månader",
    excerpt:
      "Att få lönsamhet i annonsering inom modebranschen är inte alltid enkelt. Hård konkurrens, snabba trender och höga klickpriser gör att många varumärken kämpar för att få sina kampanjer att gå runt.",
    date: "2026-04-12",
    readTime: "8 min läsning",
    slug: "roas-modekund-meta",
  },
  {
    id: 2,
    tag: "Google Ads",
    tagColor: "#0EA5E9",
    brandMark: "google",
    title: "Varför 80% av Google Ads-konton förlorar pengar (och hur du fixar det)",
    excerpt:
      "De vanligaste misstagen vi hittar i gratis revisioner: saknade negativa sökord, felaktig spårning och ineffektiva kampanjstrukturer.",
    date: "2026-04-12",
    readTime: "6 min läsning",
    slug: "google-ads-budget",
  },
  {
    id: 3,
    tag: "TikTok Ads",
    tagColor: "#EC4899",
    brandMark: "tiktok",
    title: "TikTok Ads i Sverige: Vad som fungerar 2026",
    excerpt:
      "TikTok har gått från att vara en “trendig app för unga” till en av de mest kraftfulla annonseringsplattformarna i Sverige 2026. För företag som vill nå nya kunder snabbt och kostnadseffektivt är det inte längre ett val, det är ett måste. Men vad fungerar egentligen just nu?",
    date: "2026-04-12",
    readTime: "7 min läsning",
    slug: "tiktok-ads-sverige",
  },
];

const EN: BlogPreviewPost[] = [
  {
    id: 4,
    tag: "Meta Ads",
    tagColor: "#2563EB",
    brandMark: "facebook",
    title: "Meta Ads agency Sweden: Why boosting posts is not enough in 2026",
    excerpt:
      "Swedish brands burn budget boosting posts alone. Here's what a Meta Ads agency does differently—and what changed on Meta in 2026.",
    date: "2026-05-18",
    readTime: "8 min read",
    slug: "meta-ads-2026-slutboosta-inlagg",
  },
  {
    id: 1,
    tag: "Meta Ads",
    tagColor: "#2563EB",
    brandMark: "facebook",
    title: "How we lifted a fashion brand’s ROAS from 1.4× to 3.8× in 4 months",
    excerpt:
      "Profitability in fashion advertising isn’t always easy. Fierce competition, fast-moving trends, and high CPCs leave many brands struggling to make campaigns work.",
    date: "2026-04-12",
    readTime: "8 min read",
    slug: "roas-modekund-meta",
  },
  {
    id: 2,
    tag: "Google Ads",
    tagColor: "#0EA5E9",
    brandMark: "google",
    title: "Why ~80% of Google Ads accounts lose money (and how to fix yours)",
    excerpt:
      "The most common issues we see in free audits: missing negatives, broken tracking, and weak account structure.",
    date: "2026-04-12",
    readTime: "6 min read",
    slug: "google-ads-budget",
  },
  {
    id: 3,
    tag: "TikTok Ads",
    tagColor: "#EC4899",
    brandMark: "tiktok",
    title: "TikTok Ads in Sweden: What works in 2026",
    excerpt:
      "TikTok has moved from a “trendy app for young people” to one of the most powerful ad platforms in Sweden in 2026. For brands that want to reach new customers quickly and cost-effectively, it’s no longer optional, it’s essential. But what actually works right now?",
    date: "2026-04-12",
    readTime: "7 min read",
    slug: "tiktok-ads-sverige",
  },
];

export function getBlogPreviewPosts(locale: Locale): BlogPreviewPost[] {
  return locale === "en" ? EN : SV;
}
