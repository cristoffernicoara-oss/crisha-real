"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Shield,
  Smartphone,
  Star,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignCroUi, type WebCroCard } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const ICONS: Record<WebCroCard["icon"], LucideIcon> = {
  Target,
  Star,
  Zap,
  Smartphone,
  BarChart2,
  Shield,
};

export default function WebDesignCRO() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignCroUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-cro-heading"
    >
      <div className="mx-auto max-w-[800px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="web-design-cro-heading"
          className="mx-auto max-w-[600px] font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>
      </div>

      <div className="mx-auto mb-12 flex max-w-[800px] flex-col flex-wrap items-center justify-center gap-3 md:mb-16 md:flex-row md:gap-2">
        {ui.flow.map((step, i) => (
          <div key={step.n} className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="min-w-[120px] rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] px-5 py-4 text-center"
            >
              <p className="font-heading text-xl font-extrabold text-[#2563EB]">{step.n}</p>
              <p className="mt-1 text-xs font-medium text-white">{step.label}</p>
              <p className="mt-0.5 text-[11px] text-[rgba(255,255,255,0.3)]">{step.sub}</p>
            </motion.div>
            {i < ui.flow.length - 1 && (
              <span className="text-xl text-[rgba(255,255,255,0.2)] md:px-2" aria-hidden>
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ui.cards.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + index * 0.08 }}
              className={cn(
                "group rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-8",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              )}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hexToRgba(item.color, 0.35);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
              }}
            >
              <div
                className="flex size-12 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: hexToRgba(item.color, 0.1),
                  borderColor: hexToRgba(item.color, 0.2),
                }}
              >
                <Icon className="size-[22px]" strokeWidth={2} style={{ color: item.color }} />
              </div>
              <h3 className="mb-2.5 mt-5 font-heading text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">{item.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
