import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactCTA from "@/components/sections/ContactCTA";
import FullFunnelChannels from "@/components/sections/full-funnel/FullFunnelChannels";
import FullFunnelDeliver from "@/components/sections/full-funnel/FullFunnelDeliver";
import FullFunnelFaq from "@/components/sections/full-funnel/FullFunnelFaq";
import FullFunnelHero from "@/components/sections/full-funnel/FullFunnelHero";
import FullFunnelProcess from "@/components/sections/full-funnel/FullFunnelProcess";
import FullFunnelStages from "@/components/sections/full-funnel/FullFunnelStages";
import FullFunnelWhy from "@/components/sections/full-funnel/FullFunnelWhy";

export const metadata: Metadata = {
  title: "Full funnel | Crisha Marketing | Hela köpresan över Meta, Google, TikTok & webb",
  description:
    "Sammanhängande funnel från första klick till återköp: TOF/MOF/BOF, spårning, kanaler och optimering i ett uppdrag. Strategi för betald media och landningssidor som jobbar tillsammans.",
  keywords:
    "full funnel, performance marketing, TOF MOF BOF, attribution, meta google tiktok, landningssida CRO, digital byrå sverige",
};

export default function FullFunnelPage() {
  return (
    <main className="min-h-screen bg-[#060810] pt-page-nav">
      <Navbar />
      <FullFunnelHero />
      <FullFunnelWhy />
      <FullFunnelStages />
      <FullFunnelChannels />
      <FullFunnelDeliver />
      <FullFunnelProcess />
      <FullFunnelFaq />
      <ContactCTA defaultService="full-funnel" />
      <Footer />
    </main>
  );
}
