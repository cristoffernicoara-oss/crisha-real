import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Blog from "@/components/sections/Blog";
import CaseStudies from "@/components/sections/CaseStudies";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import HomeFAQ from "@/components/sections/HomeFAQ";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import { homeFAQs } from "@/lib/home-faq";
import { buildFaqPageJsonLd } from "@/lib/schema";

const faqJsonLd = buildFaqPageJsonLd(homeFAQs);

export default function HomePage() {
  return (
    <main className="min-h-screen pt-page-nav">
      <Script
        id="jsonld-faqpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <HomeFAQ />
      <Blog />
      <ContactCTA />
      <Footer />
    </main>
  );
}
