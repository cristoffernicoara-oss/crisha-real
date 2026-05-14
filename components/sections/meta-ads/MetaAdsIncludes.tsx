"use client";

import { motion } from "framer-motion";
import { BarChart2, Image, Settings, Target, type LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getMetaIncludesUi } from "@/lib/i18n/content/services/metaAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const ICONS: LucideIcon[] = [Settings, Image, Target, BarChart2];
const COLORS = ["#2563EB", "#EC4899", "#0EA5E9", "#22C55E"] as const;

export default function MetaAdsIncludes() {
  const { locale } = useLocale();
  const ui = useMemo(() => getMetaIncludesUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="meta-ads-includes-heading"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="meta-ads-includes-heading"
          className="mx-auto font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {ui.blocks.map((block, index) => {
          const Icon = ICONS[index] ?? Settings;
          const color = COLORS[index] ?? "#2563EB";
          return (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7 text-left"
            >
              <div
                className="flex size-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: hexToRgba(color, 0.1),
                  borderColor: hexToRgba(color, 0.2),
                }}
              >
                <Icon className="size-5" strokeWidth={2} style={{ color }} />
              </div>
              <h3 className="my-4 font-heading text-[17px] font-bold text-white">{block.title}</h3>
              <ul className="flex flex-col gap-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-[13px] text-[rgba(255,255,255,0.5)]">{item}</span>
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
