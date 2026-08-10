import { ROUTES } from "@/lib/routes";

/** Canonical phones, email, city (footer, contact, schema). */
export const CONTACT = {
  email: "info@crisha.se",
  city: "Malmö",
  country: "Sverige",
  streetAddress: "Marietorps Allé 3B",
  postalCode: "217 75",
  addressLine: "Malmö, Sverige",
  fullAddress: "Marietorps Allé 3B, 217 75 Malmö",
  shang: {
    name: "Shang",
    telHref: "tel:+46731474731",
    telDisplay: "+46 73 147 47 31",
    whatsappUrl: "https://wa.me/46731474731",
  },
  cristoffer: {
    name: "Cristoffer",
    telHref: "tel:+46723307113",
    telDisplay: "+46 72 330 71 13",
    whatsappUrl: "https://wa.me/46723307113",
  },
} as const;

export const SITE = {
  name: "Crisha Marketing",
  legalName: "Crisha Marketing AB",
  tagline: "Digital marknadsföringsbyrå i Sverige",
  description:
    "Meta Ads, Google Ads, TikTok Ads och webbdesign för ambitiösa varumärken: strategi, genomförande och kontinuerlig optimering.",
  email: CONTACT.email,
  phone: CONTACT.cristoffer.telDisplay,
  address: CONTACT.addressLine,
  locale: "sv_SE",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Hem" },
  { href: ROUTES.omOss, label: "Om oss" },
  { href: ROUTES.tjanster, label: "Tjänster" },
  { href: ROUTES.fallstudier, label: "Fallstudier" },
  { href: ROUTES.kontakt, label: "Kontakt" },
  { href: ROUTES.karriar, label: "Karriär" },
] as const;

export const SERVICES = [
  {
    slug: "webbdesign",
    title: "Webbdesign",
    shortDescription:
      "Snabba, tydliga webbplatser och landningssidor med UX, UI och utveckling som fokuserar på konvertering.",
    longDescription:
      "Vi designar och bygger webbupplevelser som är snabba, tydliga och optimerade för att konvertera: informationsarkitektur, UI, prototyper och teknisk implementation med fokus på Core Web Vitals och CRO.",
    highlights: [
      "Landningssidor och presentationswebbplatser",
      "Optimering av Core Web Vitals",
      "Designsystem och återanvändbara komponenter",
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortDescription:
      "Facebook och Instagram: full-funnel-kampanjer, creative testing och skalning på data.",
    longDescription:
      "Vi bygger och optimerar Meta-kampanjer för medvetenhet, övervägande och konverteringar: struktur, målgrupper, budgetar, kreativ iteration och tydlig rapportering.",
    highlights: [
      "Prospecting och retargeting",
      "Katalog och Advantage+ shopping",
      "Creative strategy och A/B-testning",
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortDescription:
      "Search, Performance Max och YouTube med hög köpintention och mätbar avkastning.",
    longDescription:
      "Google Ads-kampanjer anpassade efter dina mål: sök, display, Performance Max, remarketing och YouTube. Fokus på spårning, flöden och långsiktig optimering.",
    highlights: [
      "Sund kontostruktur",
      "Konverteringar och förbättrad attribuering",
      "Rapportering och prognoser",
    ],
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads",
    shortDescription:
      "Autentisk räckvidd och native video för målgrupper som konsumerar kort video.",
    longDescription:
      "Vi startar och skalar TikTok Ads med tydliga kreativa briefs, starka hooks och iterativ testning, kopplat till både varumärkes- och performancemål.",
    highlights: [
      "Spark Ads och In-Feed",
      "Brief för UGC och creators",
      "Mätning och attribuering",
    ],
  },
  {
    slug: "full-funnel",
    title: "Full funnel",
    shortDescription:
      "En sammanhängande kundresa från första klick till löpande köp: Meta, Google, TikTok och webb i samma kedja.",
    longDescription:
      "Vi kopplar ihop medvetenhet, övervägande och konvertering i en genomtänkt funnel. Samma spårning, tydliga steg i köpresan och optimering över kanaler så annonser, landningssidor och uppföljning jobbar mot samma mål i stället för i varsin silo.",
    highlights: [
      "Funnelstruktur (TOF/MOF/BOF) och budskap som följer kunden i varje steg",
      "Konsekvent tracking och attribuering över Meta, Google, TikTok och webb",
      "Kontinuerlig test av landningssidor, erbjudanden och kreativt för lägre CPA",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const HERO_COPY = {
  label: "Performance marketing",
  titlePlain: "Vi växer varumärken med",
  titleAccent: "data & kreativitet",
  subtitle:
    "Betald media, webbplatser som konverterar och tydlig rapportering för företag i Sverige och internationellt.",
  primaryCta: "Gratis revision",
  secondaryCta: "Se tjänster",
} as const;

export const STATS = [
  { value: 40, suffix: "+", label: "Företag vi samarbetat med" },
  { value: 4.8, suffix: "×", label: "Genomsnittlig ROAS i portföljen", decimals: 1 },
  { value: 50, suffix: "k €", label: "Hanterade annonsbudgetar (cirka), per år" },
  { value: 98, suffix: "%", label: "Kunder som förnyar" },
] as const;

export const WHY_US = [
  {
    title: "Fokus på avkastning",
    body: "Vi sätter tydliga KPI:er, mäter vad som betyder något och optimerar varje vecka.",
  },
  {
    title: "Full transparens",
    body: "Tydliga rapporter, tillgång till konton och proaktiv kommunikation.",
  },
  {
    title: "Samlat team",
    body: "Strateger, designers och medieköpare som jobbar i samma tempo.",
  },
  {
    title: "Modern teknik",
    body: "Snabba webbplatser, korrekt spårning och automation där det lönar sig.",
  },
] as const;

export const TEAM = [
  {
    name: "Shang",
    role: "Medgrundare & strateg",
    bio: "Performance marketing och digital strategi: data, skalning och mätbara resultat.",
  },
  {
    name: "Cristoffer",
    role: "Medgrundare & Creative Director",
    bio: "Webbdesign, varumärke och kreativ riktning för kampanjer och sajter.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Från otydliga kampanjer till tydliga veckorapporter och fler kvalificerade leads.",
    author: "Erik L.",
    company: "VD, tjänsteföretag",
  },
  {
    quote: "Ny sajt laddar snabbt och vi såg fler konverteringar inom några veckor.",
    author: "Sara K.",
    company: "Grundare, e-handel",
  },
  {
    quote: "Sällan man hittar en byrå som förstår både varumärke och siffror.",
    author: "Johan M.",
    company: "Marknadschef, SaaS",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "från 3 000 kr / månad",
    description: "För dig som vill testa betald annonsering kontrollerat.",
    features: [
      "Genomgång och plan första 90 dagarna",
      "1–2 kanaler (efter överenskommelse)",
      "Månadsrapport och optimeringssamtal",
    ],
    cta: "Prata om Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "från 9 000 kr / månad",
    description: "För varumärken som vill skala med högre tempo.",
    features: [
      "Fler kanaler (Meta, Google och/eller TikTok)",
      "Kreativ testning varje månad",
      "Live-dashboard och tät avstämning",
    ],
    cta: "Boka gratis revision",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Anpassat",
    description: "Dedikerat team, SLA och skräddarsydda upplägg.",
    features: [
      "Integrerad strategi och varumärke",
      "Webb & CRO",
      "Prioriterad support och utbildning",
    ],
    cta: "Begär offert",
    highlighted: false,
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "fashionup-meta-ads",
    title: "FashionUp: ROAS med Meta Ads",
    industry: "E-handel",
    summary: "Omstrukturerad funnel, feed och landningssidor.",
  },
  {
    slug: "dentalmed-google-ads",
    title: "DentalMed Klinik: fler bokningar",
    industry: "Tjänster",
    summary: "Google Search och optimerade landningssidor per behandling.",
  },
  {
    slug: "craftbeer-tiktok-ads",
    title: "Craft Brewers Conference: TikTok-räckvidd",
    industry: "Mat & dryck",
    summary: "Native video, hooks och skalning på låg CPM.",
  },
] as const;

export { BLOG_POSTS } from "@/lib/i18n/content/blog-posts-i18n";

export const CONTACT_FORM = {
  title: "Begär gratis revision",
  subtitle: "Vi återkommer inom 24 timmar på vardagar.",
  submitLabel: "Skicka",
} as const;

export const FOOTER = {
  tagline: SITE.tagline,
  columns: [
    {
      title: "Tjänster",
      links: SERVICES.map((s) => ({
        href: `${ROUTES.tjanster}/${s.slug}`,
        label: s.title,
      })),
    },
    {
      title: "Företaget",
      links: [
        { href: ROUTES.omOss, label: "Om oss" },
        { href: ROUTES.fallstudier, label: "Fallstudier" },
        { href: ROUTES.kontakt, label: "Kontakt" },
        { href: ROUTES.karriar, label: "Karriär" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
} as const;

export const SEO_DEFAULTS = {
  homeTitle: "Crisha Marketing | Digital marknadsföringsbyrå Sverige",
  homeDescription: SITE.description,
} as const;
