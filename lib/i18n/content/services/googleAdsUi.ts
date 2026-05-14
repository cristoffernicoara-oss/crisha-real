import type { Locale } from "@/lib/i18n/types";

export type GoogleAdsHeroUi = {
  pill: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lead: string;
  stats: { v: string; l: string }[];
  cardTitle: string;
  qsLabel: string;
  qsScore: string;
  qsSub: string;
  searchCamp: string;
  shopCamp: string;
  pmaxCamp: string;
  pmaxVal: string;
  pmaxLab: string;
  cpaLabel: string;
  cpaOld: string;
  cpaNew: string;
  cpaTrend: string;
};

export type GoogleAdsKeywordsUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  pyramidTitle: string;
  highInt: string;
  midInt: string;
  lowInt: string;
  mHigh: string;
  mMid: string;
  mLow: string;
  foot: string;
  processTitle: string;
  steps: { n: string; title: string; desc: string }[];
  exHigh: string[];
  exMid: string[];
  exLow: string[];
};

export type CampType = {
  name: string;
  desc: string;
  stats: string[];
  when: string;
};

export type GoogleAdsCampaignsUi = {
  label: string;
  h2a: string;
  h2b: string;
  types: CampType[];
};

export type QFactor = { name: string; desc: string; bullets: string[] };
export type QRow = { qs: number; label: string; price: string; color: string; glow: boolean; baseline: boolean };

export type GoogleAdsQualityUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  factors: QFactor[];
  factorBadge: string;
  howOpt: string;
  cpcTitle: string;
  baselineTag: string;
  foot: string;
  tip: string;
  rows: QRow[];
};

export type GoogleAdsCaseUi = {
  label: string;
  h2a: string;
  h2b: string;
  client: string;
  meta: string;
  duration: string;
  challengeK: string;
  challenge: string;
  solutionK: string;
  solution: string;
  resultK: string;
  before: string;
  after: string;
  leads: string;
  metrics: { v: string; l: string }[];
  quote: string;
  quoteBy: string;
};

const heroSv: GoogleAdsHeroUi = {
  pill: "🔍 Google Ads Sverige · Search & Shopping",
  h1a: "Google Ads för kunder",
  h1b: "som redan söker",
  h1c: "vad du erbjuder.",
  lead:
    "Vi fångar köpintentionen i exakt rätt ögonblick. Search, Shopping och Performance Max för svenska företag som vill synas när det spelar roll, inte bara hela tiden.",
  stats: [
    { v: "7,1%", l: "Snitt CTR" },
    { v: "-42%", l: "Lägre CPC" },
    { v: "3,5×", l: "Snitt ROAS" },
    { v: "40+", l: "Aktiva konton" },
  ],
  cardTitle: "Kontoöversikt",
  qsLabel: "Genomsnittligt Quality Score",
  qsScore: "7,2 / 10",
  qsSub: "Branschsnitt: 4,1 / 10",
  searchCamp: "Search Kampanjer",
  shopCamp: "Shopping Kampanjer",
  pmaxCamp: "Performance Max",
  pmaxVal: "312 konv.",
  pmaxLab: "Konv.",
  cpaLabel: "CPA denna månad",
  cpaOld: "47 kr",
  cpaNew: "27 kr",
  cpaTrend: "-42% vs förra månaden",
};

const heroEn: GoogleAdsHeroUi = {
  pill: "🔍 Google Ads · Search & Shopping",
  h1a: "Google Ads for people",
  h1b: "already searching",
  h1c: "for what you offer.",
  lead:
    "We capture purchase intent at the right moment. Search, Shopping, and Performance Max for brands that want to show up when it matters, not all the time.",
  stats: [
    { v: "7.1%", l: "Avg. CTR" },
    { v: "−42%", l: "Lower CPC" },
    { v: "3.5×", l: "Avg. ROAS" },
    { v: "40+", l: "Active accounts" },
  ],
  cardTitle: "Account overview",
  qsLabel: "Average Quality Score",
  qsScore: "7.2 / 10",
  qsSub: "Industry avg.: 4.1 / 10",
  searchCamp: "Search campaigns",
  shopCamp: "Shopping campaigns",
  pmaxCamp: "Performance Max",
  pmaxVal: "312 conv.",
  pmaxLab: "Conv.",
  cpaLabel: "CPA this month",
  cpaOld: "47 SEK",
  cpaNew: "27 SEK",
  cpaTrend: "−42% vs last month",
};

const keywordsSv: GoogleAdsKeywordsUi = {
  label: "SÖKORDSSTRATEGI",
  h2a: "Vi hittar sökorden",
  h2b: " som konverterar.",
  intro: "Inte de med mest trafik, utan de med mest köpintention. Det är skillnaden mellan klick och kunder.",
  pyramidTitle: "Sökords-intention pyramid",
  highInt: "HÖG INTENTION",
  midInt: "MEDEL INTENTION",
  lowInt: "LÅG INTENTION",
  mHigh: "Konverterar: 8-12%",
  mMid: "Konverterar: 3-6%",
  mLow: "Konverterar: 0,5-2%",
  foot: "Vi fokuserar budget på transaktionella sökord för maximal konvertering",
  processTitle: "Vår sökords-process",
  exHigh: ['"köp [produkt] online"', '"bästa pris [produkt]"'],
  exMid: ['"[produkt] recension"', '"bästa [produkt] 2025"'],
  exLow: ['"vad är [produkt]"', '"hur fungerar [produkt]"'],
  steps: [
    {
      n: "01",
      title: "Konkurrentanalys",
      desc: "Vi kartlägger vilka sökord dina konkurrenter buddar på och var det finns luckor.",
    },
    {
      n: "02",
      title: "Intentionsklustring",
      desc: "Vi grupperar sökord efter köpintention och skapar separata kampanjer per intentionsnivå.",
    },
    {
      n: "03",
      title: "Negative keyword-listor",
      desc: "Vi bygger omfattande negativa listor för att eliminera irrelevant trafik från dag ett.",
    },
    {
      n: "04",
      title: "Löpande expansion",
      desc: "Varje månad analyserar vi söktermsrapporten och lägger till nya vinnande sökord automatiskt.",
    },
  ],
};

const keywordsEn: GoogleAdsKeywordsUi = {
  label: "KEYWORD STRATEGY",
  h2a: "We find the keywords",
  h2b: " that convert.",
  intro: "Not the ones with the most traffic, but the ones with the strongest intent. That’s the gap between clicks and customers.",
  pyramidTitle: "Search intent pyramid",
  highInt: "HIGH INTENT",
  midInt: "MID INTENT",
  lowInt: "LOW INTENT",
  mHigh: "Converts: 8–12%",
  mMid: "Converts: 3–6%",
  mLow: "Converts: 0.5–2%",
  foot: "We focus budget on transactional keywords for maximum conversion",
  processTitle: "Our keyword process",
  exHigh: ['"buy [product] online"', '"best price [product]"'],
  exMid: ['"[product] review"', '"best [product] 2025"'],
  exLow: ['"what is [product]"', '"how does [product] work"'],
  steps: [
    {
      n: "01",
      title: "Competitor analysis",
      desc: "We map which keywords competitors bid on and where the gaps are.",
    },
    {
      n: "02",
      title: "Intent clustering",
      desc: "We group keywords by purchase intent and build separate campaigns per level.",
    },
    {
      n: "03",
      title: "Negative keyword lists",
      desc: "We build broad negative lists to cut irrelevant traffic from day one.",
    },
    {
      n: "04",
      title: "Ongoing expansion",
      desc: "Every month we mine the search terms report and add new winners automatically.",
    },
  ],
};

const campaignsSv: GoogleAdsCampaignsUi = {
  label: "KAMPANJTYPER",
  h2a: "Vi hanterar alla",
  h2b: " Google Ads-format.",
  types: [
    {
      name: "Search Ads",
      desc: "Textannonser som visas när användare söker aktivt efter dina produkter eller tjänster. Högst köpintention av alla format.",
      stats: ["Snitt CTR: 7,1%", "Bäst för: Lead-gen & tjänster", "Bidstrategi: Target CPA / ROAS"],
      when: "När kunder söker aktivt",
    },
    {
      name: "Google Shopping",
      desc: "Produktannonser med bild, pris och produktnamn visas direkt i sökresultaten. Bäst för e-handel med fysiska produkter.",
      stats: ["Snitt ROAS: 5,8×", "Bäst för: E-handel", "Optimering: Produktflöde + bud"],
      when: "När du säljer produkter online",
    },
    {
      name: "Performance Max",
      desc: "AI-driven kampanjtyp som visas på alla Googles ytor simultant: Search, Display, YouTube, Gmail och Maps. Kräver korrekt setup.",
      stats: ["Räckvidd: Alla Googles kanaler", "Bäst för: Skalning", "Krav: Kvalitativa kreatives"],
      when: "För maximal räckvidd & skalning",
    },
    {
      name: "Display & Remarketing",
      desc: "Bildannonser på miljontals webbplatser i Googles Display Network. Perfekt för remarketing och varumärkeskännedom.",
      stats: ["Räckvidd: 90% av internetanvändare", "Bäst för: Remarketing", "CPM: 5-20 kr"],
      when: "För remarketing & awareness",
    },
  ],
};

const campaignsEn: GoogleAdsCampaignsUi = {
  label: "CAMPAIGN TYPES",
  h2a: "We run every",
  h2b: " major Google Ads format.",
  types: [
    {
      name: "Search Ads",
      desc: "Text ads when people actively search for your products or services. Highest purchase intent of any format.",
      stats: ["Avg. CTR: 7.1%", "Best for: Leads & services", "Bidding: Target CPA / ROAS"],
      when: "When customers are actively searching",
    },
    {
      name: "Google Shopping",
      desc: "Product ads with image, price, and name right in search results. Best for ecommerce with physical goods.",
      stats: ["Avg. ROAS: 5.8×", "Best for: Ecommerce", "Optimisation: Feed + bidding"],
      when: "When you sell products online",
    },
    {
      name: "Performance Max",
      desc: "AI campaigns across Google: Search, Display, YouTube, Gmail, and Maps. Needs correct setup and signals.",
      stats: ["Reach: All Google channels", "Best for: Scaling", "Needs: Strong creatives & data"],
      when: "For maximum reach and scale",
    },
    {
      name: "Display & remarketing",
      desc: "Image ads across millions of sites on the Display Network. Great for remarketing and awareness.",
      stats: ["Reach: ~90% of web users", "Best for: Remarketing", "CPM: ~5–20 SEK"],
      when: "For remarketing and awareness",
    },
  ],
};

const qualitySv: GoogleAdsQualityUi = {
  label: "QUALITY SCORE",
  h2a: "Betala mindre",
  h2b: " än dina konkurrenter.",
  intro:
    "Quality Score avgör hur mycket du betalar per klick. Vi optimerar alla faktorer som påverkar det, så du vinner auktioner till lägre pris.",
  factors: [
    {
      name: "Förväntad klickfrekvens (CTR)",
      desc: "Sannolikheten att din annons klickas vid en viss sökfråga.",
      bullets: ["• Matcha rubriker med sökord", "• Testa 5+ rubrikvarianter", "• Använd alla annonstillägg"],
    },
    {
      name: "Annonsrelevans",
      desc: "Hur väl din annons matchar användarens sökintention.",
      bullets: ["• Separata annonsgrupper per tema", "• Sökord i rubrik och beskrivning", "• Responsiva sökannonser (RSA)"],
    },
    {
      name: "Landningssideupplevelse",
      desc: "Hur relevant och snabb din landningssida är för sökfrågan.",
      bullets: ["• Snabb laddningstid (<2s)", "• Sökord på landningssidan", "• Tydlig CTA ovanför fold"],
    },
  ],
  factorBadge: "33% av Quality Score",
  howOpt: "Hur vi optimerar:",
  cpcTitle: "Quality Score påverkan på CPC",
  baselineTag: "branschsnitt",
  foot: "Crisha-kunder har i snitt Quality Score 7,2 vs branschsnitt 4,1",
  tip: "💡 Med Quality Score 8 istället för 4 betalar du 45% mindre per klick för exakt samma annonsposition.",
  rows: [
    { qs: 10, label: "-50% CPC", price: "50 kr", color: "#22C55E", glow: true, baseline: false },
    { qs: 8, label: "-20% CPC", price: "80 kr", color: "#86EFAC", glow: false, baseline: false },
    { qs: 7, label: "Snitt", price: "100 kr", color: "#ffffff", glow: false, baseline: true },
    { qs: 5, label: "+25% CPC", price: "125 kr", color: "#F59E0B", glow: false, baseline: false },
    { qs: 3, label: "+67% CPC", price: "167 kr", color: "#EF4444", glow: false, baseline: false },
  ],
};

const qualityEn: GoogleAdsQualityUi = {
  label: "QUALITY SCORE",
  h2a: "Pay less",
  h2b: " than your competitors.",
  intro:
    "Quality Score decides how much you pay per click. We optimise every factor that affects it so you win auctions at a lower price.",
  factors: [
    {
      name: "Expected click-through rate (CTR)",
      desc: "The likelihood your ad is clicked for a given search.",
      bullets: ["• Match headlines to keywords", "• Test 5+ headline variants", "• Use all relevant ad extensions"],
    },
    {
      name: "Ad relevance",
      desc: "How well your ad matches the user’s search intent.",
      bullets: ["• Separate ad groups per theme", "• Keywords in headline and description", "• Responsive search ads (RSA)"],
    },
    {
      name: "Landing page experience",
      desc: "How relevant and fast your landing page is for the query.",
      bullets: ["• Fast load (<2s)", "• Keywords on the page", "• Clear CTA above the fold"],
    },
  ],
  factorBadge: "33% of Quality Score",
  howOpt: "How we optimise:",
  cpcTitle: "How Quality Score affects CPC",
  baselineTag: "industry avg.",
  foot: "Crisha clients average Quality Score 7.2 vs. industry ~4.1",
  tip: "💡 With QS 8 instead of 4 you can pay ~45% less per click for the same ad position.",
  rows: [
    { qs: 10, label: "−50% CPC", price: "50 SEK", color: "#22C55E", glow: true, baseline: false },
    { qs: 8, label: "−20% CPC", price: "80 SEK", color: "#86EFAC", glow: false, baseline: false },
    { qs: 7, label: "Avg.", price: "100 SEK", color: "#ffffff", glow: false, baseline: true },
    { qs: 5, label: "+25% CPC", price: "125 SEK", color: "#F59E0B", glow: false, baseline: false },
    { qs: 3, label: "+67% CPC", price: "167 SEK", color: "#EF4444", glow: false, baseline: false },
  ],
};

const caseSv: GoogleAdsCaseUi = {
  label: "FALLSTUDIE",
  h2a: "Från 10 till 34 leads/mån",
  h2b: ", 59% lägre CPL.",
  client: "DentalMed Klinik",
  meta: "Tjänster · Hälsovård · Sverige",
  duration: "6 månaders samarbete",
  challengeK: "UTMANINGEN",
  challenge:
    "DentalMed fick cirka 10 leads per månad via Google Ads med hög CPL. Sökordsstrukturen var otydlig, negativa sökord saknades och landningssidan laddade långsamt. Quality Score låg under branschsnitt.",
  solutionK: "LÖSNINGEN",
  solution:
    "Vi separerade kampanjer per intention, byggde negativa listor, skrev nya RSA-annonser och förbättrade landningssidans hastighet och relevans. Budstrategi ställdes in mot stabil CPA med tydlig konverteringsspårning.",
  resultK: "RESULTAT",
  before: "Före",
  after: "Efter",
  leads: "leads/mån",
  metrics: [
    { v: "+240%", l: "Fler leads" },
    { v: "-59%", l: "Lägre CPL" },
    { v: "7,4", l: "Quality Score" },
    { v: "8,1%", l: "Snitt CTR" },
  ],
  quote: "Vi ser tydligt fler bokningar från Google, och vi betalar mindre per lead än tidigare.",
  quoteBy: "Dr. Eriksson, DentalMed",
};

const caseEn: GoogleAdsCaseUi = {
  label: "CASE STUDY",
  h2a: "From 10 to 34 leads/mo",
  h2b: ", 59% lower CPL.",
  client: "DentalMed Clinic",
  meta: "Services · Healthcare · Sweden",
  duration: "6-month engagement",
  challengeK: "THE CHALLENGE",
  challenge:
    "DentalMed saw ~10 leads/month from Google Ads with high CPL. Keyword structure was unclear, negatives were missing, and the landing page was slow. Quality Score sat below benchmark.",
  solutionK: "THE SOLUTION",
  solution:
    "We split campaigns by intent, built negative lists, wrote new RSAs, and improved landing page speed and relevance. Bidding aimed at stable CPA with solid conversion tracking.",
  resultK: "RESULTS",
  before: "Before",
  after: "After",
  leads: "leads/mo",
  metrics: [
    { v: "+240%", l: "More leads" },
    { v: "−59%", l: "Lower CPL" },
    { v: "7.4", l: "Quality Score" },
    { v: "8.1%", l: "Avg. CTR" },
  ],
  quote: "We clearly see more bookings from Google, and we pay less per lead than before.",
  quoteBy: "Dr. Eriksson, DentalMed",
};

export function getGoogleAdsHeroUi(locale: Locale): GoogleAdsHeroUi {
  return locale === "en" ? heroEn : heroSv;
}

export function getGoogleAdsKeywordsUi(locale: Locale): GoogleAdsKeywordsUi {
  return locale === "en" ? keywordsEn : keywordsSv;
}

export function getGoogleAdsCampaignsUi(locale: Locale): GoogleAdsCampaignsUi {
  return locale === "en" ? campaignsEn : campaignsSv;
}

export function getGoogleAdsQualityUi(locale: Locale): GoogleAdsQualityUi {
  return locale === "en" ? qualityEn : qualitySv;
}

export function getGoogleAdsCaseUi(locale: Locale): GoogleAdsCaseUi {
  return locale === "en" ? caseEn : caseSv;
}
