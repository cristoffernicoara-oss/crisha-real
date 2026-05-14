"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export default function CaseStudiesHero() {
  const { locale, t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  const aggregateStats = useMemo(
    () => [
      { value: "4", label: t("caseStudiesPage.statPublished") },
      { value: "40+", label: t("caseStudiesPage.statClients") },
      { value: locale === "en" ? "4.8×" : "4,8×", label: t("caseStudiesPage.statRoas") },
      { value: "98%", label: t("caseStudiesPage.statRenew") },
    ],
    [locale, t]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden bg-[#060810] px-[5%] pb-16 pt-20 md:px-[6%] md:pb-20 md:pt-32 lg:pb-20 lg:pt-[160px]"
      aria-labelledby="case-studies-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-4 justify-center text-[rgba(255,255,255,0.4)]">
            {t("caseStudiesPage.sectionLabel")}
          </SectionLabel>
        </motion.div>

        <motion.h1
          id="case-studies-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="font-heading text-[clamp(48px,6vw,76px)] font-extrabold leading-[1.05] text-white"
        >
          <span className="block">{t("caseStudiesPage.h1Line1")}</span>
          <span className="block text-[#2563EB] italic">{t("caseStudiesPage.h1Line2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-[540px] text-center text-lg font-normal text-[rgba(255,255,255,0.5)]"
        >
          {t("caseStudiesPage.lead")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
        className="mx-auto mt-12 max-w-[800px] md:mt-14"
      >
        <div className="grid max-w-[800px] grid-cols-2 lg:grid-cols-4">
          {aggregateStats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "border-b border-r border-[rgba(255,255,255,0.06)] px-4 py-6 text-center md:px-6 md:py-6",
                "max-lg:[&:nth-child(2n)]:border-r-0",
                "max-lg:[&:nth-child(n+3)]:border-b-0",
                "lg:border-b-0 lg:[&:nth-child(4n)]:border-r-0"
              )}
            >
              <p className="font-heading text-[32px] font-extrabold leading-none text-white">{stat.value}</p>
              <p className="mt-1.5 text-[13px] font-normal text-[rgba(255,255,255,0.35)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
