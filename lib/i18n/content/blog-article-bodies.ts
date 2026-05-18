import type { Locale } from "@/lib/i18n/types";

export type BlogArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticleBody = {
  sections: BlogArticleSection[];
  summaryHeading: string;
  summary: string;
  summaryBullets?: string[];
  closingParagraphs?: string[];
};

const tiktokSv: BlogArticleBody = {
  sections: [
    {
      heading: "1. “Native content” vinner inte reklam",
      paragraphs: [
        "Det största misstaget företag fortfarande gör är att skapa innehåll som känns som reklam. På TikTok fungerar det motsatta. Annonser som ser ut som vanliga videos, autentiska, enkla och ibland till och med lite “stökiga” presterar bäst.",
        "Det handlar inte om perfekt ljus eller dyr produktion, utan om att fånga uppmärksamhet de första 2–3 sekunderna. En stark hook, som en fråga eller ett påstående, kan avgöra hela resultatet.",
      ],
    },
    {
      heading: "2. UGC (User Generated Content) är kung",
      paragraphs: [
        "User Generated Content fortsätter dominera 2026. Det betyder att innehåll som ser ut som att det kommer från en vanlig person snarare än ett företag ofta ger bättre resultat.",
        "Många svenska företag samarbetar idag med mindre creators eller spelar in “fake UGC” där någon pratar direkt till kameran och berättar om produkten eller tjänsten. Det bygger förtroende snabbare än traditionell reklam.",
      ],
    },
    {
      heading: "3. Snabba, tydliga budskap",
      paragraphs: [
        "TikTok är en snabb plattform. Du har väldigt kort tid på dig att fånga intresse. Det som fungerar bäst just nu i Sverige är:",
        "Långa förklaringar eller komplicerade budskap tappar snabbt tittare.",
      ],
      bullets: [
        "Tydliga erbjudanden",
        "Konkret värde (t.ex. “få fler kunder”, “spara pengar”, “bli av med X problem”)",
        "Enkla call-to-actions",
      ],
    },
    {
      heading: "4. Lokalt innehåll slår generiskt",
      paragraphs: [
        "Svenska användare svarar bättre på innehåll som känns lokalt och relevant. Det kan vara språk, referenser eller miljöer som känns igen.",
        "Ett företag i Malmö eller Stockholm kan ofta få bättre resultat genom att visa verkliga case, lokala kunder eller sin egen verksamhet istället för generiska stockvideos.",
      ],
    },
    {
      heading: "5. Testa mycket! Vinn snabbt!",
      paragraphs: [
        "En av de största fördelarna med TikTok Ads är hur snabbt du kan testa vad som fungerar. Framgångsrika företag 2026 jobbar inte med en eller två annonser, de testar 10–20 variationer.",
        "Små ändringar i hook, text eller video kan göra enorm skillnad i resultat. Det handlar inte om att “gissa rätt” från början, utan om att testa sig fram och skala det som fungerar.",
      ],
    },
  ],
  summaryHeading: "Sammanfattning",
  summary:
    "TikTok Ads i Sverige 2026 handlar inte om att vara perfekt utan det handlar om att vara relevant, snabb och äkta. Företag som vågar släppa kontrollen lite, testa mycket och anpassa sig till plattformens stil är de som vinner.",
};

const tiktokEn: BlogArticleBody = {
  sections: [
    {
      heading: "1. “Native content” wins not ads",
      paragraphs: [
        "The biggest mistake brands still make is creative that feels like an ad. On TikTok, the opposite works. Ads that look like normal videos, authentic, simple, sometimes even a bit rough, perform best.",
        "It’s not about perfect lighting or expensive production; it’s about earning attention in the first 2–3 seconds. A strong hook, like a question or a bold claim, can decide the whole outcome.",
      ],
    },
    {
      heading: "2. UGC is still king",
      paragraphs: [
        "User-generated-style content keeps dominating in 2026. That means creative that looks like it comes from a regular person rather than a brand often performs better.",
        "Many Swedish companies work with smaller creators or film “fake UGC” where someone talks straight to camera about the product or service. That builds trust faster than traditional ads.",
      ],
    },
    {
      heading: "3. Fast, clear messages",
      paragraphs: [
        "TikTok moves fast. You have very little time to earn interest. What works best in Sweden right now:",
        "Long explanations or complex messages lose viewers quickly.",
      ],
      bullets: [
        "Clear offers",
        "Concrete value (e.g. “get more customers”, “save money”, “fix X problem”)",
        "Simple calls to action",
      ],
    },
    {
      heading: "4. Local beats generic",
      paragraphs: [
        "Swedish users respond better to content that feels local and relevant: language, references, or environments they recognise.",
        "A business in Malmö or Stockholm often gets better results showing real cases, local customers, or their own premises instead of generic stock footage.",
      ],
    },
    {
      heading: "5. Test a lot! Win fast!",
      paragraphs: [
        "One of TikTok Ads’ biggest advantages is how quickly you can learn what works. Successful brands in 2026 don’t stick to one or two ads, they test 10–20 variations.",
        "Small changes to hook, copy, or footage can swing results massively. It’s not about guessing right on day one, it’s about testing your way forward and scaling what works.",
      ],
    },
  ],
  summaryHeading: "Summary",
  summary:
    "TikTok Ads in Sweden in 2026 isn’t about being perfect, it’s about being relevant, fast, and real. Brands willing to loosen the grip a little, test aggressively, and match the platform’s style are the ones that win.",
};

const googleAdsSv: BlogArticleBody = {
  sections: [
    {
      heading: "Inledning",
      paragraphs: [
        "Problemet är sällan att Google Ads \"inte fungerar\", utan att kontot är fel uppsatt från början eller saknar rätt optimering.",
        "I den här artikeln går vi igenom de vanligaste misstagen – och hur du kan undvika dem.",
      ],
    },
    {
      heading: "Misstag #1: Inga negativa sökord",
      paragraphs: [
        "Ett av de största misstagen vi ser är att företag inte använder negativa sökord.\n\nDet innebär att dina annonser visas på irrelevanta sökningar, till exempel:",
        "Resultat: Du betalar för klick som aldrig kommer konvertera.",
        "Lösning: Bygg en lista med negativa sökord och uppdatera den kontinuerligt. Detta är en av de snabbaste sätten att sänka kostnader och öka lönsamheten.",
      ],
      bullets: [
        "personer som letar efter gratis lösningar",
        "folk som söker jobb",
        "helt fel målgrupp",
      ],
    },
    {
      heading: "Misstag #2: Felaktig eller saknad spårning",
      paragraphs: [
        "Om du inte har korrekt tracking vet du egentligen inte vad som fungerar.\n\nMånga konton saknar:",
        "Resultat: Du optimerar på fel data – eller ingen data alls.",
        "Lösning: Se till att alla viktiga handlingar på hemsidan spåras korrekt. Utan data gissar du – och det blir dyrt.",
      ],
      bullets: [
        "konverteringsspårning",
        "korrekt koppling till Google Analytics",
        "tydliga mål (leads, köp, bokningar)",
      ],
    },
    {
      heading: "Misstag #3: Dålig kampanjstruktur",
      paragraphs: [
        "En rörig eller för bred kampanjstruktur gör det svårt att optimera.\n\nVanliga problem:",
        "Resultat: Lägre klickfrekvens och högre kostnad per klick.",
        "Lösning: Dela upp kampanjer och annonsgrupper baserat på tydliga teman. Anpassa annonserna efter exakt vad användaren söker efter.",
      ],
      bullets: [
        "för många olika sökord i samma annonsgrupp",
        "inga tydliga teman",
        "generiska annonser som inte matchar sökningen",
      ],
    },
    {
      heading: "Misstag #4: Fel budstrategi",
      paragraphs: [
        "Många låter Google \"sköta allt\" utan att ha tillräckligt med data.",
        "Resultat: Algoritmen optimerar fel och bränner budget.",
        "Lösning: Börja med en strategi som passar din situation och skala först när du har tillräckligt med konverteringsdata.",
      ],
    },
    {
      heading: "Misstag #5: Ingen löpande optimering",
      paragraphs: [
        "Google Ads är inte \"sätt upp och glöm\".\n\nKonton som inte optimeras regelbundet:",
        "Resultat: Du betalar mer över tid för sämre resultat.",
        "Lösning: Analysera och optimera kontinuerligt: söktermer, annonser, bud och målgrupper.",
      ],
      bullets: ["tappar i prestanda", "får högre kostnader", "missar nya möjligheter"],
    },
  ],
  summaryHeading: "Så vänder du det (snabb sammanfattning)",
  summary: "För att få ett lönsamt Google Ads-konto behöver du:",
  summaryBullets: [
    "rätt sökord (och negativa sökord)",
    "korrekt spårning",
    "tydlig struktur",
    "rätt budstrategi",
    "kontinuerlig optimering",
  ],
  closingParagraphs: [
    "Vill du veta hur ditt konto presterar?",
    "Vi erbjuder en gratis analys av ditt Google Ads-konto där vi visar vad som läcker pengar, vad som fungerar och konkreta förbättringar du kan göra direkt.",
    "Hör av dig så tar vi en snabb genomgång – helt utan kostnad.",
  ],
};

const googleAdsEn: BlogArticleBody = {
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "The problem is rarely that Google Ads “doesn’t work”, but that the account was set up wrong from the start or lacks proper optimisation.",
        "In this article we walk through the most common mistakes and how you can avoid them.",
      ],
    },
    {
      heading: "Mistake #1: No negative keywords",
      paragraphs: [
        "One of the biggest mistakes we see is businesses not using negative keywords.\n\nThat means your ads show for irrelevant searches, for example:",
        "Result: You pay for clicks that will never convert.",
        "Solution: Build a negative keyword list and keep refining it. It’s one of the fastest ways to cut wasted spend and improve profitability.",
      ],
      bullets: [
        "people looking for free solutions",
        "people searching for jobs",
        "completely the wrong audience",
      ],
    },
    {
      heading: "Mistake #2: Broken or missing tracking",
      paragraphs: [
        "If tracking isn’t correct, you don’t really know what works.\n\nMany accounts are missing:",
        "Result: You optimise on the wrong data, or no data at all.",
        "Solution: Make sure every important action on your site is tracked properly. Without data you’re guessing, and that gets expensive.",
      ],
      bullets: [
        "conversion tracking",
        "a proper link to Google Analytics",
        "clear goals (leads, purchases, bookings)",
      ],
    },
    {
      heading: "Mistake #3: Weak campaign structure",
      paragraphs: [
        "A messy or overly broad structure makes optimisation hard.\n\nCommon issues:",
        "Result: Lower CTR and higher cost per click.",
        "Solution: Split campaigns and ad groups around clear themes. Match ads closely to what people actually search for.",
      ],
      bullets: [
        "too many different keywords in one ad group",
        "no clear themes",
        "generic ads that don’t match the query",
      ],
    },
    {
      heading: "Mistake #4: Wrong bidding strategy",
      paragraphs: [
        "Many advertisers let Google “handle everything” without enough conversion data.",
        "Result: The algorithm optimises the wrong things and burns budget.",
        "Solution: Start with a strategy that fits your situation and only scale once you have enough conversion data.",
      ],
    },
    {
      heading: "Mistake #5: No ongoing optimisation",
      paragraphs: [
        "Google Ads is not “set and forget”.\n\nAccounts that aren’t optimised regularly:",
        "Result: Over time you pay more for weaker performance.",
        "Solution: Analyse and optimise continuously: search terms, ads, bids, and audiences.",
      ],
      bullets: ["lose performance", "face higher costs", "miss new opportunities"],
    },
  ],
  summaryHeading: "Quick recap: how to turn it around",
  summary: "For a profitable Google Ads account you need:",
  summaryBullets: [
    "the right keywords (and negative keywords)",
    "correct tracking",
    "clear structure",
    "the right bidding strategy",
    "continuous optimisation",
  ],
  closingParagraphs: [
    "Want to know how your account is really performing?",
    "We offer a free review of your Google Ads account where we show what’s wasting budget, what’s working, and concrete improvements you can make right away.",
    "Reach out and we’ll walk through it quickly, completely free of charge.",
  ],
};

const roasModeSv: BlogArticleBody = {
  sections: [
    {
      heading: "Inledning",
      paragraphs: [
        "Men med rätt strategi går det att vända siffrorna snabbt.",
        "Här är exakt hur vi hjälpte en av våra kunder att öka sin ROAS från 1,4× till 3,8× på bara 4 månader.",
      ],
    },
    {
      heading: "Utgångsläge",
      paragraphs: [
        "När vi tog över kontot såg vi flera tydliga problem:",
        "Kort sagt: mycket budget spenderades, men utan tydlig riktning.",
      ],
      bullets: [
        "Låg ROAS (1,4×)",
        "Otydlig kampanjstruktur",
        "För bred målgrupp",
        "Creatives som inte stack ut",
        "Ingen tydlig skalningsstrategi",
      ],
    },
    {
      heading: "Steg 1: Ny kampanjstruktur",
      paragraphs: [
        "Vi började med att bygga om hela kontot.\n\nIstället för att ha allt blandat skapade vi en tydlig struktur:",
        "Resultat: Bättre kontroll och tydligare data att optimera på.",
      ],
      bullets: ["Prospecting (nya kunder)", "Retargeting (varma målgrupper)", "Scaling-kampanjer (det som redan fungerar)"],
    },
    {
      heading: "Steg 2: Rätt målgrupper",
      paragraphs: [
        "Tidigare riktade kunden sig väldigt brett.\n\nVi testade istället:",
        "Resultat: Högre relevans och billigare konverteringar.",
      ],
      bullets: [
        "Lookalike audiences baserat på köp",
        "Engagerade användare (Instagram/Facebook)",
        "Webbplatsbesökare",
      ],
    },
    {
      heading: "Steg 3: Nya creatives som konverterar",
      paragraphs: [
        "En av de största förändringarna var creatives.\n\nVi gick från generiska produktbilder till:",
        "Resultat: Kraftigt ökad CTR och lägre kostnad per klick.",
      ],
      bullets: [
        "UGC (user generated content)",
        "Korta videoannonser",
        "Tydliga hooks första 3 sekunderna",
      ],
    },
    {
      heading: "Steg 4: Datadriven optimering",
      paragraphs: [
        "Vi analyserade kontinuerligt:",
        "Och flyttade budgeten dit resultaten fanns.",
        "Resultat: Mer av det som fungerar, mindre av det som inte gör det.",
      ],
      bullets: [
        "Vilka annonser som presterade bäst",
        "Vilka målgrupper som konverterade",
        "Vilka produkter som sålde mest",
      ],
    },
    {
      heading: "Steg 5: Smart skalning",
      paragraphs: [
        "När vi hittade vinnare började vi skala upp:",
        "Resultat: Tillväxt utan att förstöra lönsamheten.",
      ],
      bullets: [
        "Ökade budgeten gradvis",
        "Duplicerade vinnande kampanjer",
        "Testade nya variationer av creatives",
      ],
    },
    {
      heading: "Resultatet efter 4 månader",
      paragraphs: ["Siffrorna talade sitt tydliga språk:"],
      bullets: [
        "ROAS: 1,4× → 3,8×",
        "Lägre kostnad per köp",
        "Stabil och skalbar annonsering",
        "Betydligt högre omsättning",
      ],
    },
    {
      heading: "Viktigaste lärdomarna",
      paragraphs: ["Det här är vad som gjorde störst skillnad:"],
      bullets: [
        "Struktur är avgörande",
        "Creatives gör störst skillnad",
        "Data ska styra alla beslut",
        "Skalning kräver tålamod",
      ],
    },
  ],
  summaryHeading: "Vill du ha samma resultat?",
  summary: "Vi hjälper företag att skala sin annonsering på Meta varje dag.",
  closingParagraphs: [
    "Vill du veta vad som håller tillbaka ditt konto?",
    "Vi erbjuder en gratis analys där vi visar exakt vad du kan förbättra.",
    "Hör av dig så tar vi det därifrån.",
  ],
};

const roasModeEn: BlogArticleBody = {
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "But with the right strategy you can turn the numbers around quickly.",
        "Here’s exactly how we helped one client lift ROAS from 1.4× to 3.8× in just four months.",
      ],
    },
    {
      heading: "Starting point",
      paragraphs: [
        "When we took over the account we saw several clear issues:",
        "In short: a lot of budget was spent without a clear direction.",
      ],
      bullets: [
        "Low ROAS (1.4×)",
        "Unclear campaign structure",
        "Audience too broad",
        "Creatives that didn’t stand out",
        "No clear scaling plan",
      ],
    },
    {
      heading: "Step 1: New campaign structure",
      paragraphs: [
        "We started by rebuilding the whole account.\n\nInstead of mixing everything together we created a clear structure:",
        "Result: Better control and cleaner data to optimise from.",
      ],
      bullets: ["Prospecting (new customers)", "Retargeting (warm audiences)", "Scaling campaigns (what already works)"],
    },
    {
      heading: "Step 2: The right audiences",
      paragraphs: [
        "Previously targeting was very broad.\n\nWe tested instead:",
        "Result: Higher relevance and cheaper conversions.",
      ],
      bullets: [
        "Lookalike audiences based on purchasers",
        "Engaged users (Instagram/Facebook)",
        "Website visitors",
      ],
    },
    {
      heading: "Step 3: New creatives that convert",
      paragraphs: [
        "One of the biggest shifts was creative.\n\nWe moved from generic product shots to:",
        "Result: Much higher CTR and lower cost per click.",
      ],
      bullets: ["UGC-style content", "Short video ads", "Clear hooks in the first 3 seconds"],
    },
    {
      heading: "Step 4: Data-driven optimisation",
      paragraphs: [
        "We analysed continuously:",
        "Then moved budget to where the results were.",
        "Result: More of what works, less of what doesn’t.",
      ],
      bullets: [
        "Which ads performed best",
        "Which audiences converted",
        "Which products sold most",
      ],
    },
    {
      heading: "Step 5: Smart scaling",
      paragraphs: [
        "When we found winners we scaled:",
        "Result: Growth without killing profitability.",
      ],
      bullets: [
        "Increased budget gradually",
        "Duplicated winning campaigns",
        "Tested new creative variations",
      ],
    },
    {
      heading: "Results after 4 months",
      paragraphs: ["The numbers spoke clearly:"],
      bullets: [
        "ROAS: 1.4× → 3.8×",
        "Lower cost per purchase",
        "Stable, scalable advertising",
        "Significantly higher revenue",
      ],
    },
    {
      heading: "Key takeaways",
      paragraphs: ["What moved the needle most:"],
      bullets: [
        "Structure is critical",
        "Creative makes the biggest difference",
        "Let data drive every decision",
        "Scaling takes patience",
      ],
    },
  ],
  summaryHeading: "Want similar results?",
  summary: "We help brands scale Meta advertising every day.",
  closingParagraphs: [
    "Curious what’s holding your account back?",
    "We offer a free analysis that shows exactly what you can improve.",
    "Reach out and we’ll take it from there.",
  ],
};

const metaBoost2026Sv: BlogArticleBody = {
  sections: [
    {
      heading: "Boost kan inte bära hela kontot",
      paragraphs: [
        "Det finns ett misstag vi ser om och om igen när vi som Meta Ads byrå i Sverige gör gratis revisioner för nya kunder: hela annonsbudgeten läggs på boostade inlägg. Inga kampanjstrukturer. Ingen retargeting. Ingen spårning som faktiskt mäter försäljning.",
        "Resultatet? En ROAS på 1,1 till 1,6 och en känsla av att Facebook annonsering inte fungerar för dem.",
        "Det fungerar. Men inte såhär.",
      ],
    },
    {
      heading: "Vad som faktiskt har förändrats med Meta Ads 2026",
      paragraphs: [
        "Många svenska företag söker idag efter en Facebook Ads byrå eller Meta Ads byrå för att komma vidare efter att ha testat att boosta inlägg på egen hand. Det är ett smart steg, men bara om byrån faktiskt förstår hur plattformen fungerar 2026.",
        "Metas algoritm har blivit dramatiskt bättre på att hitta köpvilliga användare, men bara om den får rätt signaler att jobba med. Advantage+ Shopping Campaigns, bred targeting och AI-driven budgetoptimering är inte buzzwords längre. De är grundförutsättningar för lönsam betald annonsering på Facebook och Instagram.",
        "Det innebär att den gamla logiken med snäv målgrupp, manuella placeringar och mikrooptimerade intressen i många fall faktiskt skadar dina resultat. Algoritmen behöver utrymme att lära sig, och du behöver ge den det.",
        "Men frihet åt algoritmen betyder inte att du lämnar ratten. Det betyder att du lägger energin på rätt saker: creatives, erbjudanden och konverteringsspårning.",
      ],
    },
    {
      heading: "Misstag 1: Ingen full-funnel-struktur",
      paragraphs: [
        "Det första och vanligaste misstaget är att det saknas en full-funnel-struktur. De flesta som annonserar på Facebook och Instagram kör bara mot kalla målgrupper och hoppas att det räcker. Det gör det sällan. En lönsam struktur för Meta annonsering arbetar på tre nivåer samtidigt: bred räckvidd mot nya ögon, ett mellanlager som bearbetar engagerade användare som inte konverterat ännu, och ett bottenplan med retargeting mot varma leads och övergivna varukorgar. Utan de två sista nivåerna lämnar du pengar på bordet varje dag.",
      ],
    },
    {
      heading: "Misstag 2: Creatives som inte sticker ut",
      paragraphs: [
        "Det andra misstaget handlar om creatives som inte sticker ut. Meta är ett flöde och din annons konkurrerar med vänners inlägg, nyheter och kattvideos. En snygg produktbild räcker sällan, du behöver content som stoppar scrollandet inom de första sekunderna. Det vi ser fungerar bäst just nu är UGC-liknande videos, before/after-format och direkta testimonials från riktiga kunder. Polerat och professionellt är inte synonymt med effektivt.",
      ],
    },
    {
      heading: "Misstag 3: Felaktig eller saknad konverteringsspårning",
      paragraphs: [
        "Det tredje misstaget är det allvarligaste: felaktig eller saknad konverteringsspårning. Om Meta inte får tillbaka rätt konverteringssignaler, om din pixel mäter klick på varukorgen när den borde mäta genomförda köp, optimerar algoritmen mot fel mål. Resultatet är massor av aktivitet i kontot men ingen försäljning. Conversions API är idag ett krav, inte ett plus. Cookierestriktioner och iOS-förändringar har gjort pixeln ensam otillräcklig för dig som vill driva seriös digital marknadsföring i Sverige.",
      ],
    },
    {
      heading: "Vad du bör fokusera på under resten av 2026",
      paragraphs: ["Gör konkret så här:"],
      bullets: [
        "Ge algoritmen rätt konverteringssignaler. Sätt upp Conversions API korrekt, verifiera din domän och se till att dina köphändelser har hög matchningskvalitet.",
        "Testa creatives systematiskt. Skapa minst tre till fem varianter per annonsgrupp och låt data avgöra istället för magkänsla. Byt ut de sämst presterande varannan till var tredje vecka.",
        "Bygg upp dina retargeting-segment. Vem har besökt din sajt de senaste 30 dagarna? Vilka har lagt produkter i varukorgen utan att köpa? Det är dina varmaste leads och de förtjänar ett annat budskap än en helt ny besökare.",
        "Utvärdera ROAS på rätt nivå. Titta inte bara på enskilda annonser utan på kampanjstrukturen som helhet. En kampanj högt upp i tratten med lägre ROAS kan ändå vara lönsam om den matar din retargeting med kvalificerade leads.",
      ],
    },
  ],
  summaryHeading: "Vad kan du förvänta dig av en seriös Meta Ads byrå?",
  summary:
    "Som digital marknadsföringsbyrå i Sverige jobbar vi på Crisha med den här strukturen för alla våra kunder, oavsett budget. Det är därför vår genomsnittliga portfölj-ROAS ligger på 4,8 mot branschsnittet på 2,1. Det handlar inte om magi, det handlar om rätt setup, rätt creatives och rätt optimering vecka efter vecka. Vi hjälper svenska och europeiska företag att växa lönsamt med Meta Ads, Google Ads, TikTok Ads och webbdesign. Oavsett om du letar efter hjälp med Facebook annonsering, Instagram annonsering eller en komplett strategi för betald annonsering, börjar vi alltid med att förstå ditt företag på riktigt.",
  closingParagraphs: [
    "Är du nyfiken på hur ditt konto faktiskt presterar? Vi erbjuder en gratis revision utan förpliktelser där vi går igenom din nuvarande struktur och berättar ärligt vad som fungerar och vad som kostar dig pengar i onödan.",
    "Boka din gratis revision på crisha.se/kontakt",
    "Crisha Marketing är en digital marknadsföringsbyrå grundad i Malmö. Vi hjälper svenska och europeiska varumärken växa lönsamt med Meta Ads, Google Ads, TikTok Ads och webbdesign.",
  ],
};

const metaBoost2026En: BlogArticleBody = {
  sections: [
    {
      heading: "Boosting alone cannot carry the account",
      paragraphs: [
        "Here is what we keep seeing during free audits for new clients across Sweden when we operate as a Meta Ads agency: the entire budget flows into boosted posts. No campaign structure. No retargeting. No tracking that actually proves sales.",
        "The symptom? ROAS hovers around 1.1 to 1.6 and advertisers assume Facebook campaigns “don’t work”.",
        "They work. Just not configured this way.",
      ],
    },
    {
      heading: "What really changed with Meta Ads in 2026",
      paragraphs: [
        "Most Swedish advertisers eventually look for a Facebook Ads agency or Meta Ads specialist after exhausting boosts on their own. Smart move—if the agency actually understands today’s playbook.",
        "Meta’s optimisation is exponentially better at finding buyers, yet only when you feed trustworthy conversion signals: Advantage+ shopping, broad targeting, and AI-guided budgets are prerequisites for profitable Meta spend—not optional experiments.",
        "That means painfully narrow targeting, manual placement fiddling and micro-stacked interests often degrade performance instead of sharpening it—give the system room to learn.",
        "Letting algorithms learn isn’t forfeiting control. Spend your bandwidth on creatives, irresistible offers and bulletproof measurement.",
      ],
    },
    {
      heading: "Mistake #1 — Missing full-funnel structure",
      paragraphs: [
        "Nine out of ten accounts we inspect only chase cold prospects. Profitability rarely comes from isolated top-of-feed spend. Winning Meta setups layer broad prospecting with mid-funnel nurture for engaged non-buyers and bottom-funnel remarketing—including abandoned carts. Skip the nurture or remarketing layers and you willingly leak budget every single day.",
      ],
    },
    {
      heading: "Mistake #2 — Creatives that disappear in-feed",
      paragraphs: [
        "Your creative competes with friends, headlines and cat compilations—polished packshots seldom carry the moment. Winning formats lately look like UGC, before/after punchlines or customer testimonial confessionals snapped on a phone—polish without proof rarely scales.",
      ],
    },
    {
      heading: "Mistake #3 — Tracking that teaches Meta the wrong goals",
      paragraphs: [
        "This is costly: optimisation events disagree with revenue reality—optimising for add-to-cart taps while purchases matter teaches Meta the wrong incentives. Loud dashboards, mute sales figures. Treat Conversions API as mandatory hygiene; cookies and iOS already kneecapped pixel-only setups for serious ecommerce and lead teams in regulated markets.",
      ],
    },
    {
      heading: "What to obsess over during the rest of 2026",
      paragraphs: ["Practical playbook:"],
      bullets: [
        "Ship impeccable conversion signals—Conversions API, verified domain hygiene, flawless purchase-event match quality.",
        "Rotate creatives ruthlessly—run three to five variants per ad set, let statistically meaningful data choose winners every two or three weeks.",
        "Maintain surgical retargeting pools—recent site visitors versus warm cart abandoners deserve separate angles than cold launches.",
        "Evaluate ROAS at portfolio level—not per isolated ad—to understand how colder prospecting primes profitable remarketing cohorts downstream.",
      ],
    },
  ],
  summaryHeading: "What to demand from a serious Meta Ads agency",
  summary:
    "As a Swedish digital growth partner we mandate this architecture for each client irrespective of MoM spend—portfolio ROAS sits around 4.8× versus industry baselines (~2.1×) because setups, creatives and ruthless weekly iteration compound. Regardless if you seek Facebook Ads help, Instagram growth or omnichannel paid media, we onboard by deeply diagnosing your economics before touching campaigns.",
  closingParagraphs: [
    "Curious whether your dashboards tell the truth? Book a free audit — no fluff, just candid insight about what wastes budget and where upside hides.",
    "Start at crisha.se/kontakt",
    "Crisha Marketing is a Malmö-rooted agency helping Scandinavian and wider European brands scale via Meta Ads, Google Ads, TikTok Ads and high-converting websites.",
  ],
};


const BODIES: Record<string, { sv: BlogArticleBody; en: BlogArticleBody }> = {
  "meta-ads-2026-slutboosta-inlagg": { sv: metaBoost2026Sv, en: metaBoost2026En },
  "tiktok-ads-sverige": { sv: tiktokSv, en: tiktokEn },
  "google-ads-budget": { sv: googleAdsSv, en: googleAdsEn },
  "roas-modekund-meta": { sv: roasModeSv, en: roasModeEn },
};

export function getBlogArticleBody(slug: string, locale: Locale): BlogArticleBody | undefined {
  const entry = BODIES[slug];
  if (!entry) return undefined;
  return locale === "en" ? entry.en : entry.sv;
}
