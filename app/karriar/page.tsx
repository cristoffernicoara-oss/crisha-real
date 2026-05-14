import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CariereForm from "@/components/sections/cariere/CariereForm";
import CariereHero from "@/components/sections/cariere/CariereHero";
import CariereInternship from "@/components/sections/cariere/CariereInternship";
import CarierePositions from "@/components/sections/cariere/CarierePositions";
import CariereValues from "@/components/sections/cariere/CariereValues";

export const metadata: Metadata = {
  title: "Karriär & praktik | Crisha Marketing",
  description:
    "Jobba inom digital marknadsföring? Crisha Marketing söker kollegor inom Meta Ads, Google Ads, TikTok Ads och webbdesign. Remote med bas i Malmö, heltid och praktik.",
};

export default function CarierePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <CariereHero />
      <CariereValues />
      <CarierePositions />
      <CariereInternship />
      <CariereForm />
      <Footer />
    </main>
  );
}
