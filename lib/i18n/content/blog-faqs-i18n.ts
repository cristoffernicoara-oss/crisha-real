import type { Locale } from "@/lib/i18n/types";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

const SV: Record<string, BlogFaqItem[]> = {
  "meta-ads-2026-slutboosta-inlagg": [
    {
      question: "Vad kostar Meta Ads i Sverige?",
      answer:
        "Annonskostnaden på Meta betalas direkt till Facebook och Instagram och varierar med bransch, målgrupp och säsong. Många svenska företag börjar med 8 000–25 000 kr per månad i annonsbudget, plus byråarvode om ni tar in hjälp. På Crisha rekommenderar vi en budget som räcker till både test och retargeting, annars stannar kontot i inlärning.",
    },
    {
      question: "Vad är skillnaden mellan att boosta ett inlägg och köra en riktig Meta Ads-kampanj?",
      answer:
        "Att boosta ett inlägg skickar mer räckvidd till ett enskilt organiskt inlägg, oftast utan kampanjstruktur, retargeting eller spårning mot köp. En riktig Meta Ads-kampanj har mål, målgrupper, creatives och mätning per steg i tratten. Boost kan ge likes. Kampanjer ger försäljning när signalerna är rätt.",
    },
    {
      question: "Hur lång tid tar det innan Meta Ads ger resultat?",
      answer:
        "Första datan syns ofta inom 48–72 timmar. Algoritmens inlärningsfas tar vanligtvis 7–14 dagar. Tydlig ROAS och stabil CPA kommer oftast under månad 2–3, när ni har tillräckligt med konverteringar och har bytt ut svaga creatives.",
    },
    {
      question: "Vad är Conversions API och behöver jag det?",
      answer:
        "Conversions API skickar köp- och leadhändelser från er server till Meta, inte bara via webbläsarpixeln. Ni behöver det 2026. Cookierestriktioner och iOS gör pixeln ensam otillräcklig, och utan rätt händelser optimerar Meta mot fel mål.",
    },
    {
      question: "Vad är en bra ROAS för Meta Ads?",
      answer:
        "En bra ROAS för Meta Ads i Sverige ligger ofta på 3×–5× beroende på marginaler. Under 2× är vanligtvis olönsamt för e-handel. Crisha Marketings portföljsnitt är 4,8×, mätt på hela strukturen, inte på en enskild boostad annons.",
    },
  ],
  "google-ads-budget": [
    {
      question: "Vad kostar Google Ads per månad för ett litet företag i Sverige?",
      answer:
        "Ett litet svenskt företag börjar ofta med 10 000–30 000 kr per månad i klickbudget, beroende på sökordskonkurrens. Därutöver tillkommer byrå- eller intern tid för struktur, negativa sökord och löpande optimering. Utan tillräcklig budget når kampanjerna aldrig tillräckligt med konverteringsdata.",
    },
    {
      question: "Hur skiljer sig Google Ads från Meta Ads?",
      answer:
        "Google Ads fångar personer som redan söker efter er lösning, alltså hög köpintention. Meta Ads når personer utifrån beteende och intresse, ofta tidigare i resan. De kompletterar varandra: Google tar botten av tratten, Meta bygger räckvidd och retargeting.",
    },
    {
      question: "Vad är Performance Max?",
      answer:
        "Performance Max är en Google-kampanjtyp där AI sprider era annonser över Sök, Shopping, YouTube, Display och Gmail. Den kräver bra konverteringssignaler, tydliga tillgångar och ofta ett produktflöde. Utan data och struktur kan PMax bränna budget på fel ytor.",
    },
    {
      question: "Hur snabbt ser man resultat av Google Ads?",
      answer:
        "Klick och första leads kan komma samma dag ni publicerar. Men lönsamhet kräver oftast 2–4 veckor av sökordsrensning, negativa sökord och budjustering. Stabil CPA ser vi vanligtvis när spårningen är korrekt och söktermerna är rensade.",
    },
    {
      question: "Behöver jag en byrå för att köra Google Ads?",
      answer:
        "Ni kan starta själva, men de flesta olönsamma konton vi reviderar saknar negativa sökord, spårning och tydlig struktur. En byrå lönar sig när klickpriserna är höga eller när ni inte har tid att optimera varje vecka. En gratis genomgång visar om läckaget är stort nog.",
    },
  ],
  "tiktok-ads-sverige": [
    {
      question: "Fungerar TikTok Ads för B2B-företag?",
      answer:
        "Ja, om målgruppen faktiskt är på TikTok och ni pratar som plattformen kräver. B2B på TikTok fungerar bäst med native video, tydligt problem och konkret erbjudande, inte med bannerkänsla. Många B2B-bolag använder TikTok för räckvidd och låter Google Ads ta de varmaste sökningarna.",
    },
    {
      question: "Vad är minsta budget för TikTok Ads i Sverige?",
      answer:
        "För att testa kreativt och ge algoritmen rum räcker sällan mindre än 5 000–10 000 kr per månad. Under det hinner ni sällan comparera hooks. Skala först när en video visar tydlig retention och rimlig CPA.",
    },
    {
      question: "Vilken typ av content fungerar bäst på TikTok Ads?",
      answer:
        "Native content vinner: UGC-känsla, stark hook i de första 2–3 sekunderna och ett enkelt budskap. Polerad reklam som ser ut som TV presterar sämre. Testa 10–20 varianter och skala det som håller kvar tittaren.",
    },
    {
      question: "Hur skiljer sig TikTok Ads från Meta Ads?",
      answer:
        "TikTok belönar råare, snabbare video och kan lyfta nytt content snabbt. Meta är ofta starkare på retargeting, katalog och en bredare åldersgrupp i Instagram och Facebook. De hör ihop i en funnel: TikTok i toppen, Meta i mitten och botten, Google när någon söker.",
    },
  ],
  "grafisk-profil-vad-ska-inga-i-manualen": [
    {
      question: "Vad kostar en professionell hemsida i Sverige?",
      answer:
        "En professionell sajt för ett svenskt SME ligger ofta från cirka 40 000 kr för en konverterande presentationssajt, och uppåt för e-handel eller mer komplex funktionalitet. Priset styrs av antal sidor, design, integrationer och hur mycket copy och SEO som ingår. Billiga mallar blir dyra om de inte konverterar.",
    },
    {
      question: "Hur lång tid tar det att bygga en hemsida?",
      answer:
        "En tydlig presentationssajt tar vanligtvis 4–8 veckor från brief till lansering. E-handel och skräddarsydd funktionalitet tar längre. Tiden går åt till struktur, design, copy, utveckling och test, inte bara till att “sätta upp en mall”.",
    },
    {
      question: "Vad är Core Web Vitals och varför spelar det roll?",
      answer:
        "Core Web Vitals är Googles mått på laddning, interaktivitet och visuell stabilitet. De påverkar både ranking och hur många som stannar. En långsam eller hoppande sajt tappar besökare, och ni betalar fortfarande för klicken från Google Ads.",
    },
    {
      question: "Hur vet jag om min hemsida konverterar dåligt?",
      answer:
        "Tecken är hög bounce, få klick på CTA, korta sessioner och att annonser ger trafik men inga leads. Jämför antal besök med antal förfrågningar eller köp. Om ni betalar för klick och hemsidan inte förklarar erbjudandet på tre sekunder konverterar den för dåligt.",
    },
  ],
  "google-ai-finance-europa-seo-content": [
    {
      question: "Hur lång tid tar det att ranka på Google?",
      answer:
        "SEO tar vanligtvis 3–6 månader innan ni ser tydliga lyft i ranking och organisk trafik. Nya sajter och konkurrensutsatta sökord tar längre. Därefter fortsätter trafiken att komma utan att ni betalar per klick, till skillnad från Google Ads.",
    },
    {
      question: "Vad är skillnaden mellan SEO och Google Ads?",
      answer:
        "SEO är organisk synlighet i sökresultaten utan att betala per klick. Google Ads är betald placering ovanför eller bredvid de organiska resultaten. SEO tar tid men bygger tillgång. Ads ger trafik samma dag. De flesta lönsamma företag kör båda.",
    },
    {
      question: "Vad kostar SEO per månad?",
      answer:
        "Löpande SEO för ett svenskt SME ligger ofta på 8 000–25 000 kr per månad beroende på konkurrens, teknisk skuld och hur mycket innehåll som behövs. Det täcker analys, innehåll, länkar och teknisk förbättring. Engångsfixar utan uppföljning ger sällan bestående ranking.",
    },
    {
      question: "Vad är lokal SEO och behöver jag det?",
      answer:
        "Lokal SEO gör att ni syns när någon söker med plats, till exempel “byrå Malmö” eller “nära mig”. Ni behöver det om kunderna är geografiskt avgränsade. Google Business Profile, lokala landningssidor och recensioner är grunden.",
    },
  ],
  "hur-satter-man-upp-full-funnel-strategi": [
    {
      question: "Vad är en full funnel-strategi?",
      answer:
        "En full funnel-strategi delar marknadsföringen i tre steg: TOF för räckvidd, MOF för övervägande och BOF för konvertering. Varje steg har eget budskap, målgrupp och KPI. Utan den uppdelningen blandas signalerna och ROAS sjunker.",
    },
    {
      question: "Vilka kanaler passar bäst i toppen, mitten och botten av tratten?",
      answer:
        "Toppen: TikTok Ads och Meta med video och bred räckvidd. Mitten: Meta med social proof, retargeting och engagemang. Botten: Google Ads på sökord med köpintention plus varm retargeting. Webb och landningssida måste matcha steget, annars tappar ni konvertering.",
    },
    {
      question: "Hur vet jag vilken fas mina kunder befinner sig i?",
      answer:
        "Kalla besökare som aldrig sett er är TOF. De som tittat på video, följt er eller varit på sajten utan att köpa är MOF. De som sökt varumärket, lagt i varukorg eller öppnat offert är BOF. Mät beteende, inte bara “alla 18–65”.",
    },
    {
      question: "Vad är retargeting och hur fungerar det?",
      answer:
        "Retargeting visar annonser för personer som redan har interagerat med er, till exempel sajtbesökare eller tittare. Ni bygger segment på 7, 14 och 30 dagar och ger dem ett annat budskap än kalla målgrupper. Det är ofta den mest lönsamma delen av tratten.",
    },
  ],
  "vad-ar-geo-och-varfor-syns-ditt-foretag-inte-i-chatgpt": [
    {
      question: "Vad är GEO, Generative Engine Optimization?",
      answer:
        "GEO, Generative Engine Optimization, är att optimera innehåll och digital närvaro så att AI-modeller som ChatGPT, Perplexity och Google AI Overviews citerar eller nämner er. Målet är att synas i svaret, inte bara i en blå länk. Begreppet myntades av forskare vid Princeton 2023.",
    },
    {
      question: "Hur optimerar man sin hemsida för ChatGPT?",
      answer:
        "Skriv tydliga svar direkt under frågerubriker, håll stycken korta och faktabaserade, och bygg auktoritet via externa omnämnanden. Schema markup och en stark SEO-grund hjälper modellerna att förstå vem ni är. Earned media väger tyngre än text ni bara publicerar om er själva.",
    },
    {
      question: "Är GEO samma sak som SEO?",
      answer:
        "Nej. SEO handlar om att ranka i Googles organiska resultat. GEO handlar om att bli källan AI väljer när den svarar. De samverkar: sidor som rankar högt på Google syns i AI-svar i ungefär 25 procent av fallen, men GEO kräver mer frågebaserat, citerbart innehåll.",
    },
    {
      question: "Hur vet jag om mitt företag syns i ChatGPT?",
      answer:
        "Fråga ChatGPT, Perplexity och Google AI Overviews det era kunder faktiskt frågar, på svenska, och se om ni nämns. Jämför med konkurrenter. En genomgång hos oss kartlägger luckorna och vad som saknas i innehåll, omnämnanden och struktur.",
    },
  ],
  "darfor-forlorar-ditt-foretag-kunder-till-konkurrenterna": [
    {
      question: "Varför väljer kunder min konkurrent istället för mig?",
      answer:
        "Oftast för att konkurrenten syntes först: i sök, i annonser eller på en snabbare hemsida. Produkt och pris spelar ingen roll om kunden aldrig hittar er. Synlighet vid rätt tillfälle plus förtroendesignaler nära beslutet avgör valet.",
    },
    {
      question: "Hur vet jag om min marknadsföring fungerar?",
      answer:
        "Den fungerar om ni kan koppla spend till leads eller köp, inte bara till räckvidd och klick. Kolla spårning, CPA, ROAS och vad som händer på sajten efter klicket. Saknas de talen gissar ni, och gissningar är dyra.",
    },
    {
      question: "Vad är den vanligaste anledningen till att annonser inte ger resultat?",
      answer:
        "Fel eller saknad konverteringsspårning, tillsammans med trafik till en sajt som inte konverterar. Näst vanligast är att hela budgeten går till kalla målgrupper utan retargeting. Fixera mätningen och landningssidan innan ni höjer buden.",
    },
  ],
  "synas-pa-google-och-chatgpt-malmo-2026": [
    {
      question: "Vad är skillnaden mellan SEO och GEO?",
      answer:
        "SEO gör er synliga i Googles organiska sökresultat utan att betala per klick. GEO gör att AI-modeller nämner er när de svarar i ChatGPT, Perplexity eller Google AI Overviews. SEO är grunden. GEO är förlängningen. 2026 behöver ni båda.",
    },
    {
      question: "Hur syns man i Google AI Overviews?",
      answer:
        "Genom tydligt, strukturerat innehåll som svarar på frågan direkt, plus auktoritet från externa källor. Sidor som redan rankar bra har ett försprång. Rubriker i frågeformat och fakta högt upp i texten ökar chansen att bli citerad.",
    },
    {
      question: "Räcker det med SEO 2026 eller behöver man GEO också?",
      answer:
        "SEO räcker inte längre ensamt. En växande andel kunder frågar AI och klickar aldrig vidare. Ni kan ligga på sida ett och ändå vara osynliga i AI-svaret. GEO är komplementet som fångar den delen av målgruppen.",
    },
    {
      question: "Hur lång tid tar det att synas i AI-svar?",
      answer:
        "Det finns ingen fast tidsplan som för SEO:s 3–6 månader. Först behövs en indexerad, tydlig sajt och omnämnanden andra litar på. Företag som redan har stark SEO ser ofta effekt snabbare. Vi börjar med att mäta om ni syns alls idag.",
    },
  ],
  "vad-ar-en-bra-roas-meta-ads": [
    {
      question: "Vad är en bra ROAS för Meta Ads?",
      answer:
        "I Sverige ligger en lönsam Meta Ads-ROAS ofta på 3×–5× beroende på marginal. Under 2× är vanligtvis olönsamt för e-handel. Crisha Marketings snitt i portföljen är 4,8×.",
    },
    {
      question: "Hur förbättrar man ROAS utan att bara höja budgeten?",
      answer:
        "Separera TOF och BOF, bygg retargeting och byt creatives som inte presterar. Spåra köp eller kvalificerade leads, inte bara trafik. Höjd budget på fel struktur sänker ROAS.",
    },
    {
      question: "Vad är skillnaden mellan ROAS och vinst?",
      answer:
        "ROAS mäter intäkt per annonskrona, inte vinst. 4× på 1 000 kr är 4 000 kr i omsättning. Dra av produktkostnad, returer och drift innan ni kallar det lönsamt.",
    },
  ],
  "roas-modekund-meta": [
    {
      question: "Hur lång tid tog det att lyfta ROAS i mode-caset?",
      answer:
        "ROAS gick från 1,4× till 3,8× på fyra månader. Först byggdes struktur och spårning, sedan creatives och skalning. Mode har höga klickpriser, så utan tydlig funnel tar det längre.",
    },
    {
      question: "Vad var den största förändringen i kontot?",
      answer:
        "Ny kampanjstruktur med prospecting, retargeting och scaling, plus creatives som stack ut. Bred målgrupp och blandade kampanjer var huvudproblemet från start.",
    },
    {
      question: "Fungerar samma metod utanför mode?",
      answer:
        "Principerna är desamma: struktur, rätt målgrupp, creatives och datadriven skalning. Siffrorna skiljer sig per bransch, men läckagen vi ser är ofta identiska.",
    },
  ],
  "reels-eller-tiktok-2026-var-ska-foretaget-lagga-tiden": [
    {
      question: "Ska vi välja Reels eller TikTok 2026?",
      answer:
        "Välj där er målgrupp faktiskt tittar och där ni orkar producera native content. TikTok vinner ofta på organisk spridning för nya konton. Reels vinner när ni redan har en Instagram-community och vill koppla till shop och DM.",
    },
    {
      question: "Kan man köra båda plattformarna?",
      answer:
        "Ja, om ni har kapacitet. Många återanvänder kärnan i klippet men anpassar hook och text. Utan tid är en plattform med konsekvent publicering bättre än två halvdana.",
    },
    {
      question: "Fungerar samma video som organisk och som TikTok Ads?",
      answer:
        "Ofta ja, om den inte ser ut som reklam. De bästa annonserna 2026 ser ut som vanliga klipp. Testa organiskt först, sedan skala vinnarna med TikTok Ads och Meta.",
    },
  ],
};

const EN: Record<string, BlogFaqItem[]> = {
  "meta-ads-2026-slutboosta-inlagg": [
    {
      question: "What do Meta Ads cost in Sweden?",
      answer:
        "Ad spend is paid to Meta and varies by industry and season. Many Swedish companies start at SEK 8,000–25,000 per month, plus agency fees if you outsource. The budget needs room for both testing and retargeting or the account stays stuck in learning.",
    },
    {
      question: "What is the difference between boosting a post and running a real Meta Ads campaign?",
      answer:
        "Boosting pushes one organic post for reach, usually without structure, retargeting, or purchase tracking. A real campaign has goals, audiences, creatives, and measurement per funnel stage. Boosts can buy likes. Campaigns buy sales when the signals are right.",
    },
    {
      question: "How long before Meta Ads show results?",
      answer:
        "First data often appears within 48–72 hours. Learning usually takes 7–14 days. Clear ROAS typically shows in months 2–3, once you have conversions and have replaced weak creatives.",
    },
    {
      question: "What is Conversions API and do I need it?",
      answer:
        "Conversions API sends purchase and lead events from your server to Meta, not only via the browser pixel. You need it in 2026. Cookie limits and iOS make the pixel alone insufficient, and without the right events Meta optimises for the wrong goal.",
    },
    {
      question: "What is a good ROAS for Meta Ads?",
      answer:
        "A solid Meta Ads ROAS in Sweden is often 3×–5× depending on margins. Below 2× is usually unprofitable for ecommerce. Crisha Marketing’s portfolio average is 4.8×, measured on the full structure, not a boosted post.",
    },
  ],
  "google-ads-budget": [
    {
      question: "What do Google Ads cost per month for a small company in Sweden?",
      answer:
        "Small Swedish businesses often start at SEK 10,000–30,000 per month in click budget, depending on keyword competition, plus time for structure and negatives. Too little budget means too little conversion data.",
    },
    {
      question: "How do Google Ads differ from Meta Ads?",
      answer:
        "Google Ads catches people already searching, high intent. Meta Ads reaches people by behaviour, earlier in the journey. They complement each other: Google at the bottom of the funnel, Meta for reach and retargeting.",
    },
    {
      question: "What is Performance Max?",
      answer:
        "Performance Max is a Google campaign type that uses AI across Search, Shopping, YouTube, Display, and Gmail. It needs solid conversion signals and assets, and often a product feed. Without data it can spend on the wrong surfaces.",
    },
    {
      question: "How quickly do Google Ads show results?",
      answer:
        "Clicks and first leads can arrive the same day. Profitability usually takes 2–4 weeks of search-term cleanup and bid work. Stable CPA comes when tracking is correct and irrelevant queries are excluded.",
    },
    {
      question: "Do I need an agency to run Google Ads?",
      answer:
        "You can start yourself, but most unprofitable accounts we audit lack negatives, tracking, and structure. An agency pays off when CPCs are high or you cannot optimise weekly. A free review shows how large the leak is.",
    },
  ],
  "tiktok-ads-sverige": [
    {
      question: "Do TikTok Ads work for B2B?",
      answer:
        "Yes, if your buyers are on TikTok and you speak natively. B2B works with problem-led video, not banner-style ads. Many B2B brands use TikTok for reach and Google Ads for the hottest searches.",
    },
    {
      question: "What is the minimum TikTok Ads budget in Sweden?",
      answer:
        "To test creatives properly you rarely get far below SEK 5,000–10,000 per month. Below that you cannot compare hooks. Scale only when a video shows retention and a sensible CPA.",
    },
    {
      question: "What content works best for TikTok Ads?",
      answer:
        "Native UGC-style video with a hook in the first 2–3 seconds. Polished TV-like ads underperform. Test 10–20 variants and scale what holds attention.",
    },
    {
      question: "How do TikTok Ads differ from Meta Ads?",
      answer:
        "TikTok rewards faster, rougher video and can lift new content quickly. Meta is often stronger at retargeting, catalogues, and a broader age range. Use them in one funnel: TikTok at the top, Meta in the middle and bottom, Google when someone searches.",
    },
  ],
  "grafisk-profil-vad-ska-inga-i-manualen": [
    {
      question: "What does a professional website cost in Sweden?",
      answer:
        "A converting marketing site for an SME often starts around SEK 40,000, more for ecommerce or custom features. Price follows pages, design, integrations, and SEO. Cheap templates are expensive if they do not convert.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "A clear marketing site usually takes 4–8 weeks from brief to launch. Ecommerce and custom work take longer. Time goes into structure, design, copy, build, and testing, not just installing a theme.",
    },
    {
      question: "What are Core Web Vitals and why do they matter?",
      answer:
        "Core Web Vitals are Google’s measures of load, interactivity, and visual stability. They affect ranking and whether people stay. A slow site still burns the Google Ads clicks you paid for.",
    },
    {
      question: "How do I know if my website converts poorly?",
      answer:
        "High bounce, few CTA clicks, short sessions, and ads that bring traffic but no leads. Compare visits to enquiries or purchases. If visitors cannot tell what you offer in three seconds, the site is leaking.",
    },
  ],
  "google-ai-finance-europa-seo-content": [
    {
      question: "How long does it take to rank on Google?",
      answer:
        "SEO usually takes 3–6 months before ranking and organic traffic move clearly. New sites and competitive terms take longer. After that, traffic keeps arriving without paying per click.",
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer:
        "SEO is organic visibility without paying per click. Google Ads is paid placement. SEO takes time but builds an asset. Ads bring traffic the same day. Most profitable companies run both.",
    },
    {
      question: "What does SEO cost per month?",
      answer:
        "Ongoing SEO for a Swedish SME is often SEK 8,000–25,000 per month depending on competition and content needs. That covers analysis, content, links, and technical work. One-off fixes rarely hold rankings.",
    },
    {
      question: "What is local SEO and do I need it?",
      answer:
        "Local SEO is visibility for searches with a place, such as “agency Malmö” or “near me”. You need it if customers are geographic. Google Business Profile, local pages, and reviews are the foundation.",
    },
  ],
  "hur-satter-man-upp-full-funnel-strategi": [
    {
      question: "What is a full-funnel strategy?",
      answer:
        "It splits marketing into TOF for reach, MOF for consideration, and BOF for conversion, each with its own message, audience, and KPI. Without that split, signals blur and ROAS drops.",
    },
    {
      question: "Which channels fit the top, middle, and bottom of the funnel?",
      answer:
        "Top: TikTok Ads and Meta video for reach. Middle: Meta with social proof and retargeting. Bottom: Google Ads on high-intent search plus warm retargeting. The landing page must match the stage.",
    },
    {
      question: "How do I know which stage my customers are in?",
      answer:
        "People who have never seen you are TOF. Viewers and site visitors who have not bought are MOF. Brand searchers, cart abandoners, and quote openers are BOF. Measure behaviour, not “everyone 18–65”.",
    },
    {
      question: "What is retargeting and how does it work?",
      answer:
        "Retargeting shows ads to people who already interacted with you, such as site visitors. You build 7/14/30-day segments and give them a different message than cold audiences. It is often the most profitable layer.",
    },
  ],
  "vad-ar-geo-och-varfor-syns-ditt-foretag-inte-i-chatgpt": [
    {
      question: "What is GEO, Generative Engine Optimization?",
      answer:
        "GEO means optimising content and presence so AI models like ChatGPT, Perplexity, and Google AI Overviews cite or mention you. The goal is to appear in the answer, not only as a blue link. Researchers at Princeton coined the term in 2023.",
    },
    {
      question: "How do you optimise a website for ChatGPT?",
      answer:
        "Put clear answers under question headings, keep paragraphs short and factual, and earn mentions from third parties. Schema and a strong SEO base help models understand who you are. Earned media outweighs self-promotional copy.",
    },
    {
      question: "Is GEO the same as SEO?",
      answer:
        "No. SEO is ranking in Google’s organic results. GEO is becoming the source AI uses when it answers. They work together: high-ranking pages appear in AI answers in about 25 percent of cases, but GEO needs more question-led, citable content.",
    },
    {
      question: "How do I know if my company shows up in ChatGPT?",
      answer:
        "Ask ChatGPT, Perplexity, and Google AI Overviews the questions your customers ask, in Swedish, and see if you are named. Compare with competitors. We map the gaps in a free check.",
    },
  ],
  "darfor-forlorar-ditt-foretag-kunder-till-konkurrenterna": [
    {
      question: "Why do customers choose my competitor instead of me?",
      answer:
        "Usually because they found the competitor first: in search, in ads, or on a faster website. Product and price do not matter if the customer never finds you. Visibility at the right moment plus trust near the decision wins.",
    },
    {
      question: "How do I know if my marketing works?",
      answer:
        "It works if you can tie spend to leads or sales, not only to reach and clicks. Check tracking, CPA, ROAS, and what happens on the site after the click. Without those numbers you are guessing.",
    },
    {
      question: "What is the most common reason ads do not produce results?",
      answer:
        "Broken or missing conversion tracking, plus traffic to a site that does not convert. Next is spending everything on cold audiences with no retargeting. Fix measurement and the landing page before you raise bids.",
    },
  ],
  "synas-pa-google-och-chatgpt-malmo-2026": [
    {
      question: "What is the difference between SEO and GEO?",
      answer:
        "SEO makes you visible in Google’s organic results without paying per click. GEO makes AI models mention you in ChatGPT, Perplexity, or Google AI Overviews. SEO is the foundation. GEO is the extension. In 2026 you need both.",
    },
    {
      question: "How do you show up in Google AI Overviews?",
      answer:
        "With clear, structured content that answers the question immediately, plus authority from external sources. Pages that already rank well have a head start. Question-style headings and facts high in the text help you get cited.",
    },
    {
      question: "Is SEO enough in 2026, or do you also need GEO?",
      answer:
        "SEO alone is no longer enough. A growing share of customers ask AI and never click through. You can sit on page one and still be invisible in the AI answer. GEO catches that part of the audience.",
    },
    {
      question: "How long does it take to show up in AI answers?",
      answer:
        "There is no fixed 3–6 month clock like classic SEO. You need an indexed, clear site and mentions others trust. Companies with strong SEO often see movement faster. We start by measuring whether you show up at all today.",
    },
  ],
  "vad-ar-en-bra-roas-meta-ads": [
    {
      question: "What is a good ROAS for Meta Ads?",
      answer:
        "In Sweden a profitable Meta Ads ROAS is often 3×–5× depending on margins. Below 2× is usually unprofitable for ecommerce. Crisha Marketing’s portfolio average is 4.8×.",
    },
    {
      question: "How do you improve ROAS without just raising budget?",
      answer:
        "Split TOF and BOF, build retargeting, and replace creatives that fail. Track purchases or qualified leads, not only traffic. More budget on a broken structure lowers ROAS.",
    },
    {
      question: "What is the difference between ROAS and profit?",
      answer:
        "ROAS measures revenue per ad krona, not profit. 4× on SEK 1,000 is SEK 4,000 in revenue. Subtract product cost, returns, and overhead before you call it profitable.",
    },
  ],
  "roas-modekund-meta": [
    {
      question: "How long did it take to lift ROAS in the fashion case?",
      answer:
        "ROAS moved from 1.4× to 3.8× in four months. Structure and tracking first, then creatives and scaling. Fashion CPCs are high, so a messy funnel takes longer to fix.",
    },
    {
      question: "What was the biggest change in the account?",
      answer:
        "A new structure with prospecting, retargeting, and scaling, plus creatives that stood out. A wide audience and mixed campaigns were the original leak.",
    },
    {
      question: "Does the same method work outside fashion?",
      answer:
        "The principles are the same: structure, audience, creatives, and data-led scaling. The numbers differ by category, but the leaks we see are often identical.",
    },
  ],
  "reels-eller-tiktok-2026-var-ska-foretaget-lagga-tiden": [
    {
      question: "Should we choose Reels or TikTok in 2026?",
      answer:
        "Choose where your buyers actually watch and where you can produce native content. TikTok often wins organic reach for new accounts. Reels wins when you already have an Instagram community and a shop/DM path.",
    },
    {
      question: "Can we run both platforms?",
      answer:
        "Yes, if you have capacity. Many reuse the core clip but adapt the hook. Without time, one platform published consistently beats two half-done channels.",
    },
    {
      question: "Can the same video work organically and as TikTok Ads?",
      answer:
        "Often yes, if it does not look like an ad. The best ads in 2026 look like normal clips. Test organically, then scale winners with TikTok Ads and Meta.",
    },
  ],
};

export function getBlogArticleFaqs(slug: string, locale: Locale): BlogFaqItem[] {
  const map = locale === "en" ? EN : SV;
  return map[slug] ?? [];
}
