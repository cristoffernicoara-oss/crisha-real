import type { CaseStudy } from "@/lib/case-study-types";

/** English copy for case studies (same slugs and structure as Swedish source). */
export const caseStudiesEn: CaseStudy[] = [
  {
    id: 1,
    slug: "fashionup-meta-ads",
    client: "FashionUp",
    category: "E-commerce · Fashion",
    service: "Meta Ads",
    serviceColor: "#2563EB",
    duration: "4 months",
    location: "Sweden",
    challenge:
      "FashionUp sold fashion online with ROAS 1.4× on Meta Ads, close to break-even. Budget was run in-house without a clear campaign structure or active retargeting. CPA was 47 SEK per purchase, which was too high for their margins.",
    solution:
      "We rebuilt the Meta Ads account: separate campaigns per objective, lookalike audiences from existing customers, and three-tier retargeting. Eight creative variants were tested in parallel; winning formats were identified within two weeks.",
    results: {
      before: {
        ROAS: "1.4×",
        CPA: "47 SEK/purchase",
      },
      after: {
        ROAS: "3.8×",
        CPA: "19 SEK/purchase",
      },
    },
    metrics: [
      { label: "ROAS lift", value: "+171%", desc: "from 1.4× to 3.8×" },
      { label: "Lower CPA", value: "−60%", desc: "from 47 SEK to 19 SEK" },
      { label: "Revenue growth", value: "+362%", desc: "during the engagement" },
      { label: "Avg. CTR", value: "3.4%", desc: "vs. industry benchmark" },
    ],
    testimonial: {
      text: "I didn’t expect such clear results in the first few months. ROAS nearly tripled and cost per order dropped dramatically.",
      author: "Andreea M.",
      role: "Owner, FashionUp",
    },
    tags: ["Meta Ads", "Retargeting", "E-commerce", "Fashion"],
  },
  {
    id: 2,
    slug: "dentalmed-google-ads",
    client: "DentalMed Clinic",
    category: "Healthcare · Dentistry",
    service: "Google Ads",
    serviceColor: "#0EA5E9",
    duration: "3 months",
    location: "Sweden",
    challenge:
      "DentalMed Clinic had run Google Ads for six months without clear impact. They spent 1,500 SEK/month and got 8–10 calls, half of them irrelevant. Tracking was weak and they didn’t know which keywords brought real patients.",
    solution:
      "A technical review showed much of the budget went to irrelevant searches without negative keywords. We restructured campaigns per service (implants, whitening, emergency), set up call and form tracking, and optimised landing pages per offer.",
    results: {
      before: {
        Leads: "8–10 calls/mo",
        CPL: "175 SEK/lead",
      },
      after: {
        Leads: "34 calls/mo",
        CPL: "62 SEK/lead",
      },
    },
    metrics: [
      { label: "More leads", value: "+240%", desc: "from ~10 to 34 calls/mo" },
      { label: "Lower CPL", value: "−59%", desc: "from 175 SEK to 62 SEK" },
      { label: "Qualified leads", value: "89%", desc: "share of relevant calls" },
      { label: "Same budget", value: "Unchanged", desc: "better results per krona" },
    ],
    testimonial: {
      text: "We spent the same budget as before but got three times as many new patients per month. The difference was that Crisha knew exactly where the money was going.",
      author: "Dr. Bogdan T.",
      role: "Director, DentalMed Clinic",
    },
    tags: ["Google Ads", "Lead generation", "Healthcare", "Call tracking"],
  },
  {
    id: 3,
    slug: "craftbeer-tiktok-ads",
    client: "Craft Brewers Conference",
    category: "Food & beverage · E-commerce",
    service: "TikTok Ads",
    serviceColor: "#EC4899",
    duration: "6 weeks",
    location: "Sweden",
    challenge:
      "Craft Brewers Conference had a strong product but almost no online visibility. No active TikTok presence and a limited budget (€400/month). The audience was 25–35-year-olds who enjoy craft beer but didn’t know the brand.",
    solution:
      "Native TikTok strategy: behind-the-scenes, brewery, and recipe stories. Spark Ads on top-performing organic content and In-Feed with real customer reactions. We scaled selectively based on data.",
    results: {
      before: {
        Reach: "~500/mo organic",
        Orders: "12 online orders/mo",
      },
      after: {
        Reach: "280K reach in 6 weeks",
        Orders: "89 online orders/mo",
      },
    },
    metrics: [
      { label: "Total reach", value: "280K", desc: "in six weeks" },
      { label: "More orders", value: "+641%", desc: "monthly vs. baseline" },
      { label: "New followers", value: "4,200", desc: "parallel organic growth" },
      { label: "Avg. CPM", value: "€1.2", desc: "vs. higher CPM on Meta" },
    ],
    testimonial: {
      text: "With €400 a month we reached 280,000 people in 6 weeks. I didn’t think that was possible on such a small budget. Now we have waitlists for some products.",
      author: "Mihai C.",
      role: "Founder, Craft Brewers Conference",
    },
    tags: ["TikTok Ads", "Spark Ads", "Brand", "E-commerce"],
  },
  {
    id: 4,
    slug: "casa-nostra-web-design",
    client: "Casa Nostra",
    category: "Restaurant & pizzeria · Lomma",
    service: "Web design",
    serviceColor: "#8B5CF6",
    duration: "3 weeks",
    location: "Lomma · Sweden",
    challenge:
      "Guests looked for the menu, opening hours, and catering on their phones, but the old site was cluttered, slow, and made it hard to find today’s lunch, the pizza menu, or a clear way to call. A lot of traffic bounced before anyone booked or ordered.",
    solution:
      "A new mobile-first site aligned with the restaurant on Järnvägsgatan 4 in Lomma: clear entry points for today’s lunch, structured menus (pizza, à la carte, catering), opening hours, and fast paths to phone for bookings and catering. Tighter layouts, optimised images, and fewer round-trips lifted both UX and goal clicks.",
    results: {
      before: {
        Conversion: "1.0% goal interaction (calls/menu)",
        Speed: "6.1 s load time",
      },
      after: {
        Conversion: "2.9% goal interaction (calls/menu)",
        Speed: "1.6 s load time",
      },
    },
    metrics: [
      { label: "Conversion lift", value: "+190%", desc: "from 1.0% to 2.9%" },
      { label: "Faster load", value: "−74%", desc: "from 6.1 s to 1.6 s" },
      { label: "Catering enquiries", value: "+62%", desc: "more contacts via catering path" },
      { label: "PageSpeed score", value: "96", desc: "mobile-first optimisation" },
    ],
    testimonial: {
      text: "Guests find the menu and today’s lunch right on their phones, and we feel it at the venue. More clear catering requests, and the site finally matches how we want the brand to come across.",
      author: "Liviu Nicoara",
      role: "Owner, Casa Nostra",
    },
    tags: ["Web design", "CRO", "Performance", "Restaurant"],
  },
];
