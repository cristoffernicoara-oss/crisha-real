"use client";

import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { isCookieChoicePending } from "@/lib/cookie-consent";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 400;

function readBannerOffsetNeeded(): boolean {
  try {
    return typeof window !== "undefined" && isCookieChoicePending();
  } catch {
    return true;
  }
}

export default function ScrollToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);
  const [bannerOffset, setBannerOffset] = useState(false);

  useLayoutEffect(() => {
    const syncCookie = () => setBannerOffset(readBannerOffsetNeeded());
    syncCookie();
    window.addEventListener("crisha-cookie-consent", syncCookie);
    return () => window.removeEventListener("crisha-cookie-consent", syncCookie);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = useCallback(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label={t("scrollTop.aria")}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed right-4 z-[90] flex size-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(15,22,41,0.92)] text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 md:right-[6%]",
        bannerOffset
          ? "bottom-[calc(9rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(10rem+env(safe-area-inset-bottom,0px))]"
          : "bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] md:bottom-[max(2rem,env(safe-area-inset-bottom,0px))]",
        "hover:border-[rgba(37,99,235,0.45)] hover:bg-[rgba(37,99,235,0.2)] hover:text-[#93C5FD]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060810]",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="size-5" strokeWidth={2.25} aria-hidden />
    </button>
  );
}
