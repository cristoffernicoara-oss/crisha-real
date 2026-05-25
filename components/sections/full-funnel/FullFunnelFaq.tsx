"use client";

import { useMemo } from "react";

import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import { getFullFunnelFaqItems } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";

export default function FullFunnelFaq() {
  const { locale, t } = useLocale();
  const items = useMemo(() => getFullFunnelFaqItems(locale), [locale]);

  return (
    <ServiceFaqSection
      items={items}
      accentColor="#06B6D4"
      headingLine1={locale === "en" ? "Common questions" : "Vanliga frågor"}
      headingAccent={locale === "en" ? " about Full Funnel." : " om Full funnel."}
      label={t("serviceShared.faqBlockLabel")}
      ariaHeadingId="full-funnel-faq-heading"
    />
  );
}
