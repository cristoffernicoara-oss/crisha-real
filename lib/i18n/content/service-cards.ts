import type { Locale } from "@/lib/i18n/types";

export type LocalisedServiceCard = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metricPill: string;
};

const SV: LocalisedServiceCard[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads",
    tagline: "Facebook & Instagram Ads som säljer, inte bara imponerar.",
    description:
      "Vi bygger och hanterar Meta Ads-kampanjer med kompletta TOF/MOF/BOF-strukturer, A/B-testade creatives och retargeting på 3 nivåer. Genomsnittlig ROAS 4,8× för våra kunder.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "Lookalike", "A/B-testning"],
    metricPill: "Snitt ROAS 4,8×",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    tagline: "Syns först när dina kunder söker vad du erbjuder.",
    description:
      "Search, Shopping och Performance Max optimerade för verkliga konverteringar. Vi hanterar sökord, Quality Score och budstrategier för minsta CPA och högsta ROAS.",
    tags: ["Search Ads", "Google Shopping", "Performance Max", "Remarketing", "Quality Score"],
    metricPill: "Snitt CTR 7,1%",
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads",
    tagline: "Miljontals visningar med tillgänglig budget.",
    description:
      "Vi skapar native TikTok-kampanjer med UGC creatives, Spark Ads och In-Feed Ads. CPM 70% lägre än Meta. Perfekt för varumärken som vill växa snabbt i medvetenhet och försäljning samtidigt.",
    tags: ["Spark Ads", "In-Feed Ads", "UGC Creative", "TopView", "Brand Takeover"],
    metricPill: "CPM -70% vs Meta",
  },
  {
    slug: "webbdesign",
    title: "Webbdesign",
    tagline: "Webbplatser byggda för att konvertera, inte imponera.",
    description:
      "Landningssidor och presentationswebbplatser optimerade för CRO, med PageSpeed 95+, mobile-first och perfekt integrerade med dina annonskampanjer. Genomsnittlig konverteringsökning +180% mot gammal webbplats.",
    tags: ["Landningssida", "CRO", "Mobile-First", "PageSpeed 95+", "Next.js / Webflow"],
    metricPill: "+180% konvertering",
  },
  {
    slug: "full-funnel",
    title: "Full funnel",
    tagline: "Från första klick till återköp, samma spår över alla kanaler.",
    description:
      "Vi bygger en genomskinlig funnel där Meta, Google, TikTok och din webb förstärker varandra: rätt budskap i rätt steg, gemensamma KPI:er och optimering som gäller hela resan, inte enskilda kampanjer i isolation.",
    tags: ["TOF/MOF/BOF", "Attribuering", "CRO & landningssida", "Kreativ testning", "CRM / pixel"],
    metricPill: "Hela köpresan",
  },
];

const EN: LocalisedServiceCard[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads",
    tagline: "Facebook and Instagram ads that sell, not just impress.",
    description:
      "We build and manage Meta Ads with full TOF/MOF/BOF structures, A/B-tested creatives, and three-level retargeting. Average ROAS 4.8× for our clients.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "Lookalike", "A/B testing"],
    metricPill: "Avg. ROAS 4.8×",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    tagline: "Show up first when customers search for what you offer.",
    description:
      "Search, Shopping, and Performance Max optimised for real conversions. We handle keywords, Quality Score, and bidding for the lowest CPA and strongest ROAS.",
    tags: ["Search Ads", "Google Shopping", "Performance Max", "Remarketing", "Quality Score"],
    metricPill: "Avg. CTR 7.1%",
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads",
    tagline: "Millions of impressions on a realistic budget.",
    description:
      "We create native TikTok campaigns with UGC creatives, Spark Ads, and In-Feed Ads. CPM is roughly 70% lower than Meta, ideal for brands growing awareness and sales fast.",
    tags: ["Spark Ads", "In-Feed Ads", "UGC creative", "TopView", "Brand takeover"],
    metricPill: "CPM −70% vs Meta",
  },
  {
    slug: "webbdesign",
    title: "Web design",
    tagline: "Websites built to convert, not just to look good.",
    description:
      "Landing pages and marketing sites optimised for CRO, PageSpeed 95+, mobile-first, and tightly integrated with your ad campaigns. Typical conversion uplift +180% vs. old sites.",
    tags: ["Landing page", "CRO", "Mobile-first", "PageSpeed 95+", "Next.js / Webflow"],
    metricPill: "+180% conversion",
  },
  {
    slug: "full-funnel",
    title: "Full funnel",
    tagline: "From first click to repeat purchase, one thread across every channel.",
    description:
      "We build a clear funnel where Meta, Google, TikTok, and your site reinforce each other: the right message at each stage, shared KPIs, and optimisation for the whole journey, not isolated one-off campaigns.",
    tags: ["TOF/MOF/BOF", "Attribution", "CRO & landing pages", "Creative testing", "CRM / pixel"],
    metricPill: "End to end journey",
  },
];

export function getServiceCards(locale: Locale): LocalisedServiceCard[] {
  return locale === "en" ? EN : SV;
}
