"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import FAQ from "@/components/ui/FAQ";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getContactFaqs } from "@/lib/i18n/content/contact-faq-i18n";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ContactFAQ() {
  const { locale, t } = useLocale();
  const items = useMemo(() => getContactFaqs(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-labelledby="contact-faq-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <SectionLabel className="mb-3 justify-center text-[rgba(255,255,255,0.35)]">
            {t("contactFaqPage.label")}
          </SectionLabel>
          <h2
            id="contact-faq-heading"
            className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-tight text-white"
          >
            <span className="block">{t("contactFaqPage.h2Line1")}</span>
            <span className="block text-[#2563EB] italic">{t("contactFaqPage.h2Line2")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <FAQ items={items} accentColor="#2563EB" />
        </motion.div>
      </div>
    </section>
  );
}
