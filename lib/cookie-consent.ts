/** localStorage key: must match `CookieBanner`. */
export const COOKIE_CONSENT_STORAGE_KEY = "crisha-cookie-consent";

export type CookieConsentStored = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentStored | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
    return null;
  } catch {
    return null;
  }
}

/** True while user has not chosen yet (bottom banner visible). */
export function isCookieChoicePending(): boolean {
  return getCookieConsent() === null;
}

/** Analytics/marketing scripts may load only after explicit accept. Reject → browse without optional tracking. */
export function hasOptionalCookieConsent(): boolean {
  return getCookieConsent() === "accepted";
}

export function dispatchCookieConsentChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("crisha-cookie-consent"));
}

/** Clear stored choice so the banner can appear again (e.g. from footer ”Cookie-inställningar”). */
export function clearCookieConsentPreference() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  dispatchCookieConsentChange();
}
