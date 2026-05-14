import type { Locale } from "@/lib/i18n/types";

export type WebPortfolioFilterId = "all" | "landing" | "presentation" | "ecommerce";

export type WebPortfolioProjectUi = {
  id: number;
  name: string;
  categoryId: Exclude<WebPortfolioFilterId, "all">;
  categoryLabel: string;
  platform: string;
  color: string;
  emoji: string;
  metrics: string[];
  tags: string[];
};

export type WebPortfolioSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  statsLine: string[];
  intro: string;
  filters: { id: WebPortfolioFilterId; label: string }[];
  projects: WebPortfolioProjectUi[];
};

const sv: WebPortfolioSectionUi = {
  label: "VÅRA PROJEKT",
  h2a: "Webbplatser byggda",
  h2b: " av Crisha.",
  statsLine: ["15+ projekt", "98% nöjda", "7+ år erfarenhet"],
  intro: "Varje projekt är unikt, designat och utvecklat från grunden för att möta specifika affärsmål.",
  filters: [
    { id: "all", label: "Alla" },
    { id: "landing", label: "Landningssida" },
    { id: "presentation", label: "Presentationssajt" },
    { id: "ecommerce", label: "E-handel" },
  ],
  projects: [
    {
      id: 1,
      name: "Casa Nostra",
      categoryId: "presentation",
      categoryLabel: "Presentationssajt",
      platform: "WordPress",
      color: "#2563EB",
      emoji: "🍕",
      metrics: ["+190% målinteraktion", "1,6 s laddningstid", "PageSpeed 96"],
      tags: ["WordPress", "Restaurang", "Meny"],
    },
    {
      id: 2,
      name: "DentalMed Klinik",
      categoryId: "presentation",
      categoryLabel: "Presentationssajt",
      platform: "Webflow",
      color: "#0EA5E9",
      emoji: "🦷",
      metrics: ["+240% fler leads", "2,1s laddningstid", "PageSpeed 94"],
      tags: ["Webflow", "Medicin", "Leads"],
    },
    {
      id: 3,
      name: "Craft Brewers Conference",
      categoryId: "ecommerce",
      categoryLabel: "E-handel",
      platform: "Shopify",
      color: "#EC4899",
      emoji: "🍺",
      metrics: ["+641% fler beställningar", "1,8s laddningstid", "PageSpeed 91"],
      tags: ["Shopify", "E-handel", "Mat & Dryck"],
    },
    {
      id: 4,
      name: "ImobPrime",
      categoryId: "presentation",
      categoryLabel: "Presentationssajt",
      platform: "Next.js",
      color: "#8B5CF6",
      emoji: "🏠",
      metrics: ["+28% stängningsgrad", "1,6s laddningstid", "PageSpeed 96"],
      tags: ["Next.js", "Fastigheter", "Leads"],
    },
    {
      id: 5,
      name: "Sweet Bakery",
      categoryId: "ecommerce",
      categoryLabel: "E-handel",
      platform: "Shopify",
      color: "#F59E0B",
      emoji: "🎂",
      metrics: ["ROAS 4,2× på ads", "1,9s laddningstid", "PageSpeed 92"],
      tags: ["Shopify", "Mat", "E-handel"],
    },
    {
      id: 6,
      name: "Atelier Handmade",
      categoryId: "ecommerce",
      categoryLabel: "E-handel",
      platform: "Webflow",
      color: "#22C55E",
      emoji: "✂️",
      metrics: ["60% trafik från TikTok", "1,7s laddningstid", "PageSpeed 93"],
      tags: ["Webflow", "Mode", "E-handel"],
    },
  ],
};

const en: WebPortfolioSectionUi = {
  label: "OUR WORK",
  h2a: "Sites built",
  h2b: " by Crisha.",
  statsLine: ["15+ projects", "98% happy clients", "7+ years experience"],
  intro: "Every project is bespoke, designed and built around a specific business goal.",
  filters: [
    { id: "all", label: "All" },
    { id: "landing", label: "Landing page" },
    { id: "presentation", label: "Marketing site" },
    { id: "ecommerce", label: "Ecommerce" },
  ],
  projects: [
    {
      id: 1,
      name: "Casa Nostra",
      categoryId: "presentation",
      categoryLabel: "Marketing site",
      platform: "WordPress",
      color: "#2563EB",
      emoji: "🍕",
      metrics: ["+190% goal actions", "1.6s load", "PageSpeed 96"],
      tags: ["WordPress", "Restaurant", "Menu"],
    },
    {
      id: 2,
      name: "DentalMed Klinik",
      categoryId: "presentation",
      categoryLabel: "Marketing site",
      platform: "Webflow",
      color: "#0EA5E9",
      emoji: "🦷",
      metrics: ["+240% more leads", "2.1s load", "PageSpeed 94"],
      tags: ["Webflow", "Medical", "Leads"],
    },
    {
      id: 3,
      name: "Craft Brewers Conference",
      categoryId: "ecommerce",
      categoryLabel: "Ecommerce",
      platform: "Shopify",
      color: "#EC4899",
      emoji: "🍺",
      metrics: ["+641% more orders", "1.8s load", "PageSpeed 91"],
      tags: ["Shopify", "Ecommerce", "F&B"],
    },
    {
      id: 4,
      name: "ImobPrime",
      categoryId: "presentation",
      categoryLabel: "Marketing site",
      platform: "Next.js",
      color: "#8B5CF6",
      emoji: "🏠",
      metrics: ["+28% close rate", "1.6s load", "PageSpeed 96"],
      tags: ["Next.js", "Real estate", "Leads"],
    },
    {
      id: 5,
      name: "Sweet Bakery",
      categoryId: "ecommerce",
      categoryLabel: "Ecommerce",
      platform: "Shopify",
      color: "#F59E0B",
      emoji: "🎂",
      metrics: ["4.2× ROAS on ads", "1.9s load", "PageSpeed 92"],
      tags: ["Shopify", "Food", "Ecommerce"],
    },
    {
      id: 6,
      name: "Atelier Handmade",
      categoryId: "ecommerce",
      categoryLabel: "Ecommerce",
      platform: "Webflow",
      color: "#22C55E",
      emoji: "✂️",
      metrics: ["60% traffic from TikTok", "1.7s load", "PageSpeed 93"],
      tags: ["Webflow", "Fashion", "Ecommerce"],
    },
  ],
};

export function getWebDesignPortfolioUi(locale: Locale): WebPortfolioSectionUi {
  return locale === "en" ? en : sv;
}
