import type { MetadataRoute } from "next";

import { getCaseStudies } from "@/lib/case-studies";
import { getBlogPosts } from "@/lib/i18n/content/blog-posts-i18n";
import { ROUTES, fallstudiePath } from "@/lib/routes";
import { SITE_URL } from "@/lib/site-url";

function absolute(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function blogLastModified(date: string): Date {
  return new Date(`${date}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absolute(ROUTES.home), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absolute(ROUTES.omOss), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absolute(ROUTES.tjanster), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absolute(ROUTES.tjansterMetaAds), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absolute(ROUTES.tjansterGoogleAds), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absolute(ROUTES.tjansterTiktokAds), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absolute(ROUTES.tjansterWebbdesign), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absolute(ROUTES.tjansterFullFunnel), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absolute(ROUTES.fallstudier), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absolute(ROUTES.blogg), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absolute(ROUTES.kontakt), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absolute(ROUTES.karriar), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absolute("/cookies"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absolute("/integritetspolicy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absolute("/anvandarvillkor"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = getBlogPosts("sv").map((post) => ({
    url: absolute(`${ROUTES.blogg}/${post.slug}`),
    lastModified: blogLastModified(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const casePages: MetadataRoute.Sitemap = getCaseStudies("sv").map((study) => ({
    url: absolute(fallstudiePath(study.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...casePages];
}
