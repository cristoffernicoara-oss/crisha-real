import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TikTokAdsCaseStudy from "@/components/sections/tiktok-ads/TikTokAdsCaseStudy";
import TikTokAdsClosingSections from "@/components/sections/tiktok-ads/TikTokAdsClosingSections";
import TikTokAdsCreative from "@/components/sections/tiktok-ads/TikTokAdsCreative";
import TikTokAdsFormats from "@/components/sections/tiktok-ads/TikTokAdsFormats";
import TikTokAdsHero from "@/components/sections/tiktok-ads/TikTokAdsHero";
import TikTokAdsWhy from "@/components/sections/tiktok-ads/TikTokAdsWhy";

export const metadata: Metadata = {
  title: "TikTok Ads Sverige | Crisha Marketing | Native content och UGC",
  description:
    "TikTok Ads-byrå i Sverige. Native UGC-kampanjer med CPM 70% lägre än Meta. 280K+ räckvidd per kampanj. Gratis revision idag.",
};

export default function TikTokAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
      <Navbar />
      <TikTokAdsHero />
      <TikTokAdsWhy />
      <TikTokAdsCreative />
      <TikTokAdsFormats />
      <TikTokAdsCaseStudy />
      <TikTokAdsClosingSections />
      <Footer />
    </main>
  );
}
