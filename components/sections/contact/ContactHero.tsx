"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export default function ContactHero() {
  const { t } = useLocale();
  const pills = [
    { key: "p1", text: t("contactHero.p1") },
    { key: "p2", text: t("contactHero.p2") },
    { key: "p3", text: t("contactHero.p3") },
  ] as const;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-12 pt-28 md:px-[6%] md:pb-16 md:pt-[140px]"
      aria-labelledby="contact-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[560px] max-w-[100vw]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[680px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-4 justify-center text-[rgba(255,255,255,0.35)]">{t("contactHero.label")}</SectionLabel>
        </motion.div>

        <motion.h1
          id="contact-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="font-heading text-[clamp(44px,6vw,72px)] font-extrabold leading-[1.05] text-white"
        >
          <span className="block">{t("contactHero.h1")}</span>
          <span className="block text-[#2563EB] italic">{t("contactHero.h2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[520px] text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.5)]"
        >
          {t("contactHero.lead")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {pills.map((p) => (
            <span
              key={p.key}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]",
                "px-[18px] py-2 text-[13px] text-[rgba(255,255,255,0.5)]"
              )}
            >
              {p.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
