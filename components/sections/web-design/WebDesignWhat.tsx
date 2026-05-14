"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Globe,
  Layout,
  ShoppingBag,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignWhatUi, type WebWhatCard } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const ICONS: Record<WebWhatCard["icon"], LucideIcon> = {
  Layout,
  Globe,
  ShoppingBag,
  Zap,
  BarChart2,
  Smartphone,
};

export default function WebDesignWhat() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignWhatUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-what-heading"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="web-design-what-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mt-3 md:mb-14">
          {ui.intro}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3 lg:gap-5">
        {ui.cards.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              )}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hexToRgba(item.color, 0.3);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
              }}
            >
              <div
                className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 transition-[width] duration-300 group-hover:w-full"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />

              <div
                className="relative z-[1] flex size-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: hexToRgba(item.color, 0.1),
                  borderColor: hexToRgba(item.color, 0.2),
                }}
              >
                <Icon className="size-5" strokeWidth={2} style={{ color: item.color }} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-0.5 text-xs font-medium" style={{ color: hexToRgba(item.color, 0.7) }}>
                {item.subtitle}
              </p>
              <p className="mb-4 mt-2.5 text-[13px] font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">
                {item.desc}
              </p>
              <ul className="flex flex-col gap-1.5">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="size-1 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-[rgba(255,255,255,0.4)]">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
