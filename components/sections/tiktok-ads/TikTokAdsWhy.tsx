"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTikTokWhyUi } from "@/lib/i18n/content/services/tiktokAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

function cellClass(v: string) {
  if (v.startsWith("✓")) return "text-[#22C55E]";
  if (v.startsWith("✗")) return "text-[#EF4444]";
  if (v.startsWith("⚬")) return "text-[rgba(255,255,255,0.35)]";
  return "text-white";
}

export default function TikTokAdsWhy() {
  const { locale } = useLocale();
  const ui = useMemo(() => getTikTokWhyUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="tiktok-ads-why-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="tiktok-ads-why-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#EC4899] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">
          {ui.stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="border-b border-[rgba(255,255,255,0.06)] px-2 py-6 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:py-8 lg:last:border-r-0"
            >
              <p
                className="font-heading text-[clamp(32px,4vw,48px)] font-extrabold leading-none"
                style={{
                  background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p className="mx-auto mt-2 max-w-[160px] text-[13px] text-[rgba(255,255,255,0.35)]">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-16 text-center font-heading text-2xl font-bold text-white md:mt-20"
        >
          {ui.compareTitle}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-[800px] overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629]"
        >
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 bg-[rgba(255,255,255,0.03)] px-4 py-3.5 text-[12px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.25)] md:px-6">
            <span />
            <span className="text-center">{ui.colTiktok}</span>
            <span className="text-center">{ui.colMeta}</span>
          </div>
          {ui.tableRows.map((row, i) => (
            <div
              key={row.metric}
              className={`grid grid-cols-[2fr_1fr_1fr] gap-2 border-t border-[rgba(255,255,255,0.04)] px-4 py-3.5 md:px-6 ${i % 2 === 1 ? "bg-[rgba(255,255,255,0.02)]" : ""}`}
            >
              <span className="text-[13px] text-[rgba(255,255,255,0.5)]">{row.metric}</span>
              <span className={`text-center text-[13px] ${cellClass(row.tiktok)}`}>{row.tiktok}</span>
              <span className={`text-center text-[13px] ${cellClass(row.meta)}`}>{row.meta}</span>
            </div>
          ))}
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 border-t border-[rgba(255,255,255,0.04)] bg-[rgba(236,72,153,0.04)] px-4 py-3.5 md:px-6">
            <span className="text-[13px] font-medium text-white">{ui.recLabel}</span>
            <span className="text-center text-[13px] text-[#F472B6]">{ui.recTiktok}</span>
            <span className="text-center text-[13px] text-[rgba(255,255,255,0.45)]">{ui.recMeta}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
