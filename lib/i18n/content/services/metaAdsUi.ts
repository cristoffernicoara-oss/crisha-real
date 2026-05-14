import type { Locale } from "@/lib/i18n/types";

export type MetaHeroUi = {
  pill: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lead: string;
  stats: { v: string; l: string }[];
  floatBadge: string;
  activeLabel: string;
  totalRoasLabel: string;
  totalRoas: string;
  rows: { name: string; sub: string; roas: string }[];
};

export type MetaApproachUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  colBefore: string;
  titleBefore: string;
  titleAfter: string;
  colFunnel: string;
  beforeItems: string[];
  afterItems: string[];
  tof: { label: string; title: string; m1: string; m2: string };
  mof: { label: string; title: string; m1: string; m2: string };
  bof: { label: string; title: string; m1: string; m2: string };
  foot: string;
};

export type MetaIncludesUi = {
  label: string;
  h2a: string;
  h2b: string;
  blocks: { title: string; items: string[] }[];
};

export type MetaCaseUi = {
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
  before: string;
  after: string;
  subBefore: string;
  subAfter: string;
  metrics: { v: string; l: string }[];
  quote: string;
  quoteBy: string;
};

export type FormatCardUi = {
  h3: string;
  platform: string;
  badge: string;
  why: string;
  specs: string;
  performance: string;
  emoji: string;
  color: string;
};

export type MetaFormatsUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  video: FormatCardUi;
  static: FormatCardUi;
  carousel: FormatCardUi;
  stories: FormatCardUi;
  collection: FormatCardUi;
  lead: FormatCardUi;
};

const heroSv: MetaHeroUi = {
  pill: "🎯 Meta Ads Sverige · Facebook & Instagram",
  h1a: "Meta Ads som genererar",
  h1b: "försäljningar,",
  h1c: "inte bara klick.",
  lead:
    "Vi hanterar Facebook och Instagram Ads för svenska företag som vill ha mätbar avkastning. ROAS 4,8× i snitt, sjunkande CPA varje månad och full transparens, alltid.",
  stats: [
    { v: "4,8×", l: "Snitt ROAS" },
    { v: "-42%", l: "Lägre CPA" },
    { v: "1M€+", l: "Hanterat annonspengar" },
    { v: "48h", l: "Kampanjer live" },
  ],
  floatBadge: "+34% vs förra månaden",
  activeLabel: "Aktiva kampanjer",
  totalRoasLabel: "Total ROAS denna månad",
  totalRoas: "4,8×",
  rows: [
    { name: "Awareness Campaign", sub: "Facebook Feed", roas: "5,2×" },
    { name: "Retargeting BOF", sub: "Instagram Stories", roas: "7,1×" },
    { name: "Lookalike TOF", sub: "Meta Advantage+", roas: "3,8×" },
  ],
};

const heroEn: MetaHeroUi = {
  pill: "🎯 Meta Ads · Facebook & Instagram",
  h1a: "Meta Ads that drive",
  h1b: "sales,",
  h1c: "not just clicks.",
  lead:
    "We run Facebook and Instagram Ads for brands that want measurable returns: average ROAS 4.8×, falling CPA over time, and full transparency.",
  stats: [
    { v: "4.8×", l: "Avg. ROAS" },
    { v: "−42%", l: "Lower CPA" },
    { v: "€1M+", l: "Ad spend managed" },
    { v: "48h", l: "Campaigns live" },
  ],
  floatBadge: "+34% vs last month",
  activeLabel: "Active campaigns",
  totalRoasLabel: "Total ROAS this month",
  totalRoas: "4.8×",
  rows: [
    { name: "Awareness campaign", sub: "Facebook Feed", roas: "5.2×" },
    { name: "Retargeting BOF", sub: "Instagram Stories", roas: "7.1×" },
    { name: "Lookalike TOF", sub: "Meta Advantage+", roas: "3.8×" },
  ],
};

const approachSv: MetaApproachUi = {
  label: "VÅR METOD",
  h2a: "Inte mer annonsering.",
  h2b: " Smartare annonsering.",
  intro: "De flesta byråer kör fler annonser med högre budget. Vi optimerar varje krona innan vi skalar.",
  colBefore: "Typiskt konto vi tar över",
  titleBefore: "❌ Innan Crisha",
  titleAfter: "✓ Efter Crisha",
  colFunnel: "Vår kampanjstruktur",
  beforeItems: [
    "Inga negative keywords → 40% budgetförlust",
    "Felaktig pixelkonfiguration → algoritmen optimerar fel",
    "En kampanj för allt → ingen segmentering",
    "Inget retargeting → 97% av besökarna försvinner",
    "Samma creative i 3 månader → ad fatigue",
  ],
  afterItems: [
    "Negativa sökord & exkluderingslistor → noll slöseri",
    "Pixel & CAPI konfigurerat korrekt → data Meta kan lita på",
    "TOF/MOF/BOF-struktur → rätt budskap, rätt person, rätt tid",
    "3-nivåers retargeting → återvinner 40% av förlorade köp",
    "Veckotestning av creatives → alltid färsk annonsering",
  ],
  tof: {
    label: "TOF · MEDVETENHET",
    title: "Kall publik · Lookalike · Intresse",
    m1: "Räckvidd: 200K+",
    m2: "CPM: 35 kr",
  },
  mof: {
    label: "MOF · ÖVERVÄGANDE",
    title: "Webbplatsbesökare · Videotittare",
    m1: "Räckvidd: 45K",
    m2: "CTR: 3,2%",
  },
  bof: {
    label: "BOF · KONVERTERING",
    title: "Kundvagnsavbrytar · Besökare 90d",
    m1: "ROAS: 8,2×",
    m2: "CPA: 18 kr",
  },
  foot: "Strukturen anpassas för varje kunds unika kundresa",
};

const approachEn: MetaApproachUi = {
  label: "OUR APPROACH",
  h2a: "Not more ads.",
  h2b: " Smarter ads.",
  intro: "Most agencies spend more before fixing fundamentals. We optimise every euro before scaling.",
  colBefore: "Typical account we inherit",
  titleBefore: "❌ Before Crisha",
  titleAfter: "✓ After Crisha",
  colFunnel: "Our funnel structure",
  beforeItems: [
    "No negative keywords → ~40% wasted spend",
    "Broken pixel setup → algorithm learns the wrong thing",
    "One campaign for everything → no segmentation",
    "No retargeting → ~97% of visitors leave forever",
    "Same creative for 3 months → ad fatigue",
  ],
  afterItems: [
    "Negatives & exclusions → zero obvious waste",
    "Pixel & CAPI done right → data Meta can trust",
    "TOF/MOF/BOF → right message, person, and time",
    "3-level retargeting → recover more lost buyers",
    "Weekly creative tests → always fresh ads",
  ],
  tof: {
    label: "TOF · AWARENESS",
    title: "Cold audiences · Lookalikes · Interests",
    m1: "Reach: 200K+",
    m2: "CPM: 35 SEK",
  },
  mof: {
    label: "MOF · CONSIDERATION",
    title: "Site visitors · Video viewers",
    m1: "Reach: 45K",
    m2: "CTR: 3.2%",
  },
  bof: {
    label: "BOF · CONVERSION",
    title: "Cart abandoners · 90-day visitors",
    m1: "ROAS: 8.2×",
    m2: "CPA: 18 SEK",
  },
  foot: "Structure is tailored to each customer journey",
};

const includesSv: MetaIncludesUi = {
  label: "VAD SOM INGÅR",
  h2a: "Allt du behöver,",
  h2b: " ingenting du inte behöver.",
  blocks: [
    {
      title: "Kontostruktur & Setup",
      items: [
        "Pixel & CAPI-konfiguration",
        "Produktkatalog setup",
        "Anpassade konverteringar",
        "Målgruppssegmentering",
        "Kampanjstruktur TOF/MOF/BOF",
      ],
    },
    {
      title: "Creative & Annonstext",
      items: [
        "Statiska bildannonser",
        "Karusell-annonser",
        "Video-hooks (15-30s)",
        "A/B-testning av creatives",
        "Copywriting för annonser",
      ],
    },
    {
      title: "Targeting & Publik",
      items: [
        "Lookalike audiences 1-10%",
        "Intresse & beteendetargeting",
        "Kundliste-uppladdning",
        "Advantage+ audiences",
        "Exkluderingslistor",
      ],
    },
    {
      title: "Optimering & Rapportering",
      items: [
        "Daglig kontoövervakning",
        "Veckosvis budoptimering",
        "Månadsvis strategirapport",
        "Veckorapport varje måndag",
        "Live dashboard-åtkomst",
      ],
    },
  ],
};

const includesEn: MetaIncludesUi = {
  label: "WHAT’S INCLUDED",
  h2a: "Everything you need,",
  h2b: " nothing you don’t.",
  blocks: [
    {
      title: "Account structure & setup",
      items: [
        "Pixel & CAPI configuration",
        "Product catalogue setup",
        "Custom conversions",
        "Audience segmentation",
        "TOF/MOF/BOF campaign structure",
      ],
    },
    {
      title: "Creative & ad copy",
      items: ["Static image ads", "Carousel ads", "Video hooks (15–30s)", "Creative A/B testing", "Ad copywriting"],
    },
    {
      title: "Targeting & audiences",
      items: [
        "Lookalike audiences 1–10%",
        "Interest & behavioural targeting",
        "Customer list uploads",
        "Advantage+ audiences",
        "Exclusion lists",
      ],
    },
    {
      title: "Optimisation & reporting",
      items: [
        "Daily account monitoring",
        "Weekly bid optimisation",
        "Monthly strategy summary",
        "Weekly report every Monday",
        "Live dashboard access",
      ],
    },
  ],
};

const caseSv: MetaCaseUi = {
  label: "FALLSTUDIE",
  h2a: "Från 1,4× till 3,8× ROAS",
  h2b: " på 4 månader.",
  chip1: "E-handel · Mode · Sverige",
  chip2: "4 månaders samarbete",
  challengeK: "UTMANINGEN",
  challenge:
    "FashionUp hade en ROAS på 1,4×, knappt lönsamt. Budgeten på 800€/mån sköttes internt utan tydlig struktur och utan retargeting. CPA låg på 47 kr, för högt för deras marginaler.",
  solutionK: "LÖSNINGEN",
  solution:
    "Vi omstrukturerade kontot komplett: separerade kampanjer per mål, byggde lookalike audiences på befintliga kunder och implementerade 3-nivåers retargeting. 8 creative-varianter testades simultant de första 2 veckorna.",
  resultK: "RESULTAT EFTER 4 MÅNADER",
  before: "Före",
  after: "Efter",
  subBefore: "47 kr/köp",
  subAfter: "19 kr/köp",
  metrics: [
    { v: "+171%", l: "ROAS-ökning" },
    { v: "-60%", l: "Lägre CPA" },
    { v: "+362%", l: "Intäktsökning" },
    { v: "3,4%", l: "Snitt CTR" },
  ],
  quote:
    "Jag förväntade mig inte att se så tydliga resultat på de första månaderna. ROAS nästan tredubblades och kostnaden per beställning sjönk dramatiskt.",
  quoteBy: "Andreea M., ägare FashionUp",
};

const caseEn: MetaCaseUi = {
  label: "CASE STUDY",
  h2a: "From 1.4× to 3.8× ROAS",
  h2b: " in 4 months.",
  chip1: "Ecommerce · Fashion · Sweden",
  chip2: "4-month engagement",
  challengeK: "THE CHALLENGE",
  challenge:
    "FashionUp ran ~1.4× ROAS, barely profitable. €800/month was managed in-house with no clear structure or retargeting. CPA was 47 SEK, too high for their margins.",
  solutionK: "THE SOLUTION",
  solution:
    "We fully restructured the account: campaigns by objective, lookalikes from customers, and three-level retargeting. Eight creative variants tested in parallel in the first two weeks.",
  resultK: "RESULTS AFTER 4 MONTHS",
  before: "Before",
  after: "After",
  subBefore: "47 SEK/purchase",
  subAfter: "19 SEK/purchase",
  metrics: [
    { v: "+171%", l: "ROAS lift" },
    { v: "−60%", l: "Lower CPA" },
    { v: "+362%", l: "Revenue growth" },
    { v: "3.4%", l: "Avg. CTR" },
  ],
  quote:
    "I didn’t expect such clear results in the first few months. ROAS nearly tripled and cost per order dropped dramatically.",
  quoteBy: "Andreea M., owner, FashionUp",
};

const formatsSv: MetaFormatsUi = {
  label: "ANNONSFORMAT",
  h2a: "Right format,",
  h2b: " right moment.",
  intro: "Vi väljer format baserat på kampanjmålet, inte vad som är enklast att producera.",
  video: {
    h3: "Video Reels",
    platform: "Instagram & Facebook",
    emoji: "🎬",
    color: "#2563EB",
    badge: "Bäst för: Awareness & TOF",
    why: "Native känsla, högst räckvidd, lägst CPM",
    specs: "9:16 · 15-30s · Hook inom 1s",
    performance: "Snitt CTR: 3,2%",
  },
  static: {
    h3: "Statisk bild",
    platform: "Facebook Feed & Instagram",
    emoji: "🖼️",
    color: "#0EA5E9",
    badge: "Bäst för: Konvertering & BOF",
    why: "Tydligt budskap, enkel produktion, hög konvertering",
    specs: "1:1 eller 4:5 · Max 20% text",
    performance: "Snitt ROAS: 5,1×",
  },
  carousel: {
    h3: "Karusellannonser",
    platform: "Facebook & Instagram",
    emoji: "🎠",
    color: "#8B5CF6",
    badge: "Bäst för: Produktvisning & e-handel",
    why: "Visa flera produkter, berättande format, hög engagement",
    specs: "Upp till 10 kort · 1:1",
    performance: "Snitt CTR: 4,1%",
  },
  stories: {
    h3: "Stories Ads",
    platform: "Instagram Stories",
    emoji: "📱",
    color: "#EC4899",
    badge: "Bäst för: Retargeting & MOF",
    why: "Fullskärm, hög uppmärksamhet, lågt CPM",
    specs: "9:16 · Max 15s · Tydlig CTA",
    performance: "Snitt CPM: 28 kr",
  },
  collection: {
    h3: "Collection Ads",
    platform: "Facebook Feed",
    emoji: "🛍️",
    color: "#F59E0B",
    badge: "Bäst för: E-handel & katalog",
    why: "Direkt shopping-upplevelse, produktkatalog integrerat",
    specs: "Video/bild + 4 produkter",
    performance: "Snitt ROAS: 6,3×",
  },
  lead: {
    h3: "Lead Ads",
    platform: "Facebook & Instagram",
    emoji: "📋",
    color: "#22C55E",
    badge: "Bäst för: Lead-generering & B2B",
    why: "Formulär i appen, ingen landningssida behövs, låg friktion",
    specs: "Anpassat formulär · CRM-integration",
    performance: "Snitt CPL: 65 kr",
  },
};

const formatsEn: MetaFormatsUi = {
  label: "AD FORMATS",
  h2a: "Right format,",
  h2b: " right moment.",
  intro: "We pick formats based on the campaign goal, not what’s easiest to produce.",
  video: {
    h3: "Video Reels",
    platform: "Instagram & Facebook",
    emoji: "🎬",
    color: "#2563EB",
    badge: "Best for: Awareness & TOF",
    why: "Native feel, broad reach, lowest CPM",
    specs: "9:16 · 15–30s · Hook in 1s",
    performance: "Avg. CTR: 3.2%",
  },
  static: {
    h3: "Static image",
    platform: "Facebook Feed & Instagram",
    emoji: "🖼️",
    color: "#0EA5E9",
    badge: "Best for: Conversion & BOF",
    why: "Clear message, fast production, strong conversion",
    specs: "1:1 or 4:5 · Max 20% text overlay",
    performance: "Avg. ROAS: 5.1×",
  },
  carousel: {
    h3: "Carousel ads",
    platform: "Facebook & Instagram",
    emoji: "🎠",
    color: "#8B5CF6",
    badge: "Best for: Product storytelling & ecommerce",
    why: "Show multiple products, narrative format, high engagement",
    specs: "Up to 10 cards · 1:1",
    performance: "Avg. CTR: 4.1%",
  },
  stories: {
    h3: "Stories ads",
    platform: "Instagram Stories",
    emoji: "📱",
    color: "#EC4899",
    badge: "Best for: Retargeting & MOF",
    why: "Fullscreen attention, efficient CPM",
    specs: "9:16 · Max 15s · Clear CTA",
    performance: "Avg. CPM: 28 SEK",
  },
  collection: {
    h3: "Collection ads",
    platform: "Facebook Feed",
    emoji: "🛍️",
    color: "#F59E0B",
    badge: "Best for: Ecommerce & catalogue",
    why: "In-feed shopping experience with catalogue",
    specs: "Video/image + 4 products",
    performance: "Avg. ROAS: 6.3×",
  },
  lead: {
    h3: "Lead ads",
    platform: "Facebook & Instagram",
    emoji: "📋",
    color: "#22C55E",
    badge: "Best for: Lead gen & B2B",
    why: "In-app forms, no landing page needed, low friction",
    specs: "Custom form · CRM integration",
    performance: "Avg. CPL: 65 SEK",
  },
};

export function getMetaHeroUi(locale: Locale): MetaHeroUi {
  return locale === "en" ? heroEn : heroSv;
}

export function getMetaApproachUi(locale: Locale): MetaApproachUi {
  return locale === "en" ? approachEn : approachSv;
}

export function getMetaIncludesUi(locale: Locale): MetaIncludesUi {
  return locale === "en" ? includesEn : includesSv;
}

export function getMetaCaseUi(locale: Locale): MetaCaseUi {
  return locale === "en" ? caseEn : caseSv;
}

export function getMetaFormatsUi(locale: Locale): MetaFormatsUi {
  return locale === "en" ? formatsEn : formatsSv;
}

export function getMetaFormatCards(locale: Locale): FormatCardUi[] {
  const f = getMetaFormatsUi(locale);
  return [f.video, f.static, f.carousel, f.stories, f.collection, f.lead];
}
