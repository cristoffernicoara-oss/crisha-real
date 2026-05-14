import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Om oss | Crisha Marketing",
  description:
    "Lär känna teamet bakom resultaten. Crisha Marketing arbetar med Meta Ads, Google Ads, TikTok Ads, webbdesign och varumärke. Bas i Malmö, verksamma i hela Sverige.",
};

export default function DespreNoiPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <ContactCTA />
      <Footer />
    </main>
  );
}
