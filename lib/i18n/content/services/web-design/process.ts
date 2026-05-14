import type { Locale } from "@/lib/i18n/types";

export type WebProcessStepUi = {
  step: string;
  title: string;
  duration: string;
  desc: string;
  deliverable: string;
};

export type WebProcessDeliveryRow = { type: string; platform: string; time: string };

export type WebProcessSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  sidebarTitle: string;
  includedTitle: string;
  quoteCta: string;
  steps: WebProcessStepUi[];
  deliveryRows: WebProcessDeliveryRow[];
  included: string[];
};

const sv: WebProcessSectionUi = {
  label: "VÅR PROCESS",
  h2a: "Från idé till",
  h2b: " lansering.",
  intro: "En tydlig, transparent process där du alltid vet vad som händer och när du får din webbplats.",
  sidebarTitle: "Leveranstider",
  includedTitle: "Vad som alltid ingår:",
  quoteCta: "Begär offert →",
  steps: [
    {
      step: "01",
      title: "Discovery & Målsättning",
      duration: "Dag 1-2",
      desc: "Vi börjar med att förstå ditt företag på djupet: målgrupp, konkurrenter, affärsmål och KPI:er för webbplatsen. Vi definierar tillsammans vad framgång ser ut.",
      deliverable: "Projektbrief & sitemap",
    },
    {
      step: "02",
      title: "Design i Figma",
      duration: "Dag 3-7",
      desc: "Vi designar kompletta mockups för alla sidor för både desktop och mobil. Du ser exakt hur din webbplats kommer se ut innan vi skriver ett enda kodrad.",
      deliverable: "Figma-design för godkännande",
    },
    {
      step: "03",
      title: "Utveckling",
      duration: "Dag 8-14",
      desc: "Vi kodar din webbplats med vald plattform. Optimerar för hastighet, SEO och konvertering. Du får en preview-länk för att följa framstegen.",
      deliverable: "Fungerande webbplats på staging",
    },
    {
      step: "04",
      title: "Testning & Justeringar",
      duration: "Dag 15-17",
      desc: "Vi testar på alla enheter och webbläsare. Konfigurerar GA4, Search Console och heatmaps. Du får 2 omgångar justeringar utan extra kostnad.",
      deliverable: "QA-rapport & justeringar klara",
    },
    {
      step: "05",
      title: "Lansering & Uppföljning",
      duration: "Dag 18-30",
      desc: "Vi publicerar webbplatsen, skickar in till Google Search Console och övervakar aktivt de första 30 dagarna. Gratis support för bugfixar och smärre ändringar.",
      deliverable: "Live webbplats + 30 dagars support",
    },
  ],
  deliveryRows: [
    { type: "Landningssida", platform: "Next.js eller Webflow", time: "5-7 dagar" },
    { type: "Presentationssajt", platform: "Webflow eller Next.js", time: "2-3 veckor" },
    { type: "E-handelslösning", platform: "Shopify eller WooCommerce", time: "3-5 veckor" },
  ],
  included: [
    "✓ Responsiv design (mobil + desktop)",
    "✓ SEO-grundoptimering",
    "✓ Google Analytics 4",
    "✓ SSL & säkerhetsinställningar",
    "✓ 30 dagars support efter lansering",
    "✓ 2 revisionsomgångar ingår",
  ],
};

const en: WebProcessSectionUi = {
  label: "OUR PROCESS",
  h2a: "From idea to",
  h2b: " launch.",
  intro: "A clear process where you always know what happens next and when the site ships.",
  sidebarTitle: "Typical timelines",
  includedTitle: "Always included:",
  quoteCta: "Request a quote →",
  steps: [
    {
      step: "01",
      title: "Discovery & goals",
      duration: "Day 1–2",
      desc: "We map your business, audience, competitors, and KPIs and align on what success looks like.",
      deliverable: "Project brief & sitemap",
    },
    {
      step: "02",
      title: "Figma design",
      duration: "Day 3–7",
      desc: "Full mockups for every page on desktop and mobile before a single line of production code.",
      deliverable: "Figma for approval",
    },
    {
      step: "03",
      title: "Development",
      duration: "Day 8–14",
      desc: "We build on the chosen stack, optimising for speed, SEO, and conversion with a staging preview.",
      deliverable: "Working site on staging",
    },
    {
      step: "04",
      title: "QA & revisions",
      duration: "Day 15–17",
      desc: "Cross-device and browser testing. GA4, Search Console, heatmaps. Two revision rounds included.",
      deliverable: "QA report & fixes done",
    },
    {
      step: "05",
      title: "Launch & follow-up",
      duration: "Day 18–30",
      desc: "Go-live, Search Console, and active monitoring for the first 30 days, with free support for bugs and small tweaks.",
      deliverable: "Live site + 30-day support",
    },
  ],
  deliveryRows: [
    { type: "Landing page", platform: "Next.js or Webflow", time: "5–7 days" },
    { type: "Marketing site", platform: "Webflow or Next.js", time: "2–3 weeks" },
    { type: "Ecommerce", platform: "Shopify or WooCommerce", time: "3–5 weeks" },
  ],
  included: [
    "✓ Responsive design (mobile + desktop)",
    "✓ Technical SEO foundation",
    "✓ Google Analytics 4",
    "✓ SSL & security setup",
    "✓ 30 days post-launch support",
    "✓ Two revision rounds included",
  ],
};

export function getWebDesignProcessUi(locale: Locale): WebProcessSectionUi {
  return locale === "en" ? en : sv;
}
