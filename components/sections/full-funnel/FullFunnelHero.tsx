"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { buttonVariants } from "@/components/ui/Button";
import { getFullFunnelHeroUi } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const ACCENT = "#06B6D4";

export default function FullFunnelHero() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelHeroUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });

  const stats = [
    { v: ui.stat1.value, l: ui.stat1.label },
    { v: ui.stat2.value, l: ui.stat2.label },
    { v: ui.stat3.value, l: ui.stat3.label },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-16 pt-[112px] md:px-[6%] md:pb-24 md:pt-[140px]"
      aria-labelledby="full-funnel-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[min(100vw,520px)]"
        style={{
          background: `radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45 }}
            className="inline-flex max-w-full rounded-pill border px-3.5 py-1.5 text-xs"
            style={{
              borderColor: "rgba(6,182,212,0.25)",
              backgroundColor: "rgba(6,182,212,0.08)",
              color: "#67E8F9",
            }}
          >
            {ui.pill}
          </motion.div>

          <motion.h1
            id="full-funnel-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 font-heading text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.08] text-white"
          >
            {ui.h1a}
            <br />
            {ui.h1b}
            <br />
            <span className="italic" style={{ color: ACCENT }}>
              {ui.h1c}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 max-w-[560px] text-[17px] font-normal leading-[1.75] text-[rgba(255,255,255,0.55)]"
          >
            {ui.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:flex sm:flex-wrap sm:gap-8"
          >
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-heading text-[26px] font-extrabold leading-tight text-white sm:text-[28px]">{s.v}</p>
                <p className="mt-0.5 text-xs font-normal text-[rgba(255,255,255,0.38)]">{s.l}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href={`${ROUTES.kontakt}?plan=full-funnel`}
              className={cn(buttonVariants({ variant: "primary" }), "justify-center px-6")}
            >
              {ui.ctaPrimary}
            </Link>
            <Link
              href="#full-funnel-process"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-center border-[rgba(255,255,255,0.12)] px-6"
              )}
            >
              {ui.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
          aria-hidden
        >
          <div
            className="rounded-[22px] border border-[rgba(255,255,255,0.1)] bg-[#0F1629] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            style={{
              boxShadow: `0 0 0 1px rgba(6,182,212,0.08), 0 40px 80px rgba(0,0,0,0.45)`,
            }}
          >
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.35)]">
              {ui.vizLabel}
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <div
                className="flex h-12 w-full max-w-[100%] items-center justify-center rounded-xl text-sm font-semibold text-white"
                style={{
                  width: "100%",
                  background: `linear-gradient(90deg, rgba(6,182,212,0.25), rgba(6,182,212,0.1))`,
                  border: "1px solid rgba(6,182,212,0.35)",
                }}
              >
                {ui.vizTop}
              </div>
              <div
                className="flex h-12 items-center justify-center rounded-xl text-sm font-semibold text-white"
                style={{
                  width: "78%",
                  background: `linear-gradient(90deg, rgba(6,182,212,0.2), rgba(6,182,212,0.08))`,
                  border: "1px solid rgba(6,182,212,0.28)",
                }}
              >
                {ui.vizMid}
              </div>
              <div
                className="flex h-12 items-center justify-center rounded-xl text-sm font-semibold text-white"
                style={{
                  width: "52%",
                  background: `linear-gradient(90deg, rgba(6,182,212,0.35), rgba(6,182,212,0.15))`,
                  border: "1px solid rgba(6,182,212,0.45)",
                }}
              >
                {ui.vizBot}
              </div>
            </div>
            <p className="mt-5 text-center text-xs leading-relaxed text-[rgba(255,255,255,0.35)]">
              {ui.vizCaption}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
