"use client";

import { motion } from "framer-motion";
import { Eye, Shield, Target, TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getAboutValues, getAboutValuesHeading } from "@/lib/i18n/content/about-sections-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Target,
  Eye,
  Zap,
  TrendingUp,
  Users,
  Shield,
};

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function AboutValues() {
  const { locale } = useLocale();
  const heading = useMemo(() => getAboutValuesHeading(locale), [locale]);
  const values = useMemo(() => getAboutValues(locale), [locale]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px 12% 0px",
  });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="about-values-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-left">
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{heading.label}</SectionLabel>
          <h2
            id="about-values-heading"
            className="font-heading text-[clamp(36px,4vw,52px)] font-bold leading-tight text-white"
          >
            {heading.h2a}
            <span className="text-[#2563EB] italic">{heading.h2b}</span>
          </h2>
          <p className="mt-4 max-w-[460px] text-base font-normal text-[rgba(255,255,255,0.45)]">{heading.lead}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
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
                  {Icon && <Icon className="size-[22px]" strokeWidth={2} style={{ color: item.color }} />}
                </div>
                <h3 className="mb-2.5 mt-5 font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
