"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import ServiceCrossSell from "@/components/sections/ServiceCrossSell";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import ServiceProcessTimeline from "@/components/sections/ServiceProcessTimeline";
import {
  getMetaAdsCrossSell,
  getMetaAdsFaqs,
  getMetaAdsPageCopy,
  getMetaAdsProcessSteps,
} from "@/lib/service-pages/meta-ads-content";
import { useLocale } from "@/lib/i18n/locale-context";

export default function MetaAdsClosingSections() {
  const { locale } = useLocale();
  const copy = getMetaAdsPageCopy(locale);

  return (
    <>
      <ServiceProcessTimeline
        steps={getMetaAdsProcessSteps(locale)}
        color="#2563EB"
        titleLine1={copy.processTitleLine1}
        titleAccent={copy.processTitleAccent}
        subtitle={copy.processSubtitle}
        ariaHeadingId="meta-ads-process-heading"
      />
      <ServiceFaqSection
        items={getMetaAdsFaqs(locale)}
        accentColor="#2563EB"
        headingLine1={copy.faqHeadingLine1}
        headingAccent={copy.faqHeadingAccent}
        ariaHeadingId="meta-ads-faq-heading"
      />
      <ServiceCrossSell title={copy.crossSellTitle} items={getMetaAdsCrossSell(locale)} color="#2563EB" />
      <ContactCTA defaultService="meta-ads" />
    </>
  );
}
