"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { getAboutStats } from "@/lib/i18n/content/about-sections-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

function formatAboutStatNumber(end: number, decimals: number, locale: Locale): string {
  const loc = locale === "en" ? "en-GB" : "sv-SE";
  return new Intl.NumberFormat(loc, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(end);
}

function StatValue({
  inView,
  prefix,
  end,
  decimals,
  suffix,
  locale,
}: {
  inView: boolean;
  prefix: string;
  end: number;
  decimals: number;
  suffix: string;
  locale: Locale;
}) {
  const n = inView ? end : 0;
  return (
    <span className="tabular-nums">
      {prefix}
      {formatAboutStatNumber(n, decimals, locale)}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  const { locale, t } = useLocale();
  const stats = useMemo(() => getAboutStats(locale), [locale]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px 15% 0px",
  });

  return (
    <section
      ref={ref}
      className="border-y border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-label={t("aboutStatsAria")}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={cn(
                "flex flex-col items-center justify-center border-[rgba(255,255,255,0.06)] px-2 text-center",
                index % 2 === 0 && "border-r",
                index < 2 && "border-b lg:border-b-0",
                index < 3 && "lg:border-r"
              )}
            >
              <p
                className="font-heading text-[clamp(40px,5vw,56px)] font-extrabold leading-none text-white"
                aria-live="polite"
              >
                <StatValue
                  inView={inView}
                  prefix={stat.prefix}
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  locale={locale}
                />
              </p>
              <p className="mt-2 text-sm font-normal text-[rgba(255,255,255,0.35)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
