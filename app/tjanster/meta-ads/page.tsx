import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MetaAdsApproach from "@/components/sections/meta-ads/MetaAdsApproach";
import MetaAdsCaseStudy from "@/components/sections/meta-ads/MetaAdsCaseStudy";
import MetaAdsClosingSections from "@/components/sections/meta-ads/MetaAdsClosingSections";
import MetaAdsFormats from "@/components/sections/meta-ads/MetaAdsFormats";
import MetaAdsHero from "@/components/sections/meta-ads/MetaAdsHero";
import MetaAdsIncludes from "@/components/sections/meta-ads/MetaAdsIncludes";
import { buildServiceJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Meta Ads Sverige | Crisha Marketing | Facebook och Instagram-byrå",
  description:
    "Certifierad Meta Ads-byrå i Sverige. Kampanjer med ROAS 4,8× i snitt. TOF/MOF/BOF-struktur, UGC creatives och daglig optimering. Gratis revision.",
  keywords:
    "meta ads sverige, facebook ads sverige, instagram annonsering, meta ads byrå, facebook kampanjer, roas facebook ads, performance marketing sverige, facebook ads manager, retargeting facebook, digital byrå sverige",
};

const serviceJsonLd = buildServiceJsonLd({
  name: "Meta Ads Sverige",
  alternateName: "Facebook & Instagram Ads byrå",
  serviceType: "Meta Ads",
  description:
    "Crisha Marketing hanterar Meta Ads (Facebook och Instagram) för svenska företag med genomsnittlig ROAS 4,8×, full funnel-struktur och daglig optimering.",
  url: `${SITE_URL}/tjanster/meta-ads`,
  lowPrice: "3000",
});

export default function MetaAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
      <Script
        id="meta-ads-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <MetaAdsHero />
      <MetaAdsApproach />
      <MetaAdsIncludes />
      <MetaAdsCaseStudy />
      <MetaAdsFormats />
      <MetaAdsClosingSections />
      <Footer />
    </main>
  );
}
