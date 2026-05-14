"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTikTokCaseUi } from "@/lib/i18n/content/services/tiktokAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { fallstudiePath } from "@/lib/routes";

const accent = "#EC4899";

export default function TikTokAdsCaseStudy() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getTikTokCaseUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="tiktok-ads-case-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="tiktok-ads-case-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#EC4899] italic">{ui.h2b}</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 gap-y-2">
              <span
                className="rounded-pill border px-4 py-1.5 text-[13px]"
                style={{
                  backgroundColor: "rgba(236,72,153,0.1)",
                  borderColor: "rgba(236,72,153,0.25)",
                  color: "#F9A8D4",
                }}
              >
                Craft Brewers Conference
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
            className="rounded-[20px] border border-[rgba(236,72,153,0.25)] bg-[#0F1629] p-7"
          >
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {ui.resultK}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {ui.metrics.map((m) => (
                <div
                  key={m.l}
                  className="rounded-[10px] px-3.5 py-3.5"
                  style={{ backgroundColor: "rgba(236,72,153,0.06)" }}
                >
                  <p className="font-heading text-[22px] font-extrabold" style={{ color: accent }}>
                    {m.v}
                  </p>
                  <p className="mt-1 text-[11px] text-[rgba(255,255,255,0.35)]">{m.l}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-5 border-l-2 pl-4" style={{ borderColor: accent }}>
              <p className="text-[13px] italic leading-relaxed text-[rgba(255,255,255,0.5)]">{ui.quote}</p>
              <footer className="mt-2 text-xs text-[rgba(255,255,255,0.3)]">{ui.quoteBy}</footer>
            </blockquote>

            <Link
              href={fallstudiePath("craftbeer-tiktok-ads")}
              className="mt-4 inline-block text-sm font-medium text-[#F472B6] hover:underline"
            >
              {t("serviceShared.readFullCase")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
