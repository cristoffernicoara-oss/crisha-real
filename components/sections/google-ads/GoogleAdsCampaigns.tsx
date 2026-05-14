"use client";

import { motion } from "framer-motion";
import { Monitor, Search, ShoppingBag, Zap, type LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getGoogleAdsCampaignsUi } from "@/lib/i18n/content/services/googleAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

const ICONS: Record<string, LucideIcon> = {
  Search,
  ShoppingBag,
  Zap,
  Monitor,
};

const ICON_KEYS = ["Search", "ShoppingBag", "Zap", "Monitor"] as const;

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const EMOJIS = ["🔍", "🛍️", "⚡", "🖥️"] as const;

export default function GoogleAdsCampaigns() {
  const { locale } = useLocale();
  const ui = useMemo(() => getGoogleAdsCampaignsUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="google-ads-campaigns-heading"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="google-ads-campaigns-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#0EA5E9] italic">{ui.h2b}</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
        {ui.types.map((c, index) => {
          const iconKey = ICON_KEYS[index];
          const Icon = ICONS[iconKey];
          const color = campaignsColors[index];
          return (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7 text-left"
            >
              <div className="text-4xl leading-none">{EMOJIS[index]}</div>
              <h3 className="mt-3 font-heading text-xl font-bold text-white">{c.name}</h3>
              <div
                className="mt-2 inline-flex rounded-pill border px-3 py-1 text-[11px] font-medium"
                style={{
                  backgroundColor: hexToRgba(color, 0.08),
                  borderColor: hexToRgba(color, 0.2),
                  color,
                }}
              >
                {c.when}
              </div>
              <p className="mt-4 text-sm leading-[1.65] text-[rgba(255,255,255,0.5)]">{c.desc}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {c.stats.map((s) => (
                  <li key={s} className="flex items-start gap-1.5 text-xs text-[rgba(255,255,255,0.4)]">
                    <Icon className="mt-0.5 size-3 shrink-0" style={{ color }} strokeWidth={2.5} />
                    {s}
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

const campaignsColors = ["#0EA5E9", "#22C55E", "#8B5CF6", "#F59E0B"] as const;
