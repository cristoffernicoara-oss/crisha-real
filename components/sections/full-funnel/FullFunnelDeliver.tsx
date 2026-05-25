"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFullFunnelDeliverUi } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";

const ACCENT = "#06B6D4";

export default function FullFunnelDeliver() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelDeliverUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      id="full-funnel-deliver"
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="full-funnel-deliver-heading"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="full-funnel-deliver-heading"
          className="font-heading text-[clamp(30px,4vw,44px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="italic" style={{ color: ACCENT }}>
            {ui.h2b}
          </span>
        </h2>
        <p className="mx-auto mt-4 text-[15px] leading-relaxed text-[rgba(255,255,255,0.48)]">{ui.intro}</p>
      </div>

      <ul className="mx-auto mt-12 max-w-[640px] space-y-4">
        {ui.bullets.map((b, index) => (
          <motion.li
            key={b}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex gap-3 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0F1629] px-4 py-3.5 text-left text-[15px] leading-snug text-[rgba(255,255,255,0.78)]"
          >
            <span
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(6,182,212,0.15)", color: ACCENT }}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <span>{b}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
