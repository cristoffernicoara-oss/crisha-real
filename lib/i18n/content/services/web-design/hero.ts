import type { Locale } from "@/lib/i18n/types";

export type WebDesignHeroUi = {
  pill: string;
  h1a: string;
  h1b: string;
  h1c: string;
  lead: string;
  stats: { v: string; l: string }[];
  floatSpeed: string;
  floatConv: string;
  ctaProjects: string;
  ctaQuote: string;
};

const sv: WebDesignHeroUi = {
  pill: "🇸🇪 Webbdesign Sverige",
  h1a: "Webbdesign Sverige:",
  h1b: "Skräddarsydda sajter",
  h1c: "som konverterar och säljer.",
  lead:
    "Vi bygger webbplatser för svenska företag som inte bara imponerar utan även driver trafik, genererar leads och ökar försäljningen. Varje pixel har ett syfte.",
  stats: [
    { v: "15+", l: "Projekt levererade" },
    { v: "98%", l: "Nöjda kunder" },
    { v: "<2s", l: "Laddningstid" },
    { v: "95+", l: "PageSpeed poäng" },
  ],
  floatSpeed: "⚡ PageSpeed 97/100",
  floatConv: "+287% konvertering",
  ctaProjects: "Se våra projekt →",
  ctaQuote: "Begär gratis offert ↓",
};

const en: WebDesignHeroUi = {
  pill: "🌍 Web design · Sweden",
  h1a: "Web design:",
  h1b: "Tailored sites",
  h1c: "that convert and sell.",
  lead:
    "We build sites that look great and drive traffic, leads, and sales. Every pixel has a job.",
  stats: [
    { v: "15+", l: "Projects shipped" },
    { v: "98%", l: "Happy clients" },
    { v: "<2s", l: "Load time" },
    { v: "95+", l: "PageSpeed score" },
  ],
  floatSpeed: "⚡ PageSpeed 97/100",
  floatConv: "+287% conversion",
  ctaProjects: "See our work →",
  ctaQuote: "Request a free quote ↓",
};

export function getWebDesignHeroUi(locale: Locale): WebDesignHeroUi {
  return locale === "en" ? en : sv;
}
