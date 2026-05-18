import type { Locale } from "@/lib/i18n/types";

export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const BLOG_POSTS_SV: BlogPostPreview[] = [
  {
    slug: "meta-ads-2026-slutboosta-inlagg",
    title: "Meta Ads 2026: Därför räcker det inte längre att \"boosta\" inlägg",
    excerpt:
      "Det finns ett misstag vi ser om och om igen när vi gör gratis revisioner för nya kunder: hela annonsbudgeten läggs på boostade inlägg. Inga kampanjstrukturer. Ingen retargeting.",
    date: "18/05-2026",
  },
  {
    slug: "roas-modekund-meta",
    title: "Hur vi ökade ROAS för en modekund från 1,4× till 3,8× på 4 månader",
    excerpt:
      "Att få lönsamhet i annonsering inom modebranschen är inte alltid enkelt. Hård konkurrens, snabba trender och höga klickpriser gör att många varumärken kämpar för att få sina kampanjer att gå runt.",
    date: "2026-04-12",
  },
  {
    slug: "google-ads-budget",
    title: "Varför 80% av Google Ads-konton förlorar pengar (och hur du fixar det)",
    excerpt:
      "Många företag investerar i Google Ads med förhoppningen om fler kunder och ökad försäljning. Men sanningen är att en stor del av kontona faktiskt går med förlust – ofta utan att man ens märker det.",
    date: "2026-04-12",
  },
  {
    slug: "tiktok-ads-sverige",
    title: "TikTok Ads i Sverige: Vad som fungerar 2026",
    excerpt:
      "TikTok har gått från att vara en “trendig app för unga” till en av de mest kraftfulla annonseringsplattformarna i Sverige 2026. För företag som vill nå nya kunder snabbt och kostnadseffektivt är det inte längre ett val, det är ett måste. Men vad fungerar egentligen just nu?",
    date: "2026-04-12",
  },
];

const BLOG_POSTS_EN: BlogPostPreview[] = [
  {
    slug: "meta-ads-2026-slutboosta-inlagg",
    title: "Meta Ads in 2026: Why boosting posts is no longer enough",
    excerpt:
      "We keep seeing one mistake during free audits: the entire ad budget goes to boosted posts. No campaign structure. No retargeting. No tracking that actually measures revenue.",
    date: "18 May 2026",
  },
  {
    slug: "roas-modekund-meta",
    title: "How we lifted a fashion brand’s ROAS from 1.4× to 3.8× in 4 months",
    excerpt:
      "Profitability in fashion advertising isn’t always easy. Fierce competition, fast-moving trends, and high CPCs leave many brands struggling to make campaigns work.",
    date: "2026-04-12",
  },
  {
    slug: "google-ads-budget",
    title: "Why ~80% of Google Ads accounts lose money (and how to fix yours)",
    excerpt:
      "Many businesses invest in Google Ads hoping for more customers and sales. The truth is a large share of accounts actually lose money, often without anyone noticing.",
    date: "2026-04-12",
  },
  {
    slug: "tiktok-ads-sverige",
    title: "TikTok Ads in Sweden: What works in 2026",
    excerpt:
      "TikTok has moved from a “trendy app for young people” to one of the most powerful ad platforms in Sweden in 2026. For brands that want to reach new customers quickly and cost-effectively, it’s no longer optional, it’s essential. But what actually works right now?",
    date: "2026-04-12",
  },
];

export function getBlogPosts(locale: Locale): BlogPostPreview[] {
  return locale === "en" ? BLOG_POSTS_EN : BLOG_POSTS_SV;
}

export function getBlogPostBySlug(slug: string, locale: Locale): BlogPostPreview | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}

/** Default Swedish list for static params and backwards compatibility. */
export const BLOG_POSTS = BLOG_POSTS_SV;
