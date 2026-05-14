import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GoogleAdsCampaigns from "@/components/sections/google-ads/GoogleAdsCampaigns";
import GoogleAdsCaseStudy from "@/components/sections/google-ads/GoogleAdsCaseStudy";
import GoogleAdsClosingSections from "@/components/sections/google-ads/GoogleAdsClosingSections";
import GoogleAdsHero from "@/components/sections/google-ads/GoogleAdsHero";
import GoogleAdsKeywords from "@/components/sections/google-ads/GoogleAdsKeywords";
import GoogleAdsQualityScore from "@/components/sections/google-ads/GoogleAdsQualityScore";

export const metadata: Metadata = {
  title: "Google Ads Sverige | Crisha Marketing | Certifierad Google Ads-byrå",
  description:
    "Google Ads-byrå i Sverige. Search, Shopping och Performance Max med CTR 7,1% och Quality Score 7,2/10. Betala mindre än konkurrenterna. Gratis revision.",
};

export default function GoogleAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
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
