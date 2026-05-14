import type { Locale } from "@/lib/i18n/types";

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  badge: string | null;
  featured: boolean;
  cta: string;
  features: string[];
  notIncluded: string[];
};

const PLANS_SV: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "3 000",
    currency: "kr",
    period: "/mån",
    description:
      "Perfekt för företag i startfasen som vill testa kraften i betald annonsering.",
    badge: null,
    featured: false,
    cta: "Kom igång med Starter",
    features: [
      "1 annonsplattform (Meta eller Google)",
      "Månadsvis kampanjhantering",
      "Månadsrapport",
      "E-postsupport inom 48h",
      "Gratis startrevision",
      "Rekommenderad annonsbudget: 5 000–10 000 kr/mån",
    ],
    notIncluded: ["Dedikerad account manager", "Veckorapporter", "Landningssida ingår"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "9 000",
    currency: "kr",
    period: "/mån",
    description:
      "För seriösa varumärken som vill skala aggressivt och dominera sin marknad.",
    badge: "Mest populär",
    featured: true,
    cta: "Välj Growth",
    features: [
      "Meta Ads + Google Ads ingår",
      "TikTok Ads ingår",
      "Optimerad landningssida ingår",
      "Detaljerade veckorapporter",
      "Dedikerad account manager",
      "Månadsvis strategisamtal",
      "Live dashboard-åtkomst",
      "Rekommenderad annonsbudget: 20 000–50 000 kr/mån",
    ],
    notIncluded: [],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Anpassat",
    currency: "",
    period: "pris efter scope",
    description:
      "Komplett lösning för varumärken med stora budgetar som behöver ett dedikerat team.",
    badge: null,
    featured: false,
    cta: "Begär offert",
    features: [
      "Alla annonsplattformar",
      "Webbdesign + branding ingår",
      "Dedikerad full-funnel strategi",
      "Team exklusivt för dig",
      "Dagliga rapporter + live dashboard",
      "Garanterat SLA i avtal",
      "Månadsvis strategisk konsultation",
      "Annonsbudget: 50 000+ kr/mån",
    ],
    notIncluded: [],
  },
];

const PLANS_EN: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "3,000",
    currency: "SEK",
    period: "/mo",
    description: "Ideal for early-stage businesses testing the power of paid advertising.",
    badge: null,
    featured: false,
    cta: "Get started with Starter",
    features: [
      "1 ad platform (Meta or Google)",
      "Monthly campaign management",
      "Monthly report",
      "Email support within 48h",
      "Free onboarding audit",
      "Recommended ad budget: 5,000–10,000 SEK/mo",
    ],
    notIncluded: ["Dedicated account manager", "Weekly reports", "Landing page included"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "9,000",
    currency: "SEK",
    period: "/mo",
    description: "For serious brands that want to scale aggressively and own their market.",
    badge: "Most popular",
    featured: true,
    cta: "Choose Growth",
    features: [
      "Meta Ads + Google Ads included",
      "TikTok Ads included",
      "Optimised landing page included",
      "Detailed weekly reports",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Live dashboard access",
      "Recommended ad budget: 20,000–50,000 SEK/mo",
    ],
    notIncluded: [],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    currency: "",
    period: "pricing by scope",
    description: "Full solution for brands with large budgets that need a dedicated team.",
    badge: null,
    featured: false,
    cta: "Request a quote",
    features: [
      "All ad platforms",
      "Web design + branding included",
      "Dedicated full-funnel strategy",
      "Team dedicated to you",
      "Daily reports + live dashboard",
      "Guaranteed SLA in contract",
      "Monthly strategy consulting",
      "Ad budget: 50,000+ SEK/mo",
    ],
    notIncluded: [],
  },
];

export function getPricingPlans(locale: Locale): PricingPlan[] {
  return locale === "en" ? PLANS_EN : PLANS_SV;
}

export const PRICING_GUARANTEES = {
  sv: [
    { text: "Inget bindande långtidsavtal" },
    { text: "Gratis revision vid start" },
    { text: "Kampanjer live inom 48 timmar" },
  ],
  en: [
    { text: "No long-term lock-in" },
    { text: "Free audit at kickoff" },
    { text: "Campaigns live within 48 hours" },
  ],
} as const;
