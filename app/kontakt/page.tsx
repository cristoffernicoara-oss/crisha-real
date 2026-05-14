import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactMain from "@/components/sections/contact/ContactMain";

export const metadata: Metadata = {
  title: "Kontakt | Crisha Marketing | Gratis revision",
  description:
    "Kontakta Crisha Marketing för en kostnadsfri revision av era annonskonton och er webbplats. Svar inom 24 timmar. Vi arbetar med Meta Ads, Google Ads, TikTok Ads och webbdesign, har bas i Malmö och är verksamma i hela Sverige.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <ContactHero />
      <ContactMain />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
