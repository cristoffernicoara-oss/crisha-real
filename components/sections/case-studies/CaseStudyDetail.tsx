"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  authorInitials,
  buildResultsNarrative,
  getCaseStudies,
  getCaseStudyBySlug,
  type CaseStudy,
} from "@/lib/case-studies";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudyDetail({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const study = useMemo(() => getCaseStudyBySlug(slug, locale), [slug, locale]);
  const allStudies = useMemo(() => getCaseStudies(locale), [locale]);

  if (!study) return null;

  const color = study.serviceColor;
  const others = allStudies.filter((c) => c.slug !== study.slug).slice(0, 2);
  const headlineMetric = study.metrics[0];
  const quoteTint = hexToRgba(color, 0.2);

  return (
    <>
      <section
        className="relative overflow-x-hidden bg-[#060810] px-[5%] pb-16 pt-28 md:px-[6%] md:pb-20 md:pt-[140px]"
        aria-labelledby="case-study-title"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 size-[520px] max-w-[100vw]"
          style={{
            background: `radial-gradient(circle, ${hexToRgba(color, 0.12)} 0%, transparent 70%)`,
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[900px]">
          <FadeUp>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <nav className="text-[13px] text-[rgba(255,255,255,0.3)]" aria-label={t("caseStudyDetail.breadcrumbAria")}>
                  <Link href="/fallstudier" className="transition-colors hover:text-white/50">
                    {t("caseStudyDetail.breadcrumbRoot")}
                  </Link>
                  <span className="mx-2 text-[rgba(255,255,255,0.2)]">/</span>
                  <span className="text-[rgba(255,255,255,0.45)]">{study.client}</span>
                </nav>
                <span
                  className="mt-4 inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium"
                  style={{
                    backgroundColor: hexToRgba(color, 0.12),
                    borderColor: hexToRgba(color, 0.25),
                    color,
                  }}
                >
                  {study.service}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-[13px] text-[rgba(255,255,255,0.3)]">
                <span>{study.location}</span>
                <span>{study.duration}</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1
              id="case-study-title"
              className="mt-8 max-w-[700px] font-heading text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.08] text-white"
            >
              <span className="block">
                {t("caseStudyDetail.howWeGrew")} {study.client}
              </span>
              <span className="block">
                {headlineMetric.value} {headlineMetric.label} {t("caseStudyDetail.metricInDuration")} {study.duration}
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] px-2.5 py-0.5 text-[11px] text-[rgba(255,255,255,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <MetricsBar study={study} color={color} />

      <section className="bg-[#060810] px-[5%] py-16 md:px-[6%] md:py-20">
        <div className="mx-auto max-w-[780px]">
          <StoryBlock
            kicker={t("caseStudyDetail.challengeKicker")}
            title={t("caseStudyDetail.challengeTitle")}
            body={study.challenge}
            delay={0}
          />
          <div className="my-12 h-px bg-[rgba(255,255,255,0.06)]" aria-hidden />
          <StoryBlock
            kicker={t("caseStudyDetail.solutionKicker")}
            title={t("caseStudyDetail.solutionTitle")}
            body={study.solution}
            delay={0.06}
          />
          <div className="my-12 h-px bg-[rgba(255,255,255,0.06)]" aria-hidden />
          <StoryBlock
            kicker={t("caseStudyDetail.resultsKicker")}
            title={t("caseStudyDetail.resultsTitle")}
            body={buildResultsNarrative(study, locale)}
            delay={0.12}
          />
        </div>
      </section>

      <BeforeAfterSection study={study} color={color} />

      <section className="bg-[#060810] px-[5%] py-16 text-center md:px-[6%] md:py-20">
        <div className="mx-auto max-w-[680px]">
          <FadeUp>
            <span
              className="mb-2 block font-heading text-[80px] font-extrabold leading-[0.5]"
              style={{ color: quoteTint }}
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="font-heading text-[clamp(18px,2.5vw,24px)] font-semibold italic leading-relaxed text-white">
              {study.testimonial.text}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-bold"
                style={{
                  backgroundColor: hexToRgba(color, 0.15),
                  borderColor: hexToRgba(color, 0.3),
                  color,
                }}
                aria-hidden
              >
                {authorInitials(study.testimonial.author)}
              </div>
              <div className="text-left">
                <p className="font-heading text-[15px] font-semibold text-white">{study.testimonial.author}</p>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)]">{study.testimonial.role}</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20">
        <div className="mx-auto max-w-[780px]">
          <FadeUp>
            <h2 className="mb-8 font-heading text-2xl font-bold text-white">{t("caseStudyDetail.moreStudies")}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((c, i) => (
              <MiniCaseCard key={c.slug} study={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MetricsBar({ study, color }: { study: CaseStudy; color: string }) {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-y border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-10 md:px-[6%] md:py-12"
      aria-label={t("caseStudyDetail.metricsAria")}
    >
      <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-y-8 lg:grid-cols-4">
        {study.metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className={cn(
              "border-b border-r border-[rgba(255,255,255,0.06)] px-4 py-2 text-center md:px-6 md:py-0",
              "max-lg:[&:nth-child(2n)]:border-r-0",
              "max-lg:[&:nth-child(n+3)]:border-b-0",
              "lg:border-b-0 lg:[&:nth-child(4n)]:border-r-0"
            )}
          >
            <p className="font-heading text-[clamp(28px,4vw,40px)] font-extrabold" style={{ color }}>
              {m.value}
            </p>
            <p className="mt-1.5 text-sm text-white">{m.label}</p>
            <p className="mt-1 text-xs text-[rgba(255,255,255,0.3)]">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StoryBlock({
  kicker,
  title,
  body,
  delay,
}: {
  kicker: string;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.25)]">{kicker}</p>
      <h3 className="mb-4 font-heading text-[22px] font-bold text-white">{title}</h3>
      <p className="text-base font-normal leading-[1.8] text-[rgba(255,255,255,0.6)]">{body}</p>
    </FadeUp>
  );
}

function BeforeAfterSection({ study, color }: { study: CaseStudy; color: string }) {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  const beforeEntries = Object.entries(study.results.before);
  const afterEntries = Object.entries(study.results.after);

  return (
    <section ref={ref} className="bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20">
      <div className="mx-auto max-w-[780px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.35)]">
            {t("caseStudyDetail.beforeAfterLabel")}
          </SectionLabel>
          <h2 className="mb-10 font-heading text-[32px] font-bold leading-tight text-white">
            {t("caseStudyDetail.beforeAfterTitle")}{" "}
            <span className="italic" style={{ color }}>
              {t("caseStudyDetail.beforeAfterTitleItalic")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-7"
          >
            <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)]">
              {t("caseStudyDetail.beforeWord")}
            </p>
            <ul className="space-y-0">
              {beforeEntries.map(([key, val]) => (
                <li
                  key={key}
                  className="flex justify-between gap-4 border-b border-[rgba(255,255,255,0.04)] py-2.5 last:border-b-0"
                >
                  <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{key}</span>
                  <span className="font-heading text-[15px] font-semibold text-[rgba(255,255,255,0.5)]">{val}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl border p-7"
            style={{
              backgroundColor: hexToRgba(color, 0.04),
              borderColor: hexToRgba(color, 0.15),
            }}
          >
            <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.12em]" style={{ color }}>
              {t("caseStudyDetail.afterWord")}
            </p>
            <ul className="space-y-0">
              {afterEntries.map(([key, val]) => (
                <li
                  key={key}
                  className="flex justify-between gap-4 border-b border-[rgba(255,255,255,0.06)] py-2.5 last:border-b-0"
                >
                  <span className="text-[13px] text-[rgba(255,255,255,0.5)]">{key}</span>
                  <span className="font-heading text-[15px] font-bold text-white">{val}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MiniCaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const { t } = useLocale();
  const color = study.serviceColor;
  const win = study.metrics[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/fallstudier/${study.slug}`}
        className="block rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-5 transition-all duration-300 hover:border-[rgba(255,255,255,0.12)]"
      >
        <span
          className="inline-block rounded-full border px-3 py-0.5 text-[11px] font-medium"
          style={{
            backgroundColor: hexToRgba(color, 0.12),
            borderColor: hexToRgba(color, 0.25),
            color,
          }}
        >
          {study.service}
        </span>
        <p className="mt-3 font-heading text-lg font-bold text-white">{study.client}</p>
        <p className="mt-2 font-heading text-2xl font-extrabold" style={{ color }}>
          {win.value}
        </p>
        <p className="text-xs text-[rgba(255,255,255,0.35)]">{win.label}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium" style={{ color }}>
          {t("caseStudyDetail.readCaseStudy")}
          <ArrowRight className="size-4" aria-hidden />
        </span>
      </Link>
    </motion.div>
  );
}
