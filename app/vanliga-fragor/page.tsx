import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactCTA from "@/components/sections/ContactCTA";
import HomeFAQ from "@/components/sections/HomeFAQ";
import { homeFAQs } from "@/lib/home-faq";
import { buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vanliga frågor",
  description:
    "Vanliga frågor om Crisha Marketing: priser, Meta Ads, Google Ads, TikTok Ads, webbdesign, resultat och hur vi arbetar med svenska företag.",
};

const faqJsonLd = buildFaqPageJsonLd(homeFAQs);

export default function VanligaFragorPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Script
        id="faq-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <HomeFAQ headingAs="h1" className="border-t-0" />
      <ContactCTA />
      <Footer />
    </main>
  );
}
