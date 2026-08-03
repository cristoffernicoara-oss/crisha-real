import path from "node:path";
import { config } from "./config.js";
import { getDb, setSetting } from "./db/client.js";
import { loginInteractive } from "./graph/auth.js";
import { logger } from "./lib/logger.js";
import { monthsAgoIso } from "./lib/time.js";
import { runBlogJob } from "./blog/generate.js";
import { startInboxLoop } from "./inbox/poller.js";
import { importHistory } from "./outreach/import-history.js";
import { importProspects } from "./outreach/import-prospects.js";
import { kan_kontaktas } from "./outreach/quarantine.js";
import { runOutreachOnce, startOutreachLoop } from "./outreach/scheduler.js";

const args = process.argv.slice(2).filter((a) => a !== "--");
const [cmd, arg] = args;

async function main(): Promise<void> {
  getDb(); // ensure schema

  switch (cmd) {
    case "auth:login":
      await loginInteractive();
      break;

    case "import:history": {
      if (!arg) throw new Error("Användning: npm run import:history -- path/to/file.csv");
      const res = importHistory(path.resolve(arg));
      console.log(JSON.stringify(res, null, 2));
      break;
    }

    case "import:prospects": {
      if (!arg) throw new Error("Användning: npm run import:prospects -- path/to/file.csv");
      const res = importProspects(path.resolve(arg));
      console.log(JSON.stringify(res, null, 2));
      break;
    }

    case "outreach:once":
      console.log(await runOutreachOnce());
      break;

    case "outreach:start":
      await startOutreachLoop();
      break;

    case "inbox:start":
      await startInboxLoop();
      break;

    case "blog:run":
      await runBlogJob();
      break;

    case "status": {
      const db = getDb();
      const counts = db
        .prepare(
          `SELECT status, COUNT(*) AS c FROM prospects GROUP BY status ORDER BY c DESC`
        )
        .all();
      console.log({
        outreach_enabled: config.OUTREACH_ENABLED,
        blog_enabled: config.BLOG_ENABLED,
        dry_run: config.DRY_RUN,
        publish_mode: config.PUBLISH_MODE,
        quarantine_months: config.QUARANTINE_MONTHS,
        prospects_by_status: counts,
        messages: (
          db.prepare(`SELECT COUNT(*) AS c FROM messages`).get() as { c: number }
        ).c,
        blog_articles: (
          db.prepare(`SELECT COUNT(*) AS c FROM blog_articles`).get() as { c: number }
        ).c,
      });
      break;
    }

    case "outreach:pause":
      setSetting("outreach_enabled", "false");
      console.log("Outreach pausad");
      break;

    case "outreach:resume":
      setSetting("outreach_enabled", "true");
      console.log("Outreach återupptagen");
      break;

    case "blog:pause":
      setSetting("blog_enabled", "false");
      console.log("Blogg pausad");
      break;

    case "blog:resume":
      setSetting("blog_enabled", "true");
      console.log("Blogg återupptagen");
      break;

    case "test:quarantine": {
      const db = getDb();
      db.prepare(
        `INSERT OR REPLACE INTO prospects (id, company, email, email_domain, status, senast_kontaktad)
         VALUES (999001, 'Q Test Recent', 'q-recent@test.local', 'test.local', 'kontaktad_manuellt', ?)`
      ).run(monthsAgoIso(1));
      db.prepare(
        `INSERT OR REPLACE INTO prospects (id, company, email, email_domain, status, senast_kontaktad)
         VALUES (999002, 'Q Test Old', 'q-old@test.local', 'test.local', 'kontaktad_manuellt', ?)`
      ).run(monthsAgoIso(8));
      db.prepare(
        `INSERT OR REPLACE INTO prospects (id, company, email, email_domain, status, senast_kontaktad)
         VALUES (999003, 'Q Opt Out', 'q-opt@test.local', 'test.local', 'avregistrera', ?)`
      ).run(monthsAgoIso(12));

      const r1 = kan_kontaktas(999001);
      const r2 = kan_kontaktas(999002);
      const r3 = kan_kontaktas(999003);
      console.log({
        recent_1_month: r1,
        old_8_months: r2,
        opt_out: r3,
        expect: {
          recent_blocked: !r1.ok,
          old_allowed: r2.ok,
          opt_blocked: !r3.ok,
        },
      });
      if (r1.ok || !r2.ok || r3.ok) {
        process.exitCode = 1;
        console.error("Quarantine tests FAILED");
      } else {
        console.log("Quarantine tests PASSED");
      }
      break;
    }

    default:
      console.log(`Crisha Automation CLI

Kommandon:
  auth:login
  import:history -- <fil.csv|xlsx>
  import:prospects -- <fil.csv|xlsx>
  outreach:once | outreach:start | outreach:pause | outreach:resume
  inbox:start
  blog:run | blog:pause | blog:resume
  status
  test:quarantine
`);
  }
}

main().catch((e) => {
  logger.error(e);
  console.error(e);
  process.exit(1);
});
