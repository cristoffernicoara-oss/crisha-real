"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/Button";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  dispatchCookieConsentChange,
} from "@/lib/cookie-consent";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function readStoredChoice(): "accepted" | "rejected" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)?.trim();
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

type BannerPhase = "unknown" | "pending" | "closed";

export default function CookieBanner() {
  const { t } = useLocale();
  /** unknown = not read yet (no phantom banner before localStorage); pending = waiting for choice; closed = dismissed */
  const [phase, setPhase] = useState<BannerPhase>("unknown");

  const syncFromStorage = useCallback(() => {
    const choice = readStoredChoice();
    setPhase(choice !== null ? "closed" : "pending");
  }, []);

  useLayoutEffect(() => {
    syncFromStorage();
    window.addEventListener("crisha-cookie-consent", syncFromStorage);
    window.addEventListener("storage", syncFromStorage);
    return () => {
      window.removeEventListener("crisha-cookie-consent", syncFromStorage);
      window.removeEventListener("storage", syncFromStorage);
    };
  }, [syncFromStorage]);

  const persistAndClose = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    dispatchCookieConsentChange();
    setPhase("closed");
  };

  const accept = () => persistAndClose("accepted");
  const reject = () => persistAndClose("rejected");

  if (phase !== "pending") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[130] border-t border-[rgba(255,255,255,0.08)] bg-[#0B0F1A]/95 px-[5%] pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md md:px-[6%] md:pb-[max(1.25rem,env(safe-area-inset-bottom))] md:pt-5"
      role="dialog"
      aria-modal="false"
      aria-label={t("cookieBanner.aria")}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <p className="font-heading text-base font-semibold text-white">{t("cookieBanner.title")}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-[rgba(255,255,255,0.55)]">
            {t("cookieBanner.body")}{" "}
            <Link
              href="/cookies"
              className="font-medium text-[#60A5FA] underline decoration-[rgba(96,165,250,0.35)] underline-offset-2 transition-colors hover:text-[#93C5FD]"
            >
              {t("cookieBanner.readMore")}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={reject}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "min-w-[120px] justify-center border-[rgba(255,255,255,0.14)]"
            )}
          >
            {t("cookieBanner.reject")}
          </button>
          <button
            type="button"
            onClick={accept}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "min-w-[140px] justify-center")}
          >
            {t("cookieBanner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
