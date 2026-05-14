"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { buttonVariants } from "@/components/ui/Button";
import { getTikTokHeroUi } from "@/lib/i18n/content/services/tiktokAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function TikTokAdsHero() {
  const { locale, t } = useLocale();
  const ui = useMemo(() => getTikTokHeroUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 8% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-20 pt-[120px] md:px-[6%] md:pb-20 md:pt-[160px]"
      aria-labelledby="tiktok-ads-hero-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background: `radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)`,
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
            className="inline-flex max-w-full flex-wrap rounded-pill border border-[rgba(236,72,153,0.25)] bg-[rgba(236,72,153,0.1)] px-3.5 py-1.5 text-xs text-[#F9A8D4]"
          >
            {ui.pill}
          </motion.div>

          <motion.h1
            id="tiktok-ads-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-5 font-heading text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] text-white"
          >
            {ui.h1a}
            <br />
            {ui.h1b}
            <br />
            <span className="text-[#EC4899] italic">{ui.h1c}</span>
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
          className="relative mx-auto flex justify-center lg:mx-0"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-1/4 z-[2] rounded-xl border border-[rgba(236,72,153,0.35)] bg-[rgba(236,72,153,0.1)] px-3 py-2 text-xs font-semibold text-[#F472B6] shadow-lg md:left-0"
          >
            {ui.floatCpm}
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/3 z-[2] rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] px-3 py-2 text-xs font-semibold text-[#4ADE80] shadow-lg md:right-0"
          >
            {ui.floatViews}
          </motion.div>

          <div
            className="relative w-[220px] overflow-hidden rounded-[36px] border border-[rgba(236,72,153,0.2)] bg-[#0F1629] shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]"
            style={{ height: 380 }}
          >
            <div className="mx-auto mt-3 h-1.5 w-20 rounded-pill bg-[rgba(255,255,255,0.1)]" />
            <div className="relative p-2">
              <div
                className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[20px]"
                style={{
                  background: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(139,92,246,0.2))",
                }}
              >
                <Play className="size-10 text-white/50" strokeWidth={1.5} fill="currentColor" />
                <div className="absolute bottom-2 right-2 flex flex-col items-center gap-3 text-center text-white">
                  <div>
                    <span className="text-lg" aria-hidden>
                      ❤️
                    </span>
                    <p className="text-[10px] font-medium">12K</p>
                  </div>
                  <div>
                    <span className="text-lg" aria-hidden>
                      💬
                    </span>
                    <p className="text-[10px] font-medium">3.2K</p>
                  </div>
                  <div>
                    <span className="text-lg" aria-hidden>
                      ↗️
                    </span>
                    <p className="text-[10px] font-medium">891</p>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-14">
                  <p className="mb-1 text-[10px] text-[rgba(255,255,255,0.5)]">{ui.mockViews}</p>
                  <span className="inline-block rounded-lg bg-[#EC4899] px-3 py-1.5 text-[11px] font-semibold text-white">
                    {ui.mockCta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
