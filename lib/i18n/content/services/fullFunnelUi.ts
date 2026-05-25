import type { FAQItem } from "@/components/ui/FAQ";
import type { Locale } from "@/lib/i18n/types";

export type FullFunnelHeroUi = {
  pill: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  vizLabel: string;
  vizTop: string;
  vizMid: string;
  vizBot: string;
  vizCaption: string;
};

export type FullFunnelWhyCard = {
  icon: "link" | "layers" | "lineChart";
  title: string;
  body: string;
};

export type FullFunnelWhyUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  cards: FullFunnelWhyCard[];
};

export type FullFunnelStage = { name: string; short: string; body: string };

export type FullFunnelStagesUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  stages: [FullFunnelStage, FullFunnelStage, FullFunnelStage];
};

export type FullFunnelChannelItem = {
  key: "meta" | "google" | "tiktok" | "web";
  title: string;
  body: string;
};

export type FullFunnelChannelsUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  items: FullFunnelChannelItem[];
  linkCta: string;
};

export type FullFunnelDeliverUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  bullets: string[];
};

export type FullFunnelProcessStep = { step: string; title: string; body: string };

export type FullFunnelProcessUi = {
  label: string;
  h2a: string;
  h2b: string;
  steps: FullFunnelProcessStep[];
};

const heroSv: FullFunnelHeroUi = {
  pill: "🎯 Performance · Hela köpresan",
  h1a: "Full funnel som",
  h1b: "binder ihop betald media,",
  h1c: "webb och mätning.",
  lead:
    "När kanaler och landningssidor optimeras var för sig utan gemensam strategi läcker budget: samma människa ser motstridiga budskap, attribution spricker och ingen vet vad som egentligen driver intäkter. Vi bygger en tydlig funnel där varje steg för kunden framåt, från första räckvidd till återköp.",
  ctaPrimary: "Boka gratis genomgång",
  ctaSecondary: "Se hur vi jobbar",
  stat1: { value: "TOF→BOF", label: "Gemensam struktur" },
  stat2: { value: "1 spår", label: "Pixel, CRM & GA4" },
  stat3: { value: "Löpande", label: "Splittest & CRO" },
  vizLabel: "TOF → MOF → BOF",
  vizTop: "Topp · medvetenhet",
  vizMid: "Mitten · övervägande",
  vizBot: "Botten · konvertering",
  vizCaption: "Meta · Google · TikTok · Webb",
};

const heroEn: FullFunnelHeroUi = {
  pill: "🎯 Performance · End to end journey",
  h1a: "Full funnel that",
  h1b: "connects paid media,",
  h1c: "the site & measurement.",
  lead:
    "When channels and landing pages are tuned in silos, budget leaks: people see mixed messages, attribution breaks, and nobody knows what actually drives revenue. We build a coherent funnel where every step moves the customer forward, from first touch to repeat purchase.",
  ctaPrimary: "Book a free strategy call",
  ctaSecondary: "See how we work",
  stat1: { value: "TOF→BOF", label: "Shared structure" },
  stat2: { value: "One track", label: "Pixel, CRM & GA4" },
  stat3: { value: "Always on", label: "Split tests & CRO" },
  vizLabel: "TOF → MOF → BOF",
  vizTop: "Top · awareness",
  vizMid: "Middle · consideration",
  vizBot: "Bottom · conversion",
  vizCaption: "Meta · Google · TikTok · Web",
};

const whySv: FullFunnelWhyUi = {
  label: "VARFÖR FULL FUNNEL",
  h2a: "En konsekvent resa,",
  h2b: "inte fyra parallella kanaler.",
  intro:
    "Marknadsföring fungerar bäst när alla beröringspunkter berättar samma historia och mäter på samma sätt. Då kan vi flytta budget dit avkastningen är högst och förkorta vägen från klick till intäkt.",
  cards: [
    {
      icon: "link",
      title: "Ett gemensamt spår",
      body:
        "Budskap, erbjudanden och landningssidor är anpassade efter var kunden befinner sig, så du inte betalar för klick som aldrig kan konvertera i nästa steg.",
    },
    {
      icon: "layers",
      title: "Kanaler som förstärker",
      body:
        "Meta för räckvidd och påminnelse, Google för intention, TikTok för nå och rörelse, webben för att stänga affären, med synkad rytm och budgetflytt baserad på data.",
    },
    {
      icon: "lineChart",
      title: "Beslut på riktiga siffror",
      body:
        "Vi sätter upp spårning, konverteringsflöden och rapportering så ni ser helheten: CAC per kanal, assist och slutkälla utan att dubbelräkna.",
    },
  ],
};

const whyEn: FullFunnelWhyUi = {
  label: "WHY FULL FUNNEL",
  h2a: "One consistent journey,",
  h2b: "not four parallel channels.",
  intro:
    "Marketing works best when every touchpoint tells the same story and measures the same way. Then we shift spend where return is highest and shorten the path from click to revenue.",
  cards: [
    {
      icon: "link",
      title: "Single threaded story",
      body:
        "Messaging, offers, and landing pages match where the customer is, so you don’t pay for clicks that can’t convert in the next step.",
    },
    {
      icon: "layers",
      title: "Channels that amplify",
      body:
        "Meta for reach and recall, Google for intent, TikTok for scale and motion, the site to close, with synced cadence and budget shifts driven by data.",
    },
    {
      icon: "lineChart",
      title: "Decisions on real numbers",
      body:
        "We wire tracking, conversion flows, and reporting so you see the whole picture: CAC by channel, assists, and won deal sources without double counting.",
    },
  ],
};

const stagesSv: FullFunnelStagesUi = {
  label: "FUNNELN",
  h2a: "TOF · MOF · BOF:",
  h2b: "tydliga steg, tydlig budget.",
  intro:
    "Vi kartlägger dina målgrupper och erbjudanden i tre lager. Varje lager har egna kreativa och landningssidor, men samma KPI och mätmodell.",
  stages: [
    {
      name: "TOF · Top of funnel",
      short: "Medvetenhet & räckvidd",
      body:
        "Intresse och märkesigenkänning: bredare målgrupper, video och kreativa tester som mäter hook och thumbstop. Målet är kvalificerad trafik in i nästa steg, inte lägsta CPM till varje pris.",
    },
    {
      name: "MOF · Middle of funnel",
      short: "Övervägande & förtroende",
      body:
        "Remarketing, case, social proof och jämförelser. Här kopplar vi ihop budskapet med det kunden redan sett i TOF och landar dem på sidor som svarar på deras invändningar.",
    },
    {
      name: "BOF · Bottom of funnel",
      short: "Konvertering & lojalitet",
      body:
        "Search, branded, retargeting på korg, formulär och bokning. Optimerad checkout, erbjudanden och uppföljning, plus strategi för återköp och LTV.",
    },
  ],
};

const stagesEn: FullFunnelStagesUi = {
  label: "THE FUNNEL",
  h2a: "TOF · MOF · BOF:",
  h2b: "clear stages, clear budget.",
  intro:
    "We map your audiences and offers into three layers. Each layer has its own creatives and landing experiences, but shares the same KPI and measurement model.",
  stages: [
    {
      name: "TOF · Top of funnel",
      short: "Awareness & reach",
      body:
        "Interest and recognition: broader audiences, video, creative testing for hooks. The goal is qualified traffic into the next step, not the cheapest CPM at any cost.",
    },
    {
      name: "MOF · Middle of funnel",
      short: "Consideration & trust",
      body:
        "Remarketing, proof, comparisons. Messaging connects to what people saw in TOF and lands on pages that handle their objections.",
    },
    {
      name: "BOF · Bottom of funnel",
      short: "Conversion & loyalty",
      body:
        "Search, branded, cart retargeting, forms, and bookings. Checkout polish, offers, follow up, and strategy for repeat revenue and LTV.",
    },
  ],
};

const channelsSv: FullFunnelChannelsUi = {
  label: "KANALER",
  h2a: "Samma kund,",
  h2b: "rätt plattform per uppdrag.",
  intro:
    "Vi arbetar praktiskt i de kanaler som passar dina marginaler och din målgrupp. Under Full funnel arbetar teamet tvärfunktionellt: strategi, kreativt, annonsköp och webb.",
  items: [
    {
      key: "meta",
      title: "Meta Ads",
      body: "Reach, katalog, retargeting och kreativ iteration för social proof och frekvens.",
    },
    {
      key: "google",
      title: "Google Ads",
      body: "Intention: Search, PMax, Shopping och YouTube för köpklara sökningar.",
    },
    {
      key: "tiktok",
      title: "TikTok Ads",
      body: "Native video och Spark när din målgrupp lever i flödet, kopplat till MOF och BOF uppföljning.",
    },
    {
      key: "web",
      title: "Webb & landningssida",
      body: "Hastighet, CRO och tydliga CTA: där annonserna landar och konverteringen händer.",
    },
  ],
  linkCta: "Läs mer om den här tjänsten →",
};

const channelsEn: FullFunnelChannelsUi = {
  label: "CHANNELS",
  h2a: "Same customer,",
  h2b: "right platform for the job.",
  intro:
    "We work directly in the channels that fit your margins and audience. Under Full funnel the team spans strategy, creative, media, and web.",
  items: [
    {
      key: "meta",
      title: "Meta Ads",
      body: "Reach, catalogue, retargeting, and creative iteration for proof and frequency.",
    },
    {
      key: "google",
      title: "Google Ads",
      body: "Intent: Search, PMax, Shopping, and YouTube for high intent queries.",
    },
    {
      key: "tiktok",
      title: "TikTok Ads",
      body: "Native video and Spark when your audience lives in feed, tied to MOF and BOF follow up.",
    },
    {
      key: "web",
      title: "Web & landing pages",
      body: "Speed, CRO, and clear CTAs: where ads land and conversion happens.",
    },
  ],
  linkCta: "Read more about this service →",
};

const deliverSv: FullFunnelDeliverUi = {
  label: "LEVERANS",
  h2a: "Vad som ingår i",
  h2b: "ett Full funnel uppdrag.",
  intro:
    "Exakt scope anpassas efter bransch och budget, men kärnan är alltid: gemensam roadmap, synkad mätning och löpande förbättring.",
  bullets: [
    "Workshop: mål, målgrupper, erbjudande och KPI:er (vecka 1)",
    "Spårning: pixel och server side, GA4, CRM koppling och attribueringsmodell",
    "Funnelkarta: TOF/MOF/BOF med kreativa och landningssidor per steg",
    "Kampanjstruktur i Meta, Google och TikTok med gemensamma namn och budgetlogik",
    "Veckovis optimering: budget, målgrupper, kreativt och landningssidor",
    "Rapportering: en överblick där du ser kostnad, intäkt och nästa steg",
  ],
};

const deliverEn: FullFunnelDeliverUi = {
  label: "DELIVERABLES",
  h2a: "What’s included in",
  h2b: "a Full Funnel engagement.",
  intro:
    "Exact scope depends on industry and budget, but the core is always: a shared roadmap, aligned measurement, and continuous improvement.",
  bullets: [
    "Workshop: goals, audiences, offer, and KPIs (week 1)",
    "Tracking: pixel and server side, GA4, CRM link, and attribution model",
    "Funnel map: TOF/MOF/BOF with creatives and landing pages per stage",
    "Campaign structure across Meta, Google, and TikTok with shared naming and budget logic",
    "Weekly optimisation: budget, audiences, creative, and landing pages",
    "Reporting: one view of cost, revenue, and next actions",
  ],
};

const processSv: FullFunnelProcessUi = {
  label: "ARBETSSÄTT",
  h2a: "Så går vi från",
  h2b: "nuläge till skalbar funnel.",
  steps: [
    {
      step: "01",
      title: "Audit & data",
      body:
        "Vi granskar konton, spårning, webbplats och kundresa. Ni får en ärlig bedömning av vad som är quick wins jämfört med större investeringar.",
    },
    {
      step: "02",
      title: "Funneldesign",
      body:
        "Vi sätter struktur, budskap och landningssidor per steg. Samma narrativ över kanaler, tydliga experimentköer.",
    },
    {
      step: "03",
      title: "Lansering & inlärning",
      body:
        "Kampanjer och sidor live med tät övervakning. Vi låter algoritmer och användardata tala innan vi skalar.",
    },
    {
      step: "04",
      title: "Skalning & LTV",
      body:
        "Öka budget där marginalen är bäst, lägg till återköp och utöka kreativa testningar, så funneln växer med er omsättning.",
    },
  ],
};

const processEn: FullFunnelProcessUi = {
  label: "HOW WE WORK",
  h2a: "From current state",
  h2b: "to a scalable funnel.",
  steps: [
    {
      step: "01",
      title: "Audit & data",
      body:
        "We review accounts, tracking, the site, and the journey. You get an honest picture of quick wins compared with bigger bets.",
    },
    {
      step: "02",
      title: "Funnel design",
      body:
        "We set structure, messaging, and landing pages per stage, same narrative across channels and a clear test backlog.",
    },
    {
      step: "03",
      title: "Launch & learning",
      body:
        "Campaigns and pages live with tight monitoring. We let algorithms and user data speak before scaling.",
    },
    {
      step: "04",
      title: "Scale & LTV",
      body:
        "Increase spend where margin is strongest, add retention, and expand creative testing as revenue grows.",
    },
  ],
};

const faqSv: FAQItem[] = [
  {
    question: "Skiljer sig Full funnel från att köpa era kanaler var för sig?",
    answer:
      "Ja. Här finns en gemensam roadmap, gemensamma KPI:er och samma team som optimerar helheten. Ni slipper att Meta optimering underminerar Google sidan och tvärtom.",
  },
  {
    question: "Vilken budget behövs?",
    answer:
      "Vi rekommenderar ofta minst 20 000 till 50 000 kr per månad i annonsbudget när flera plattformar ska samverka, plus tydlig budget till landningssidor och spårning. Exakt nivå sätts efter bransch och mål.",
  },
  {
    question: "Hur lång tid tills vi ser effekt?",
    answer:
      "Första strukturförbättringar och spårning syns ofta inom 2 till 4 veckor. Stabil optimering och skalning brukar kräva 8 till 12 veckor av kontinuerlig testning.",
  },
  {
    question: "Har vi tillgång till våra annonskonton?",
    answer:
      "Ja. Full transparens är en del av hur vi jobbar. Ni äger kontona; vi arbetar i dem med tydlig dokumentation.",
  },
];

const faqEn: FAQItem[] = [
  {
    question: "How is Full Funnel different from buying channels separately?",
    answer:
      "You get one roadmap, shared KPIs, and the same team optimising the whole system, so Meta work doesn’t undermine Google and vice versa.",
  },
  {
    question: "What budget do we need?",
    answer:
      "We often recommend at least SEK 20k to 50k per month in ad spend when multiple platforms must work together, plus budget for landing pages and tracking. The exact level depends on industry and goals.",
  },
  {
    question: "How long until we see impact?",
    answer:
      "Structural fixes and tracking often show within 2 to 4 weeks. Stable scaling usually needs 8 to 12 weeks of continuous testing.",
  },
  {
    question: "Do we keep access to our ad accounts?",
    answer:
      "Yes. Transparency is core. You own the accounts; we work in them with clear documentation.",
  },
];

export function getFullFunnelHeroUi(locale: Locale): FullFunnelHeroUi {
  return locale === "en" ? heroEn : heroSv;
}

export function getFullFunnelWhyUi(locale: Locale): FullFunnelWhyUi {
  return locale === "en" ? whyEn : whySv;
}

export function getFullFunnelStagesUi(locale: Locale): FullFunnelStagesUi {
  return locale === "en" ? stagesEn : stagesSv;
}

export function getFullFunnelChannelsUi(locale: Locale): FullFunnelChannelsUi {
  return locale === "en" ? channelsEn : channelsSv;
}

export function getFullFunnelDeliverUi(locale: Locale): FullFunnelDeliverUi {
  return locale === "en" ? deliverEn : deliverSv;
}

export function getFullFunnelProcessUi(locale: Locale): FullFunnelProcessUi {
  return locale === "en" ? processEn : processSv;
}

export function getFullFunnelFaqItems(locale: Locale): FAQItem[] {
  return locale === "en" ? faqEn : faqSv;
}
