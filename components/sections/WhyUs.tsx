"use client";

import { motion } from "framer-motion";
import { BarChart2, Rocket, Target, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useId } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const CHART_PATH =
  "M4 58 C40 52 56 38 88 32 C120 26 140 22 168 18 C196 14 220 10 252 6 L296 4";

const PROGRESS_ROWS = [
  { label: "Meta Ads", pct: 92 },
  { label: "Google Ads", pct: 87 },
  { label: "TikTok Ads", pct: 78 },
] as const;

export default function WhyUs() {
  const { t, locale } = useLocale();
  const trustBadges = [t("whyUs.trust1"), t("whyUs.trust2"), t("whyUs.trust3"), t("whyUs.trust4")] as const;
  const chartFillId = useId().replace(/:/g, "");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[var(--bg-secondary)] py-20 px-[5%] lg:py-[120px] lg:px-[6%]"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="text-left"
        >
          <SectionLabel className="mb-4 text-[rgba(255,255,255,0.4)]">{t("whyUs.label")}</SectionLabel>
          <h2
            id="why-us-heading"
            className="max-w-[560px] font-heading text-[clamp(36px,4vw,56px)] font-bold leading-tight text-white"
          >
            {t("whyUs.h2")}
          </h2>
          <p className="mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[rgba(255,255,255,0.45)]">
            {t("whyUs.lead")}
          </p>
        </motion.div>

        <div
          className={cn(
            "mt-16 grid items-start gap-6",
            "grid-cols-1 md:grid-cols-2",
            "lg:grid-cols-[1fr_1.2fr_1fr]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="order-2 flex flex-col gap-4 md:order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7">
              <TrendingUp className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">{t("whyUs.payTitle")}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{t("whyUs.payBody")}</p>
              <div className="mt-4 w-full">
                <svg
                  viewBox="0 0 300 80"
                  className="h-20 w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id={chartFillId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(37,99,235)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(37,99,235)" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${CHART_PATH} L296 80 L4 80 Z`}
                    fill={`url(#${chartFillId})`}
                    className="opacity-90"
                  />
                  <motion.path
                    d={CHART_PATH}
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </svg>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7">
              <Target className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">{t("whyUs.dataTitle")}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{t("whyUs.dataBody")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[t("whyUs.chip1"), t("whyUs.chip2"), t("whyUs.chip3")].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-pill border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)] px-2.5 py-1 text-xs text-[#93C5FD]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:col-span-2 md:order-1 lg:order-2 lg:col-span-1"
          >
            <div
              className="rounded-3xl border border-[rgba(37,99,235,0.15)] p-9 text-center"
              style={{ background: "linear-gradient(160deg, #0F1629, #0a0f1e)" }}
            >
              <div className="font-heading text-[80px] font-extrabold leading-none text-[#2563EB]">
                {inView ? (
                  <CountUp
                    start={0}
                    end={4.8}
                    duration={2}
                    decimals={1}
                    suffix="×"
                    decimal={locale === "en" ? "." : ","}
                    separator=" "
                    preserveValue
                  />
                ) : (
                  <span>0</span>
                )}
              </div>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.35)]">
                {t("whyUs.roasCaption")}
              </p>

              <div className="my-6 h-px bg-[rgba(255,255,255,0.06)]" />

              <div className="text-left">
                {[
                  { icon: "📊", label: t("whyUs.rowSpend"), value: "€50k" },
                  { icon: "🎯", label: t("whyUs.rowBrands"), value: "40+" },
                  { icon: "⚡", label: t("whyUs.rowTime"), value: "48h" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.04)] py-3"
                  >
                    <span className="flex items-center gap-2 text-[13px] text-[rgba(255,255,255,0.4)]">
                      <span aria-hidden>{row.icon}</span>
                      {row.label}
                    </span>
                    <span className="font-heading text-[15px] font-semibold text-white">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <motion.span
                  className="size-2 shrink-0 rounded-full bg-[#22C55E]"
                  animate={{ opacity: [1, 0.45, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <span className="text-[13px] text-[rgba(255,255,255,0.5)]">{t("whyUs.activeLine")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
            className="order-3 flex flex-col gap-4 md:order-3 lg:order-3"
          >
            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7">
              <Rocket className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">{t("whyUs.growTitle")}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{t("whyUs.growBody")}</p>
              <div className="mt-6 space-y-3">
                {PROGRESS_ROWS.map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex justify-between text-xs text-[rgba(255,255,255,0.45)]">
                      <span>{row.label}</span>
                      <span className="text-[rgba(255,255,255,0.55)]">{row.pct}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-pill bg-[rgba(255,255,255,0.06)]">
                      <motion.div
                        className="h-full rounded-pill bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${row.pct}%` } : { width: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.35 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7">
              <BarChart2 className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
              <h3 className="mt-1 font-heading text-lg font-semibold text-white">{t("whyUs.reportTitle")}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{t("whyUs.reportBody")}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {trustBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.4 + i * 0.1,
              }}
              className="rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-5 py-2.5 text-[13px] font-normal text-[rgba(255,255,255,0.5)]"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
