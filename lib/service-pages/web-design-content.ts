import type { FAQItem } from "@/components/ui/FAQ";
import type { Locale } from "@/lib/i18n/types";

export const webDesignFaqsSv: FAQItem[] = [
  {
    question: "Vad kostar en webbplats i Sverige?",
    answer:
      "En professionell webbplats hos Crisha Marketing börjar på 8 000 kr för en enkel landningssida och går upp till 30 000-50 000 kr för en komplett webbplats med copywriting och SEO-optimering. E-handelslösningar på Shopify börjar på 12 000 kr. Det exakta priset beror på antal sidor, funktioner och designkomplexitet. Vi ger alltid en detaljerad offert innan vi börjar.",
  },
  {
    question: "Hur lång tid tar det att bygga en webbplats?",
    answer:
      "En enkel landningssida levererar vi på 5-7 arbetsdagar. En komplett presentationswebbplats tar 2-3 veckor. En nätbutik med komplexa integrationer kan ta 3-5 veckor. Vi ger en tydlig och detaljerad tidslinje innan vi startar och vi håller den.",
  },
  {
    question: "Kan jag uppdatera webbplatsen själv efter lansering?",
    answer:
      "Absolut. Vi bygger webbplatser med ett intuitivt CMS som låter dig ändra texter, bilder och innehåll utan teknisk kunskap. Vi erbjuder också 1 timmes utbildning efter lansering. Webflow-sajter är särskilt enkla att redigera visuellt.",
  },
  {
    question: "Vilken plattform passar mitt företag bäst?",
    answer:
      "Det beror på dina behov: Next.js för maximal prestanda och SEO, Webflow om du vill kunna uppdatera enkelt själv, Shopify om du säljer produkter online. Vi analyserar ditt specifika fall under det gratis konsultationssamtalet och rekommenderar den bästa lösningen, inte den dyraste.",
  },
  {
    question: "Ingår SEO i webbplatsen?",
    answer:
      "Ja, teknisk SEO-grundoptimering ingår alltid: korrekt URL-struktur, meta-taggar, schema markup, laddningshastighet, XML-sitemap och robots.txt. SEO-innehållsoptimering (sökordsforskning och textoptimering) finns som tilläggstjänst.",
  },
  {
    question: "Designar ni för mobilen också?",
    answer:
      "Alla våra webbplatser är designade mobile-first. Vi börjar med mobildesignen och anpassar sedan för desktop. 75% av svensk webbtrafik kommer från mobila enheter, så mobilupplevelsen är vår prioritet.",
  },
  {
    question: "Vad händer om jag inte är nöjd med designen?",
    answer:
      "Vi presenterar designen i Figma innan vi kodar något. Du får 2 revisionsomgångar utan extra kostnad. Vi jobbar inte vidare förrän du är nöjd med designen. Det är därför 98% av våra kunder är nöjda med slutresultatet.",
  },
];

export const webDesignFaqsEn: FAQItem[] = [
  {
    question: "What does a website cost in Sweden?",
    answer:
      "A professional site with Crisha Marketing starts around SEK 8,000 for a simple landing page and up to SEK 30,000–50,000 for a full site with copy and SEO. Shopify ecommerce starts around SEK 12,000. Final price depends on pages, features, and design complexity; you always get a detailed quote before we start.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Simple landing pages: 5–7 business days. Full marketing sites: 2–3 weeks. Stores with complex integrations: 3–5 weeks. You get a clear timeline up front and we stick to it.",
  },
  {
    question: "Can I update the site myself after launch?",
    answer:
      "Yes. We ship with an intuitive CMS for text, images, and content. No dev skills needed. We include 1 hour of training. Webflow sites are especially easy to edit visually.",
  },
  {
    question: "Which platform fits my business?",
    answer:
      "Next.js for maximum performance and SEO, Webflow if you want easy self-serve edits, Shopify if you sell products online. We recommend the best fit in a free consult, not the most expensive option.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Technical SEO fundamentals are always included: URL structure, meta tags, schema, speed, XML sitemap, and robots.txt. Content SEO (keyword research and copy optimisation) is available as an add-on.",
  },
  {
    question: "Do you design for mobile?",
    answer:
      "Everything is mobile-first. We design for phones first, then desktop. With most traffic on mobile, that experience is the priority.",
  },
  {
    question: "What if I’m not happy with the design?",
    answer:
      "We present designs in Figma before any code ships. You get two revision rounds at no extra cost. We don’t move forward until you’re happy, which is why 98% of clients love the result.",
  },
];

export function getWebDesignFaqs(locale: Locale): FAQItem[] {
  return locale === "en" ? webDesignFaqsEn : webDesignFaqsSv;
}
