import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TikTokAdsCaseStudy from "@/components/sections/tiktok-ads/TikTokAdsCaseStudy";
import TikTokAdsClosingSections from "@/components/sections/tiktok-ads/TikTokAdsClosingSections";
import TikTokAdsCreative from "@/components/sections/tiktok-ads/TikTokAdsCreative";
import TikTokAdsFormats from "@/components/sections/tiktok-ads/TikTokAdsFormats";
import TikTokAdsHero from "@/components/sections/tiktok-ads/TikTokAdsHero";
import TikTokAdsWhy from "@/components/sections/tiktok-ads/TikTokAdsWhy";
import { buildServiceJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "TikTok Ads Sverige | Crisha Marketing | Native content och UGC",
  description:
    "TikTok Ads-byrå i Sverige. Native UGC-kampanjer med CPM 70% lägre än Meta. 280K+ räckvidd per kampanj. Gratis revision idag.",
};

const serviceJsonLd = buildServiceJsonLd({
  name: "TikTok Ads Sverige",
  alternateName: "TikTok Ads byrå",
  serviceType: "TikTok Ads",
  description:
    "Crisha Marketing kör TikTok Ads för svenska varumärken med native UGC, Spark Ads och datadriven skalning för räckvidd och försäljning.",
  url: `${SITE_URL}/tjanster/tiktok-ads`,
  lowPrice: "3000",
});

export default function TikTokAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
      <Script
        id="tiktok-ads-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
