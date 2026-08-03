import fs from "node:fs";
import path from "node:path";
import type { BlogArticleDraft } from "../ai/blog.js";
import { config } from "../config.js";
import { getDb } from "../db/client.js";
import { notifyOperator } from "../graph/mail.js";
import { logger } from "../lib/logger.js";

export async function publishArticle(article: BlogArticleDraft): Promise<string> {
  const mode = config.PUBLISH_MODE;
  const dir = path.join(config.contentBlogDir, mode === "auto" ? "published" : "drafts");
  fs.mkdirSync(dir, { recursive: true });

  const payload = {
    ...article,
    date: new Date().toISOString().slice(0, 10),
    locale: "sv",
    published: mode === "auto",
  };

  const filePath = path.join(dir, `${article.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");

  const url = `${config.SITE_URL}/blogg/${article.slug}`;
  getDb()
    .prepare(
      `INSERT INTO blog_articles (slug, title, keyword, url, mode)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(slug) DO UPDATE SET
         title = excluded.title,
         keyword = excluded.keyword,
         url = excluded.url,
         mode = excluded.mode,
         published_at = datetime('now')`
    )
    .run(article.slug, article.title, article.keyword, url, mode);

  logger.info({ filePath, mode, url }, "Blog article written");

  await notifyOperator(
    `[Blogg ${mode}] ${article.title}`,
    `<p>Sökord: <strong>${article.keyword}</strong></p>
     <p>Slug: ${article.slug}</p>
     <p>Fil: <code>${filePath}</code></p>
     <p>URL (efter deploy): <a href="${url}">${url}</a></p>
     <p>Meta: ${article.metaDescription}</p>`
  ).catch(() => undefined);

  return filePath;
}
