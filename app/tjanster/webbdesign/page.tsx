import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WebDesignCRO from "@/components/sections/web-design/WebDesignCRO";
import WebDesignContactCTA from "@/components/sections/web-design/WebDesignContactCTA";
import WebDesignFAQ from "@/components/sections/web-design/WebDesignFAQ";
import WebDesignHero from "@/components/sections/web-design/WebDesignHero";
import WebDesignPerformance from "@/components/sections/web-design/WebDesignPerformance";
import WebDesignPlatforms from "@/components/sections/web-design/WebDesignPlatforms";
import WebDesignPortfolio from "@/components/sections/web-design/WebDesignPortfolio";
import WebDesignProcess from "@/components/sections/web-design/WebDesignProcess";
import WebDesignWhat from "@/components/sections/web-design/WebDesignWhat";
import { buildServiceJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Webbdesign Sverige | Crisha Marketing | Webbplatser som konverterar",
  description:
    "Webbdesignbyrå i Sverige. Skräddarsydda webbplatser som laddar under 2 sekunder och konverterar besökare till kunder. Next.js, Webflow & Shopify. +180% konvertering i snitt. Gratis offert.",
};

const serviceJsonLd = buildServiceJsonLd({
  name: "Webbdesign Sverige",
  alternateName: "Web Design Sverige",
  serviceType: "Webbdesign",
  description:
    "Professionell webbdesign för svenska företag. Landningssidor, presentationswebbplatser och e-handelslösningar med PageSpeed 95+ och +180% konverteringsökning i snitt.",
  url: `${SITE_URL}/tjanster/webbdesign`,
  lowPrice: "8000",
});

export default function WebbdesignServicePage() {
  return (
    <>
      <Script id="webbdesign-service-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceJsonLd)}
      </Script>
      <main className="min-h-screen bg-[#060810] pt-page-nav">
        <Navbar />
        <WebDesignHero />
        <WebDesignWhat />
        <WebDesignPlatforms />
        <WebDesignPortfolio />
        <WebDesignPerformance />
        <WebDesignCRO />
        <WebDesignProcess />
        <WebDesignFAQ />
        <WebDesignContactCTA />
        <Footer />
      </main>
    </>
  );
}
