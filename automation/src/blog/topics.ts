import fs from "node:fs";
import path from "node:path";
import { config } from "../config.js";
import { getDb } from "../db/client.js";

export function usedKeywordsAndSlugs(): { keywords: string[]; slugs: string[] } {
  const rows = getDb()
    .prepare("SELECT slug, keyword FROM blog_articles")
    .all() as { slug: string; keyword: string }[];

  const keywords = rows.map((r) => r.keyword);
  const slugs = rows.map((r) => r.slug);

  // Also scan published JSON on disk
  for (const mode of ["published", "drafts"] as const) {
    const dir = path.join(config.contentBlogDir, mode);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".json")) continue;
      try {
        const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as {
          slug?: string;
          keyword?: string;
        };
        if (data.slug) slugs.push(data.slug);
        if (data.keyword) keywords.push(data.keyword);
      } catch {
        /* ignore */
      }
    }
  }

  return {
    keywords: Array.from(new Set(keywords)),
    slugs: Array.from(new Set(slugs)),
  };
}
