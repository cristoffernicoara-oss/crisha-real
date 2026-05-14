import type { Locale } from "@/lib/i18n/types";

export type WebWhatCard = {
  icon: "Layout" | "Globe" | "ShoppingBag" | "Zap" | "BarChart2" | "Smartphone";
  color: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
};

export type WebWhatSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  cards: WebWhatCard[];
};

const sv: WebWhatSectionUi = {
  label: "VAD VI BYGGER",
  h2a: "Allt du behöver.",
  h2b: " En enda byrå.",
  intro:
    "Vi designar och utvecklar alla typer av webbplatser för svenska företag, från enkla landningssidor till komplexa e-handelslösningar.",
  cards: [
    {
      icon: "Layout",
      color: "#2563EB",
      title: "Landningssidor",
      subtitle: "Konverterar besökare till kunder",
      desc: "Enskilda sidor optimerade för ett specifikt mål som lead-generering, produktförsäljning eller app-nedladdningar. A/B-testade för maximal konvertering.",
      features: [
        "CRO-optimerad struktur",
        "Mobile-first design",
        "Laddningstid < 1,5s",
        "Integrerat med Meta/Google Ads",
      ],
    },
    {
      icon: "Globe",
      color: "#0EA5E9",
      title: "Presentationswebbplatser",
      subtitle: "Bygg förtroende och generera leads",
      desc: "Kompletta webbplatser för tjänsteföretag, byråer och konsulter som vill synas professionellt online och attrahera rätt kunder.",
      features: ["5-10 sidor med SEO", "Kontaktformulär & CTA", "Google Analytics 4", "CMS för egna uppdateringar"],
    },
    {
      icon: "ShoppingBag",
      color: "#8B5CF6",
      title: "E-handelslösningar",
      subtitle: "Shopify & WooCommerce",
      desc: "Nätbutiker byggda för konvertering och skalbarhet. Integrerade med betalningssystem, lagerhantering och marknadsföringsverktyg.",
      features: ["Shopify / WooCommerce", "Produktkatalog & filter", "Kassaoptimering", "Lagersystem & integration"],
    },
    {
      icon: "Zap",
      color: "#EC4899",
      title: "Micro-webbplatser",
      subtitle: "Snabbt, fokuserat, effektivt",
      desc: "1-3 sidors webbplatser för kampanjer, event eller produktlanseringar. Levereras på 5-7 dagar med fokus på ett tydligt mål.",
      features: ["Leverans på 5-7 dagar", "Kampanjfokuserad design", "Optimerad för delning", "Snabb uppdatering möjlig"],
    },
    {
      icon: "BarChart2",
      color: "#F59E0B",
      title: "Omdesign & Optimering",
      subtitle: "Förvandla din befintliga sajt",
      desc: "Tar din befintliga webbplats och förvandlar den till en konverteringsmaskin. Fokus på hastighet, UX och konverteringsoptimering.",
      features: ["CRO-audit & analys", "Hastighetoptimering", "UX-förbättringar", "A/B-testning setup"],
    },
    {
      icon: "Smartphone",
      color: "#22C55E",
      title: "Mobile-first Design",
      subtitle: "75% av trafiken är mobil",
      desc: "Alla våra webbplatser designas primärt för mobilen och anpassas sedan för desktop. Perfekt upplevelse på varje skärmstorlek.",
      features: ["Touch-optimerade element", "Snabb mobilvy", "Progressive Web App möjlig", "App-liknande upplevelse"],
    },
  ],
};

const en: WebWhatSectionUi = {
  label: "WHAT WE BUILD",
  h2a: "Everything you need.",
  h2b: " One agency.",
  intro:
    "We design and build every kind of marketing site for Swedish businesses, from simple landing pages to full ecommerce.",
  cards: [
    {
      icon: "Layout",
      color: "#2563EB",
      title: "Landing pages",
      subtitle: "Turn visitors into customers",
      desc: "Single-purpose pages for leads, sales, or installs, structured for CRO and A/B tested where it matters.",
      features: ["CRO-first structure", "Mobile-first design", "Load time < 1.5s", "Meta / Google Ads ready"],
    },
    {
      icon: "Globe",
      color: "#0EA5E9",
      title: "Marketing websites",
      subtitle: "Build trust and capture leads",
      desc: "Full sites for agencies, consultants, and service businesses that need to look sharp and attract the right clients.",
      features: ["5–10 SEO-ready pages", "Contact forms & CTAs", "Google Analytics 4", "CMS for self-serve edits"],
    },
    {
      icon: "ShoppingBag",
      color: "#8B5CF6",
      title: "Ecommerce",
      subtitle: "Shopify & WooCommerce",
      desc: "Stores built to convert and scale, with payments, inventory, and marketing integrations included.",
      features: ["Shopify / WooCommerce", "Catalog & filters", "Checkout optimisation", "Stock & integrations"],
    },
    {
      icon: "Zap",
      color: "#EC4899",
      title: "Micro-sites",
      subtitle: "Fast, focused, effective",
      desc: "1–3 page sites for launches, events, or campaigns, shipped in 5–7 days around one clear goal.",
      features: ["5–7 day delivery", "Campaign-led design", "Built to share", "Quick update cycles"],
    },
    {
      icon: "BarChart2",
      color: "#F59E0B",
      title: "Redesign & optimisation",
      subtitle: "Upgrade what you already have",
      desc: "We take your current site and turn it into a conversion engine with speed, UX, and CRO first.",
      features: ["CRO audit & analysis", "Speed work", "UX improvements", "A/B testing setup"],
    },
    {
      icon: "Smartphone",
      color: "#22C55E",
      title: "Mobile-first design",
      subtitle: "~75% of traffic is mobile",
      desc: "We design for phones first, then scale up to desktop for a great experience on every screen.",
      features: ["Touch-friendly UI", "Fast mobile views", "PWA-ready where useful", "App-like feel"],
    },
  ],
};

export function getWebDesignWhatUi(locale: Locale): WebWhatSectionUi {
  return locale === "en" ? en : sv;
}
