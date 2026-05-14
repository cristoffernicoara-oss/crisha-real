"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { buttonVariants } from "@/components/ui/Button";
import { getMetaHeroUi } from "@/lib/i18n/content/services/metaAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function MetaAdsHero() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getMetaHeroUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-20 pt-[120px] md:px-[6%] md:pb-20 md:pt-[160px]"
      aria-labelledby="meta-ads-hero-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
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

      <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex rounded-pill border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)] px-3.5 py-1.5 text-xs text-[#93C5FD]"
          >
            {ui.pill}
          </motion.div>

          <motion.h1
            id="meta-ads-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-5 font-heading text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] text-white"
          >
            {ui.h1a}
            <br />
            {ui.h1b}
            <br />
            <span className="text-[#2563EB] italic">{ui.h1c}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-[500px] text-[17px] font-normal leading-[1.75] text-[rgba(255,255,255,0.55)]"
          >
            {ui.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href={`${ROUTES.kontakt}#contact`}
              className={cn(buttonVariants({ variant: "primary" }), "justify-center px-6")}
            >
              {t("servicePage.bookAudit")}
            </Link>
            <Link
              href={ROUTES.fallstudier}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-center border-[rgba(255,255,255,0.12)] px-6"
              )}
            >
              {t("serviceShared.seeCaseStudies")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[400px] lg:mx-0"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-0 z-[2] rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] px-3 py-2 text-xs font-medium text-[#4ADE80] shadow-lg md:-right-6"
          >
            {ui.floatBadge}
          </motion.div>

          <div className="relative rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[#0F1629] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
                {ui.activeLabel}
              </span>
              <span className="flex items-center gap-2 text-xs font-medium text-[#22C55E]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22C55E] opacity-40" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#22C55E]" />
                </span>
                Live
              </span>
            </div>

            <div className="mt-4 divide-y divide-[rgba(255,255,255,0.04)]">
              <CampaignRow
                icon={<span className="text-sm font-bold text-white">f</span>}
                iconBg="#2563EB"
                name={ui.rows[0].name}
                sub={ui.rows[0].sub}
                roas={ui.rows[0].roas}
              />
              <CampaignRow
                icon={
                  <svg className="size-3.5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                }
                iconBg="linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)"
                name={ui.rows[1].name}
                sub={ui.rows[1].sub}
                roas={ui.rows[1].roas}
              />
              <CampaignRow
                icon={<span className="text-[10px] font-bold text-white">f·◎</span>}
                iconBg="linear-gradient(90deg, #2563EB 50%, #E1306C 50%)"
                name={ui.rows[2].name}
                sub={ui.rows[2].sub}
                roas={ui.rows[2].roas}
              />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-[10px] bg-[rgba(37,99,235,0.06)] px-3 py-3">
              <span className="text-xs text-[rgba(255,255,255,0.3)]">{ui.totalRoasLabel}</span>
              <span className="font-heading text-xl font-extrabold text-[#2563EB]">{ui.totalRoas}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CampaignRow({
  icon,
  iconBg,
  name,
  sub,
  roas,
}: {
  icon: ReactNode;
  iconBg: string;
  name: string;
  sub: string;
  roas: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="flex size-7 shrink-0 items-center justify-center rounded-full text-center"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-white">{name}</p>
          <p className="text-[11px] text-[rgba(255,255,255,0.3)]">{sub}</p>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className="font-heading text-base font-bold text-[#22C55E]">{roas}</p>
        <p className="text-[10px] text-[rgba(255,255,255,0.2)]">ROAS</p>
      </div>
    </div>
  );
}
