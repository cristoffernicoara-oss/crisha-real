import type { Locale } from "@/lib/i18n/types";

export type TikTokHeroUi = {
  pill: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lead: string;
  stats: { v: string; l: string }[];
  floatCpm: string;
  floatViews: string;
  mockViews: string;
  mockCta: string;
};

export type TikTokWhyUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  stats: { value: string; label: string }[];
  compareTitle: string;
  colTiktok: string;
  colMeta: string;
  tableRows: { metric: string; tiktok: string; meta: string }[];
  recLabel: string;
  recTiktok: string;
  recMeta: string;
};

export type TikTokCreativeSegment = { t: string; title: string; desc: string };

export type TikTokCreativeUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  hookLabel: string;
  ugcVsTitle: string;
  ugcBadge: string;
  ugcTitle: string;
  ugcDesc: string;
  ugcBullets: string[];
  ugcCtr: string;
  brandedTitle: string;
  brandedDesc: string;
  brandedBullets: string[];
  foot: string;
  segments: TikTokCreativeSegment[];
};

export type TikTokFormatCardUi = {
  h3: string;
  emoji: string;
  color: string;
  badge: string;
  why: string;
  specs: string;
  performance: string;
};

export type TikTokFormatsSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
};

export type TikTokCaseUi = {
  label: string;
  h2a: string;
  h2b: string;
  chip1: string;
  chip2: string;
  challengeK: string;
  challenge: string;
  solutionK: string;
  solution: string;
  resultK: string;
  metrics: { v: string; l: string }[];
  quote: string;
  quoteBy: string;
};

const heroSv: TikTokHeroUi = {
  pill: "🎵 TikTok Ads Sverige · Native Content & UGC",
  h1a: "TikTok Ads som viraliseras",
  h1b: "och säljer",
  h1c: "på samma gång.",
  lead:
    "Vi skapar TikTok-kampanjer för svenska företag som känns organiska, sprids av sig själva och genererar verkliga försäljningar. CPM 70% lägre än Meta. Räckvidd på miljoner.",
  stats: [
    { v: "280K", l: "Räckvidd per kampanj" },
    { v: "-70%", l: "Lägre CPM vs Meta" },
    { v: "+641%", l: "Snitt order-ökning" },
    { v: "1,2€", l: "Snitt CPM" },
  ],
  floatCpm: "CPM: 1,2€",
  floatViews: "3,2M views",
  mockViews: "3,2M visningar",
  mockCta: "🛍️ Handla nu",
};

const heroEn: TikTokHeroUi = {
  pill: "🎵 TikTok Ads · Native content & UGC",
  h1a: "TikTok Ads that go viral",
  h1b: "and sell",
  h1c: "at the same time.",
  lead:
    "We build TikTok campaigns that feel organic, spread organically, and drive real sales. CPM is about 70% lower than Meta, with reach in the millions.",
  stats: [
    { v: "280K", l: "Reach per campaign" },
    { v: "−70%", l: "Lower CPM vs Meta" },
    { v: "+641%", l: "Avg. order lift" },
    { v: "€1.2", l: "Avg. CPM" },
  ],
  floatCpm: "CPM: €1.2",
  floatViews: "3.2M views",
  mockViews: "3.2M views",
  mockCta: "🛍️ Shop now",
};

const whySv: TikTokWhyUi = {
  label: "VARFÖR TIKTOK 2025",
  h2a: "Plattformen som alla",
  h2b: " pratar om.",
  intro:
    "TikTok är inte längre bara för tonåringar. Det är den snabbast växande annonsplattformen med lägst CPM och högst organisk räckvidd.",
  stats: [
    { value: "95 min", label: "Genomsnittlig daglig användningstid i Sverige" },
    { value: "1 miljard", label: "Aktiva användare globalt per månad" },
    { value: "-70%", label: "Lägre CPM jämfört med Meta Ads" },
    { value: "53%", label: "Användare som köpt något de sett på TikTok" },
  ],
  compareTitle: "TikTok vs Meta: vilket passar ditt företag?",
  colTiktok: "TikTok Ads",
  colMeta: "Meta Ads",
  tableRows: [
    { metric: "CPM (snitt Sverige)", tiktok: "1,2€", meta: "4-8€" },
    { metric: "Organisk viral potential", tiktok: "✓ Hög", meta: "✗ Låg" },
    { metric: "18-35 år räckvidd", tiktok: "✓ Bäst", meta: "⚬ Bra" },
    { metric: "35+ år räckvidd", tiktok: "⚬ Växande", meta: "✓ Bäst" },
    { metric: "E-handel konvertering", tiktok: "✓ Hög", meta: "✓ Hög" },
    { metric: "B2B lämplighet", tiktok: "⚬ Begränsad", meta: "✓ Bra" },
    { metric: "Creative-krav", tiktok: "Native video", meta: "Flexibel" },
    { metric: "Inlärningsfas", tiktok: "7-10 dagar", meta: "7-14 dagar" },
  ],
  recLabel: "Rekommendation:",
  recTiktok: "Awareness & young demo",
  recMeta: "Bredare targeting",
};

const whyEn: TikTokWhyUi = {
  label: "WHY TIKTOK IN 2025",
  h2a: "The platform everyone",
  h2b: " is talking about.",
  intro:
    "TikTok is no longer just for teens. It’s the fastest-growing ad platform with the lowest CPM and the strongest organic reach.",
  stats: [
    { value: "95 min", label: "Avg. daily time spent in Sweden" },
    { value: "1 billion", label: "Monthly active users worldwide" },
    { value: "−70%", label: "Lower CPM vs Meta Ads" },
    { value: "53%", label: "Users who bought something they saw on TikTok" },
  ],
  compareTitle: "TikTok vs Meta: what fits your business?",
  colTiktok: "TikTok Ads",
  colMeta: "Meta Ads",
  tableRows: [
    { metric: "CPM (avg. Sweden)", tiktok: "€1.2", meta: "€4–8" },
    { metric: "Organic viral potential", tiktok: "✓ High", meta: "✗ Low" },
    { metric: "18–35 reach", tiktok: "✓ Best", meta: "⚬ Good" },
    { metric: "35+ reach", tiktok: "⚬ Growing", meta: "✓ Best" },
    { metric: "Ecommerce conversion", tiktok: "✓ Strong", meta: "✓ Strong" },
    { metric: "B2B fit", tiktok: "⚬ Limited", meta: "✓ Good" },
    { metric: "Creative requirements", tiktok: "Native video", meta: "Flexible" },
    { metric: "Learning phase", tiktok: "7–10 days", meta: "7–14 days" },
  ],
  recLabel: "Recommendation:",
  recTiktok: "Awareness & younger demos",
  recMeta: "Broader targeting",
};

const creativeSv: TikTokCreativeUi = {
  label: "CREATIVE-STRATEGI",
  h2a: "Native content",
  h2b: " som konverterar.",
  intro:
    "Hemligheten med TikTok Ads är att de bäst presterande annonserna INTE ser ut som annonser. De ser ut som vanligt TikTok-innehåll.",
  hookLabel: "Den vinnande hook-formeln",
  ugcVsTitle: "UGC vs Branded Content",
  ugcBadge: "⭐ Bäst presterande",
  ugcTitle: "UGC Creatives",
  ugcDesc:
    "Autentiska videos skapade av riktiga människor: kunder, influencers eller vårt kreativa team.",
  ugcBullets: [
    "+29% konvertering vs branded",
    "Native känsla = lägre CPM",
    "Bygger förtroende snabbt",
    "Lättare att skala",
  ],
  ugcCtr: "+29% CTR",
  brandedTitle: "Branded Content",
  brandedDesc:
    "Professionellt producerat material med varumärkets visuella identitet och tydlig brand-närvaro.",
  brandedBullets: ["Varumärkeskännedom (TOF)", "Produktlanseringar", "Premium-varumärken", "Retargeting kampanjer"],
  foot: "💡 Vi testar alltid UGC mot branded content och skalar det som presterar bäst. I 80% av fallen vinner UGC.",
  segments: [
    { t: "0-1s", title: "Hook: stoppa scrollandet", desc: "Visuell eller verbal hook som fångar uppmärksamheten direkt" },
    { t: "1-3s", title: "Problem: hitta smärtpunkten", desc: "Etablera ett relaterbart problem som målgruppen känner igen" },
    { t: "3-10s", title: "Lösning: visa produkten", desc: "Visa hur din produkt/tjänst löser problemet naturligt" },
    { t: "10-20s", title: "Bevis och social proof", desc: "Testimonials, resultat, statistik eller recensioner" },
    { t: "20-30s", title: "CTA med tydlig uppmaning", desc: "Specifik och enkel uppmaning: 'Klicka länken', 'Shoppa nu'" },
  ],
};

const creativeEn: TikTokCreativeUi = {
  label: "CREATIVE STRATEGY",
  h2a: "Native content",
  h2b: " that converts.",
  intro:
    "The secret of TikTok Ads is that the best performers do NOT look like ads. They look like everyday TikTok content.",
  hookLabel: "The winning hook formula",
  ugcVsTitle: "UGC vs branded content",
  ugcBadge: "⭐ Top performer",
  ugcTitle: "UGC creatives",
  ugcDesc: "Authentic videos from real people: customers, creators, or our creative team.",
  ugcBullets: [
    "+29% conversion vs branded",
    "Native feel = lower CPM",
    "Builds trust fast",
    "Easier to scale",
  ],
  ugcCtr: "+29% CTR",
  brandedTitle: "Branded content",
  brandedDesc: "Polished brand-led creative with clear visual identity and presence.",
  brandedBullets: ["Brand awareness (TOF)", "Product launches", "Premium brands", "Retargeting campaigns"],
  foot: "💡 We always test UGC vs branded and scale what wins; UGC wins in ~80% of cases.",
  segments: [
    { t: "0–1s", title: "Hook: stop the scroll", desc: "Visual or verbal hook that grabs attention immediately" },
    { t: "1–3s", title: "Problem: name the pain", desc: "Establish a relatable problem your audience recognises" },
    { t: "3–10s", title: "Solution: show the product", desc: "Show how your offer solves it in a natural way" },
    { t: "10–20s", title: "Proof and social proof", desc: "Testimonials, results, stats, or reviews" },
    { t: "20–30s", title: "CTA with a clear ask", desc: "Specific, simple ask: “Tap the link”, “Shop now”" },
  ],
};

const formatsSectionSv: TikTokFormatsSectionUi = {
  label: "ANNONSFORMAT",
  h2a: "Rätt format på",
  h2b: " TikTok.",
  intro: "Vi väljer format utifrån mål, från Spark Ads till Shopping, och testar tills vi hittar vinnare.",
};

const formatsSectionEn: TikTokFormatsSectionUi = {
  label: "AD FORMATS",
  h2a: "The right format on",
  h2b: " TikTok.",
  intro: "We pick formats by goal, from Spark to Shopping, and test until we find winners.",
};

const formatsSv: TikTokFormatCardUi[] = [
  {
    h3: "In-Feed Ads",
    emoji: "📱",
    color: "#EC4899",
    badge: "Bäst för: Konvertering & trafik",
    why: "Visas i For You-flödet, native känsla, skippbar efter 3s",
    specs: "9:16 · 5-60s · Ljud på",
    performance: "Snitt CTR: 3,8%",
  },
  {
    h3: "Spark Ads",
    emoji: "⚡",
    color: "#8B5CF6",
    badge: "Bäst för: Engagemang & viralitet",
    why: "Boostar organiskt innehåll, behåller likes & kommentarer, högst socialt bevis",
    specs: "Befintlig TikTok-post",
    performance: "2× högre engagemang",
  },
  {
    h3: "TopView Ads",
    emoji: "👁️",
    color: "#F59E0B",
    badge: "Bäst för: Brand awareness & lansering",
    why: "Första annonsen användaren ser vid appöppning, 60 sekunders video, maximal synlighet",
    specs: "9:16 · Max 60s · Premium",
    performance: "Räckvidd: 100% av användare",
  },
  {
    h3: "Brand Takeover",
    emoji: "🚀",
    color: "#0EA5E9",
    badge: "Bäst för: Massiv räckvidd & lansering",
    why: "Helskärm vid appstart, garanterad synlighet, exklusivt per dag/kategori",
    specs: "3-5s bild eller 3-60s video",
    performance: "100% share of voice",
  },
  {
    h3: "Branded Hashtag",
    emoji: "#️⃣",
    color: "#22C55E",
    badge: "Bäst för: UGC & community building",
    why: "Uppmuntrar användare att skapa innehåll med ditt hashtag, viral potential",
    specs: "6 dagars kampanj",
    performance: "Snitt 5,5% engagemang",
  },
  {
    h3: "Shopping Ads",
    emoji: "🛍️",
    color: "#EC4899",
    badge: "Bäst för: E-handel & produktförsäljning",
    why: "Direkt produktkatalog i TikTok-flödet, ingen extern länk nödvändig",
    specs: "Produktkatalog krävs",
    performance: "Snitt ROAS: 4,2×",
  },
];

const formatsEn: TikTokFormatCardUi[] = [
  {
    h3: "In-Feed ads",
    emoji: "📱",
    color: "#EC4899",
    badge: "Best for: Conversion & traffic",
    why: "Shows in For You, native feel, skippable after 3s",
    specs: "9:16 · 5–60s · Sound on",
    performance: "Avg. CTR: 3.8%",
  },
  {
    h3: "Spark Ads",
    emoji: "⚡",
    color: "#8B5CF6",
    badge: "Best for: Engagement & virality",
    why: "Boosts organic posts, keeps likes & comments, strongest social proof",
    specs: "Existing TikTok post",
    performance: "2× higher engagement",
  },
  {
    h3: "TopView ads",
    emoji: "👁️",
    color: "#F59E0B",
    badge: "Best for: Awareness & launches",
    why: "First ad on app open, up to 60s video, maximum visibility",
    specs: "9:16 · Max 60s · Premium",
    performance: "Reach: 100% of users",
  },
  {
    h3: "Brand takeover",
    emoji: "🚀",
    color: "#0EA5E9",
    badge: "Best for: Mass reach & launches",
    why: "Fullscreen on launch, guaranteed visibility, category/day exclusivity",
    specs: "3–5s image or 3–60s video",
    performance: "100% share of voice",
  },
  {
    h3: "Branded hashtag",
    emoji: "#️⃣",
    color: "#22C55E",
    badge: "Best for: UGC & community",
    why: "Encourages posts with your hashtag and strong viral potential",
    specs: "6-day campaign",
    performance: "Avg. 5.5% engagement",
  },
  {
    h3: "Shopping ads",
    emoji: "🛍️",
    color: "#EC4899",
    badge: "Best for: Ecommerce & catalog sales",
    why: "Product catalogue in-feed, no external link required",
    specs: "Product catalogue required",
    performance: "Avg. ROAS: 4.2×",
  },
];

const caseSv: TikTokCaseUi = {
  label: "FALLSTUDIE",
  h2a: "280K räckvidd",
  h2b: ", +641% beställningar.",
  chip1: "E-handel · Mat & dryck · Sverige",
  chip2: "3 månaders kampanj",
  challengeK: "UTMANINGEN",
  challenge:
    "Varumärket ville nå en yngre publik och öka onlinebeställningar utan att betala Metas CPM. Befintliga annonser kändes för polerade och fick lågt engagemang på TikTok.",
  solutionK: "LÖSNINGEN",
  solution:
    "Vi producerade UGC-inspirerade videos med stark hook, Spark Ads mot topperforming organiska klipp och In-Feed med tydlig CTA till webbshop. Kontinuerlig creative-rotation varannan vecka.",
  resultK: "RESULTAT",
  metrics: [
    { v: "280K+", l: "Räckvidd" },
    { v: "+641%", l: "Fler beställningar" },
    { v: "1,2€", l: "Snitt CPM" },
    { v: "4,2×", l: "ROAS" },
  ],
  quote: "TikTok blev vår bästa kanal för nya kunder. Vi såg effekt redan första veckan.",
  quoteBy: "Craft Brewers Conference, marknadsteam",
};

const caseEn: TikTokCaseUi = {
  label: "CASE STUDY",
  h2a: "280K reach",
  h2b: ", +641% orders.",
  chip1: "Ecommerce · Food & drink · Sweden",
  chip2: "3-month campaign",
  challengeK: "THE CHALLENGE",
  challenge:
    "The brand wanted a younger audience and more online orders without paying Meta CPMs. Existing ads felt too polished and underperformed on TikTok.",
  solutionK: "THE SOLUTION",
  solution:
    "We produced UGC-style hooks, Spark Ads on top organic clips, and In-Feed with a clear CTA to the store, with fresh creatives every other week.",
  resultK: "RESULTS",
  metrics: [
    { v: "280K+", l: "Reach" },
    { v: "+641%", l: "More orders" },
    { v: "€1.2", l: "Avg. CPM" },
    { v: "4.2×", l: "ROAS" },
  ],
  quote: "TikTok became our best channel for new customers. We saw impact in week one.",
  quoteBy: "Craft Brewers Conference, marketing team",
};

export function getTikTokHeroUi(locale: Locale): TikTokHeroUi {
  return locale === "en" ? heroEn : heroSv;
}

export function getTikTokWhyUi(locale: Locale): TikTokWhyUi {
  return locale === "en" ? whyEn : whySv;
}

export function getTikTokCreativeUi(locale: Locale): TikTokCreativeUi {
  return locale === "en" ? creativeEn : creativeSv;
}

export function getTiktokFormatCards(locale: Locale): TikTokFormatCardUi[] {
  return locale === "en" ? formatsEn : formatsSv;
}

export function getTikTokFormatsSectionUi(locale: Locale): TikTokFormatsSectionUi {
  return locale === "en" ? formatsSectionEn : formatsSectionSv;
}

export function getTikTokCaseUi(locale: Locale): TikTokCaseUi {
  return locale === "en" ? caseEn : caseSv;
}
