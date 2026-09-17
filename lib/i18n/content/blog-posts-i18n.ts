import type { Locale } from "@/lib/i18n/types";

export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  category?: string;
  author?: string;
};

const BLOG_POSTS_SV: BlogPostPreview[] = [
  {
    slug: "synas-pa-google-och-chatgpt-malmo-2026",
    title: "Vill du synas på Google och i ChatGPT? Så fungerar digital marknadsföring i Malmö 2026",
    excerpt:
      "Det räcker inte längre att ranka på Google. I dag ställer sig allt fler potentiella kunder sina frågor i ChatGPT, Perplexity och Google AI Overviews — och får ett svar utan att klicka vidare.",
    date: "2026-09-17",
    readTime: "7 min läsning",
    category: "Digital marknadsföring",
    author: "Crisha Marketing",
  },
  {
    slug: "darfor-forlorar-ditt-foretag-kunder-till-konkurrenterna",
    title: "Därför förlorar ditt företag kunder till konkurrenterna, och hur du stoppar det",
    excerpt:
      "Kunder väljer ofta konkurrenten för att de hittade dem först: i sök, i annonser eller på en snabbare hemsida. Här är varför det händer och hur du stoppar det.",
    date: "2026-08-18",
  },
  {
    slug: "vad-ar-geo-och-varfor-syns-ditt-foretag-inte-i-chatgpt",
    title: "Vad är GEO och varför syns ditt företag inte i ChatGPT?",
    excerpt:
      "GEO (Generative Engine Optimization) handlar om att synas när ChatGPT, Perplexity och andra AI verktyg svarar. Här förklarar vi vad GEO är, varför det spelar roll nu och hur du blir den källa AI väljer.",
    date: "2026-08-10",
  },
  {
    slug: "vad-ar-en-bra-roas-meta-ads",
    title: "Vad är en bra ROAS för Meta Ads?",
    excerpt:
      "En bra ROAS för Meta Ads i Sverige ligger ofta på 3×–5× beroende på marginaler. Här förklarar vi riktvärden, fallgropar och hur Crisha Marketing når 4,8× i snitt.",
    date: "2026-08-09",
  },
  {
    slug: "hur-satter-man-upp-full-funnel-strategi",
    title: "Hur sätter man upp en full funnel-strategi?",
    excerpt:
      "Full funnel betyder TOF, MOF och BOF med egna budskap och KPIer. Så här bygger Crisha Marketing en mätbar funnel över Meta, Google och TikTok.",
    date: "2026-08-09",
  },
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
    slug: "synas-pa-google-och-chatgpt-malmo-2026",
    title: "Want to show up on Google and in ChatGPT? How digital marketing works in Malmö in 2026",
    excerpt:
      "Ranking on Google is no longer enough. More potential customers now ask ChatGPT, Perplexity, and Google AI Overviews — and get an answer without clicking through to a single website.",
    date: "2026-09-17",
    readTime: "7 min read",
    category: "Digital marketing",
    author: "Crisha Marketing",
  },
  {
    slug: "darfor-forlorar-ditt-foretag-kunder-till-konkurrenterna",
    title: "Why your company is losing customers to competitors, and how to stop it",
    excerpt:
      "Customers often pick a competitor because they found them first: in search, in ads, or on a faster website. Here’s why it happens and how you stop the leak.",
    date: "2026-08-18",
  },
  {
    slug: "vad-ar-geo-och-varfor-syns-ditt-foretag-inte-i-chatgpt",
    title: "What is GEO and why isn’t your company showing up in ChatGPT?",
    excerpt:
      "GEO (Generative Engine Optimization) is about being cited when ChatGPT, Perplexity, and other AI tools answer. Here’s what GEO is, why it matters now, and how you become the source AI chooses.",
    date: "2026-08-10",
  },
  {
    slug: "vad-ar-en-bra-roas-meta-ads",
    title: "What is a good ROAS for Meta Ads?",
    excerpt:
      "A solid Meta Ads ROAS in Sweden is often 3×–5× depending on margins. Here are benchmarks, pitfalls, and how Crisha Marketing averages 4.8×.",
    date: "2026-08-09",
  },
  {
    slug: "hur-satter-man-upp-full-funnel-strategi",
    title: "How do you set up a full-funnel strategy?",
    excerpt:
      "Full funnel means TOF, MOF, and BOF with distinct messages and KPIs. Here’s how Crisha Marketing builds a measurable funnel across Meta, Google, and TikTok.",
    date: "2026-08-09",
  },
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
