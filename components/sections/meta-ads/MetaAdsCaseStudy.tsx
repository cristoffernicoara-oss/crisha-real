"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getMetaCaseUi } from "@/lib/i18n/content/services/metaAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { fallstudiePath } from "@/lib/routes";

export default function MetaAdsCaseStudy() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getMetaCaseUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="meta-ads-case-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="meta-ads-case-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 gap-y-2">
              <span className="rounded-pill border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)] px-4 py-1.5 text-[13px] text-[#93C5FD]">
                FashionUp
              </span>
              <span className="text-[13px] text-[rgba(255,255,255,0.3)]">{ui.chip1}</span>
              <span className="text-[13px] text-[rgba(255,255,255,0.35)]">{ui.chip2}</span>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
                {ui.challengeK}
              </p>
              <p className="mt-2 text-[15px] font-normal leading-[1.75] text-[rgba(255,255,255,0.6)]">
                {ui.challenge}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
                {ui.solutionK}
              </p>
              <p className="mt-2 text-[15px] font-normal leading-[1.75] text-[rgba(255,255,255,0.6)]">
                {ui.solution}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-[20px] border border-[rgba(37,99,235,0.2)] bg-[#0F1629] p-7"
          >
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {ui.resultK}
            </p>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase text-[#EF4444]">{ui.before}</p>
                <p className="mt-1 font-heading text-[32px] font-extrabold text-[rgba(255,255,255,0.3)]">
                  {locale === "en" ? "1.4×" : "1,4×"}
                </p>
                <p className="mt-1 text-[13px] text-[rgba(255,255,255,0.3)]">{ui.subBefore}</p>
              </div>
              <span className="text-2xl text-[rgba(255,255,255,0.15)]" aria-hidden>
                →
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase text-[#22C55E]">{ui.after}</p>
                <p className="mt-1 font-heading text-[32px] font-extrabold text-white">
                  {locale === "en" ? "3.8×" : "3,8×"}
                </p>
                <p className="mt-1 text-[13px] text-[#22C55E]">{ui.subAfter}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {ui.metrics.map((m) => (
                <div key={m.l} className="rounded-[10px] bg-[rgba(37,99,235,0.06)] px-3.5 py-3.5">
                  <p className="font-heading text-[22px] font-extrabold text-[#2563EB]">{m.v}</p>
                  <p className="mt-1 text-[11px] text-[rgba(255,255,255,0.35)]">{m.l}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-5 border-l-2 border-[#2563EB] pl-4">
              <p className="text-[13px] italic leading-relaxed text-[rgba(255,255,255,0.5)]">{ui.quote}</p>
              <footer className="mt-2 text-xs text-[rgba(255,255,255,0.3)]">{ui.quoteBy}</footer>
            </blockquote>

            <Link
              href={fallstudiePath("fashionup-meta-ads")}
              className="mt-4 inline-block text-sm font-medium text-[#2563EB] hover:underline"
            >
              {t("serviceShared.readFullCase")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
