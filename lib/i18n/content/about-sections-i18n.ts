import type { Locale } from "@/lib/i18n/types";

const STATS_SV = [
  { prefix: "€", end: 1, decimals: 0, suffix: "M+", label: "Hanterad ad spend (ca/år)" },
  { prefix: "", end: 40, decimals: 0, suffix: "+", label: "Levererade projekt" },
  { prefix: "", end: 4.8, decimals: 1, suffix: "×", label: "Snitt-ROAS i portföljen" },
  { prefix: "", end: 98, decimals: 0, suffix: "%", label: "Nöjda kunder (förnyar)" },
] as const;

const STATS_EN = [
  { prefix: "€", end: 1, decimals: 0, suffix: "M+", label: "Ad spend managed (approx./year)" },
  { prefix: "", end: 40, decimals: 0, suffix: "+", label: "Projects delivered" },
  { prefix: "", end: 4.8, decimals: 1, suffix: "×", label: "Average portfolio ROAS" },
  { prefix: "", end: 98, decimals: 0, suffix: "%", label: "Happy clients (renew)" },
] as const;

export function getAboutStats(locale: Locale) {
  return locale === "en" ? STATS_EN : STATS_SV;
}

type ValueItem = {
  icon: "Target" | "Eye" | "Zap" | "TrendingUp" | "Users" | "Shield";
  title: string;
  description: string;
  color: string;
};

const VALUES_SV: ValueItem[] = [
  {
    icon: "Target",
    title: "Avkastning först",
    description:
      "Varje beslut vägs mot din ROI. Om det inte är ekonomiskt meningsfullt gör vi det inte.",
    color: "#2563EB",
  },
  {
    icon: "Eye",
    title: "Full transparens",
    description:
      "Tydliga rapporter, tillgång till konton, rak kommunikation. Vi döljer aldrig verklig prestanda.",
    color: "#0EA5E9",
  },
  {
    icon: "Zap",
    title: "Snabb execution",
    description:
      "Kampanjer live på 48 h. Webbplatser levererade på veckor, utan onödig byråkrati.",
    color: "#8B5CF6",
  },
  {
    icon: "TrendingUp",
    title: "Datadriven kultur",
    description:
      "Beslut bygger på faktiska siffror, inte magkänsla. Vi testar, mäter och optimerar kontinuerligt.",
    color: "#EC4899",
  },
  {
    icon: "Users",
    title: "Riktiga partnerskap",
    description: "Du är inte ett kontonummer. Din framgång är vår framgång, på riktigt.",
    color: "#F59E0B",
  },
  {
    icon: "Shield",
    title: "Integritet",
    description:
      "Kan vi inte leverera vad vi lovar, säger vi det inte. Hellre tappa en affär än förtroendet.",
    color: "#22C55E",
  },
];

const VALUES_EN: ValueItem[] = [
  {
    icon: "Target",
    title: "ROI first",
    description: "Every decision is weighed against your ROI. If it doesn’t make economic sense, we don’t do it.",
    color: "#2563EB",
  },
  {
    icon: "Eye",
    title: "Full transparency",
    description: "Clear reports, account access, straight talk. We never hide real performance.",
    color: "#0EA5E9",
  },
  {
    icon: "Zap",
    title: "Fast execution",
    description: "Campaigns live in 48h. Websites shipped in weeks, without unnecessary bureaucracy.",
    color: "#8B5CF6",
  },
  {
    icon: "TrendingUp",
    title: "Data-driven culture",
    description: "Decisions are based on real numbers, not gut feel. We test, measure, and optimise continuously.",
    color: "#EC4899",
  },
  {
    icon: "Users",
    title: "Real partnerships",
    description: "You’re not an account number. Your success is our success, for real.",
    color: "#F59E0B",
  },
  {
    icon: "Shield",
    title: "Integrity",
    description: "If we can’t deliver what we promise, we don’t promise it. We’d rather lose a deal than trust.",
    color: "#22C55E",
  },
];

export function getAboutValues(locale: Locale): ValueItem[] {
  return locale === "en" ? VALUES_EN : VALUES_SV;
}

type AboutValuesCopy = {
  label: string;
  h2a: string;
  h2b: string;
  lead: string;
};

const VALUES_HEADING_SV: AboutValuesCopy = {
  label: "VÅRA VÄRDEN",
  h2a: "Principer som ",
  h2b: "styr oss.",
  lead: "Inte slogans på en vägg, utan reglerna vi följer i varje beslut för våra kunder.",
};

const VALUES_HEADING_EN: AboutValuesCopy = {
  label: "OUR VALUES",
  h2a: "Principles that ",
  h2b: "guide us.",
  lead: "Not slogans on a wall but the rules we follow in every decision for our clients.",
};

export function getAboutValuesHeading(locale: Locale): AboutValuesCopy {
  return locale === "en" ? VALUES_HEADING_EN : VALUES_HEADING_SV;
}

type TeamMember = {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  color: string;
  skills: string[];
  imageClassName?: string;
};

const TEAM_SV: TeamMember[] = [
  {
    name: "Shang",
    role: "Medgrundare",
    description:
      "Performance marketing och digital strategi: data, skalning och mätbara resultat för varumärken som vill växa online.",
    imageSrc: "/team/shang.png",
    color: "#2563EB",
    skills: ["Meta Ads", "Google Ads", "Strategi"],
    imageClassName: "object-cover object-[center_30%]",
  },
  {
    name: "Cristoffer",
    role: "Medgrundare",
    description:
      "Webbdesign, varumärke och digital kreativitet, från idé till upplevelser som konverterar och sticker ut.",
    imageSrc: "/team/cristoffer.png",
    color: "#0EA5E9",
    skills: ["Webbdesign", "Branding", "TikTok Ads"],
    imageClassName: "object-cover object-[center_-5%]",
  },
];

const TEAM_EN: TeamMember[] = [
  {
    name: "Shang",
    role: "Co-founder",
    description:
      "Performance marketing and digital strategy: data, scaling, and measurable results for brands that want to grow online.",
    imageSrc: "/team/shang.png",
    color: "#2563EB",
    skills: ["Meta Ads", "Google Ads", "Strategy"],
    imageClassName: "object-cover object-[center_30%]",
  },
  {
    name: "Cristoffer",
    role: "Co-founder",
    description:
      "Web design, brand, and digital creativity from idea to experiences that convert and stand out.",
    imageSrc: "/team/cristoffer.png",
    color: "#0EA5E9",
    skills: ["Web design", "Branding", "TikTok Ads"],
    imageClassName: "object-cover object-[center_-5%]",
  },
];

export function getAboutTeam(locale: Locale): TeamMember[] {
  return locale === "en" ? TEAM_EN : TEAM_SV;
}

type AboutTeamHeading = { label: string; h2a: string; h2b: string };

const TEAM_HEADING_SV: AboutTeamHeading = {
  label: "TEAMET",
  h2a: "Människorna bakom ",
  h2b: "resultaten.",
};

const TEAM_HEADING_EN: AboutTeamHeading = {
  label: "THE TEAM",
  h2a: "The people behind ",
  h2b: "the results.",
};

export function getAboutTeamHeading(locale: Locale): AboutTeamHeading {
  return locale === "en" ? TEAM_HEADING_EN : TEAM_HEADING_SV;
}

export type AboutPartner = {
  /** External partner site */
  href: string;
  name: string;
  /** Shown under the name, e.g. domain · positioning */
  tagline: string;
  /** Absolute favicon/logo URL or `/public/...` path (preferred over monogram) */
  logoSrc?: string;
  /** Fallback initials when `logoSrc` is omitted */
  logoMonogram?: string;
};

const PARTNERS_SV: AboutPartner[] = [
  {
    href: "https://www.carpathian-marketing-agency.ro/",
    name: "Carpathian Marketing Agency",
    tagline: "carpathian-marketing-agency.ro · Digital marknadsföringspartner",
    // Same favicon.svg on their site (.ico sometimes shows generic Next/Vercel mark).
    logoSrc: "https://www.carpathian-marketing-agency.ro/favicon.svg",
  },
];

const PARTNERS_EN: AboutPartner[] = [
  {
    href: "https://www.carpathian-marketing-agency.ro/",
    name: "Carpathian Marketing Agency",
    tagline: "carpathian-marketing-agency.ro · Digital marketing partner",
    logoSrc: "https://www.carpathian-marketing-agency.ro/favicon.svg",
  },
];

export function getAboutPartners(locale: Locale): AboutPartner[] {
  return locale === "en" ? PARTNERS_EN : PARTNERS_SV;
}

export type AboutPartnersSectionCopy = {
  label: string;
  title: string;
  description: string;
  visitCta: string;
  partnershipLeadIn: string;
  partnershipEmail: string;
};

const PARTNERS_COPY_SV: AboutPartnersSectionCopy = {
  label: "SAMARBETSPARTNERS",
  title: "Byråer vi litar på",
  description:
    "Vi samarbetar med noggrant utvalda byråer som delar våra värderingar kring resultat, transparens och kvalitet.",
  visitCta: "Besök byrån",
  partnershipLeadIn: "Intresserad av ett partnerskap? Kontakta oss på ",
  partnershipEmail: "info@crisha.se",
};

const PARTNERS_COPY_EN: AboutPartnersSectionCopy = {
  label: "PARTNERS",
  title: "Agencies we trust",
  description:
    "We work with a small set of agencies that share our standards for results, transparency, and quality.",
  visitCta: "Visit agency",
  partnershipLeadIn: "Interested in partnering? Contact us at ",
  partnershipEmail: "info@crisha.se",
};

export function getAboutPartnersSectionCopy(locale: Locale): AboutPartnersSectionCopy {
  return locale === "en" ? PARTNERS_COPY_EN : PARTNERS_COPY_SV;
}
