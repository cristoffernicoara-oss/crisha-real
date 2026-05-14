import type { Locale } from "@/lib/i18n/types";

/** Localised preview line for case study cards (homepage grid). */
const EN_BY_SLUG: Record<string, { duration: string; category: string }> = {
  "fashionup-meta-ads": {
    duration: "4 months",
    category: "E-commerce · Fashion",
  },
  "dentalmed-google-ads": {
    duration: "3 months",
    category: "Healthcare · Dental",
  },
  "craftbeer-tiktok-ads": {
    duration: "6 weeks",
    category: "FMCG · Beverages",
  },
  "casa-nostra-web-design": {
    duration: "3 weeks",
    category: "Restaurant & pizza · Lomma",
  },
};

export function localiseCasePreview(
  locale: Locale,
  slug: string,
  categorySv: string,
  durationSv: string
): { category: string; duration: string } {
  if (locale !== "en") return { category: categorySv, duration: durationSv };
  const en = EN_BY_SLUG[slug];
  if (!en) return { category: categorySv, duration: durationSv };
  const servicePart = categorySv.includes("·") ? categorySv.split("·").pop()?.trim() ?? "" : "";
  const category = servicePart ? `${en.category} · ${servicePart}` : en.category;
  return { category, duration: en.duration };
}
