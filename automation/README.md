# Crisha Marketing — Automation

Node.js/TypeScript-system (kräver **Node 22+**, använder inbyggd `node:sqlite`) för:

1. **Import av manuell historik** (CSV/Excel) med 7-månaders karantän  
2. **Cold email outreach** via Microsoft Graph (Outlook)  
3. **AI-klassificering** av svar + eskalering (`oklart`)  
4. **SEO-blogg** → JSON-filer under `content/blog/`

## Snabbstart

```bash
cd automation
npm install
cp .env.example .env
# fyll i Azure + AI-nycklar
```

### 1) Azure Entra ID (app-registrering)

1. Gå till [Azure Portal](https://portal.azure.com) → **Microsoft Entra ID** → **App registrations** → **New registration**
2. Namn: t.ex. `Crisha Automation`
3. Supported account types: **Accounts in this organizational directory only**
4. Redirect URI (Web): `http://localhost:3847/redirect`
5. **Certificates & secrets** → skapa Client secret → kopiera till `AZURE_CLIENT_SECRET`
6. **API permissions** → Microsoft Graph → **Delegated**:
   - `Mail.Send`
   - `Mail.Read`
   - `offline_access` (ofta implicit)
7. Klicka **Grant admin consent** om ni har behörighet
8. Kopiera **Application (client) ID** → `AZURE_CLIENT_ID`
9. Kopiera **Directory (tenant) ID** → `AZURE_TENANT_ID`
10. Sätt `OUTLOOK_USER` till den mailbox som ska skicka/läsa (t.ex. `info@crisha.se`)

```bash
npm run auth:login
```

Öppna URL:en, logga in med rätt Microsoft 365-konto. Token sparas i `data/token-cache.json` (gitignored).

### 2) Importera manuell historik (DEL 0)

CSV/Excel med kolumner (flexibla namn): `företagsnamn`, `mailadress`, `datum skickat`.

```bash
npx tsx src/cli.ts import:history ./samples/history-import.sample.csv
npm run test:quarantine
```

### 3) Importera nya prospects

```bash
npx tsx src/cli.ts import:prospects ./samples/prospects.sample.csv
```

### 4) Outreach

Börja med `DRY_RUN=true` i `.env`.

```bash
npm run outreach:once          # en batch i sändfönstret
npm run outreach:start         # loop
npx tsx src/cli.ts outreach:pause
npx tsx src/cli.ts outreach:resume
```

**Sändfönster:** mån–fre 08:00–16:00 (`Europe/Stockholm`), 15–30 min random delay, ramp 5→30/dag.

**Karantän (`kan_kontaktas`):**  
- `avregistrera` → aldrig  
- `senast_kontaktad` &lt; 7 månader → hoppa över  
- `inte_intresserad` → minst 7 månader

### 5) Inbox / klassificering / oklart

```bash
npm run inbox:start
```

Pollar var 5:e minut. Vid `oklart` får du mail — svara `BOKA`, `SVARA: …` eller `AVSLUTA`.

### 6) Blogg

```bash
npm run blog:run
```

Skriver till `../content/blog/drafts/` eller `published/` beroende på `PUBLISH_MODE`.

## Status

```bash
npm run status
```

## Struktur

Se `src/` — `outreach/`, `inbox/`, `blog/`, `graph/`, `ai/`, `db/`.
