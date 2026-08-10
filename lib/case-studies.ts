import { caseStudiesEn } from "@/lib/i18n/content/case-studies-en";
import type { Locale } from "@/lib/i18n/types";
import type { CaseStudy } from "@/lib/case-study-types";

export type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudyTestimonial,
  CaseStudyKeyTakeaways,
} from "@/lib/case-study-types";

/** Swedish (default) case study copy */
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "fashionup-meta-ads",
    client: "FashionUp",
    qaHeadline: "Hur ökade vi ROAS från 1,4× till 3,8× för en e-handelskund inom mode?",
    category: "E-handel · Mode",
    service: "Meta Ads",
    serviceColor: "#2563EB",
    duration: "4 månader",
    location: "Sverige",
    challenge:
      "FashionUp sålde mode online med ROAS 1,4× på Meta Ads, nära break-even. Budgeten hanterades internt utan tydlig kampanjstruktur och utan aktiv retargeting. CPA låg på 47 kr per köp, vilket var för högt för deras marginaler.",
    solution:
      "Vi byggde om Meta Ads-kontot: separata kampanjer per mål, lookalike-målgrupper från befintliga kunder och retargeting i tre nivåer. Åtta creative-varianter testades parallellt; vinnande format identifierades inom två veckor.",
    results: {
      before: {
        ROAS: "1,4×",
        CPA: "47 kr/köp",
      },
      after: {
        ROAS: "3,8×",
        CPA: "19 kr/köp",
      },
    },
    metrics: [
      { label: "ROAS-ökning", value: "+171%", desc: "från 1,4× till 3,8×" },
      { label: "Lägre CPA", value: "-60%", desc: "från 47 kr till 19 kr" },
      { label: "Intäktsökning", value: "+362%", desc: "under samarbetsperioden" },
      { label: "Snitt CTR", value: "3,4%", desc: "jämfört med branschsnitt" },
    ],
    keyTakeaways: {
      challenge: "ROAS 1,4× och hög CPA utan tydlig Meta-struktur eller retargeting.",
      strategy: "TOF/MOF/BOF, lookalikes och tre nivåer retargeting med creative-tester.",
      result: "ROAS 3,8× (+171%), CPA −60% och +362% intäkter på 4 månader.",
    },
    testimonial: {
      text: "Jag förväntade mig inte att se så tydliga resultat på de första månaderna. ROAS nästan tredubblades och kostnaden per beställning sjönk dramatiskt.",
      author: "Andreea M.",
      role: "Ägare, FashionUp",
    },
    tags: ["Meta Ads", "Retargeting", "E-handel", "Mode"],
  },
  {
    id: 2,
    slug: "dentalmed-google-ads",
    client: "DentalMed Klinik",
    qaHeadline: "Hur ökade vi Google Ads-leads med +240% för en tandklinik?",
    category: "Medicinska tjänster · Tandvård",
    service: "Google Ads",
    serviceColor: "#0EA5E9",
    duration: "3 månader",
    location: "Sverige",
    challenge:
      "DentalMed Klinik hade kört Google Ads i sex månader utan tydlig effekt. De lade 1 500 kr/mån och fick 8–10 samtal, varav hälften irrelevanta. Spårning var bristfällig och de visste inte vilka sökord som gav riktiga patienter.",
    solution:
      "Teknisk genomgång visade att en stor del av budgeten gick till irrelevanta sökord utan negativa nyckelord. Vi omstrukturerade kampanjer per tjänst (implantat, blekning, akut), satte upp spårning för samtal och formulär och optimerade landningssidor per erbjudande.",
    results: {
      before: {
        Leads: "8–10 samtal/mån",
        CPL: "175 kr/lead",
      },
      after: {
        Leads: "34 samtal/mån",
        CPL: "62 kr/lead",
      },
    },
    metrics: [
      { label: "Fler leads", value: "+240%", desc: "från ~10 till 34 samtal/mån" },
      { label: "Lägre CPL", value: "-59%", desc: "från 175 kr till 62 kr" },
      { label: "Kvalificerade leads", value: "89%", desc: "andel relevanta samtal" },
      { label: "Samma budget", value: "Oförändrad", desc: "bättre resultat per krona" },
    ],
    keyTakeaways: {
      challenge: "Låg leadkvalitet och svag spårning trots aktiv Google Ads-budget.",
      strategy: "Kampanjer per tjänst, negativa sökord, samtals-/formulärspårning och landningssidor.",
      result: "+240% samtal, CPL −59% och 89% relevanta leads på samma budget.",
    },
    testimonial: {
      text: "Vi spenderade samma budget som förut men fick tre gånger fler nya patienter per månad. Skillnaden var att Crisha visste exakt var pengarna försvann.",
      author: "Dr. Bogdan T.",
      role: "Chef, DentalMed Klinik",
    },
    tags: ["Google Ads", "Lead generation", "Medicin", "Samtalsspårning"],
  },
  {
    id: 3,
    slug: "craftbeer-tiktok-ads",
    client: "Craft Brewers Conference",
    qaHeadline: "Hur fick vi 280K räckvidd på TikTok Ads med 400 €/mån?",
    category: "Mat & dryck · E-handel",
    service: "TikTok Ads",
    serviceColor: "#EC4899",
    duration: "6 veckor",
    location: "Sverige",
    challenge:
      "Craft Brewers Conference hade stark produkt men nästan ingen synlighet online. Ingen aktiv TikTok-närvaro och begränsad budget (400 €/mån). Målgruppen var 25–35 år som uppskattar hantverksöl men inte kände till varumärket.",
    solution:
      "Native TikTok-strategi: bakom kulisserna, bryggeri och berättelser kring recept. Spark Ads på bäst presterande organiskt innehåll och In-Feed med äkta kundomdömen. Vi skalade selektivt utifrån data.",
    results: {
      before: {
        Räckvidd: "~500 per månad organiskt",
        Beställningar: "12 onlinebeställningar/mån",
      },
      after: {
        Räckvidd: "280 000 räckvidd på 6 veckor",
        Beställningar: "89 onlinebeställningar/mån",
      },
    },
    metrics: [
      { label: "Total räckvidd", value: "280K", desc: "på sex veckor" },
      { label: "Fler beställningar", value: "+641%", desc: "månadsvis jämfört med utgångsläge" },
      { label: "Nya följare", value: "4 200", desc: "parallell organisk tillväxt" },
      { label: "Snitt CPM", value: "1,2 €", desc: "jämfört med högre CPM på Meta" },
    ],
    keyTakeaways: {
      challenge: "Stark produkt men nästan noll synlighet och liten TikTok-budget.",
      strategy: "Native UGC, Spark Ads på vinnande organiskt innehåll och datadriven skalning.",
      result: "280K räckvidd på 6 veckor och +641% onlinebeställningar.",
    },
    testimonial: {
      text: "Med 400 € i månaden nådde vi 280 000 personer på 6 veckor. Jag trodde inte det var möjligt med en så liten budget. Nu har vi kölista för vissa produkter.",
      author: "Mihai C.",
      role: "Grundare, Craft Brewers Conference",
    },
    tags: ["TikTok Ads", "Spark Ads", "Varumärke", "E-handel"],
  },
  {
    id: 4,
    slug: "casa-nostra-web-design",
    client: "Casa Nostra",
    qaHeadline: "Hur ökade vi webbkonverteringen med +190% för en restaurang?",
    category: "Restaurang & pizzeria · Lomma",
    service: "Webbdesign",
    serviceColor: "#8B5CF6",
    duration: "3 veckor",
    location: "Lomma · Sverige",
    challenge:
      "Casa Nostra hade många gäster som letade meny, öppettider och catering på mobilen men den tidigare sajten var rörig, långsam och gjorde det svårt att hitta dagens lunch, pizzamenyn eller ringa direkt. Mycket trafik gick förlorad innan någon bokade eller beställde.",
    solution:
      "Ny mobilanpassad sajt kopplad till verksamheten på Järnvägsgatan: tydlig ingång till dagens lunch, strukturerade menyer (pizza, à la carte, catering), öppettider och snabbväg till telefon för bord och cateringbeställningar. Strikt bildkomprimering, färre sidladdningar och tydliga CTA höjer både upplevelse och mål‑klick.",
    results: {
      before: {
        Konvertering: "1,0% målinteraktion (ring/meny)",
        Hastighet: "6,1 s laddningstid",
      },
      after: {
        Konvertering: "2,9% målinteraktion (ring/meny)",
        Hastighet: "1,6 s laddningstid",
      },
    },
    metrics: [
      { label: "Konverteringsökning", value: "+190%", desc: "från 1,0% till 2,9%" },
      { label: "Snabbare laddning", value: "-74%", desc: "från 6,1 s till 1,6 s" },
      { label: "Cateringförfrågningar", value: "+62%", desc: "flere ser catering via kontakt" },
      { label: "PageSpeed-poäng", value: "96", desc: "mobilfokus & optimering" },
    ],
    keyTakeaways: {
      challenge: "Långsam, rörig mobilwebb där meny och bokning var svåra att hitta.",
      strategy: "Mobilförst webbdesign med tydliga CTA, menystruktur och prestandaoptimering.",
      result: "+190% konvertering, −74% laddningstid och PageSpeed 96.",
    },
    testimonial: {
      text: "Gästerna hittar menyn och dagens lunch direkt på telefonen, och det märks i lokalen. Vi får fler tydliga förfrågningar om catering och sajten känns lika proffsig som maten vi serverar.",
      author: "Liviu Nicoara",
      role: "Ägare, Casa Nostra",
    },
    tags: ["Webbdesign", "CRO", "Prestanda", "Restaurang"],
  },
];

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return locale === "en" ? caseStudiesEn : caseStudies;
}

export function getCaseStudyBySlug(slug: string, locale: Locale = "sv"): CaseStudy | undefined {
  return getCaseStudies(locale).find((c) => c.slug === slug);
}

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export function buildResultsNarrative(study: CaseStudy, locale: Locale): string {
  const { before, after } = study.results;
  const keys = Object.keys(before);
  const lines = keys.map((k) => {
    const b = before[k];
    const a = after[k] ?? "-";
    return locale === "en" ? `${k}: from ${b} to ${a}` : `${k}: från ${b} till ${a}`;
  });
  const intro =
    locale === "en"
      ? `After ${study.duration} of working together, the numbers show clear progress: `
      : `Efter ${study.duration} av samarbete visar siffrorna tydligt framsteg: `;
  return intro + lines.join("; ") + ".";
}

export function authorInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
