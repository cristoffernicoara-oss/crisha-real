"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTikTokCreativeUi } from "@/lib/i18n/content/services/tiktokAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

const accent = "#EC4899";

export default function TikTokAdsCreative() {
  const { locale } = useLocale();
  const ui = useMemo(() => getTikTokCreativeUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="tiktok-ads-creative-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="tiktok-ads-creative-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#EC4899] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-6 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.hookLabel}
            </p>
            <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-7">
              {ui.segments.map((seg) => (
                <div
                  key={seg.t}
                  className="flex gap-4 border-b border-[rgba(255,255,255,0.04)] py-3 first:pt-0 last:border-0 last:pb-0"
                >
                  <span
                    className="shrink-0 rounded-pill border px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: "rgba(236,72,153,0.1)",
                      borderColor: "rgba(236,72,153,0.2)",
                      color: accent,
                    }}
                  >
                    {seg.t}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{seg.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[rgba(255,255,255,0.4)]">{seg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.ugcVsTitle}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[rgba(236,72,153,0.2)] bg-[rgba(236,72,153,0.04)] p-6">
                <span className="text-xs font-semibold text-[#F472B6]">{ui.ugcBadge}</span>
                <h3 className="mt-3 font-heading text-base font-bold text-white">{ui.ugcTitle}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[rgba(255,255,255,0.5)]">{ui.ugcDesc}</p>
                <ul className="mt-3 space-y-1.5 text-[12px] text-[rgba(255,255,255,0.45)]">
                  {ui.ugcBullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.1)] px-3 py-2 text-center text-xs font-semibold text-[#4ADE80]">
                  {ui.ugcCtr}
                </div>
              </div>
              <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] p-6">
                <h3 className="font-heading text-base font-bold text-white">{ui.brandedTitle}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[rgba(255,255,255,0.5)]">{ui.brandedDesc}</p>
                <ul className="mt-3 space-y-1.5 text-[12px] text-[rgba(255,255,255,0.45)]">
                  {ui.brandedBullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-[rgba(236,72,153,0.15)] bg-[rgba(236,72,153,0.06)] p-4 text-[13px] leading-relaxed text-[rgba(255,255,255,0.55)]">
              {ui.foot}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
