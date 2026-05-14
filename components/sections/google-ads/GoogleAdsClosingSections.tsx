"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import ServiceCrossSell from "@/components/sections/ServiceCrossSell";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import ServiceProcessTimeline from "@/components/sections/ServiceProcessTimeline";
import {
  getGoogleAdsCrossSell,
  getGoogleAdsFaqs,
  getGoogleAdsPageCopy,
  getGoogleAdsProcessSteps,
} from "@/lib/service-pages/google-ads-content";
import { useLocale } from "@/lib/i18n/locale-context";

export default function GoogleAdsClosingSections() {
  const { locale } = useLocale();
  const copy = getGoogleAdsPageCopy(locale);

  return (
    <>
      <ServiceProcessTimeline
        steps={getGoogleAdsProcessSteps(locale)}
        color="#0EA5E9"
        titleLine1={copy.processTitleLine1}
        titleAccent={copy.processTitleAccent}
        subtitle={copy.processSubtitle}
        ariaHeadingId="google-ads-process-heading"
      />
      <ServiceFaqSection
        items={getGoogleAdsFaqs(locale)}
        accentColor="#0EA5E9"
        headingLine1={copy.faqHeadingLine1}
        headingAccent={copy.faqHeadingAccent}
        ariaHeadingId="google-ads-faq-heading"
      />
      <ServiceCrossSell title={copy.crossSellTitle} items={getGoogleAdsCrossSell(locale)} color="#0EA5E9" />
      <ContactCTA defaultService="google-ads" />
    </>
  );
}
