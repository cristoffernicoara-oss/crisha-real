"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export type ProcessTimelineStep = {
  step: string;
  title: string;
  duration: string;
  desc: string;
  deliverable: string;
};

type ServiceProcessTimelineProps = {
  steps: readonly ProcessTimelineStep[] | ProcessTimelineStep[];
  color: string;
  label?: string;
  titleLine1: string;
  titleAccent: string;
  subtitle: string;
  sectionId?: string;
  ariaHeadingId?: string;
};

export default function ServiceProcessTimeline({
  steps,
  color,
  label,
  titleLine1,
  titleAccent,
  subtitle,
  sectionId,
  ariaHeadingId = "service-process-timeline-heading",
}: ServiceProcessTimelineProps) {
  const { t } = useLocale();
  const timelineLabel = label ?? t("serviceShared.timelineLabel");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      id={sectionId}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby={ariaHeadingId}
    >
      <div className="mx-auto max-w-[700px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{timelineLabel}</SectionLabel>
        <h2
          id={ariaHeadingId}
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {titleLine1}
          <span className="italic" style={{ color }}>
            {titleAccent}
          </span>
        </h2>
        <p className="mt-3 text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-12">
          {subtitle}
        </p>

        <div className="mt-10 md:mt-12">
          {steps.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className="relative grid grid-cols-[48px_1fr] gap-4 pb-10 last:pb-0 md:gap-6"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute left-6 top-12 z-0 h-[calc(100%-3rem)] w-px bg-[rgba(255,255,255,0.06)]"
                  aria-hidden
                />
              )}
              <div
                className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border font-heading text-lg font-extrabold"
                style={{
                  backgroundColor: hexToRgba(color, 0.1),
                  borderColor: hexToRgba(color, 0.25),
                  color,
                }}
              >
                {p.step}
              </div>
              <div className="min-w-0 pt-0.5 md:pt-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
                  <span className="shrink-0 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-2.5 py-1 text-[11px] text-[rgba(255,255,255,0.3)]">
                    {p.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">{p.desc}</p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  <Package className="size-[13px] shrink-0" style={{ color }} strokeWidth={2} aria-hidden />
                  <span className="text-xs" style={{ color: hexToRgba(color, 0.85) }}>
                    {t("serviceShared.deliverablePrefix")} {p.deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
