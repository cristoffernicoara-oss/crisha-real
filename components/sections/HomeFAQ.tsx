"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeFAQsEn } from "@/lib/i18n/home-faq-en";
import { homeFAQs } from "@/lib/home-faq";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export default function HomeFAQ() {
  const { locale, t } = useLocale();
  const items = locale === "en" ? homeFAQsEn : homeFAQs;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      id="faq"
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <SectionLabel className="mb-4 justify-center text-[rgba(255,255,255,0.35)]">
            {t("homeFaq.label")}
          </SectionLabel>
          <h2
            id="home-faq-heading"
            className="font-heading text-[clamp(36px,4vw,52px)] font-bold leading-tight text-white"
          >
            <span className="block sm:inline">{t("homeFaq.h2a")}</span>{" "}
            <span className="text-[#2563EB] italic">{t("homeFaq.h2b")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-center text-base text-[rgba(255,255,255,0.45)]">
            {t("homeFaq.sub")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-14"
        >
          <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
            {items.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629]"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-white",
                      "transition-colors hover:bg-[rgba(255,255,255,0.02)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,99,235,0.5)]",
                      "data-[state=open]:text-[#93C5FD]"
                    )}
                  >
                    <span className="pr-2">{item.question}</span>
                    <ChevronDown
                      className="size-5 shrink-0 text-[rgba(255,255,255,0.35)] transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div
                    className="border-t border-[rgba(255,255,255,0.06)] px-5 pb-5 pt-3 text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.55)]"
                    style={{ borderTopColor: "rgba(37,99,235,0.12)" }}
                  >
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
