import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { URL } from "node:url";
import {
  ConfidentialClientApplication,
  type Configuration,
} from "@azure/msal-node";
import { config } from "../config.js";
import { logger } from "../lib/logger.js";

const SCOPES = ["https://graph.microsoft.com/Mail.Send", "https://graph.microsoft.com/Mail.Read", "offline_access"];

type TokenCacheFile = {
  refreshToken?: string;
  homeAccountId?: string;
  cache?: string;
};

function loadCacheFile(): TokenCacheFile {
  try {
    if (fs.existsSync(config.tokenCachePath)) {
      return JSON.parse(fs.readFileSync(config.tokenCachePath, "utf8")) as TokenCacheFile;
    }
  } catch {
    /* ignore */
  }
  return {};
}

function saveCacheFile(data: TokenCacheFile): void {
  fs.mkdirSync(path.dirname(config.tokenCachePath), { recursive: true });
  fs.writeFileSync(config.tokenCachePath, JSON.stringify(data, null, 2), "utf8");
}

function assertAzureConfig(): void {
  if (!config.AZURE_CLIENT_ID || !config.AZURE_TENANT_ID || !config.AZURE_CLIENT_SECRET) {
    throw new Error(
      "Saknar AZURE_CLIENT_ID / AZURE_TENANT_ID / AZURE_CLIENT_SECRET i .env — se README"
    );
  }
}

function createCca(): ConfidentialClientApplication {
  assertAzureConfig();
  const msalConfig: Configuration = {
    auth: {
      clientId: config.AZURE_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${config.AZURE_TENANT_ID}`,
      clientSecret: config.AZURE_CLIENT_SECRET,
    },
  };
  const cca = new ConfidentialClientApplication(msalConfig);
  const cached = loadCacheFile();
  if (cached.cache) {
    cca.getTokenCache().deserialize(cached.cache);
  }
  return cca;
}

/** Interactive browser login (localhost redirect) — run once. */
export async function loginInteractive(): Promise<void> {
  assertAzureConfig();
  const redirectUri = "http://localhost:3847/redirect";
  const cca = createCca();

  const authCodeUrl = await cca.getAuthCodeUrl({
    scopes: SCOPES,
    redirectUri,
  });

  logger.info("Öppna denna URL i webbläsaren och logga in:");
  console.log("\n" + authCodeUrl + "\n");

  const code = await new Promise<string>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const u = new URL(req.url ?? "/", redirectUri);
        const authCode = u.searchParams.get("code");
        if (!authCode) {
          res.writeHead(400);
          res.end("Missing code");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Inloggning klar</h1><p>Du kan stänga fönstret.</p>");
        server.close();
        resolve(authCode);
      } catch (e) {
        reject(e);
      }
    });
    server.listen(3847, "127.0.0.1");
    setTimeout(() => {
      server.close();
      reject(new Error("Login timeout (2 min)"));
    }, 120_000);
  });

  const result = await cca.acquireTokenByCode({
    code,
    scopes: SCOPES,
    redirectUri,
  });

  if (!result?.accessToken) throw new Error("Ingen access token efter login");

  const serialized = cca.getTokenCache().serialize();
  saveCacheFile({
    cache: serialized,
    homeAccountId: result.account?.homeAccountId,
  });
  logger.info("Token cache sparad — Graph-auth klar");
}

/** App-only token — no browser, ideal for Railway/VPS. Requires Application permissions + admin consent. */
async function getClientCredentialsToken(): Promise<string> {
  const cca = createCca();
  const result = await cca.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"],
  });
  if (!result?.accessToken) {
    throw new Error(
      "Client credentials misslyckades. Lägg till Application permissions Mail.Send + Mail.Read och Grant admin consent."
    );
  }
  return result.accessToken;
}

export async function getAccessToken(): Promise<string> {
  if (config.GRAPH_AUTH_MODE === "client_credentials") {
    return getClientCredentialsToken();
  }

  const cca = createCca();
  const cached = loadCacheFile();
  const accounts = await cca.getTokenCache().getAllAccounts();
  const account =
    accounts.find((a) => a.homeAccountId === cached.homeAccountId) ?? accounts[0];

  if (account) {
    try {
      const silent = await cca.acquireTokenSilent({
        account,
        scopes: SCOPES,
      });
      if (silent?.accessToken) {
        saveCacheFile({
          cache: cca.getTokenCache().serialize(),
          homeAccountId: account.homeAccountId,
        });
        return silent.accessToken;
      }
    } catch (e) {
      logger.warn({ err: e }, "Silent token refresh misslyckades");
    }
  }

  throw new Error(
    "Ingen giltig Graph-token. Kör: npm run auth:login — eller sätt GRAPH_AUTH_MODE=client_credentials i molnet"
  );
}
