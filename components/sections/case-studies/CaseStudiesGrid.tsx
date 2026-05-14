"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import { getCaseStudies, type CaseStudy } from "@/lib/case-studies";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const ALL_ID = "__all__";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function pickBeforeAfterPairs(study: CaseStudy) {
  const pairs: { key: string; before: string; after: string }[] = [];
  for (const [key, beforeVal] of Object.entries(study.results.before)) {
    const afterVal = study.results.after[key];
    if (afterVal !== undefined) pairs.push({ key, before: beforeVal, after: afterVal });
  }
  return pairs.slice(0, 2);
}

export default function CaseStudiesGrid() {
  const { locale, t } = useLocale();
  const caseStudies = useMemo(() => getCaseStudies(locale), [locale]);

  const webService = locale === "en" ? "Web design" : "Webbdesign";

  const tabs = useMemo(
    () => [
      { id: ALL_ID, label: t("caseStudiesPage.filterAll") },
      { id: "Meta Ads", label: "Meta Ads" },
      { id: "Google Ads", label: "Google Ads" },
      { id: "TikTok Ads", label: "TikTok Ads" },
      { id: webService, label: t("caseStudiesPage.filterWeb") },
    ],
    [t, webService]
  );

  const [filterId, setFilterId] = useState(ALL_ID);

  useEffect(() => {
    setFilterId(ALL_ID);
  }, [locale]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  const filtered = useMemo(() => {
    if (filterId === ALL_ID) return caseStudies;
    return caseStudies.filter((s) => s.service === filterId);
  }, [caseStudies, filterId]);

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] pb-24 pt-10 md:px-[6%] md:pb-[120px] md:pt-10"
      aria-label={t("caseStudiesPage.gridAria")}
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
        {tabs.map((tab) => {
          const active = filterId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterId(tab.id)}
              className={cn(
                "cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
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

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} inView={inView} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
  inView,
}: {
  study: CaseStudy;
  index: number;
  inView: boolean;
}) {
  const { t } = useLocale();
  const color = study.serviceColor;
  const pairs = pickBeforeAfterPairs(study);
  const quote = study.testimonial.text.replace(/\s+/g, " ").trim();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
      className="group overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hexToRgba(color, 0.3);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} aria-hidden />

      <div className="p-7">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">{study.client}</h2>
            <p className="mt-1 text-[13px] text-[rgba(255,255,255,0.35)]">{study.category}</p>
          </div>
          <div className="sm:text-right">
            <span
              className="inline-block rounded-full border px-3.5 py-1 text-xs font-medium"
              style={{
                backgroundColor: hexToRgba(color, 0.12),
                borderColor: hexToRgba(color, 0.25),
                color,
              }}
            >
              {study.service}
            </span>
            <p className="mt-1.5 text-[11px] text-[rgba(255,255,255,0.25)]">
              {study.duration} {t("caseStudiesPage.partnershipSuffix")}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-5 py-4">
          <div>
            <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("caseStudiesPage.before")}
            </p>
            {pairs.map((p) => (
              <p key={p.key} className="font-heading text-sm font-semibold text-[rgba(255,255,255,0.5)]">
                {p.before}
              </p>
            ))}
          </div>
          <ArrowRight className="size-5 shrink-0 text-[rgba(255,255,255,0.15)]" aria-hidden />
          <div>
            <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("caseStudiesPage.after")}
            </p>
            {pairs.map((p) => (
              <p key={p.key} className="font-heading text-sm font-bold" style={{ color }}>
                {p.after}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {study.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading text-xl font-extrabold" style={{ color }}>
                {m.value}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-[rgba(255,255,255,0.3)]">{m.label}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-5 rounded-r-lg border-l-2 py-3 pl-4 pr-4"
          style={{ borderLeftColor: color, backgroundColor: "rgba(255,255,255,0.02)" }}
        >
          <p className="line-clamp-2 text-[13px] italic text-[rgba(255,255,255,0.5)]">&ldquo;{quote}&rdquo;</p>
          <p className="mt-2 text-xs text-[rgba(255,255,255,0.3)]">
            Av {study.testimonial.author}, {study.testimonial.role}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] px-2.5 py-0.5 text-[11px] text-[rgba(255,255,255,0.3)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/fallstudier/${study.slug}`}
            className="group/link inline-flex items-center gap-1 text-[13px] font-medium no-underline transition-[gap] duration-200 hover:gap-2"
            style={{ color }}
          >
            {t("caseStudiesPage.seeDetails")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
