"use client";

import { motion } from "framer-motion";
import { Check, Lightbulb, Minus } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignPlatformsUi } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function WebDesignPlatforms() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignPlatformsUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-platforms-heading"
    >
      <div className="mx-auto max-w-[1000px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="web-design-platforms-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[500px] text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-14">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-0 lg:grid-cols-3 lg:gap-5">
          {ui.cards.map((p, index) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className={cn(
                "relative rounded-3xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-8",
                p.featured && "border-[rgba(14,165,233,0.4)] shadow-[0_0_40px_rgba(14,165,233,0.08)]"
              )}
            >
              {p.featured && (
                <div className="absolute left-1/2 top-0 z-[1] -translate-x-1/2 rounded-b-[10px] bg-[#0EA5E9] px-3.5 py-1 text-[11px] font-semibold text-white">
                  {ui.featuredBadge}
                </div>
              )}

              <div className={cn(p.featured && "pt-4")}>
                <div className="text-[32px] leading-none" aria-hidden>
                  {p.logo}
                </div>
                <h3 className="mt-3 font-heading text-2xl font-extrabold text-white">{p.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-[rgba(255,255,255,0.8)]">{p.tagline}</p>
                <div
                  className="mt-3 inline-flex rounded-pill border px-3 py-1 text-[11px] font-medium"
                  style={{
                    backgroundColor: hexToRgba(p.color, 0.08),
                    borderColor: hexToRgba(p.color, 0.15),
                    color: p.color,
                  }}
                >
                  {ui.bestForPrefix}
                  {p.bestFor}
                </div>
              </div>

              <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

              <div>
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.25)]">
                  {ui.prosTitle}
                </p>
                <ul className="space-y-0.5">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex gap-2 py-1">
                      <Check className="mt-0.5 size-[13px] shrink-0 text-[#22C55E]" strokeWidth={2.5} />
                      <span className="text-[13px] text-[rgba(255,255,255,0.6)]">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3.5">
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.25)]">
                  {ui.consTitle}
                </p>
                <ul className="space-y-0.5">
                  {p.cons.map((con) => (
                    <li key={con} className="flex gap-2 py-0.5">
                      <Minus className="mt-0.5 size-[13px] shrink-0 text-[rgba(255,255,255,0.2)]" strokeWidth={2} />
                      <span className="text-xs text-[rgba(255,255,255,0.3)]">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-[rgba(255,255,255,0.45)]">{p.ideal}</p>

              <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

              <div className="flex items-center justify-between text-[13px] text-[rgba(255,255,255,0.4)]">
                <span>⏱ {p.deliveryTime}</span>
                <span>{p.priceFrom}</span>
              </div>

              <Link
                href="#kontakt"
                className={cn(
                  "mt-4 flex w-full items-center justify-center rounded-pill py-3 text-sm font-semibold transition-colors",
                  p.featured
                    ? "bg-[#0EA5E9] text-white hover:bg-[#0284C7]"
                    : "border border-[rgba(255,255,255,0.15)] text-white hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.08)]"
                )}
              >
                {ui.chooseCta} {p.name} →
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
          className="mt-6 flex max-w-[1000px] flex-col gap-4 rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.06)] p-6 md:flex-row md:items-center md:gap-4 md:p-7"
        >
          <Lightbulb className="size-6 shrink-0 text-[#2563EB]" strokeWidth={2} aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="font-heading text-base font-semibold text-white">{ui.tipTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-[rgba(255,255,255,0.5)]">{ui.tipBody}</p>
          </div>
          <Link
            href="#kontakt"
            className="inline-flex shrink-0 items-center justify-center rounded-pill bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            {ui.tipCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
