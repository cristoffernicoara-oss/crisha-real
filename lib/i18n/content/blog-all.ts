import "server-only";

import {
  getBlogArticleBody,
  type BlogArticleBody,
} from "@/lib/i18n/content/blog-article-bodies";
import {
  filePostsAsPreviews,
  getFileBlogArticleBody,
  getFileBlogPost,
} from "@/lib/i18n/content/blog-file-posts";
import {
  getBlogPostBySlug as getStaticBlogPostBySlug,
  getBlogPosts as getStaticBlogPosts,
  type BlogPostPreview,
} from "@/lib/i18n/content/blog-posts-i18n";
import type { Locale } from "@/lib/i18n/types";

function mergeUnique(base: BlogPostPreview[], extra: BlogPostPreview[]): BlogPostPreview[] {
  const seen = new Set(base.map((p) => p.slug));
  const merged = [...base];
  for (const p of extra) {
    if (!seen.has(p.slug)) {
      merged.push(p);
      seen.add(p.slug);
    }
  }
  return merged.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Server-only: static posts + automation JSON under content/blog/published. */
export function getAllBlogPosts(locale: Locale): BlogPostPreview[] {
  return mergeUnique(getStaticBlogPosts(locale), filePostsAsPreviews());
}

export function getAllBlogPostBySlug(
  slug: string,
  locale: Locale
): BlogPostPreview | undefined {
  return getStaticBlogPostBySlug(slug, locale) ?? getFileBlogPost(slug);
}

export function getAllBlogArticleBody(
  slug: string,
  locale: Locale
): BlogArticleBody | undefined {
  return getBlogArticleBody(slug, locale) ?? getFileBlogArticleBody(slug);
}
