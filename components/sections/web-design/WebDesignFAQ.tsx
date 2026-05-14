"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import FAQ from "@/components/ui/FAQ";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWebDesignFaqSectionUi } from "@/lib/i18n/content/services/web-design";
import { getWebDesignFaqs } from "@/lib/service-pages/web-design-content";
import { useLocale } from "@/lib/i18n/locale-context";

export default function WebDesignFAQ() {
  const { locale } = useLocale();
  const head = useMemo(() => getWebDesignFaqSectionUi(locale), [locale]);
  const faqs = useMemo(() => getWebDesignFaqs(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-labelledby="web-design-faq-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-[760px] text-center"
      >
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{head.label}</SectionLabel>
        <h2
          id="web-design-faq-heading"
          className="mb-10 font-heading text-[clamp(28px,3.5vw,44px)] font-bold leading-tight text-white md:mb-10"
        >
          {head.h2a}
          <span className="text-[#2563EB] italic">{head.h2b}</span>
        </h2>
      </motion.div>
      <div className="mx-auto max-w-[760px]">
        <FAQ items={faqs} />
      </div>
    </section>
  );
}
