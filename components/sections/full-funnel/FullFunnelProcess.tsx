"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFullFunnelProcessUi } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";

const ACCENT = "#06B6D4";

export default function FullFunnelProcess() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelProcessUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      id="full-funnel-process"
      className="scroll-mt-28 border-t border-[rgba(255,255,255,0.06)] bg-[#0A0D15] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="full-funnel-process-heading"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="full-funnel-process-heading"
          className="font-heading text-[clamp(30px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}{" "}
          <span className="italic" style={{ color: ACCENT }}>
            {ui.h2b}
          </span>
        </h2>
      </div>

      <ol className="mx-auto mt-14 max-w-[720px] space-y-0">
        {ui.steps.map((step, index) => (
          <motion.li
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative flex gap-6 pb-12 last:pb-0"
          >
            {index < ui.steps.length - 1 ? (
              <div
                className="absolute left-[19px] top-12 h-[calc(100%-12px)] w-px"
                style={{ background: "linear-gradient(180deg, rgba(6,182,212,0.4), rgba(6,182,212,0.05))" }}
                aria-hidden
              />
            ) : null}
            <div
              className="relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#0c1424]"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #0891b2)` }}
            >
              {step.step}
            </div>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-heading text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.52)]">{step.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
