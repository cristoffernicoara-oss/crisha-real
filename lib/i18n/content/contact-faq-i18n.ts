import type { FAQItem } from "@/components/ui/FAQ";

import type { Locale } from "@/lib/i18n/types";



const CONTACT_FAQS_SV: FAQItem[] = [

  {

    question: "Hur snabbt får jag svar när jag skickat formuläret?",

    answer:

      "Vi svarar inom 24 timmar på vardagar, ofta snabbare: inom 2–4 timmar under kontorstid (måndag–fredag 9:00–18:00). Meddelanden i helgen hanteras måndag morgon.",

  },

  {

    question: "Vad händer efter att jag skickat kontaktformuläret?",

    answer:

      "När vi fått formuläret skickar en av medgrundarna (Shang eller Cristoffer) en bekräftelse via mejl och vi bokar ett 30-minuterssamtal för att förstå er situation. Inför samtalet gör vi en kostnadsfri genomgång av era annonskonton och er webbplats.",

  },

  {

    question: "Kostar den kostnadsfria revisionen verkligen inget?",

    answer:

      "Ja, helt utan kostnad och utan bindning. Revisionen omfattar genomgång av befintliga Meta Ads- och Google Ads-konton, bedömning av webbplatsen ur hastighets- och konverteringsperspektiv samt en kort rapport med viktigaste förbättringsmöjligheterna. Om vi inte ska samarbeta behåller ni ändå underlaget.",

  },

  {

    question: "Kan jag komma förbi ert kontor?",

    answer:

      "Crisha Marketing arbetar 100 % remote med bas i Malmö. Det gör att vi kan jobba med kunder i hela Sverige och EU utan geografiska hinder. Möten sker online via Google Meet eller Zoom, vilket sparar tid för båda parter.",

  },

  {

    question: "Jobbar ni med kunder utanför Sverige?",

    answer:

      "Ja. Vi driver kampanjer för kunder som siktar på Sverige och andra marknader i Europa, inklusive Norden, Tyskland, Benelux, Storbritannien och USA. Vi har erfarenhet av flerspråkiga kampanjer och olika marknaders förutsättningar.",

  },

];



const CONTACT_FAQS_EN: FAQItem[] = [

  {

    question: "How quickly will I hear back after submitting the form?",

    answer:

      "We reply within 24 hours on business days, often faster within 2–4 hours during office hours (Monday–Friday 9:00–18:00). Weekend messages are handled Monday morning.",

  },

  {

    question: "What happens after I submit the contact form?",

    answer:

      "Once we receive the form, one of the co-founders (Shang or Cristoffer) sends a confirmation email and we book a 30-minute call to understand your situation. Before the call we do a free review of your ad accounts and website.",

  },

  {

    question: "Is the free audit really free?",

    answer:

      "Yes, completely free with no obligation. The audit covers your existing Meta Ads and Google Ads accounts, a website review from speed and conversion angles, and a short report with the main improvement opportunities. If we don’t work together, you still keep the materials.",

  },

  {

    question: "Can I visit your office?",

    answer:

      "Crisha Marketing is 100% remote with a base in Malmö, so we can work with clients across Sweden and the EU without geography getting in the way. Meetings are online via Google Meet or Zoom, which saves time for everyone.",

  },

  {

    question: "Do you work with clients outside Sweden?",

    answer:

      "Yes. We run campaigns for clients targeting Sweden and other European markets, including the Nordics, Germany, Benelux, the UK, and the US. We have experience with multilingual campaigns and different market conditions.",

  },

];



export function getContactFaqs(locale: Locale): FAQItem[] {

  return locale === "en" ? CONTACT_FAQS_EN : CONTACT_FAQS_SV;

}

