import type { FAQItem } from "@/components/ui/FAQ";
import type { ProcessTimelineStep } from "@/components/sections/ServiceProcessTimeline";
import type { Locale } from "@/lib/i18n/types";
import type { ServiceCrossSellItem } from "@/components/sections/ServiceCrossSell";
import { ROUTES } from "@/lib/routes";

export const googleAdsProcessSteps: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Gratis kontorevision",
    duration: "Dag 1-2",
    desc: "Vi granskar ditt Google Ads-konto, sökordsstrategi och Quality Score, identifierar slöseri och snabba vinster och levererar en tydlig handlingsplan utan kostnad.",
    deliverable: "Audit & prioriterad åtgärdslista",
  },
  {
    step: "02",
    title: "Struktur & sökordsstrategi",
    duration: "Dag 3-7",
    desc: "Vi bygger eller omstrukturerar kampanjer per intention, negativa sökord och annonstexter som matchar sökfrågor. Shopping och Performance Max konfigureras efter behov.",
    deliverable: "Kampanjstruktur & sökordsplan",
  },
  {
    step: "03",
    title: "Lansering & spårning",
    duration: "Dag 7-10",
    desc: "Konverteringsspårning, GA4-länk och förbättrade annonser. Lansering med kontrollerad budget och tydliga experiment för att samla data snabbt.",
    deliverable: "Live kampanjer + spårning",
  },
  {
    step: "04",
    title: "Optimering & skalning",
    duration: "Löpande",
    desc: "Veckovis bud- och sökordsoptimering, annonstester och Quality Score-arbete. Vi skalar det som levererar ROAS och pausar det som inte gör det.",
    deliverable: "Veckorapport & optimeringslogg",
  },
];

export const googleAdsFaqs: FAQItem[] = [
  {
    question: "Vilken budget behöver jag för Google Ads i Sverige?",
    answer:
      "Vi rekommenderar minst 5 000–8 000 kr/mån i annonsbudget för att algoritmen ska få tillräcklig data. Starka resultat uppstår ofta vid 15 000–80 000 kr/mån beroende på bransch. Hanteringsavgift tillkommer.",
  },
  {
    question: "Hur snabbt ser jag resultat?",
    answer:
      "Search kan ge första konverteringar inom dagar om spårning och landningssidor är på plats. Full optimering och stabil CPA/ROAS tar ofta 4–8 veckor beroende på volym och konkurrens.",
  },
  {
    question: "Vad är skillnaden mellan Search och Performance Max?",
    answer:
      "Search visar textannonser vid aktiva sökningar, där köpintentionen är högst. Performance Max använder AI över flera Google-ytor och kräver kvalitativa feeds och signaler. Vi väljer eller kombinerar utifrån dina mål.",
  },
  {
    question: "Varför är Quality Score viktigt?",
    answer:
      "Högre Quality Score ger lägre CPC för samma position. Vi jobbar med annonsrelevans, förväntad CTR och landningssida. Därför har våra kunder i snitt 7,2 i QS mot branschsnitt runt 4.",
  },
  {
    question: "Behöver jag en ny landningssida?",
    answer:
      "Inte alltid, men en långsam eller irrelevant sida höjer CPC och sänker konverteringar. Vi granskar alltid landningssidor och rekommenderar ändringar innan vi skalar budget.",
  },
  {
    question: "Äger jag mitt Google Ads-konto?",
    answer:
      "Ja. Kontot är ditt; vi arbetar som administratör eller partner. Vid avslut behåller du alla kampanjer, historik och optimeringar.",
  },
  {
    question: "Passar Shopping för min e-handel?",
    answer:
      "Shopping och Performance Max med produktflöde är ofta kärnan för e-handel på Google. Vi optimerar feed, titlar, bilder och budstrategi för maximal ROAS.",
  },
];

export const googleAdsProcessStepsEn: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Free account audit",
    duration: "Day 1–2",
    desc: "We review your Google Ads account, keyword strategy, and Quality Score, spot waste and quick wins, and deliver a clear action plan at no cost.",
    deliverable: "Audit & prioritised action list",
  },
  {
    step: "02",
    title: "Structure & keyword strategy",
    duration: "Day 3–7",
    desc: "We build or restructure campaigns by intent, add negative keywords, and write ads that match search queries. Shopping and Performance Max configured as needed.",
    deliverable: "Campaign structure & keyword plan",
  },
  {
    step: "03",
    title: "Launch & tracking",
    duration: "Day 7–10",
    desc: "Conversion tracking, GA4 linking, and stronger ads. Launch with controlled budget and clear tests to gather data fast.",
    deliverable: "Live campaigns + tracking",
  },
  {
    step: "04",
    title: "Optimisation & scaling",
    duration: "Ongoing",
    desc: "Weekly bid and keyword optimisation, ad tests, and Quality Score work. We scale what delivers ROAS and pause what doesn’t.",
    deliverable: "Weekly report & optimisation log",
  },
];

export const googleAdsFaqsEn: FAQItem[] = [
  {
    question: "What budget do I need for Google Ads?",
    answer:
      "We usually recommend at least SEK 5,000–8,000/month in ad spend so the algorithm gets enough data. Strong performance often appears around SEK 15,000–80,000/month depending on the vertical. Management fee is separate.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Search can produce first conversions within days if tracking and landing pages are in place. Full optimisation and stable CPA/ROAS often take 4–8 weeks depending on volume and competition.",
  },
  {
    question: "What’s the difference between Search and Performance Max?",
    answer:
      "Search shows text ads when people are actively searching, which is peak purchase intent. Performance Max uses AI across Google surfaces and needs quality feeds and signals. We pick or combine based on your goals.",
  },
  {
    question: "Why does Quality Score matter?",
    answer:
      "Higher Quality Score means lower CPC for the same position. We improve ad relevance, expected CTR, and landing page experience. That’s why our clients average QS 7.2 vs. industry ~4.",
  },
  {
    question: "Do I need a new landing page?",
    answer:
      "Not always, but a slow or irrelevant page raises CPC and hurts conversions. We always review landing pages and recommend fixes before scaling budget.",
  },
  {
    question: "Do I own my Google Ads account?",
    answer:
      "Yes. The account is yours; we work as admin or partner. If we stop working together, you keep all campaigns, history, and optimisations.",
  },
  {
    question: "Is Shopping right for my ecommerce store?",
    answer:
      "Shopping and Performance Max with a product feed are often core for ecommerce on Google. We optimise the feed, titles, images, and bidding for maximum ROAS.",
  },
];

export function getGoogleAdsProcessSteps(locale: Locale): ProcessTimelineStep[] {
  return locale === "en" ? googleAdsProcessStepsEn : googleAdsProcessSteps;
}

export function getGoogleAdsFaqs(locale: Locale): FAQItem[] {
  return locale === "en" ? googleAdsFaqsEn : googleAdsFaqs;
}

const crossSellSv: ServiceCrossSellItem[] = [
  {
    href: ROUTES.tjansterMetaAds,
    title: "Meta Ads",
    description: "Täck hela den online försäljningstratten.",
  },
  {
    href: ROUTES.tjansterTiktokAds,
    title: "TikTok Ads",
    description: "Bygg kännedom för att minska kostnaden på Google.",
  },
  {
    href: ROUTES.tjansterWebbdesign,
    title: "Webbdesign",
    description: "Optimerade landningssidor ökar Quality Score och minskar CPC.",
  },
];

const crossSellEn: ServiceCrossSellItem[] = [
  {
    href: ROUTES.tjansterMetaAds,
    title: "Meta Ads",
    description: "Cover the full online sales journey.",
  },
  {
    href: ROUTES.tjansterTiktokAds,
    title: "TikTok Ads",
    description: "Build awareness to bring down Google costs.",
  },
  {
    href: ROUTES.tjansterWebbdesign,
    title: "Web design",
    description: "Optimised landing pages lift Quality Score and lower CPC.",
  },
];

export function getGoogleAdsCrossSell(locale: Locale): ServiceCrossSellItem[] {
  return locale === "en" ? crossSellEn : crossSellSv;
}

export function getGoogleAdsPageCopy(locale: Locale) {
  if (locale === "en") {
    return {
      processTitleLine1: "From audit to",
      processTitleAccent: " profitable growth.",
      processSubtitle:
        "Audit first, then structure, tracking, and continuous optimisation. You see progress every week.",
      faqHeadingLine1: "Questions about",
      faqHeadingAccent: " Google Ads.",
      crossSellTitle: "Combine Google Ads with",
    };
  }
  return {
    processTitleLine1: "Från audit till",
    processTitleAccent: " lönsam tillväxt.",
    processSubtitle:
      "Revision först, sedan struktur, spårning och kontinuerlig optimering. Du ser framsteg varje vecka.",
    faqHeadingLine1: "Frågor om",
    faqHeadingAccent: " Google Ads.",
    crossSellTitle: "Kombinera Google Ads med",
  };
}
