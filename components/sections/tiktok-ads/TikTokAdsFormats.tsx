"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTikTokFormatsSectionUi, getTiktokFormatCards } from "@/lib/i18n/content/services/tiktokAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function TikTokAdsFormats() {
  const { locale } = useLocale();
  const cards = useMemo(() => getTiktokFormatCards(locale), [locale]);
  const head = useMemo(() => getTikTokFormatsSectionUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="tiktok-ads-formats-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{head.label}</SectionLabel>
        <h2
          id="tiktok-ads-formats-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {head.h2a}
          <span className="text-[#EC4899] italic">{head.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-14">
          {head.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
          {cards.map((f, index) => (
            <motion.article
              key={f.h3}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
              className={cn(
                "rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-6 transition-all duration-300",
                "hover:-translate-y-1"
              )}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hexToRgba(f.color, 0.3);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
              }}
            >
              <div className="text-[32px] leading-none">{f.emoji}</div>
              <h3 className="mt-3 font-heading text-[17px] font-bold text-white">{f.h3}</h3>
              <div
                className="mt-2.5 inline-flex rounded-pill border px-2.5 py-1 text-[11px] font-medium"
                style={{
                  backgroundColor: hexToRgba(f.color, 0.08),
                  borderColor: hexToRgba(f.color, 0.15),
                  color: f.color,
                }}
              >
                {f.badge}
              </div>
              <div className="my-4 h-px bg-[rgba(255,255,255,0.06)]" />
              <p className="text-[13px] leading-normal text-[rgba(255,255,255,0.45)]">{f.why}</p>
              <p className="mt-2 text-[11px] italic text-[rgba(255,255,255,0.25)]">{f.specs}</p>
              <div className="mt-3 flex items-center gap-1.5">
                <TrendingUp className="size-3.5 shrink-0" style={{ color: f.color }} strokeWidth={2.5} />
                <span className="font-heading text-sm font-semibold" style={{ color: f.color }}>
                  {f.performance}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
