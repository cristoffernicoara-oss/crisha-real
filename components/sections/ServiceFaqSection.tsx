"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FAQ, { type FAQItem } from "@/components/ui/FAQ";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";

type ServiceFaqSectionProps = {
  items: FAQItem[];
  accentColor: string;
  headingLine1: string;
  headingAccent: string;
  label?: string;
  ariaHeadingId?: string;
};

export default function ServiceFaqSection({
  items,
  accentColor,
  headingLine1,
  headingAccent,
  label,
  ariaHeadingId = "service-faq-block-heading",
}: ServiceFaqSectionProps) {
  const { t } = useLocale();
  const faqLabel = label ?? t("serviceShared.faqBlockLabel");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby={ariaHeadingId}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-[760px] text-center"
      >
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{faqLabel}</SectionLabel>
        <h2
          id={ariaHeadingId}
          className="mb-10 font-heading text-[clamp(28px,3.5vw,40px)] font-bold leading-tight text-white"
        >
          {headingLine1}
          <span className="italic" style={{ color: accentColor }}>
            {headingAccent}
          </span>
        </h2>
      </motion.div>
      <div className="mx-auto max-w-[760px]">
        <FAQ items={items} accentColor={accentColor} />
      </div>
    </section>
  );
}
