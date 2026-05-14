import { flattenStrings } from "@/lib/i18n/flatten";
import { enTree, svTree } from "@/lib/i18n/messages-tree";
import type { Locale } from "@/lib/i18n/types";

export const STRINGS: Record<Locale, Record<string, string>> = {
  sv: flattenStrings("", svTree as unknown as Record<string, unknown>),
  en: flattenStrings("", enTree as unknown as Record<string, unknown>),
};
