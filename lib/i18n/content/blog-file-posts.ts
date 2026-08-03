import "server-only";

import fs from "fs";
import path from "path";

import type { BlogArticleBody, BlogArticleSection } from "@/lib/i18n/content/blog-article-bodies";
import type { BlogPostPreview } from "@/lib/i18n/content/blog-posts-i18n";

export type FileBlogPost = {
  slug: string;
  title: string;
  keyword?: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  imagePrompt?: string;
  bodyMarkdown: string;
  date: string;
  published?: boolean;
};

function publishedDir(): string {
  return path.join(process.cwd(), "content", "blog", "published");
}

function markdownToBody(md: string): BlogArticleBody {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const sections: BlogArticleSection[] = [];
  let current: BlogArticleSection | null = null;
  let paraBuf: string[] = [];

  const flushPara = () => {
    const text = paraBuf.join(" ").trim();
    paraBuf = [];
    if (!text || !current) return;
    current.paragraphs.push(text);
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)/);
    const h3 = line.match(/^###\s+(.+)/);
    const h1 = line.match(/^#\s+(.+)/);
    if (h1) continue;
    if (h2 || h3) {
      flushPara();
      if (current) sections.push(current);
      current = { heading: (h2?.[1] ?? h3?.[1] ?? "").trim(), paragraphs: [] };
      continue;
    }
    if (!current) {
      current = { heading: "Introduktion", paragraphs: [] };
    }
    if (line.trim() === "") {
      flushPara();
      continue;
    }
    if (/^[-*]\s+/.test(line.trim())) {
      flushPara();
      current.bullets = current.bullets ?? [];
      current.bullets.push(line.trim().replace(/^[-*]\s+/, ""));
      continue;
    }
    paraBuf.push(line.trim());
  }
  flushPara();
  if (current) sections.push(current);

  if (sections.length === 0) {
    sections.push({
      heading: "Artikel",
      paragraphs: [md.slice(0, 2000)],
    });
  }

  const last = sections[sections.length - 1];
  return {
    sections: sections.length > 1 ? sections.slice(0, -1) : sections,
    summaryHeading: last?.heading ?? "Sammanfattning",
    summary: last?.paragraphs[0] ?? "",
    summaryBullets: last?.bullets,
    closingParagraphs: last?.paragraphs.slice(1),
  };
}

export function loadPublishedFilePosts(): FileBlogPost[] {
  const dir = publishedDir();
  if (!fs.existsSync(dir)) return [];
  const posts: FileBlogPost[] = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as FileBlogPost;
      if (raw.slug && raw.title && raw.bodyMarkdown) posts.push(raw);
    } catch {
      /* skip */
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function filePostsAsPreviews(): BlogPostPreview[] {
  return loadPublishedFilePosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || p.metaDescription || "",
    date: p.date,
  }));
}

export function getFileBlogArticleBody(slug: string): BlogArticleBody | undefined {
  const post = loadPublishedFilePosts().find((p) => p.slug === slug);
  if (!post) return undefined;
  return markdownToBody(post.bodyMarkdown);
}

export function getFileBlogPost(slug: string): BlogPostPreview | undefined {
  return filePostsAsPreviews().find((p) => p.slug === slug);
}
