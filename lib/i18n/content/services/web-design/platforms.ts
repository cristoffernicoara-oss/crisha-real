import type { Locale } from "@/lib/i18n/types";

export type WebPlatformCardUi = {
  name: string;
  logo: string;
  tagline: string;
  color: string;
  featured?: boolean;
  bestFor: string;
  pros: string[];
  cons: string[];
  ideal: string;
  deliveryTime: string;
  priceFrom: string;
};

export type WebPlatformsSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
  intro: string;
  bestForPrefix: string;
  prosTitle: string;
  consTitle: string;
  featuredBadge: string;
  chooseCta: string;
  tipTitle: string;
  tipBody: string;
  tipCta: string;
  cards: WebPlatformCardUi[];
};

const sv: WebPlatformsSectionUi = {
  label: "PLATTFORMAR",
  h2a: "Rätt plattform",
  h2b: " för ditt företag.",
  intro:
    "Vi arbetar med de bästa plattformarna och rekommenderar alltid den som passar dina specifika behov och budget, inte den vi tjänar mest på.",
  bestForPrefix: "Passar bäst för: ",
  prosTitle: "✓ Fördelar",
  consTitle: "Begränsningar",
  featuredBadge: "Mest valt",
  chooseCta: "Välj",
  tipTitle: "Inte säker på vilken plattform?",
  tipBody:
    "Vi analyserar dina behov och rekommenderar den plattform som ger dig bäst ROI. Gratis konsultation, ingen förpliktelse.",
  tipCta: "Boka gratis konsultation →",
  cards: [
    {
      name: "Next.js",
      logo: "⚛️",
      tagline: "För maximal prestanda",
      color: "#2563EB",
      bestFor: "SaaS, byråer, avancerade sajter",
      pros: [
        "Snabbaste möjliga laddningstid",
        "SEO-optimerat från grunden",
        "Obegränsad flexibilitet",
        "Skalar med ditt företag",
        "PageSpeed 95-100 garanterat",
      ],
      cons: ["Kräver utvecklare för ändringar", "Längre leveranstid"],
      ideal: "Företag som prioriterar prestanda och SEO framför allt annat.",
      deliveryTime: "3-4 veckor",
      priceFrom: "från 15 000 kr",
    },
    {
      name: "Webflow",
      logo: "🌊",
      tagline: "Design + CMS i ett",
      color: "#0EA5E9",
      featured: true,
      bestFor: "Byråer, konsulter, presentationssajter",
      pros: [
        "Visuellt CMS, enkla redigeringar",
        "Snabb leveranstid",
        "Professionell design",
        "Inbyggd hosting",
        "Inga kodkunskaper krävs för updates",
      ],
      cons: ["Månadskostnad för hosting", "Begränsad för komplex e-handel"],
      ideal: "Företag som vill ha professionell design och kunna uppdatera innehåll själva.",
      deliveryTime: "2-3 veckor",
      priceFrom: "från 10 000 kr",
    },
    {
      name: "Shopify",
      logo: "🛍️",
      tagline: "E-handelns bästa val",
      color: "#8B5CF6",
      bestFor: "Nätbutiker, produktförsäljning",
      pros: [
        "Byggd för e-handel",
        "Enkelt att hantera produkter",
        "Inbyggd kassaoptimering",
        "Hundratals integrationer",
        "Skalbar till miljoner i omsättning",
      ],
      cons: ["Transaktionsavgifter", "Begränsad för ej e-handel"],
      ideal: "Företag som säljer produkter online och vill ha en pålitlig e-handelslösning.",
      deliveryTime: "2-4 veckor",
      priceFrom: "från 12 000 kr",
    },
  ],
};

const en: WebPlatformsSectionUi = {
  label: "PLATFORMS",
  h2a: "The right stack",
  h2b: " for your business.",
  intro:
    "We work with the best tools and recommend what fits your goals and budget, not what pays us the most.",
  bestForPrefix: "Best for: ",
  prosTitle: "✓ Strengths",
  consTitle: "Trade-offs",
  featuredBadge: "Most chosen",
  chooseCta: "Choose",
  tipTitle: "Not sure which platform?",
  tipBody:
    "We map your needs and recommend the option with the best ROI. Free consult, no obligation.",
  tipCta: "Book a free consult →",
  cards: [
    {
      name: "Next.js",
      logo: "⚛️",
      tagline: "Maximum performance",
      color: "#2563EB",
      bestFor: "SaaS, agencies, advanced sites",
      pros: [
        "Fastest possible load times",
        "SEO-first architecture",
        "Unlimited flexibility",
        "Scales with your business",
        "PageSpeed 95–100",
      ],
      cons: ["Needs a dev for deep changes", "Longer build window"],
      ideal: "Teams that put performance and SEO above everything else.",
      deliveryTime: "3–4 weeks",
      priceFrom: "from SEK 15,000",
    },
    {
      name: "Webflow",
      logo: "🌊",
      tagline: "Design + CMS together",
      color: "#0EA5E9",
      featured: true,
      bestFor: "Agencies, consultants, marketing sites",
      pros: [
        "Visual CMS, easy edits",
        "Faster delivery",
        "Polished design",
        "Hosting included",
        "No code needed for content updates",
      ],
      cons: ["Monthly hosting cost", "Limited for complex ecommerce"],
      ideal: "Brands that want pro design and self-serve content control.",
      deliveryTime: "2–3 weeks",
      priceFrom: "from SEK 10,000",
    },
    {
      name: "Shopify",
      logo: "🛍️",
      tagline: "Built for ecommerce",
      color: "#8B5CF6",
      bestFor: "Stores and product brands",
      pros: [
        "Commerce-native",
        "Simple product management",
        "Checkout optimisation built in",
        "Hundreds of integrations",
        "Scales to serious revenue",
      ],
      cons: ["Transaction fees", "Less ideal for non-retail"],
      ideal: "Businesses selling products online that want a reliable stack.",
      deliveryTime: "2–4 weeks",
      priceFrom: "from SEK 12,000",
    },
  ],
};

export function getWebDesignPlatformsUi(locale: Locale): WebPlatformsSectionUi {
  return locale === "en" ? en : sv;
}
