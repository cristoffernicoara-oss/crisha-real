"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { buttonVariants } from "@/components/ui/Button";
import { caseStudies as caseStudyData } from "@/lib/case-studies";
import { localiseCasePreview } from "@/lib/i18n/content/case-card-en";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES, fallstudiePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const HOVER_BY_COLOR: Record<string, string> = {
  "#2563EB": "hover:border-[rgba(37,99,235,0.4)]",
  "#0EA5E9": "hover:border-[rgba(14,165,233,0.4)]",
  "#EC4899": "hover:border-[rgba(236,72,153,0.4)]",
  "#8B5CF6": "hover:border-[rgba(139,92,246,0.4)]",
};

type Preview = {
  id: number;
  slug: string;
  brand: string;
  category: string;
  duration: string;
  initial: string;
  final: string;
  achievement: string;
  growth: string;
  color: string;
  tags: readonly string[];
  hoverBorder: string;
};

function toPreview(study: (typeof caseStudyData)[number]): Preview {
  const beforeKeys = Object.keys(study.results.before);
  const afterKeys = Object.keys(study.results.after);
  const k0 = beforeKeys[0] ?? "";
  const k1 = afterKeys[0] ?? "";
  const initial = k0 ? `${study.results.before[k0]}` : "";
  const final = k1 ? `${study.results.after[k1]}` : "";
  return {
    id: study.id,
    slug: study.slug,
    brand: study.client,
    category: `${study.category} · ${study.service}`,
    duration: study.duration,
    initial,
    final,
    achievement: study.metrics[0]?.label ?? "",
    growth: study.metrics[0]?.value ?? "",
    color: study.serviceColor,
    tags: study.tags,
    hoverBorder: HOVER_BY_COLOR[study.serviceColor] ?? "hover:border-[rgba(37,99,235,0.4)]",
  };
}

const MotionLink = motion.create(Link);

function GrowthCount({
  growth,
  color,
  inView,
  decimalSep,
}: {
  growth: string;
  color: string;
  inView: boolean;
  decimalSep: string;
}) {
  const isPercent = growth.includes("%");
  const isM = growth.endsWith("M") && !growth.includes("%");

  if (isPercent) {
    const end = Number.parseFloat(growth.replace(/[+%]/g, "").replace(/,/g, "."));
    if (!Number.isFinite(end)) {
      return (
        <span className="font-heading text-[36px] font-extrabold leading-none lg:text-[48px]" style={{ color }}>
          {growth}
        </span>
      );
    }
    return (
      <span className="font-heading text-[36px] font-extrabold leading-none lg:text-[48px]" style={{ color }}>
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2}
            prefix="+"
            suffix="%"
            decimal={decimalSep}
            preserveValue
          />
        ) : (
          "0"
        )}
      </span>
    );
  }

  if (isM) {
    const end = Number.parseFloat(growth.replace("M", "").replace(/,/g, "."));
    return (
      <span className="font-heading text-[36px] font-extrabold leading-none lg:text-[48px]" style={{ color }}>
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2}
            decimals={1}
            suffix="M"
            decimal={decimalSep}
            preserveValue
          />
        ) : (
          "0"
        )}
      </span>
    );
  }

  return (
    <span className="font-heading text-[36px] font-extrabold leading-none lg:text-[48px]" style={{ color }}>
      {growth}
    </span>
  );
}

const gridLg = [
  "lg:col-start-1 lg:col-end-8 lg:row-start-1",
  "lg:col-start-8 lg:col-end-13 lg:row-start-1",
  "lg:col-start-1 lg:col-end-5 lg:row-start-2",
  "lg:col-start-5 lg:col-end-13 lg:row-start-2",
] as const;

export default function CaseStudies() {
  const { locale, t } = useLocale();
  const decimalSep = locale === "en" ? "." : ",";
  const previewStudies = useMemo(
    () =>
      caseStudyData.map((study) => {
        const base = toPreview(study);
        const loc = localiseCasePreview(
          locale,
          study.slug,
          `${study.category} · ${study.service}`,
          study.duration
        );
        return { ...base, category: loc.category, duration: loc.duration };
      }),
    [locale]
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section
      id="rezultate"
      ref={ref}
      className="bg-[var(--bg-primary)] py-20 px-[5%] lg:py-[120px] lg:px-[6%]"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="text-center"
        >
          <SectionLabel className="mb-4 text-[rgba(255,255,255,0.4)]">{t("caseStudies.label")}</SectionLabel>
          <h2
            id="case-studies-heading"
            className="font-heading text-[clamp(40px,5vw,64px)] font-bold leading-tight text-white"
          >
            <span className="block">{t("caseStudies.h2a")}</span>
            <span className="block text-[#2563EB] italic">{t("caseStudies.h2b")}</span>
          </h2>
          <p className="mx-auto mb-16 max-w-[480px] text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)]">
            {t("caseStudies.sub")}
          </p>
        </motion.div>

        <div
          className={cn(
            "grid gap-3",
            "grid-cols-1 md:grid-cols-2 md:gap-3",
            "lg:grid-cols-12 lg:gap-4"
          )}
        >
          {previewStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className={cn("min-h-[240px] md:min-h-[280px] lg:min-h-[280px]", gridLg[index])}
            >
              <MotionLink
                href={fallstudiePath(study.slug)}
                className={cn(
                  "group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-8",
                  "cursor-pointer transition-[border-color,box-shadow,transform] duration-300 ease-out",
                  "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
                  study.hoverBorder
                )}
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="pointer-events-none absolute -bottom-[60px] -right-[60px] size-[200px] rounded-full blur-[60px]"
                  style={{ backgroundColor: hexToRgba(study.color, 0.04) }}
                  aria-hidden
                />

                <div className="relative z-[1] shrink-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="font-heading text-xl font-bold leading-tight text-white">{study.brand}</h3>
                        <span className="shrink-0 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs text-[rgba(255,255,255,0.4)]">
                          {study.duration}
                        </span>
                      </div>
                      <p className="text-[13px] font-normal text-[rgba(255,255,255,0.35)]">{study.category}</p>
                    </div>
                    <div className="shrink-0 pl-2 text-right">
                      <GrowthCount
                        growth={study.growth}
                        color={study.color}
                        inView={inView}
                        decimalSep={decimalSep}
                      />
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[rgba(255,255,255,0.35)]">
                        {study.achievement}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-[1] flex flex-1 flex-col justify-center py-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.25)]">
                        {t("caseStudies.before")}
                      </p>
                      <p className="mt-1 font-heading text-lg font-semibold text-[rgba(255,255,255,0.5)]">
                        {study.initial}
                      </p>
                    </div>
                    <ArrowRight
                      className="size-5 shrink-0 text-[rgba(255,255,255,0.2)]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.25)]">
                        {t("caseStudies.after")}
                      </p>
                      <p className="mt-1 font-heading text-[22px] font-bold text-white">{study.final}</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-[1] mt-auto flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] px-2.5 py-1 text-[11px] text-[rgba(255,255,255,0.35)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-base text-[rgba(255,255,255,0.5)]">{t("caseStudies.ctaQ")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={ROUTES.kontakt} className={cn(buttonVariants({ variant: "primary" }))}>
              {t("caseStudies.cta1")}
            </Link>
            <Link href={ROUTES.fallstudier} className={cn(buttonVariants({ variant: "ghost" }))}>
              {t("caseStudies.cta2")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
