import type { Locale } from "@/lib/i18n/types";

export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const BLOG_POSTS_SV: BlogPostPreview[] = [
  {
    slug: "grafisk-profil-vad-ska-inga-i-manualen",
    title: "Grafisk profil 2026: vad ska egentligen ingå i manualen?",
    excerpt:
      "En grafisk profil är mer än en logotyp i hörnet av hemsidan. Här går vi igenom vad en komplett manual ska innehålla, från färger och typsnitt till bildspråk och tydliga användningsregler.",
    date: "2026-08-01",
  },
  {
    slug: "reels-eller-tiktok-2026-var-ska-foretaget-lagga-tiden",
    title: "Reels eller TikTok 2026: var ska företaget lägga tiden?",
    excerpt:
      "Instagram Reels och TikTok tävlar om samma sekunder av användarnas uppmärksamhet. Så här skiljer sig plattformarna 2026 i algoritm, målgrupp och format, och hur du väljer var ni satsar tid och budget.",
    date: "2026-08-02",
  },
  {
    slug: "google-ai-finance-europa-seo-content",
    title: "Google AI Finance i Europa: så påverkas SEO och content",
    excerpt:
      "Google AI Finance har nyligen lanserats i Europa, och det är en av de största förändringarna i sökresultaten på länge. Så här påverkar det företag som jobbar med SEO och content marketing, och vad du kan göra redan nu.",
    date: "2026-08-03",
  },
  {
    slug: "meta-ads-2026-slutboosta-inlagg",
    title: "Meta Ads byrå Sverige: Därför räcker det inte att \"boosta\" inlägg 2026",
    excerpt:
      "Som Meta Ads-byrå i Sverige ser vi ett misstag om och om igen i gratis revisioner: hela budgeten på boost utan struktur eller spårning som mäter försäljning.",
    date: "2026-07-30",
  },
  {
    slug: "roas-modekund-meta",
    title: "Hur vi ökade ROAS för en modekund från 1,4× till 3,8× på 4 månader",
    excerpt:
      "Att få lönsamhet i annonsering inom modebranschen är inte alltid enkelt. Hård konkurrens, snabba trender och höga klickpriser gör att många varumärken kämpar för att få sina kampanjer att gå runt.",
    date: "2026-07-25",
  },
  {
    slug: "google-ads-budget",
    title: "Varför 80% av Google Ads-konton förlorar pengar (och hur du fixar det)",
    excerpt:
      "Många företag investerar i Google Ads med förhoppningen om fler kunder och ökad försäljning. Men sanningen är att en stor del av kontona faktiskt går med förlust – ofta utan att man ens märker det.",
    date: "2026-07-20",
  },
  {
    slug: "tiktok-ads-sverige",
    title: "TikTok Ads i Sverige: Vad som fungerar 2026",
    excerpt:
      "TikTok har gått från att vara en “trendig app för unga” till en av de mest kraftfulla annonseringsplattformarna i Sverige 2026. För företag som vill nå nya kunder snabbt och kostnadseffektivt är det inte längre ett val, det är ett måste. Men vad fungerar egentligen just nu?",
    date: "2026-07-15",
  },
];

const BLOG_POSTS_EN: BlogPostPreview[] = [
  {
    slug: "grafisk-profil-vad-ska-inga-i-manualen",
    title: "Brand design system 2026: what should actually go in the manual?",
    excerpt:
      "A graphic profile is more than a logo in the corner of your site. Here is what a complete brand manual should cover: from colours and type to imagery rules and clear do’s and don’ts.",
    date: "2026-08-01",
  },
  {
    slug: "reels-eller-tiktok-2026-var-ska-foretaget-lagga-tiden",
    title: "Reels or TikTok in 2026: where should your company spend its time?",
    excerpt:
      "Instagram Reels and TikTok compete for the same seconds of attention. Here is how the platforms differ in 2026: algorithm, audience, and formats, and how to choose where to invest time and budget.",
    date: "2026-08-02",
  },
  {
    slug: "google-ai-finance-europa-seo-content",
    title: "Google AI Finance in Europe: how SEO and content are affected",
    excerpt:
      "Google AI Finance recently launched in Europe, one of the biggest shifts in search results in a long time. Here is what it means for SEO and content marketing, and what to do about it.",
    date: "2026-08-03",
  },
  {
    slug: "meta-ads-2026-slutboosta-inlagg",
    title: "Meta Ads agency Sweden: Why boosting posts is not enough in 2026",
    excerpt:
      "As a Meta Ads agency in Sweden we see the same trap in audits: budgets burned on boosted posts instead of structured campaigns and tracking that proves sales.",
    date: "2026-07-30",
  },
  {
    slug: "roas-modekund-meta",
    title: "How we lifted a fashion brand’s ROAS from 1.4× to 3.8× in 4 months",
    excerpt:
      "Profitability in fashion advertising isn’t always easy. Fierce competition, fast-moving trends, and high CPCs leave many brands struggling to make campaigns work.",
    date: "2026-07-25",
  },
  {
    slug: "google-ads-budget",
    title: "Why ~80% of Google Ads accounts lose money (and how to fix yours)",
    excerpt:
      "Many businesses invest in Google Ads hoping for more customers and sales. The truth is a large share of accounts actually lose money, often without anyone noticing.",
    date: "2026-07-20",
  },
  {
    slug: "tiktok-ads-sverige",
    title: "TikTok Ads in Sweden: What works in 2026",
    excerpt:
      "TikTok has moved from a “trendy app for young people” to one of the most powerful ad platforms in Sweden in 2026. For brands that want to reach new customers quickly and cost-effectively, it’s no longer optional, it’s essential. But what actually works right now?",
    date: "2026-07-15",
  },
];

/** Static posts only — safe for client bundles. File posts: use blog-all.ts on the server. */
export function getBlogPosts(locale: Locale): BlogPostPreview[] {
  return locale === "en" ? BLOG_POSTS_EN : BLOG_POSTS_SV;
}

export function getBlogPostBySlug(slug: string, locale: Locale): BlogPostPreview | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}

/** Default Swedish list for static params and backwards compatibility. */
export const BLOG_POSTS = BLOG_POSTS_SV;
