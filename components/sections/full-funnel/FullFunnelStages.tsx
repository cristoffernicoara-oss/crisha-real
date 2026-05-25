"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFullFunnelStagesUi } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const ACCENT = "#06B6D4";

export default function FullFunnelStages() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelStagesUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="full-funnel-stages-heading"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="full-funnel-stages-heading"
          className="font-heading text-[clamp(30px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="italic" style={{ color: ACCENT }}>
            {ui.h2b}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.48)]">
          {ui.intro}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
        {ui.stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={cn(
              "relative rounded-[20px] border bg-[#0F1629] p-7 text-left",
              "border-[rgba(255,255,255,0.08)]"
            )}
            style={{
              boxShadow:
                index === 1 ? `0 0 0 1px rgba(6,182,212,0.15), 0 24px 60px rgba(0,0,0,0.35)` : undefined,
            }}
          >
            <span
              className="inline-block rounded-pill px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(6,182,212,0.12)", color: "#67E8F9" }}
            >
              {stage.short}
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-white">{stage.name}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.52)]">{stage.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
