import { generateBlogArticle, researchKeyword } from "../ai/blog.js";
import { config } from "../config.js";
import { getSetting } from "../db/client.js";
import { logger } from "../lib/logger.js";
import { publishArticle } from "./publish.js";
import { usedKeywordsAndSlugs } from "./topics.js";

export async function runBlogJob(): Promise<void> {
  if (!config.BLOG_ENABLED || getSetting("blog_enabled") === "false") {
    logger.info("Blogg pausad");
    return;
  }

  const { keywords, slugs } = usedKeywordsAndSlugs();
  let keyword = await researchKeyword(keywords);
  let article = await generateBlogArticle(keyword);

  // Avoid slug collision
  if (slugs.includes(article.slug)) {
    article = {
      ...article,
      slug: `${article.slug}-${Date.now().toString(36)}`,
    };
  }

  await publishArticle(article);
  logger.info({ keyword, slug: article.slug }, "Blog job done");
}
