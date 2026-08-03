import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const AUTOMATION_ROOT = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(AUTOMATION_ROOT, ".env") });

const envSchema = z.object({
  AZURE_CLIENT_ID: z.string().optional().default(""),
  AZURE_CLIENT_SECRET: z.string().optional().default(""),
  AZURE_TENANT_ID: z.string().optional().default(""),
  /** interactive = browser login once; client_credentials = app-only (bäst i molnet) */
  GRAPH_AUTH_MODE: z
    .enum(["interactive", "client_credentials"])
    .optional()
    .default("interactive"),
  OUTLOOK_USER: z.string().optional().default(""),
  OPERATOR_EMAIL: z.string().optional().default(""),
  CALENDLY_URL: z.string().optional().default("https://calendly.com/"),
  AI_PROVIDER: z.enum(["anthropic", "openai"]).optional().default("anthropic"),
  ANTHROPIC_API_KEY: z.string().optional().default(""),
  OPENAI_API_KEY: z.string().optional().default(""),
  PUBLISH_MODE: z.enum(["auto", "draft"]).optional().default("draft"),
  BLOG_GIT_COMMIT: z
    .string()
    .optional()
    .default("false")
    .transform((v) => v === "true" || v === "1"),
  OUTREACH_ENABLED: z
    .string()
    .optional()
    .default("true")
    .transform((v) => v !== "false" && v !== "0"),
  BLOG_ENABLED: z
    .string()
    .optional()
    .default("true")
    .transform((v) => v !== "false" && v !== "0"),
  OUTREACH_MAX_PER_DAY: z.coerce.number().optional().default(30),
  QUARANTINE_MONTHS: z.coerce.number().optional().default(7),
  TIMEZONE: z.string().optional().default("Europe/Stockholm"),
  DRY_RUN: z
    .string()
    .optional()
    .default("false")
    .transform((v) => v === "true" || v === "1"),
  SITE_URL: z.string().optional().default("https://www.crisha.se"),
  CONTENT_BLOG_DIR: z.string().optional().default(""),
  BOUNCE_ALERT_THRESHOLD: z.coerce.number().optional().default(5),
  INBOX_POLL_MS: z.coerce.number().optional().default(5 * 60 * 1000),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment configuration");
}

export const config = {
  ...parsed.data,
  dbPath: path.join(AUTOMATION_ROOT, "data", "crisha.db"),
  tokenCachePath: path.join(AUTOMATION_ROOT, "data", "token-cache.json"),
  schemaPath: path.join(AUTOMATION_ROOT, "src", "db", "schema.sql"),
  contentBlogDir:
    parsed.data.CONTENT_BLOG_DIR ||
    path.resolve(AUTOMATION_ROOT, "..", "content", "blog"),
};

/** Daily send caps by outreach week number (1-based). */
export function dailyCapForWeek(week: number): number {
  const max = config.OUTREACH_MAX_PER_DAY;
  if (week <= 1) return Math.min(5, max);
  if (week === 2) return Math.min(10, max);
  if (week === 3) return Math.min(15 + Math.floor(Math.random() * 4), max); // 15-18
  if (week === 4) return Math.min(22 + Math.floor(Math.random() * 4), max); // 22-25
  return max;
}
