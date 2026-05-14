import type { Locale } from "@/lib/i18n/types";

export type WebDesignFaqSectionUi = {
  label: string;
  h2a: string;
  h2b: string;
};

const sv: WebDesignFaqSectionUi = {
  label: "VANLIGA FRÅGOR",
  h2a: "Allt du undrar",
  h2b: " om webbdesign.",
};

const en: WebDesignFaqSectionUi = {
  label: "FAQ",
  h2a: "Everything you wonder",
  h2b: " about web design.",
};

export function getWebDesignFaqSectionUi(locale: Locale): WebDesignFaqSectionUi {
  return locale === "en" ? en : sv;
}
