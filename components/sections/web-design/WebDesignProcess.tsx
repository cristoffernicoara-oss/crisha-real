"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignProcessUi } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const accent = "#2563EB";

export default function WebDesignProcess() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getWebDesignProcessUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-process-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="web-design-process-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[440px] text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            {ui.steps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                className="relative grid grid-cols-[48px_1fr] gap-4 pb-10 last:pb-0 md:gap-6"
              >
                {i < ui.steps.length - 1 && (
                  <div
                    className="absolute left-6 top-12 z-0 h-[calc(100%-3rem)] w-px bg-[rgba(255,255,255,0.06)]"
                    aria-hidden
                  />
                )}
                <div
                  className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border font-heading text-lg font-extrabold"
                  style={{
                    backgroundColor: hexToRgba(accent, 0.1),
                    borderColor: hexToRgba(accent, 0.25),
                    color: accent,
                  }}
                >
                  {p.step}
                </div>
                <div className="min-w-0 pt-0.5 md:pt-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
                    <span className="shrink-0 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-2.5 py-1 text-[11px] text-[rgba(255,255,255,0.3)]">
                      {p.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">{p.desc}</p>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <Package className="size-[13px] shrink-0 text-[#2563EB]" strokeWidth={2} aria-hidden />
                    <span className="text-xs text-[#93C5FD]">
                      {t("serviceShared.deliverablePrefix")} {p.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:sticky lg:top-[100px] lg:self-start">
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-8">
              <h3 className="mb-6 font-heading text-xl font-bold text-white">{ui.sidebarTitle}</h3>
              <ul>
                {ui.deliveryRows.map((d) => (
                  <li
                    key={d.type}
                    className="flex items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.05)] py-3.5 first:pt-0"
                  >
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-white">{d.type}</p>
                      <p className="text-xs text-[rgba(255,255,255,0.3)]">{d.platform}</p>
                    </div>
                    <span className="shrink-0 font-heading text-base font-bold text-[#2563EB]">{d.time}</span>
                  </li>
                ))}
              </ul>

              <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.25)]">
                {ui.includedTitle}
              </p>
              <ul className="flex flex-col gap-2">
                {ui.included.map((line) => (
                  <li key={line} className="text-[13px] text-[rgba(255,255,255,0.5)]">
                    {line}
                  </li>
                ))}
              </ul>

              <Link
                href="#kontakt"
                className={cn(
                  "mt-6 flex w-full items-center justify-center rounded-pill bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white",
                  "transition-colors hover:bg-[#1D4ED8]"
                )}
              >
                {ui.quoteCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
