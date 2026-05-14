import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MetaAdsApproach from "@/components/sections/meta-ads/MetaAdsApproach";
import MetaAdsCaseStudy from "@/components/sections/meta-ads/MetaAdsCaseStudy";
import MetaAdsClosingSections from "@/components/sections/meta-ads/MetaAdsClosingSections";
import MetaAdsFormats from "@/components/sections/meta-ads/MetaAdsFormats";
import MetaAdsHero from "@/components/sections/meta-ads/MetaAdsHero";
import MetaAdsIncludes from "@/components/sections/meta-ads/MetaAdsIncludes";

export const metadata: Metadata = {
  title: "Meta Ads Sverige | Crisha Marketing | Facebook och Instagram-byrå",
  description:
    "Certifierad Meta Ads-byrå i Sverige. Kampanjer med ROAS 4,8× i snitt. TOF/MOF/BOF-struktur, UGC creatives och daglig optimering. Gratis revision.",
  keywords:
    "meta ads sverige, facebook ads sverige, instagram annonsering, meta ads byrå, facebook kampanjer, roas facebook ads, performance marketing sverige, facebook ads manager, retargeting facebook, digital byrå sverige",
};

export default function MetaAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
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
