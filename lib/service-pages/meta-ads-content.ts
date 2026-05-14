import type { FAQItem } from "@/components/ui/FAQ";
import type { ProcessTimelineStep } from "@/components/sections/ServiceProcessTimeline";
import type { Locale } from "@/lib/i18n/types";
import type { ServiceCrossSellItem } from "@/components/sections/ServiceCrossSell";
import { ROUTES } from "@/lib/routes";

export const metaAdsProcessSteps: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Gratis kontorevision",
    duration: "Dag 1-2",
    desc: "Vi analyserar ditt befintliga Meta Ads-konto, identifierar budgetförluster och outnyttjade möjligheter och presenterar en konkret förbättringsplan, helt gratis.",
    deliverable: "Revisionsrapport & handlingsplan",
  },
  {
    step: "02",
    title: "Strategi & Struktur",
    duration: "Dag 3-5",
    desc: "Vi bygger kampanjstrukturen: TOF/MOF/BOF, målgrupper, creative-riktlinjer och budgetfördelning optimerad för dina affärsmål.",
    deliverable: "Kampanjstrategi dokument",
  },
  {
    step: "03",
    title: "Creative-produktion & Lansering",
    duration: "Dag 5-7",
    desc: "Vi skapar eller anpassar annonskreatives, konfigurerar pixel och CAPI, och lanserar kampanjerna. Första data syns inom 72 timmar.",
    deliverable: "Aktiva kampanjer live",
  },
  {
    step: "04",
    title: "Optimering & Skalning",
    duration: "Löpande",
    desc: "Daglig övervakning, veckotestning av creatives, budoptimering och skalning av vinnande annonser. ROAS ökar varje månad.",
    deliverable: "Veckorapport varje måndag",
  },
];

export const metaAdsFaqs: FAQItem[] = [
  {
    question: "Vilken budget behöver jag för Meta Ads i Sverige?",
    answer:
      "Vi rekommenderar minimum 5 000 kr/mån i annonsbudget. Under detta belopp har Metas algoritm inte tillräckligt med data. Optimalt är 10 000-100 000 kr/mån. Till detta tillkommer vår hanteringsavgift från 3 000 kr/mån.",
  },
  {
    question: "Hur snabbt ser jag resultat med Meta Ads?",
    answer:
      "Första data syns inom 48-72h. Inlärningsfasen tar 7-14 dagar. Signifikanta resultat, till exempel tydlig ROAS-ökning och lägre CPA, syns vanligtvis under månad 2-3.",
  },
  {
    question: "Skapar ni annonskreatives också?",
    answer:
      "Ja. Vi producerar statiska annonser, karuseller och video-hooks. Vi testar alltid flera varianter simultant för att hitta den bäst presterande kreativen. Creative-produktion ingår i hanteringsavgiften.",
  },
  {
    question: "Vad är skillnaden mellan Facebook och Instagram Ads?",
    answer:
      "Facebook och Instagram är samma annonsplattform (Meta) men med olika placeringar och publik. Facebook Feed är starkast för äldre målgrupper och B2B. Instagram Reels och Stories presterar bättre för 18-35 år och visuella produkter. Vi optimerar per placering.",
  },
  {
    question: "Hur mäter ni framgång?",
    answer:
      "Primärt mått är ROAS (Return on Ad Spend). Vi spårar även CPA, CTR, CPM och konverteringsgrad. Allt presenteras i veckorapporten varje måndag.",
  },
  {
    question: "Behöver jag en ny webbplats för att börja med Meta Ads?",
    answer:
      "Inte nödvändigtvis, men din landningssida påverkar ROAS direkt. En långsam eller dåligt optimerad sida kan halvera din ROAS. Vi gör alltid en landningssida-audit och ger rekommendationer innan vi lanserar.",
  },
  {
    question: "Vad händer med mitt konto om vi slutar samarbeta?",
    answer:
      "Ditt annons-konto är alltid ditt. Vi arbetar i ditt konto, inte i ett eget. Om du väljer att avsluta samarbetet behåller du alla kampanjer, data och optimeringar vi gjort. Ingen lock-in.",
  },
];

export const metaAdsProcessStepsEn: ProcessTimelineStep[] = [
  {
    step: "01",
    title: "Free account audit",
    duration: "Day 1–2",
    desc: "We analyse your Meta Ads account, find budget waste and missed opportunities, and deliver a concrete improvement plan free of charge.",
    deliverable: "Audit report & action plan",
  },
  {
    step: "02",
    title: "Strategy & structure",
    duration: "Day 3–5",
    desc: "We build campaign structure: TOF/MOF/BOF, audiences, creative guidelines, and budget split aligned with your goals.",
    deliverable: "Campaign strategy document",
  },
  {
    step: "03",
    title: "Creative production & launch",
    duration: "Day 5–7",
    desc: "We create or adapt creatives, configure pixel and CAPI, and launch campaigns. First data usually within 72 hours.",
    deliverable: "Live active campaigns",
  },
  {
    step: "04",
    title: "Optimisation & scaling",
    duration: "Ongoing",
    desc: "Daily monitoring, weekly creative tests, bid optimisation, and scaling winners. ROAS should improve month over month.",
    deliverable: "Weekly report every Monday",
  },
];

export const metaAdsFaqsEn: FAQItem[] = [
  {
    question: "What budget do I need for Meta Ads?",
    answer:
      "We recommend at least SEK 5,000/month in ad spend. Below that the algorithm lacks data. Optimal range is often SEK 10,000–100,000/month plus our management fee from SEK 8,000/month.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "First data appears in 48–72h. Learning typically takes 7–14 days. Meaningful ROAS improvements and lower CPA usually show in months 2–3.",
  },
  {
    question: "Do you produce ad creatives?",
    answer:
      "Yes. We produce static ads, carousels, and video hooks, always testing multiple variants to find winners. Creative production is included in the management fee.",
  },
  {
    question: "What’s the difference between Facebook and Instagram Ads?",
    answer:
      "Same platform (Meta) but different placements and audiences. Facebook Feed works well for older demos and B2B. Instagram Reels and Stories often win for 18–35 and visual products. We optimise per placement.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Primary metric is ROAS. We also track CPA, CTR, CPM, and conversion rate and summarise everything in the weekly Monday report.",
  },
  {
    question: "Do I need a new website to start Meta Ads?",
    answer:
      "Not always, but landing pages directly affect ROAS. Slow or weak pages can halve ROAS. We always audit landing pages before scaling.",
  },
  {
    question: "What happens to my account if we stop working together?",
    answer:
      "Your ad account stays yours. We work in your account, not ours. If you leave, you keep campaigns, data, and optimisations with no lock-in.",
  },
];

export function getMetaAdsProcessSteps(locale: Locale): ProcessTimelineStep[] {
  return locale === "en" ? metaAdsProcessStepsEn : metaAdsProcessSteps;
}

export function getMetaAdsFaqs(locale: Locale): FAQItem[] {
  return locale === "en" ? metaAdsFaqsEn : metaAdsFaqs;
}

const metaCrossSv: ServiceCrossSellItem[] = [
  {
    href: ROUTES.tjansterGoogleAds,
    title: "Google Ads",
    description: "Fånga köpintention från Google samtidigt.",
  },
  {
    href: ROUTES.tjansterTiktokAds,
    title: "TikTok Ads",
    description: "Öka räckvidden med en plattform i stark tillväxt.",
  },
  {
    href: ROUTES.tjansterWebbdesign,
    title: "Webbdesign",
    description: "En optimerad landningssida fördubblar din ROAS.",
  },
];

const metaCrossEn: ServiceCrossSellItem[] = [
  {
    href: ROUTES.tjansterGoogleAds,
    title: "Google Ads",
    description: "Capture high-intent Google demand at the same time.",
  },
  {
    href: ROUTES.tjansterTiktokAds,
    title: "TikTok Ads",
    description: "Grow reach on the fastest-scaling social channel.",
  },
  {
    href: ROUTES.tjansterWebbdesign,
    title: "Web design",
    description: "A tuned landing page can double your ROAS.",
  },
];

export function getMetaAdsCrossSell(locale: Locale): ServiceCrossSellItem[] {
  return locale === "en" ? metaCrossEn : metaCrossSv;
}

export function getMetaAdsPageCopy(locale: Locale) {
  if (locale === "en") {
    return {
      processTitleLine1: "From audit to",
      processTitleAccent: " scaling.",
      processSubtitle:
        "Clear phases: first we understand the account, then we build structure, launch, and optimise until ROAS grows.",
      faqHeadingLine1: "Everything about",
      faqHeadingAccent: " Meta Ads.",
      crossSellTitle: "Combine Meta Ads with",
    };
  }
  return {
    processTitleLine1: "Från revision till",
    processTitleAccent: " skalning.",
    processSubtitle:
      "Tydliga faser: först förstår vi kontot, sedan bygger vi struktur, lanserar och optimerar löpande tills ROAS växer.",
    faqHeadingLine1: "Allt om",
    faqHeadingAccent: " Meta Ads.",
    crossSellTitle: "Kombinera Meta Ads med",
  };
}
