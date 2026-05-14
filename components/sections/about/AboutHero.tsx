"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { buttonVariants } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const badges = ["Google Premier Partner", "Microsoft Premier Partner"] as const;

export default function AboutHero() {
  const { t } = useLocale();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px 10% 0px",
  });

  return (
    <section
      className="relative overflow-x-hidden bg-[#060810] px-[5%] pb-20 pt-32 md:px-[6%] md:pb-[100px] md:pt-40 lg:pt-[160px]"
      aria-labelledby="about-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div ref={ref} className="relative mx-auto max-w-[800px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-4 justify-center text-[rgba(255,255,255,0.4)]">{t("aboutHero.label")}</SectionLabel>
        </motion.div>

        <motion.h1
          id="about-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(48px,6vw,80px)] font-extrabold leading-[1.05] text-white"
        >
          <span className="block">{t("aboutHero.h1a")}</span>
          <span className="block text-[#2563EB] italic">{t("aboutHero.h1b")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mb-10 mt-5 max-w-[560px] text-center text-lg font-normal text-[rgba(255,255,255,0.5)]"
        >
          {t("aboutHero.lead")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: "primary" }), "min-w-[200px] justify-center")}
          >
            {t("aboutHero.cta1")}
          </Link>
          <Link
            href={ROUTES.fallstudier}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "min-w-[200px] justify-center border-[rgba(255,255,255,0.12)]"
            )}
          >
            {t("aboutHero.cta2")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          {badges.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-5 py-2.5 text-[13px] text-[rgba(255,255,255,0.5)]"
            >
              ✓ {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
