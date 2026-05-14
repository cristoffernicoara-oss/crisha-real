"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { getWebDesignHeroUi } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function WebDesignHero() {
  const { locale } = useLocale();
  const ui = useMemo(() => getWebDesignHeroUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-20 pt-[120px] md:px-[6%] md:pb-20 md:pt-[160px]"
      aria-labelledby="web-design-hero-heading"
    >
      <div
        className="pointer-events-none absolute left-[-100px] top-0 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex rounded-pill border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)] px-3.5 py-1.5 text-xs text-[#93C5FD]"
          >
            {ui.pill}
          </motion.div>

          <motion.h1
            id="web-design-hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="mt-5 font-heading text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] text-white"
          >
            {ui.h1a}
            <br />
            {ui.h1b}
            <br />
            <span className="text-[#2563EB] italic">{ui.h1c}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="mt-5 max-w-[500px] text-[17px] font-normal leading-[1.75] text-[rgba(255,255,255,0.55)]"
          >
            {ui.lead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
            className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:flex-wrap sm:gap-8"
          >
            {ui.stats.map((s) => (
              <div key={s.l}>
                <p className="font-heading text-[28px] font-extrabold text-white">{s.v}</p>
                <p className="mt-0.5 text-xs font-normal text-[rgba(255,255,255,0.35)]">{s.l}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#web-design-portfolio"
              className={cn(
                "inline-flex items-center justify-center rounded-pill bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white",
                "shadow-[0_12px_32px_rgba(37,99,235,0.3)] transition-transform hover:-translate-y-px hover:bg-[#1D4ED8]"
              )}
            >
              {ui.ctaProjects}
            </Link>
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-pill border border-[rgba(255,255,255,0.2)] bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#2563EB]"
            >
              {ui.ctaQuote}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-0 z-[2] rounded-xl border border-[rgba(37,99,235,0.3)] bg-[#0F1629] px-4 py-3 text-[13px] text-[#93C5FD] shadow-lg lg:-left-4"
          >
            {ui.floatSpeed}
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-4 z-[2] rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] px-3.5 py-2.5 text-xs text-[#4ADE80] shadow-lg lg:-right-4"
          >
            {ui.floatConv}
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0F1629] shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)] bg-[#0a0d18] px-4 py-3">
              <span className="size-2.5 shrink-0 rounded-full bg-[#FF5F57]" aria-hidden />
              <span className="size-2.5 shrink-0 rounded-full bg-[#FEBC2E]" aria-hidden />
              <span className="size-2.5 shrink-0 rounded-full bg-[#28C840]" aria-hidden />
              <div className="ml-3 flex-1 rounded-md bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[11px] text-[rgba(255,255,255,0.2)]">
                crishamarketing.se
              </div>
            </div>
            <div className="p-5">
              <div className="h-2 rounded-lg bg-[rgba(37,99,235,0.15)]" aria-hidden />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-[88%] rounded bg-[rgba(255,255,255,0.08)]" />
                <div className="h-3 w-[72%] rounded bg-[rgba(255,255,255,0.08)]" />
                <div className="h-3 w-[56%] rounded bg-[rgba(255,255,255,0.08)]" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-24 rounded-lg bg-[rgba(37,99,235,0.25)]" />
                <div className="h-8 w-20 rounded-lg border border-[rgba(255,255,255,0.1)] bg-transparent" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 rounded-xl bg-[rgba(255,255,255,0.04)]" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
