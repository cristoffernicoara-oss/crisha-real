import type { FAQItem } from "@/components/ui/FAQ";
import type { ProcessTimelineStep } from "@/components/sections/ServiceProcessTimeline";
import type { ServiceCrossSellItem } from "@/components/sections/ServiceCrossSell";
import type { Locale } from "@/lib/i18n/types";
import { ROUTES } from "@/lib/routes";

export const tiktokAdsProcessSteps: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Målgruppsanalys & innehållsstrategi",
    duration: "Dag 1-3",
    desc: "Vi analyserar din målgrupp på TikTok, studerar konkurrenternas innehåll och definierar hooks, format och budskap som resonerar med dina potentiella kunder.",
    deliverable: "Innehållsstrategi & creative brief",
  },
  {
    step: "02",
    title: "Creative-produktion",
    duration: "Dag 3-7",
    desc: "Vi producerar eller koordinerar skapandet av native TikTok-videos med stark hook, berättarstruktur och tydlig CTA. Minst 3-5 varianter per kampanj.",
    deliverable: "3-5 färdiga video-creatives",
  },
  {
    step: "03",
    title: "Pixel Setup & Lansering",
    duration: "Dag 7-8",
    desc: "TikTok Pixel konfigureras för exakt konverteringsspårning. Kampanjstruktur: Awareness, Consideration och Conversion, allt optimerat simultant.",
    deliverable: "Aktiva kampanjer live",
  },
  {
    step: "04",
    title: "Vinnare-identifiering & skalning",
    duration: "Löpande",
    desc: "Under de första 2 veckorna identifierar vi vinnande creatives. Dessa skalar vi aggressivt. Resten ersätts med nya testvarianter.",
    deliverable: "Veckorapport + optimeringsplan",
  },
];

export const tiktokAdsFaqs: FAQItem[] = [
  {
    question: "Fungerar TikTok Ads för alla branscher?",
    answer:
      "TikTok fungerar utmärkt för e-handel, mode, skönhet, mat & dryck, fitness och underhållning. Fungerar sämre för komplexa B2B-tjänster. Vi berättar ärligt om TikTok är rätt för dig innan vi börjar.",
  },
  {
    question: "Behöver jag producera video-innehåll själv?",
    answer:
      "Nej. Vi producerar UGC-videos, koordinerar creators eller anpassar ditt befintliga material. Du behöver inte ha en produktionsbyrå, vi hanterar allt.",
  },
  {
    question: "Vilken budget behöver jag för TikTok Ads?",
    answer:
      "Minimum 200 kr/dag tekniskt, men vi rekommenderar 5 000 kr/mån i annonsbudget. Det bästa kostnad/nytta-förhållandet uppstår vid 10 000-50 000 kr/mån tack vare TikToks låga CPM.",
  },
  {
    question: "Hur lång tid tar det att se resultat?",
    answer:
      "TikTok ger resultat snabbare än Meta och Google. Räckvidd och engagemang syns från dag 1. Konverteringsresultat stabiliseras efter 7-14 dagars inlärning.",
  },
  {
    question: "Vad är Spark Ads och varför är det viktigt?",
    answer:
      "Spark Ads låter dig promota befintliga TikTok-poster som betalda annonser med alla verkliga likes, kommentarer och shares intakta. Det ger autentiskt socialt bevis kombinerat med betald räckvidd. Vårt mest rekommenderade format.",
  },
  {
    question: "Kan TikTok Ads konkurrera med Meta Ads?",
    answer:
      "För yngre målgrupper (18-35) och visuella produkter kan TikTok Ads ge 3-4× mer räckvidd för samma budget. Vi rekommenderar ofta att kombinera båda: TikTok för awareness, Meta för konvertering.",
  },
  {
    question: "Hur hanterar ni kreativ utmattning?",
    answer:
      "Vi roterar creatives varannan vecka och testar alltid 3-5 nya varianter per kampanjcykel. TikTok kräver mer frekvent creative-rotation än Meta, och det är inbyggt i vår process.",
  },
];

export const tiktokAdsProcessStepsEn: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Audience & content strategy",
    duration: "Day 1–3",
    desc: "We analyse your TikTok audience, study competitors, and define hooks, formats, and messaging that resonate.",
    deliverable: "Content strategy & creative brief",
  },
  {
    step: "02",
    title: "Creative production",
    duration: "Day 3–7",
    desc: "We produce or coordinate native TikTok videos with a strong hook, story arc, and clear CTA, at least 3–5 variants per push.",
    deliverable: "3–5 finished video creatives",
  },
  {
    step: "03",
    title: "Pixel setup & launch",
    duration: "Day 7–8",
    desc: "TikTok Pixel configured for accurate conversion tracking. Campaign structure: Awareness, Consideration, and Conversion, optimised together.",
    deliverable: "Live active campaigns",
  },
  {
    step: "04",
    title: "Winner ID & scaling",
    duration: "Ongoing",
    desc: "In the first two weeks we find winning creatives, scale them, and replace the rest with new tests.",
    deliverable: "Weekly report + optimisation plan",
  },
];

export const tiktokAdsFaqsEn: FAQItem[] = [
  {
    question: "Do TikTok Ads work for every industry?",
    answer:
      "TikTok works great for ecommerce, fashion, beauty, food & drink, fitness, and entertainment. It’s weaker for complex B2B. We’ll tell you honestly if TikTok fits before we start.",
  },
  {
    question: "Do I need to produce video myself?",
    answer:
      "No. We produce UGC-style videos, coordinate creators, or adapt your existing assets. No in-house production team required.",
  },
  {
    question: "What budget do I need for TikTok Ads?",
    answer:
      "Technically ~SEK 200/day minimum, but we recommend at least SEK 5,000/month in ad spend. Best efficiency often appears around SEK 10,000–50,000/month thanks to TikTok’s low CPM.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Reach and engagement often show from day one. Conversion performance usually stabilises after 7–14 days of learning.",
  },
  {
    question: "What are Spark Ads and why do they matter?",
    answer:
      "Spark Ads promote existing TikTok posts as paid ads while keeping real likes, comments, and shares. That means authentic social proof with paid reach. Our most recommended format.",
  },
  {
    question: "Can TikTok compete with Meta Ads?",
    answer:
      "For younger audiences (18–35) and visual products, TikTok can deliver 3–4× more reach for the same budget. We often combine both platforms: TikTok for awareness, Meta for conversion.",
  },
  {
    question: "How do you handle creative fatigue?",
    answer:
      "We rotate creatives every other week and always test 3–5 new variants per cycle. TikTok needs faster rotation than Meta, and we build that into our process.",
  },
];

export function getTiktokAdsProcessSteps(locale: Locale): ProcessTimelineStep[] {
  return locale === "en" ? tiktokAdsProcessStepsEn : tiktokAdsProcessSteps;
}

export function getTiktokAdsFaqs(locale: Locale): FAQItem[] {
  return locale === "en" ? tiktokAdsFaqsEn : tiktokAdsFaqs;
}

const tiktokCrossSv: ServiceCrossSellItem[] = [
  { href: ROUTES.tjansterMetaAds, title: "Meta Ads", description: "Täck båda stora sociala plattformarna." },
  { href: ROUTES.tjansterGoogleAds, title: "Google Ads", description: "Fånga intentionen från trafiken TikTok skapar." },
  { href: ROUTES.tjansterWebbdesign, title: "Webbdesign", description: "Snabba landningssidor som omvandlar TikTok-trafik till försäljning." },
];

const tiktokCrossEn: ServiceCrossSellItem[] = [
  { href: ROUTES.tjansterMetaAds, title: "Meta Ads", description: "Cover both major social platforms." },
  { href: ROUTES.tjansterGoogleAds, title: "Google Ads", description: "Capture intent from the traffic TikTok creates." },
  { href: ROUTES.tjansterWebbdesign, title: "Web design", description: "Fast landing pages that turn TikTok traffic into sales." },
];

export function getTiktokAdsCrossSell(locale: Locale): ServiceCrossSellItem[] {
  return locale === "en" ? tiktokCrossEn : tiktokCrossSv;
}

export function getTiktokAdsPageCopy(locale: Locale) {
  if (locale === "en") {
    return {
      processTitleLine1: "From strategy to",
      processTitleAccent: " scale.",
      processSubtitle:
        "Analysis, production, pixel, and launch. Then we find winners and scale what works on TikTok.",
      faqHeadingLine1: "Common questions about",
      faqHeadingAccent: " TikTok Ads.",
      crossSellTitle: "Combine TikTok Ads with",
    };
  }
  return {
    processTitleLine1: "Från strategi till",
    processTitleAccent: " skalning.",
    processSubtitle:
      "Analys, produktion, pixel och lansering. Därefter hittar vi vinnare och skalar det som fungerar på TikTok.",
    faqHeadingLine1: "Vanliga frågor om",
    faqHeadingAccent: " TikTok Ads.",
    crossSellTitle: "Kombinera TikTok Ads med",
  };
}
