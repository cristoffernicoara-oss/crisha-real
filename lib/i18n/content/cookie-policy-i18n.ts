import type { Locale } from "@/lib/i18n/types";

export type CookiePolicyStrings = {
  backLink: string;
  h1: string;
  updated: string;
  s1: { h2: string; p: string };
  s2: {
    h2: string;
    necessaryTitle: string;
    necessaryP: string;
    example: string;
    necessaryLi1: string;
    necessaryLi2: string;
    analyticsTitle: string;
    analyticsP: string;
    analyticsLi1: string;
    analyticsLi2: string;
    marketingTitle: string;
    marketingP: string;
    marketingLi1: string;
    marketingLi2: string;
    marketingLi3: string;
  };
  s3: { h2: string; p: string };
  s4: { h2: string; p: string };
  s5: { h2: string; pBefore: string; privacyLink: string; pAfter: string };
  s6: {
    h2: string;
    p1: string;
    emailLabel: string;
    addressLabel: string;
  };
};

const sv: CookiePolicyStrings = {
  backLink: "← Tillbaka till startsidan",
  h1: "Cookiepolicy",
  updated: "Senast uppdaterad: 7 april 2026",
  s1: {
    h2: "1. Vad är cookies?",
    p:
      "Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De används för att få webbplatsen att fungera korrekt, förbättra användarupplevelsen samt analysera trafik.",
  },
  s2: {
    h2: "2. Vilka cookies använder vi?",
    necessaryTitle: "🔒 Nödvändiga cookies",
    necessaryP: "Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av.",
    example: "Exempel:",
    necessaryLi1: "Säkerhet",
    necessaryLi2: "Formulärfunktioner",
    analyticsTitle: "📊 Analyscookies",
    analyticsP:
      "Dessa hjälper oss att förstå hur besökare använder webbplatsen (t.ex. via Google Analytics).",
    analyticsLi1: "Antal besökare",
    analyticsLi2: "Vilka sidor som besöks",
    marketingTitle: "🎯 Marknadsföringscookies",
    marketingP: "Dessa används för att visa relevanta annonser och mäta effektiviteten av vår marknadsföring.",
    marketingLi1: "Facebook Pixel",
    marketingLi2: "TikTok Pixel",
    marketingLi3: "Google Ads",
  },
  s3: {
    h2: "3. Samtycke",
    p:
      "När du besöker vår webbplats får du välja vilka cookies du accepterar. Du kan när som helst ändra eller återkalla ditt samtycke.",
  },
  s4: {
    h2: "4. Hantering av cookies",
    p:
      "Du kan själv kontrollera och radera cookies via inställningarna i din webbläsare. Observera att om du inaktiverar cookies kan vissa funktioner på webbplatsen sluta fungera korrekt.",
  },
  s5: {
    h2: "5. Personuppgifter",
    pBefore: "Vissa cookies kan samla in personuppgifter. Vi behandlar dessa i enlighet med GDPR. Läs mer i vår ",
    privacyLink: "Integritetspolicy",
    pAfter: ".",
  },
  s6: {
    h2: "6. Kontakt",
    p1: "Har du frågor om vår användning av cookies, kontakta oss:",
    emailLabel: "E-post:",
    addressLabel: "Adress:",
  },
};

const en: CookiePolicyStrings = {
  backLink: "← Back to home",
  h1: "Cookie Policy",
  updated: "Last updated: 7 April 2026",
  s1: {
    h2: "1. What are cookies?",
    p:
      "Cookies are small text files stored on your device when you visit a website. They are used to make the site work properly, improve the experience, and analyse traffic.",
  },
  s2: {
    h2: "2. Which cookies do we use?",
    necessaryTitle: "🔒 Necessary cookies",
    necessaryP: "These cookies are required for the website to work and cannot be switched off.",
    example: "Examples:",
    necessaryLi1: "Security",
    necessaryLi2: "Form functionality",
    analyticsTitle: "📊 Analytics cookies",
    analyticsP: "These help us understand how visitors use the site (e.g. via Google Analytics).",
    analyticsLi1: "Number of visitors",
    analyticsLi2: "Which pages are visited",
    marketingTitle: "🎯 Marketing cookies",
    marketingP: "These are used to show relevant ads and measure the effectiveness of our marketing.",
    marketingLi1: "Facebook Pixel",
    marketingLi2: "TikTok Pixel",
    marketingLi3: "Google Ads",
  },
  s3: {
    h2: "3. Consent",
    p:
      "When you visit our website you can choose which cookies to accept. You can change or withdraw your consent at any time.",
  },
  s4: {
    h2: "4. Managing cookies",
    p:
      "You can control and delete cookies in your browser settings. Note that if you disable cookies, some features on the site may not work correctly.",
  },
  s5: {
    h2: "5. Personal data",
    pBefore:
      "Some cookies may collect personal data. We process this in line with the GDPR. Read more in our ",
    privacyLink: "Privacy Policy",
    pAfter: ".",
  },
  s6: {
    h2: "6. Contact",
    p1: "If you have questions about our use of cookies, contact us:",
    emailLabel: "Email:",
    addressLabel: "Address:",
  },
};

export const cookiePolicyCopy: Record<Locale, CookiePolicyStrings> = { sv, en };
