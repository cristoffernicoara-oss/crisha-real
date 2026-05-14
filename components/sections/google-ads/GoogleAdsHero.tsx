"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingBag, Zap } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { buttonVariants } from "@/components/ui/Button";
import { getGoogleAdsHeroUi } from "@/lib/i18n/content/services/googleAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const accent = "#0EA5E9";

export default function GoogleAdsHero() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getGoogleAdsHeroUi(locale), [locale]);
  const searchCtr = locale === "en" ? "8.4%" : "8,4%";
  const shopRoas = locale === "en" ? "5.8×" : "5,8×";

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-20 pt-[120px] md:px-[6%] md:pb-20 md:pt-[160px]"
      aria-labelledby="google-ads-hero-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background: `radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)`,
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
            className="inline-flex rounded-pill border border-[rgba(14,165,233,0.25)] bg-[rgba(14,165,233,0.1)] px-3.5 py-1.5 text-xs text-[#7DD3FC]"
          >
            {ui.pill}
          </motion.div>

          <motion.h1
            id="google-ads-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-5 font-heading text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] text-white"
          >
            {ui.h1a}
            <br />
            {ui.h1b}
            <br />
            <span className="text-[#0EA5E9] italic">{ui.h1c}</span>
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
                <p className="mt-0.5 text-xs text-[rgba(255,255,255,0.35)]">{s.l}</p>
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
          className="mx-auto w-full max-w-[400px] rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[#0F1629] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)] lg:mx-0"
        >
          <p className="text-sm font-semibold text-white">{ui.cardTitle}</p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.25)]">
            {ui.qsLabel}
          </p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="h-8 flex-1 rounded-md"
                style={{
                  backgroundColor: i < 7 ? accent : "rgba(255,255,255,0.06)",
                }}
              />
            ))}
          </div>
          <p className="mt-3 font-heading text-[28px] font-extrabold text-white">{ui.qsScore}</p>
          <p className="text-xs text-[rgba(255,255,255,0.3)]">{ui.qsSub}</p>

          <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

          <div className="space-y-3">
            <CampaignTypeRow icon={Search} name={ui.searchCamp} value={searchCtr} />
            <CampaignTypeRow icon={ShoppingBag} name={ui.shopCamp} value={shopRoas} label="ROAS" />
            <CampaignTypeRow icon={Zap} name={ui.pmaxCamp} value={ui.pmaxVal} label={ui.pmaxLab} />
          </div>

          <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

          <div className="rounded-[10px] bg-[rgba(14,165,233,0.06)] px-3 py-3">
            <p className="text-xs text-[rgba(255,255,255,0.35)]">{ui.cpaLabel}</p>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="text-sm text-[#EF4444] line-through">{ui.cpaOld}</span>
              <span className="font-heading text-lg font-bold text-[#22C55E]">{ui.cpaNew}</span>
            </div>
            <p className="mt-1 text-[11px] text-[#22C55E]">{ui.cpaTrend}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CampaignTypeRow({
  icon: Icon,
  name,
  value,
  label,
}: {
  icon: typeof Search;
  name: string;
  value: string;
  label?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-[rgba(14,165,233,0.12)] text-[#0EA5E9]">
          <Icon className="size-[18px]" strokeWidth={2} />
        </div>
        <span className="text-[13px] text-white">{name}</span>
      </div>
      <div className="text-right">
        <span className="text-sm font-semibold text-[#22C55E]">{value}</span>
        {label ? <span className="ml-1 text-[10px] text-[rgba(255,255,255,0.25)]">{label}</span> : null}
      </div>
    </div>
  );
}
