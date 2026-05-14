import type { Locale } from "@/lib/i18n/types";

export type TermsOfUseStrings = {
  backLink: string;
  h1: string;
  updated: string;
  s1: { h2: string; p: string };
  s2: {
    h2: string;
    companyLabel: string;
    orgLabel: string;
    addressLabel: string;
    emailLabel: string;
  };
  s3: {
    h2: string;
    p1: string;
    p2: string;
    li1: string;
    li2: string;
    li3: string;
  };
  s4: { h2: string; p1: string; p2: string };
  s5: { h2: string; p1: string; p2: string; li1: string; li2: string; li3: string };
  s6: { h2: string; p: string };
  s7: { h2: string; pBefore: string; privacyLink: string; pAfter: string };
  s8: { h2: string; p: string };
  s9: { h2: string; p: string };
  s10: { h2: string; p: string };
  s11: { h2: string; p1: string; emailLabel: string; addressLabel: string };
};

const sv: TermsOfUseStrings = {
  backLink: "← Tillbaka till startsidan",
  h1: "Användarvillkor",
  updated: "Senast uppdaterad: 7 april 2026",
  s1: {
    h2: "1. Allmänt",
    p:
      'Dessa användarvillkor ("Villkoren") gäller för användning av webbplatsen som tillhandahålls av Crisha Marketing ("Företaget"). Genom att använda denna webbplats godkänner du dessa villkor i sin helhet.',
  },
  s2: {
    h2: "2. Företagsinformation",
    companyLabel: "Företag:",
    orgLabel: "Organisationsnummer:",
    addressLabel: "Adress:",
    emailLabel: "E-post:",
  },
  s3: {
    h2: "3. Användning av webbplatsen",
    p1: "Du förbinder dig att använda webbplatsen i enlighet med gällande lagar och regler.",
    p2: "Det är inte tillåtet att:",
    li1: "Missbruka webbplatsens funktioner",
    li2: "Försöka få obehörig åtkomst till system eller data",
    li3: "Kopiera, distribuera eller använda innehåll utan tillstånd",
  },
  s4: {
    h2: "4. Immateriella rättigheter",
    p1:
      "Allt innehåll på denna webbplats, inklusive texter, bilder, grafik och logotyper, ägs av Crisha Marketing eller dess licensgivare.",
    p2: "Innehållet får inte kopieras, ändras eller distribueras utan skriftligt godkännande.",
  },
  s5: {
    h2: "5. Ansvarsbegränsning",
    p1:
      "Företaget strävar efter att informationen på webbplatsen ska vara korrekt och uppdaterad, men lämnar inga garantier för att den är fri från fel eller avbrott.",
    p2: "Crisha Marketing ansvarar inte för:",
    li1: "Direkta eller indirekta skador som uppstår vid användning av webbplatsen",
    li2: "Tekniska problem eller driftstörningar",
    li3: "Innehåll från tredje part",
  },
  s6: {
    h2: "6. Tredjepartslänkar",
    p:
      "Webbplatsen kan innehålla länkar till externa webbplatser. Crisha Marketing ansvarar inte för innehållet eller hanteringen av personuppgifter på dessa webbplatser.",
  },
  s7: {
    h2: "7. Personuppgifter",
    pBefore:
      "Crisha Marketing behandlar personuppgifter i enlighet med gällande dataskyddslagstiftning. För mer information, se vår ",
    privacyLink: "Integritetspolicy",
    pAfter: ".",
  },
  s8: {
    h2: "8. Cookies",
    p:
      "Webbplatsen använder cookies för att förbättra användarupplevelsen och analysera trafik. Genom att använda webbplatsen samtycker du till användningen av cookies.",
  },
  s9: {
    h2: "9. Ändringar av villkoren",
    p:
      "Crisha Marketing förbehåller sig rätten att när som helst ändra dessa villkor. Eventuella ändringar publiceras på denna sida och träder i kraft omedelbart.",
  },
  s10: {
    h2: "10. Tillämplig lag",
    p:
      "Dessa villkor ska tolkas och tillämpas enligt svensk lag. Eventuella tvister ska avgöras i svensk domstol.",
  },
  s11: {
    h2: "11. Kontakt",
    p1: "Vid frågor om dessa villkor, vänligen kontakta oss:",
    emailLabel: "E-post:",
    addressLabel: "Adress:",
  },
};

const en: TermsOfUseStrings = {
  backLink: "← Back to home",
  h1: "Terms of Use",
  updated: "Last updated: 7 April 2026",
  s1: {
    h2: "1. General",
    p:
      'These Terms of Use (“Terms”) govern your use of the website operated by Crisha Marketing (“the Company”). By using this website, you accept these Terms in full.',
  },
  s2: {
    h2: "2. Company information",
    companyLabel: "Company:",
    orgLabel: "Organisation number:",
    addressLabel: "Address:",
    emailLabel: "Email:",
  },
  s3: {
    h2: "3. Use of the website",
    p1: "You agree to use the website in compliance with applicable laws and regulations.",
    p2: "You may not:",
    li1: "Misuse the website or its features",
    li2: "Attempt to gain unauthorised access to systems or data",
    li3: "Copy, distribute, or use content without permission",
  },
  s4: {
    h2: "4. Intellectual property",
    p1:
      "All content on this website, including text, images, graphics, and logos, is owned by Crisha Marketing or its licensors.",
    p2: "Content may not be copied, modified, or distributed without written consent.",
  },
  s5: {
    h2: "5. Limitation of liability",
    p1:
      "The Company aims to keep information on the website accurate and up to date but does not warrant that it is error-free or uninterrupted.",
    p2: "Crisha Marketing is not liable for:",
    li1: "Direct or indirect damages arising from use of the website",
    li2: "Technical issues or service interruptions",
    li3: "Third-party content",
  },
  s6: {
    h2: "6. Third-party links",
    p:
      "The website may contain links to external sites. Crisha Marketing is not responsible for their content or how they process personal data.",
  },
  s7: {
    h2: "7. Personal data",
    pBefore:
      "Crisha Marketing processes personal data in accordance with applicable data protection law. For more information, see our ",
    privacyLink: "Privacy Policy",
    pAfter: ".",
  },
  s8: {
    h2: "8. Cookies",
    p:
      "The website uses cookies to improve the user experience and analyse traffic. By using the website, you consent to the use of cookies.",
  },
  s9: {
    h2: "9. Changes to the Terms",
    p:
      "Crisha Marketing may change these Terms at any time. Changes will be published on this page and take effect immediately.",
  },
  s10: {
    h2: "10. Governing law",
    p:
      "These Terms shall be interpreted and governed by the laws of Sweden. Any disputes shall be resolved in Swedish courts.",
  },
  s11: {
    h2: "11. Contact",
    p1: "If you have questions about these Terms, please contact us:",
    emailLabel: "Email:",
    addressLabel: "Address:",
  },
};

export const termsOfUseCopy: Record<Locale, TermsOfUseStrings> = { sv, en };
