import type { Locale } from "@/lib/i18n/types";

export type PrivacyPolicyStrings = {
  backLink: string;
  h1: string;
  updated: string;
  s1: {
    h2: string;
    p: string;
    companyNameLabel: string;
    orgLabel: string;
    addressLabel: string;
    emailLabel: string;
    orgValue: string;
  };
  s2: {
    h2: string;
    intro: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
  };
  s3: {
    h2: string;
    collectStrong: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
  };
  s4: {
    h2: string;
    intro: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
    li6: string;
  };
  s5: {
    h2: string;
    intro: string;
    consentStrong: string;
    consent: string;
    contractStrong: string;
    contract: string;
    interestStrong: string;
    interest: string;
  };
  s6: {
    h2: string;
    p: string;
  };
  s7: {
    h2: string;
    intro: string;
    google: string;
    meta: string;
    tiktok: string;
    hostingLabel: string;
    hosting: string;
    p: string;
  };
  s8: {
    h2: string;
    p1: string;
    necessaryStrong: string;
    necessary: string;
    analyticsStrong: string;
    analytics: string;
    marketingStrong: string;
    marketing: string;
    p2: string;
  };
  s9: {
    h2: string;
    intro: string;
    r1s: string;
    r1: string;
    r2s: string;
    r2: string;
    r3s: string;
    r3: string;
    r4s: string;
    r4: string;
    r5s: string;
    r5: string;
    r6s: string;
    r6: string;
    r7s: string;
    r7: string;
    complaint: string;
  };
  s10: {
    h2: string;
    p1: string;
    emailLabel: string;
    addressLabel: string;
  };
};

const sv: PrivacyPolicyStrings = {
  backLink: "← Tillbaka till startsidan",
  h1: "Integritetspolicy",
  updated: "Senast uppdaterad: 14 februari 2026",
  s1: {
    h2: "1. Personuppgiftsansvarig",
    p:
      "Crisha är personuppgiftsansvarig för behandlingen av dina personuppgifter i samband med användningen av vår webbplats och våra tjänster.",
    companyNameLabel: "Företagsnamn:",
    orgLabel: "Organisationsnummer:",
    addressLabel: "Adress:",
    emailLabel: "E-post:",
    orgValue: "559578-4975",
  },
  s2: {
    h2: "2. Vilka personuppgifter samlar vi in?",
    intro: "Vi samlar in följande kategorier av personuppgifter:",
    li1: "Namn",
    li2: "E-postadress",
    li3: "Telefonnummer (om angivet)",
    li4: "Företagsnamn (om angivet)",
    li5: "Cookiedata och teknisk information om din enhet och webbläsare",
  },
  s3: {
    h2: "3. Hur samlar vi in uppgifter?",
    collectStrong: "Personuppgifter samlas in genom:",
    li1: "Kontaktformulär på vår webbplats",
    li2: "E-postkommunikation",
    li3: "Cookies och liknande spårningsteknik",
    li4: "Analysverktyg såsom Google Analytics",
    li5: "Annonseringsverktyg från Meta (Facebook/Instagram) och TikTok",
  },
  s4: {
    h2: "4. Syfte med behandlingen",
    intro: "Vi behandlar dina personuppgifter för att:",
    li1: "Besvara förfrågningar och kommunicera med dig",
    li2: "Leverera och administrera våra tjänster",
    li3: "Skicka relevant marknadsföring (med ditt samtycke)",
    li4: "Förbättra och optimera vår webbplats",
    li5: "Genomföra riktad annonsering via tredjepartsplattformar",
    li6: "Uppfylla rättsliga skyldigheter",
  },
  s5: {
    h2: "5. Laglig grund",
    intro: "Behandlingen av dina personuppgifter grundar sig på:",
    consentStrong: "Samtycke:",
    consent: "Exempelvis via användning av cookies och marknadsföring.",
    contractStrong: "Avtal:",
    contract: "När behandling är nödvändig för att fullgöra ett avtal med dig.",
    interestStrong: "Berättigat intresse:",
    interest:
      "För att förbättra våra tjänster och vår webbplats, samt för affärsanalys.",
  },
  s6: {
    h2: "6. Lagringstid",
    p:
      "Vi lagrar dina personuppgifter så länge det är nödvändigt för det syfte de samlades in, eller så länge vi är skyldiga att göra det enligt lag. Uppgifter som samlats in via kontaktformulär lagras i upp till 24 månader efter senaste kontakten, om inget annat avtalas.",
  },
  s7: {
    h2: "7. Delning med tredjeparter",
    intro: "Vi kan komma att dela dina uppgifter med följande kategorier av mottagare:",
    google: "för webbanalys (Google Analytics) och annonsering (Google Ads)",
    meta: "för annonsering via Facebook och Instagram (Meta Pixel)",
    tiktok: "för annonsering (TikTok Pixel)",
    hostingLabel: "Webbhotell/serverleverantör",
    hosting: "för lagring och drift av webbplatsen",
    p:
      "Vi säkerställer att alla tredjeparter behandlar dina uppgifter i enlighet med GDPR och att lämpliga skyddsåtgärder vidtas vid överföring utanför EU/EES.",
  },
  s8: {
    h2: "8. Cookies",
    p1:
      "Vår webbplats använder cookies för att förbättra din upplevelse, analysera trafik och möjliggöra riktad annonsering. Vi använder:",
    necessaryStrong: "Nödvändiga cookies:",
    necessary: "Krävs för att webbplatsen ska fungera korrekt.",
    analyticsStrong: "Analytiska cookies:",
    analytics:
      "Hjälper oss förstå hur besökare interagerar med webbplatsen (Google Analytics).",
    marketingStrong: "Marknadsföringscookies:",
    marketing:
      "Används för att visa relevanta annonser (Meta Pixel, TikTok Pixel, Google Ads).",
    p2:
      "Du kan hantera dina cookieinställningar via vår cookie-banner och genom att ändra inställningarna i din webbläsare.",
  },
  s9: {
    h2: "9. Dina rättigheter",
    intro: "Enligt GDPR har du följande rättigheter:",
    r1s: "Rätt till tillgång:",
    r1:
      "Du har rätt att begära ut information om vilka personuppgifter vi behandlar om dig.",
    r2s: "Rätt till rättelse:",
    r2: "Du har rätt att begära att felaktiga uppgifter korrigeras.",
    r3s: "Rätt till radering:",
    r3: "Du har rätt att begära att dina uppgifter raderas.",
    r4s: "Rätt till begränsning:",
    r4: "Du har rätt att begära att behandlingen av dina uppgifter begränsas.",
    r5s: "Rätt till dataportabilitet:",
    r5: "Du har rätt att få ut dina uppgifter i ett maskinläsbart format.",
    r6s: "Rätt att invända:",
    r6:
      "Du har rätt att invända mot behandling som grundar sig på berättigat intresse.",
    r7s: "Rätt att återkalla ditt samtycke:",
    r7: "Du kan när som helst återkalla ditt samtycke.",
    complaint:
      "Om du anser att vi behandlar dina uppgifter i strid med GDPR har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
  },
  s10: {
    h2: "10. Kontakt",
    p1:
      "Har du frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter? Kontakta oss:",
    emailLabel: "E-post:",
    addressLabel: "Adress:",
  },
};

const en: PrivacyPolicyStrings = {
  backLink: "← Back to home",
  h1: "Privacy Policy",
  updated: "Last updated: 14 February 2026",
  s1: {
    h2: "1. Data controller",
    p:
      "Crisha is the controller of the personal data we process in connection with your use of our website and services.",
    companyNameLabel: "Company name:",
    orgLabel: "Organisation number:",
    addressLabel: "Address:",
    emailLabel: "Email:",
    orgValue: "559578-4975",
  },
  s2: {
    h2: "2. What personal data do we collect?",
    intro: "We collect the following categories of personal data:",
    li1: "Name",
    li2: "Email address",
    li3: "Phone number (if provided)",
    li4: "Company name (if provided)",
    li5: "Cookie data and technical information about your device and browser",
  },
  s3: {
    h2: "3. How do we collect data?",
    collectStrong: "Personal data is collected through:",
    li1: "Contact forms on our website",
    li2: "Email communication",
    li3: "Cookies and similar tracking technologies",
    li4: "Analytics tools such as Google Analytics",
    li5: "Advertising tools from Meta (Facebook/Instagram) and TikTok",
  },
  s4: {
    h2: "4. Purposes of processing",
    intro: "We process your personal data to:",
    li1: "Respond to enquiries and communicate with you",
    li2: "Deliver and administer our services",
    li3: "Send relevant marketing (with your consent)",
    li4: "Improve and optimise our website",
    li5: "Run targeted advertising via third-party platforms",
    li6: "Comply with legal obligations",
  },
  s5: {
    h2: "5. Legal basis",
    intro: "Processing is based on:",
    consentStrong: "Consent:",
    consent: "For example, through cookies and marketing where consent is required.",
    contractStrong: "Contract:",
    contract: "When processing is necessary to perform a contract with you.",
    interestStrong: "Legitimate interests:",
    interest: "To improve our services and website, and for business analysis.",
  },
  s6: {
    h2: "6. Retention",
    p:
      "We keep personal data for as long as needed for the purposes for which it was collected, or as long as we are legally required to. Data collected via contact forms is kept for up to 24 months after the last contact, unless otherwise agreed.",
  },
  s7: {
    h2: "7. Sharing with third parties",
    intro: "We may share your data with the following categories of recipients:",
    google: "for web analytics (Google Analytics) and advertising (Google Ads)",
    meta: "for advertising on Facebook and Instagram (Meta Pixel)",
    tiktok: "for advertising (TikTok Pixel)",
    hostingLabel: "Hosting/server provider",
    hosting: "to host and operate the website",
    p:
      "We ensure that third parties process your data in line with the GDPR and that appropriate safeguards apply for transfers outside the EU/EEA.",
  },
  s8: {
    h2: "8. Cookies",
    p1:
      "Our website uses cookies to improve your experience, analyse traffic, and enable targeted advertising. We use:",
    necessaryStrong: "Necessary cookies:",
    necessary: "Required for the website to work properly.",
    analyticsStrong: "Analytics cookies:",
    analytics: "Help us understand how visitors use the website (Google Analytics).",
    marketingStrong: "Marketing cookies:",
    marketing: "Used to show relevant ads (Meta Pixel, TikTok Pixel, Google Ads).",
    p2:
      "You can manage cookie preferences via our cookie banner and your browser settings.",
  },
  s9: {
    h2: "9. Your rights",
    intro: "Under the GDPR you have the right to:",
    r1s: "Access:",
    r1: "Request information about which personal data we process about you.",
    r2s: "Rectification:",
    r2: "Request correction of inaccurate data.",
    r3s: "Erasure:",
    r3: "Request deletion of your data.",
    r4s: "Restriction:",
    r4: "Request restriction of processing of your data.",
    r5s: "Data portability:",
    r5: "Receive your data in a machine-readable format.",
    r6s: "Object:",
    r6: "Object to processing based on legitimate interests.",
    r7s: "Withdraw consent:",
    r7: "Withdraw your consent at any time.",
    complaint:
      "If you believe we process your data in breach of the GDPR, you may lodge a complaint with the Swedish Authority for Privacy Protection (IMY).",
  },
  s10: {
    h2: "10. Contact",
    p1:
      "Questions about how we process your personal data, or want to exercise your rights? Contact us:",
    emailLabel: "Email:",
    addressLabel: "Address:",
  },
};

export const privacyPolicyCopy: Record<Locale, PrivacyPolicyStrings> = { sv, en };
