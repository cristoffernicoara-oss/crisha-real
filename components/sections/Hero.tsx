"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const BAR_HEIGHTS_PCT = [32, 38, 34, 42, 48, 44, 52, 58, 68, 74, 82, 92] as const;

function ChartBars({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="flex h-[120px] items-end gap-1.5 sm:gap-2" aria-hidden>
      {BAR_HEIGHTS_PCT.map((h, i) => {
        const isActive = i >= 6;
        return (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <motion.div
              className={cn(
                "w-full rounded-t-[4px]",
                isActive ? "bg-[#2563EB]" : "bg-[rgba(37,99,235,0.2)]"
              )}
              initial={reduceMotion ? undefined : { height: 0 }}
              animate={{ height: `${h}%` }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 140,
                      damping: 20,
                      delay: 0.35 + i * 0.045,
                    }
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { t, locale } = useLocale();
  const reduceMotion = useReducedMotion();

  const dashboardMetrics = [
    { label: t("hero.metricVisitors"), value: locale === "en" ? "8,420" : "8 420", trend: "↑ +22%" },
    { label: t("hero.metricConversions"), value: "312", trend: "↑ +34%" },
    { label: t("hero.metricRoas"), value: locale === "en" ? "4.2×" : "4,2×", trend: locale === "en" ? "↑ +0.8×" : "↑ +0,8×" },
  ] as const;

  const scrollDiscover = () => {
    window.scrollBy({
      top: typeof window !== "undefined" ? window.innerHeight * 0.88 : 600,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="hero-bg-grid hero-grain relative min-h-[min(100dvh,920px)] overflow-hidden pb-28 pt-10 sm:pb-32 sm:pt-14 lg:min-h-[calc(100dvh-var(--header-offset))] lg:pb-36 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      {!reduceMotion ? (
        <div
          className="hero-beam-layer pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
        >
          <div
            className="absolute left-0 top-0 h-full w-[3px] will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.3) 20%, rgba(96,165,250,0.5) 50%, rgba(37,99,235,0.3) 80%, transparent 100%)",
              animation: "beamMove 12s linear infinite",
              animationDelay: "0s",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-px will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
              animation: "beamMove 12s linear infinite",
              animationDelay: "0.1s",
              filter: "blur(0.5px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-[2px] will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.15) 25%, rgba(96,165,250,0.25) 50%, rgba(37,99,235,0.15) 75%, transparent 100%)",
              animation: "beamMove 12s linear infinite",
              animationDelay: "6s",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-20 will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.02) 30%, rgba(37,99,235,0.04) 50%, rgba(37,99,235,0.02) 70%, transparent 100%)",
              animation: "beamMove 12s linear infinite",
              animationDelay: "0s",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-[3px] will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.3) 20%, rgba(96,165,250,0.5) 50%, rgba(37,99,235,0.3) 80%, transparent 100%)",
              animation: "beamMoveMirror 12s linear infinite",
              animationDelay: "1.2s",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-px will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
              animation: "beamMoveMirror 12s linear infinite",
              animationDelay: "1.3s",
              filter: "blur(0.5px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-[2px] will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.15) 25%, rgba(96,165,250,0.25) 50%, rgba(37,99,235,0.15) 75%, transparent 100%)",
              animation: "beamMoveMirror 12s linear infinite",
              animationDelay: "7.2s",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-20 will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.02) 30%, rgba(37,99,235,0.04) 50%, rgba(37,99,235,0.02) 70%, transparent 100%)",
              animation: "beamMoveMirror 12s linear infinite",
              animationDelay: "1.2s",
              filter: "blur(20px)",
            }}
          />
        </div>
      ) : null}

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-10 xl:gap-14">
          <div className="order-1 flex flex-col lg:col-span-3">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex w-fit max-w-full items-center rounded-pill border border-[rgba(37,99,235,0.3)] bg-[rgba(37,99,235,0.12)] px-3.5 py-1.5 text-[13px] font-medium leading-snug text-[#93C5FD]">
                {t("hero.pill")}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-[min(100%,28rem)] font-heading text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.08] tracking-tight text-white sm:max-w-[32rem] lg:max-w-[36rem]"
            >
              <span className="block">{t("hero.h1l1")}</span>
              <span className="block">{t("hero.h1l2")}</span>
              <span className="block text-[#2563EB] italic">{t("hero.h1l3")}</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-[520px] text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.55)]"
            >
              {t("hero.lead")}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link href={ROUTES.kontakt} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                {t("common.bookFreeAudit")}
              </Link>
              <Link href={ROUTES.fallstudier} className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
                {t("common.seeResults")}
              </Link>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 space-y-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <div className="flex items-center">
                  <div className="flex -space-x-2.5">
                    {[
                      "from-violet-500 to-indigo-600",
                      "from-emerald-500 to-teal-600",
                      "from-amber-500 to-orange-600",
                    ].map((gradient, i) => (
                      <div
                        key={i}
                        className={cn(
                          "size-9 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br shadow-inner",
                          gradient
                        )}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm font-medium text-[rgba(255,255,255,0.65)]">{t("hero.socialProof")}</p>
                </div>
                <span className="hidden text-[rgba(255,255,255,0.25)] sm:inline" aria-hidden>
                  ·
                </span>
                <div className="flex items-center gap-1.5 text-sm text-[rgba(255,255,255,0.55)]">
                  <span className="text-amber-400" aria-hidden>
                    ★
                  </span>
                  <span className="font-heading text-base font-extrabold text-white">4,9/5</span>
                  <span className="text-[rgba(255,255,255,0.45)]">{t("hero.reviewsLine")}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[rgba(255,255,255,0.4)]">
                <span>{t("hero.check1")}</span>
                <span>{t("hero.check2")}</span>
                <span>{t("hero.check3")}</span>
              </div>
            </motion.div>
          </div>

          <div className="order-2 flex justify-center lg:col-span-2 lg:justify-end">
            <motion.div
              className="relative w-full max-w-[380px]"
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: 0.15,
              }}
            >
              <div
                className="-rotate-2 transition-transform duration-500 lg:rotate-[-2deg]"
                style={{ transformOrigin: "center center" }}
              >
                <div className="relative rotate-2 rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[#0F1629] p-5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:p-6">
                  <motion.div
                    className="absolute -right-2 -top-2 z-20 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:-right-3 sm:-top-3 sm:px-3.5 sm:py-2 sm:text-sm"
                    animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                    transition={reduceMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {t("hero.dashBadge")}
                  </motion.div>

                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.45)]">
                    {t("hero.dashTitle")}
                  </p>
                  <p className="mt-1 text-[11px] text-[rgba(255,255,255,0.3)]">{t("hero.dashSub")}</p>
                  <p className="mt-3 font-heading text-[36px] font-extrabold leading-none text-[#2563EB]">
                    {t("hero.dashRevenue")}
                  </p>
                  <span className="mt-2 inline-flex rounded-pill bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    {t("hero.dashTrend")}
                  </span>

                  <div className="mt-6">
                    <ChartBars reduceMotion={!!reduceMotion} />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {dashboardMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5"
                      >
                        <span className="text-[10px] uppercase tracking-wider text-[rgba(255,255,255,0.4)]">
                          {m.label}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-1.5">
                          <p className="font-heading text-sm font-bold text-white">{m.value}</p>
                          <span className="text-[11px] font-medium text-emerald-400/90">{m.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollDiscover}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[rgba(255,255,255,0.45)] transition-colors hover:text-[rgba(255,255,255,0.75)] sm:bottom-[max(2rem,env(safe-area-inset-bottom,0px))]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        aria-label={t("hero.scrollAria")}
      >
        <span className="text-xs font-medium tracking-wide">{t("hero.scrollHint")}</span>
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={reduceMotion ? {} : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  );
}
