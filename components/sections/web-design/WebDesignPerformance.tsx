"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignPerformanceUi } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";

export default function WebDesignPerformance() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignPerformanceUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 12% 0px" });
  const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-performance-heading"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
          <h2
            id="web-design-performance-heading"
            className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
          >
            {ui.h2a}
            <span className="text-[#2563EB] italic">{ui.h2b}</span>
          </h2>
          <p className="mb-8 mt-4 text-base font-normal leading-[1.75] text-[rgba(255,255,255,0.5)]">{ui.intro}</p>

          <ul>
            {ui.items.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="flex gap-4 border-b border-[rgba(255,255,255,0.05)] py-4 first:pt-0"
              >
                <span
                  className="min-w-[80px] shrink-0 font-heading text-[clamp(28px,3vw,36px)] font-extrabold"
                  style={{ color: item.color }}
                >
                  {item.metric}
                </span>
                <div className="min-w-0">
                  <p className="mb-1 font-heading text-[15px] font-semibold text-white">{item.label}</p>
                  <p className="text-[13px] font-normal leading-normal text-[rgba(255,255,255,0.4)]">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="h-fit rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-8"
        >
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
            {ui.cardTitle}
          </p>
          <div className="mx-auto mb-6 flex size-[120px] flex-col items-center justify-center rounded-full border-4 border-[#22C55E]">
            <span className="font-heading text-4xl font-extrabold text-white">97</span>
            <span className="text-[13px] text-[rgba(255,255,255,0.3)]">/ 100</span>
          </div>

          <div>
            {ui.bars.map((b) => (
              <div key={b.label} className="mb-4 last:mb-0">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="text-xs text-[rgba(255,255,255,0.35)]">{b.label}</span>
                  <span className="text-[13px] font-medium" style={{ color: b.color }}>
                    {b.score}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-pill bg-[rgba(255,255,255,0.06)]">
                  <motion.div
                    className="h-full rounded-pill"
                    style={{ backgroundColor: b.color }}
                    initial={{ width: 0 }}
                    animate={cardInView ? { width: `${b.score}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-[rgba(255,255,255,0.2)]">{ui.cardFoot}</p>
        </motion.div>
      </div>
    </section>
  );
}
