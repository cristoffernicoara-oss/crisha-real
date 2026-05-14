import type { Locale } from "@/lib/i18n/types";

export type WebCroFlowStep = { n: string; label: string; sub: string };
export type WebCroCard = {
  icon: "Target" | "Star" | "Zap" | "Smartphone" | "BarChart2" | "Shield";
  color: string;
  title: string;
  desc: string;
};

export type WebCroSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  flow: WebCroFlowStep[];
  cards: WebCroCard[];
};

const flowSv: WebCroFlowStep[] = [
  { n: "01", label: "Trafik", sub: "Ads & SEO" },
  { n: "02", label: "Landning", sub: "Hero + CTA" },
  { n: "03", label: "Intresse", sub: "Socialt bevis" },
  { n: "04", label: "Beslut", sub: "Erbjudande" },
  { n: "05", label: "Konversion", sub: "Köp/Lead" },
];

const flowEn: WebCroFlowStep[] = [
  { n: "01", label: "Traffic", sub: "Ads & SEO" },
  { n: "02", label: "Landing", sub: "Hero + CTA" },
  { n: "03", label: "Interest", sub: "Social proof" },
  { n: "04", label: "Decision", sub: "Offer" },
  { n: "05", label: "Conversion", sub: "Purchase / lead" },
];

const cardsSv: WebCroCard[] = [
  {
    icon: "Target",
    color: "#2563EB",
    title: "Strategiska CTA:er",
    desc: "Call-to-action-knappar placerade där köpintentionen är som högst, baserat på scrollbeteende och data.",
  },
  {
    icon: "Star",
    color: "#F59E0B",
    title: "Socialt bevis",
    desc: "Recensioner, fallstudier och kundlogotyper placerade strategiskt för att eliminera tveksamhet i beslutsögonblicket.",
  },
  {
    icon: "Zap",
    color: "#22C55E",
    title: "Blixtsnabb laddning",
    desc: "Varje sekunds fördröjning kostar 7% i konverteringar. Våra sajter laddar under 2 sekunder, jämnt.",
  },
  {
    icon: "Smartphone",
    color: "#EC4899",
    title: "Mobile-first UX",
    desc: "75% av besökarna kommer från mobilen. Vi designar för tummen, inte för musen.",
  },
  {
    icon: "BarChart2",
    color: "#8B5CF6",
    title: "A/B-testning ready",
    desc: "Alla våra webbplatser är byggda med testning i åtanke. Vi konfigurerar tracking för kontinuerlig optimering.",
  },
  {
    icon: "Shield",
    color: "#0EA5E9",
    title: "Förtroendessignaler",
    desc: "SSL, säkerhetsbadgar, tydlig integritetspolicy och kontaktinformation minskar friktionen dramatiskt.",
  },
];

const cardsEn: WebCroCard[] = [
  {
    icon: "Target",
    color: "#2563EB",
    title: "Strategic CTAs",
    desc: "Buttons placed where intent peaks, guided by scroll behaviour and data.",
  },
  {
    icon: "Star",
    color: "#F59E0B",
    title: "Social proof",
    desc: "Reviews, case studies, and logos where doubt usually appears.",
  },
  {
    icon: "Zap",
    color: "#22C55E",
    title: "Fast load times",
    desc: "Every second of delay costs ~7% in conversions. Our sites load in under 2 seconds.",
  },
  {
    icon: "Smartphone",
    color: "#EC4899",
    title: "Mobile-first UX",
    desc: "Most visitors are on phones; we design for thumbs, not mice.",
  },
  {
    icon: "BarChart2",
    color: "#8B5CF6",
    title: "A/B-test ready",
    desc: "Built with experimentation in mind with tracking configured for continuous improvement.",
  },
  {
    icon: "Shield",
    color: "#0EA5E9",
    title: "Trust signals",
    desc: "SSL, security cues, clear policies, and contact paths that reduce friction.",
  },
];

const sv: WebCroSectionUi = {
  label: "KONVERTERINGSOPTIMERING",
  h2a: "Inte bara en sajt.",
  h2b: " En konverteringsmaskin.",
  intro: "Varje element på din webbplats är strategiskt placerat för att guida besökaren mot en handling.",
  flow: flowSv,
  cards: cardsSv,
};

const en: WebCroSectionUi = {
  label: "CONVERSION OPTIMISATION",
  h2a: "Not just a website.",
  h2b: " A conversion engine.",
  intro: "Every element is placed to move visitors toward one clear action.",
  flow: flowEn,
  cards: cardsEn,
};

export function getWebDesignCroUi(locale: Locale): WebCroSectionUi {
  return locale === "en" ? en : sv;
}
