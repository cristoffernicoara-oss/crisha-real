/** Stable `<select>` values; labels come from `t("contactMain.service.${value}")` etc. */
export const CONTACT_SERVICE_VALUES = [
  "meta-ads",
  "google-ads",
  "tiktok-ads",
  "webbdesign",
  "full-funnel",
  "complet",
  "osaker",
] as const;

export const CONTACT_BUDGET_VALUES = ["b1", "b2", "b3", "b4", "b5", "b6"] as const;

export const CONTACT_HEAR_VALUES = ["google", "tiktok", "social", "referral", "linkedin", "other"] as const;

export type ContactServiceValue = (typeof CONTACT_SERVICE_VALUES)[number];
export type ContactBudgetValue = (typeof CONTACT_BUDGET_VALUES)[number];
export type ContactHearValue = (typeof CONTACT_HEAR_VALUES)[number];
