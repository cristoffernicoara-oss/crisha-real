import type { CaseStudy } from "@/lib/case-study-types";
import { CONTACT } from "@/lib/constants";
import { SITE_URL } from "@/lib/site-url";

const siteUrl = SITE_URL;

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": `${siteUrl}/#organization`,
    name: "Crisha Marketing",
    legalName: "Crisha Marketing AB",
    url: siteUrl,
    description:
      "Crisha Marketing är en svensk digital marknadsföringsbyrå i Malmö specialiserad på Meta Ads, Google Ads, TikTok Ads och webbdesign. Genomsnittlig ROAS 4,8×.",
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
      streetAddress: CONTACT.streetAddress,
      postalCode: CONTACT.postalCode,
      addressLocality: CONTACT.city,
      addressCountry: "SE",
    },
    email: CONTACT.email,
    telephone: "+46723307113",
    areaServed: {
      "@type": "Country",
      name: "Sverige",
    },
    knowsAbout: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "Webbdesign",
      "Performance Marketing",
      "Digital Marknadsföring",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Crisha Marketing tjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meta Ads",
            url: `${siteUrl}/tjanster/meta-ads`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads",
            url: `${siteUrl}/tjanster/google-ads`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TikTok Ads",
            url: `${siteUrl}/tjanster/tiktok-ads`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webbdesign",
            url: `${siteUrl}/tjanster/webbdesign`,
          },
        },
      ],
    },
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
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Crisha Marketing",
    url: siteUrl,
    inLanguage: "sv-SE",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function buildFaqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  alternateName?: string;
  serviceType: string;
  description: string;
  url: string;
  lowPrice?: string;
};

export function buildServiceJsonLd(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${input.url}#service`,
    name: input.name,
    alternateName: input.alternateName,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "MarketingAgency",
      "@id": `${siteUrl}/#organization`,
      name: "Crisha Marketing",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Sverige",
    },
    ...(input.lowPrice
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "SEK",
            lowPrice: input.lowPrice,
            offerCount: "3",
          },
        }
      : {}),
  };
}

export function buildCaseStudyJsonLd(study: CaseStudy) {
  const url = `${siteUrl}/fallstudier/${study.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#casestudy`,
    headline: study.qaHeadline,
    name: study.qaHeadline,
    description: study.challenge.slice(0, 200),
    about: study.service,
    articleSection: "Case Study",
    inLanguage: "sv-SE",
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Crisha Marketing",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Crisha Marketing",
      url: siteUrl,
    },
    keywords: study.tags.join(", "),
  };
}

export function buildBlogPostingJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  const url = `${siteUrl}/blogg/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    inLanguage: "sv-SE",
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Crisha Marketing",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Crisha Marketing",
      url: siteUrl,
    },
  };
}
