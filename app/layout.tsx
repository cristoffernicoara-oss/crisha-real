import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

import "@/styles/globals.css";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { CONTACT } from "@/lib/constants";
import { buildFaqPageJsonLd } from "@/lib/home-faq";
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = "https://crishamarketing.se";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": siteUrl,
  name: "Crisha Marketing",
  url: siteUrl,
  description:
    "Digital marknadsföringsbyrå i Sverige specialiserad på Meta Ads, Google Ads, TikTok Ads och webbdesign.",
  foundingDate: "2020",
  founders: [
    {
      "@type": "Person",
      name: "Shang",
      jobTitle: "Medgrundare & Performance Marketing Specialist",
      telephone: "+46731474731",
    },
    {
      "@type": "Person",
      name: "Cristoffer",
      jobTitle: "Medgrundare & Creative Director",
      telephone: "+46723307113",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressCountry: "SE",
  },
  email: CONTACT.email,
  telephone: "+46723307113",
  areaServed: {
    "@type": "Country",
    name: "Sverige",
  },
  serviceType: [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Webbdesign",
    "Performance Marketing",
    "Digital Marknadsföring",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "40",
    bestRating: "5",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT.email,
    telephone: "+46723307113",
    availableLanguage: ["Swedish", "English"],
    areaServed: "SE",
  },
  sameAs: [
    "https://facebook.com/crishamarketing",
    "https://instagram.com/crishamarketing",
    "https://tiktok.com/@crishamarketing",
    "https://linkedin.com/company/crishamarketing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Crisha Marketing",
  url: siteUrl,
  inLanguage: "sv-SE",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crisha Marketing | Digital marknadsföringsbyrå i Sverige",
    template: "%s | Crisha Marketing",
  },
  description:
    "Crisha Marketing är en digital marknadsföringsbyrå i Sverige specialiserad på Meta Ads, Google Ads, TikTok Ads och webbdesign. Genomsnittlig ROAS 4,8×. Gratis revision. Resultat inom 30 dagar.",
  keywords: [
    "digital marknadsföring Sverige",
    "marknadsföringsbyrå Sverige",
    "Meta Ads Sverige",
    "Google Ads byrå Sverige",
    "TikTok Ads Sverige",
    "webbdesign Sverige",
    "Facebook annonsering Sverige",
    "betald annonsering Sverige",
    "performance marketing Sverige",
    "social media byrå Sverige",
    "Instagram annonsering Sverige",
    "konverteringsoptimering Sverige",
    "landningssida Sverige",
    "digital byrå Malmö",
    "marknadsföringsbyrå Malmö",
  ],
  authors: [
    { name: "Shang", url: siteUrl },
    { name: "Cristoffer", url: siteUrl },
  ],
  creator: "Crisha Marketing",
  publisher: "Crisha Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: "Crisha Marketing",
    title: "Crisha Marketing | Digital marknadsföringsbyrå i Sverige",
    description:
      "Meta Ads, Google Ads, TikTok Ads och webbdesign för svenska företag. ROAS 4,8×. Gratis revision idag.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crisha Marketing, digital marknadsföringsbyrå i Sverige",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crisha Marketing | Digital marknadsföring Sverige",
    description: "Meta Ads, Google Ads, TikTok Ads, webbdesign. ROAS 4,8×.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      sv: siteUrl,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /** Lets users pinch-zoom (accessibility + device quirks on iOS/Android). */
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  /** Android Chrome: resize layout when keyboard opens instead of overlapping fields. */
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060810" },
    { media: "(prefers-color-scheme: light)", color: "#060810" },
  ],
};

const faqJsonLd = buildFaqPageJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={cn("dark theme", bricolageGrotesque.variable, instrumentSans.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <LocaleProvider>
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="jsonld-faqpage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <CookieBanner />
        <ScrollToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
