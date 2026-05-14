"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import ServiceCrossSell from "@/components/sections/ServiceCrossSell";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import ServiceProcessTimeline from "@/components/sections/ServiceProcessTimeline";
import {
  getTiktokAdsCrossSell,
  getTiktokAdsFaqs,
  getTiktokAdsPageCopy,
  getTiktokAdsProcessSteps,
} from "@/lib/service-pages/tiktok-ads-content";
import { useLocale } from "@/lib/i18n/locale-context";

export default function TikTokAdsClosingSections() {
  const { locale } = useLocale();
  const copy = getTiktokAdsPageCopy(locale);

  return (
    <>
      <ServiceProcessTimeline
        steps={getTiktokAdsProcessSteps(locale)}
        color="#EC4899"
        titleLine1={copy.processTitleLine1}
        titleAccent={copy.processTitleAccent}
        subtitle={copy.processSubtitle}
        ariaHeadingId="tiktok-ads-process-heading"
      />
      <ServiceFaqSection
        items={getTiktokAdsFaqs(locale)}
        accentColor="#EC4899"
        headingLine1={copy.faqHeadingLine1}
        headingAccent={copy.faqHeadingAccent}
        ariaHeadingId="tiktok-ads-faq-heading"
      />
      <ServiceCrossSell title={copy.crossSellTitle} items={getTiktokAdsCrossSell(locale)} color="#EC4899" />
      <ContactCTA defaultService="tiktok-ads" />
    </>
  );
}
