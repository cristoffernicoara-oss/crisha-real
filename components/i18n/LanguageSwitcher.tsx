"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function FlagSe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden>
      <rect width="16" height="10" fill="#006AA7" />
      <rect x="5" width="2" height="10" fill="#FECC00" />
      <rect y="4" width="16" height="2" fill="#FECC00" />
    </svg>
  );
}

function FlagGb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden>
      <path fill="#012169" d="M0 0h60v30H0z" />
      <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  );
}

const btnClass =
  "flex min-h-11 min-w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-black/20 transition-[border-color,box-shadow,opacity,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060810]";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={locale === "en" ? "Language" : "Språk"}
    >
      <button
        type="button"
        onClick={() => setLocale("sv")}
        className={cn(
          btnClass,
          locale === "sv"
            ? "border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
            : "border-white/18 opacity-80 hover:border-white/30 hover:opacity-100"
        )}
        aria-label={t("flags.svAria")}
        aria-pressed={locale === "sv"}
      >
        <FlagSe className="size-6 shrink-0 scale-100 object-cover sm:size-7" />
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          btnClass,
          locale === "en"
            ? "border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
            : "border-white/18 opacity-80 hover:border-white/30 hover:opacity-100"
        )}
        aria-label={t("flags.enAria")}
        aria-pressed={locale === "en"}
      >
        <FlagGb className="size-6 shrink-0 scale-100 object-cover sm:size-7" />
      </button>
    </div>
  );
}
