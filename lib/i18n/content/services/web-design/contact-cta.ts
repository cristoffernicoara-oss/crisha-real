import type { Locale } from "@/lib/i18n/types";

export type WebDesignContactCtaUi = {
  headingLine1: string;
  headingAccent: string;
  description: string;
};

const sv: WebDesignContactCtaUi = {
  headingLine1: "Redo att få en webbplats",
  headingAccent: "som faktiskt säljer?",
  description:
    "Berätta om ditt projekt. Vi analyserar dina nuvarande resultat och berättar exakt vad vi kan göra bättre och hur mycket det kostar. Gratis, utan förpliktelser.",
};

const en: WebDesignContactCtaUi = {
  headingLine1: "Ready for a site",
  headingAccent: "that actually sells?",
  description:
    "Tell us about your project. We review what you have today, what we’d improve, and what it costs, completely free with no obligation.",
};

export function getWebDesignContactCtaUi(locale: Locale): WebDesignContactCtaUi {
  return locale === "en" ? en : sv;
}
