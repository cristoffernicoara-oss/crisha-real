import type { Locale } from "@/lib/i18n/types";

export type WebPerfItem = { metric: string; label: string; desc: string; color: string };
export type WebPerfBar = { label: string; score: number; color: string };

export type WebPerformanceSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  cardTitle: string;
  cardFoot: string;
  items: WebPerfItem[];
  bars: WebPerfBar[];
};

const itemsSv: WebPerfItem[] = [
  {
    metric: "< 2s",
    label: "Genomsnittlig laddningstid",
    desc: "Alla våra webbplatser laddar under 2 sekunder på mobilnätet 4G.",
    color: "#22C55E",
  },
  {
    metric: "95+",
    label: "PageSpeed Insights poäng",
    desc: "Optimerade bilder, minimal CSS/JS och effektiv caching.",
    color: "#2563EB",
  },
  {
    metric: "100%",
    label: "Mobiloptimerade",
    desc: "Designade mobile-first. Fungerar perfekt på alla skärmstorlekar.",
    color: "#0EA5E9",
  },
  {
    metric: "A+",
    label: "Säkerhetsbetyg",
    desc: "HTTPS, säkra headers och regelbundna uppdateringar ingår alltid.",
    color: "#8B5CF6",
  },
];

const bars: WebPerfBar[] = [
  { label: "First Contentful Paint", score: 95, color: "#22C55E" },
  { label: "Speed Index", score: 92, color: "#22C55E" },
  { label: "Time to Interactive", score: 88, color: "#22C55E" },
  { label: "Cumulative Layout Shift", score: 100, color: "#22C55E" },
];

const sv: WebPerformanceSectionUi = {
  label: "TEKNISK PRESTANDA",
  h2a: "Webbplatser som",
  h2b: " presterar.",
  intro:
    "En sekunds extra laddningstid kostar dig 7% i konverteringar. Vi bygger webbplatser som laddar blixtsnabbt på alla enheter som grundkrav, inte som något extra.",
  cardTitle: "PageSpeed Insights",
  cardFoot: "Genomsnittliga poäng från våra levererade projekt",
  items: itemsSv,
  bars,
};

const itemsEn: WebPerfItem[] = [
  {
    metric: "< 2s",
    label: "Average load time",
    desc: "Our sites load in under 2 seconds on 4G mobile.",
    color: "#22C55E",
  },
  {
    metric: "95+",
    label: "PageSpeed Insights score",
    desc: "Optimised images, lean CSS/JS, and solid caching.",
    color: "#2563EB",
  },
  {
    metric: "100%",
    label: "Mobile-optimised",
    desc: "Mobile-first layouts that work on every screen size.",
    color: "#0EA5E9",
  },
  {
    metric: "A+",
    label: "Security posture",
    desc: "HTTPS, secure headers, and ongoing maintenance as standard.",
    color: "#8B5CF6",
  },
];

const en: WebPerformanceSectionUi = {
  label: "TECHNICAL PERFORMANCE",
  h2a: "Sites that",
  h2b: " perform.",
  intro:
    "Each extra second of load time can cost ~7% in conversions. We treat speed as a requirement, not a nice-to-have.",
  cardTitle: "PageSpeed Insights",
  cardFoot: "Typical scores across delivered projects",
  items: itemsEn,
  bars,
};

export function getWebDesignPerformanceUi(locale: Locale): WebPerformanceSectionUi {
  return locale === "en" ? en : sv;
}
