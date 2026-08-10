import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GoogleAdsCampaigns from "@/components/sections/google-ads/GoogleAdsCampaigns";
import GoogleAdsCaseStudy from "@/components/sections/google-ads/GoogleAdsCaseStudy";
import GoogleAdsClosingSections from "@/components/sections/google-ads/GoogleAdsClosingSections";
import GoogleAdsHero from "@/components/sections/google-ads/GoogleAdsHero";
import GoogleAdsKeywords from "@/components/sections/google-ads/GoogleAdsKeywords";
import GoogleAdsQualityScore from "@/components/sections/google-ads/GoogleAdsQualityScore";
import { buildServiceJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Google Ads Sverige | Crisha Marketing | Certifierad Google Ads-byrå",
  description:
    "Google Ads-byrå i Sverige. Search, Shopping och Performance Max med CTR 7,1% och Quality Score 7,2/10. Betala mindre än konkurrenterna. Gratis revision.",
};

const serviceJsonLd = buildServiceJsonLd({
  name: "Google Ads Sverige",
  alternateName: "Google Ads byrå",
  serviceType: "Google Ads",
  description:
    "Crisha Marketing är en Google Ads-byrå i Sverige som bygger Search, Shopping och Performance Max-kampanjer med fokus på kvalificerade leads och lönsam ROAS.",
  url: `${SITE_URL}/tjanster/google-ads`,
  lowPrice: "3000",
});

export default function GoogleAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
      <Script
        id="google-ads-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <GoogleAdsHero />
      <GoogleAdsKeywords />
      <GoogleAdsCampaigns />
      <GoogleAdsQualityScore />
      <GoogleAdsCaseStudy />
      <GoogleAdsClosingSections />
      <Footer />
    </main>
  );
}
