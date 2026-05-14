"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  getWebDesignPortfolioUi,
  type WebPortfolioFilterId,
} from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function WebDesignPortfolio() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignPortfolioUi(locale), [locale]);
  const [filter, setFilter] = useState<WebPortfolioFilterId>("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  const filtered = useMemo(() => {
    if (filter === "all") return ui.projects;
    return ui.projects.filter((p) => p.categoryId === filter);
  }, [filter, ui.projects]);

  return (
    <section
      ref={ref}
      id="web-design-portfolio"
      className="scroll-mt-24 border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="web-design-portfolio-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="web-design-portfolio-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <div className="mt-2 flex flex-wrap gap-x-12 gap-y-1 text-sm text-[rgba(255,255,255,0.35)]">
          {ui.statsLine.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <p className="mt-3 max-w-[560px] text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-12">
          {ui.intro}
        </p>

        <div className="mb-10 flex flex-wrap gap-2 md:mb-12">
          {ui.filters.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={cn(
                  "cursor-pointer rounded-pill border px-5 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "border-[rgba(37,99,235,0.3)] bg-[rgba(37,99,235,0.12)] text-[#93C5FD]"
                    : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[rgba(255,255,255,0.6)]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                className="group cursor-pointer overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(project.color, 0.3);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                }}
              >
                <div
                  className="relative flex h-[180px] items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${hexToRgba(project.color, 0.12)}, ${hexToRgba(project.color, 0.04)})`,
                  }}
                >
                  <span className="text-[56px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]" aria-hidden>
                    {project.emoji}
                  </span>
                  <span className="absolute right-3 top-3 rounded-pill border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] px-2.5 py-0.5 text-[11px] text-[rgba(255,255,255,0.5)]">
                    {project.platform}
                  </span>
                  <span
                    className="absolute left-3 top-3 rounded-pill border px-2.5 py-0.5 text-[11px] font-medium"
                    style={{
                      backgroundColor: hexToRgba(project.color, 0.15),
                      borderColor: hexToRgba(project.color, 0.3),
                      color: project.color,
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-3 font-heading text-lg font-bold text-white">{project.name}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {project.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-1.5">
                        <TrendingUp className="size-3 shrink-0" style={{ color: project.color }} strokeWidth={2.5} />
                        <span className="text-xs text-[rgba(255,255,255,0.5)]">{m}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[11px] text-[rgba(255,255,255,0.35)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
