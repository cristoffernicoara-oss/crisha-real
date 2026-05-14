import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudiesGrid from "@/components/sections/case-studies/CaseStudiesGrid";
import CaseStudiesHero from "@/components/sections/case-studies/CaseStudiesHero";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Fallstudier | Crisha Marketing | Verkliga resultat",
  description:
    "Se hur Crisha Marketing hjälpt företag växa med Meta Ads, Google Ads, TikTok Ads och webbdesign. Mätbara resultat, nöjda kunder och case från Sverige och EU.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <ContactCTA />
      <Footer />
    </main>
  );
}
