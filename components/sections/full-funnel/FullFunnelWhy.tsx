"use client";

import { motion } from "framer-motion";
import { Layers, LineChart, Link2, type LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFullFunnelWhyUi, type FullFunnelWhyCard } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const ICONS: Record<FullFunnelWhyCard["icon"], LucideIcon> = {
  link: Link2,
  layers: Layers,
  lineChart: LineChart,
};

const ACCENT = "#06B6D4";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function FullFunnelWhy() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelWhyUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0A0D15] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="full-funnel-why-heading"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="full-funnel-why-heading"
          className="font-heading text-[clamp(30px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="italic" style={{ color: ACCENT }}>
            {ui.h2b}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.48)]">
          {ui.intro}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">
        {ui.cards.map((card, index) => {
          const Icon = ICONS[card.icon];
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7",
                "transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              )}
            >
              <div
                className="pointer-events-none absolute left-0 top-0 h-0.5 w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: ACCENT }}
                aria-hidden
              />
              <div
                className="flex size-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: hexToRgba(ACCENT, 0.1),
                  borderColor: hexToRgba(ACCENT, 0.25),
                }}
              >
                <Icon className="size-5" strokeWidth={2} style={{ color: ACCENT }} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[rgba(255,255,255,0.5)]">{card.body}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
