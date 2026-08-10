import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import BlogArticle from "@/components/sections/blog/BlogArticle";
import {
  getAllBlogArticleBody,
  getAllBlogPostBySlug,
  getAllBlogPosts,
} from "@/lib/i18n/content/blog-all";
import { buildBlogPostingJsonLd } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogPosts("sv").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getAllBlogPostBySlug(params.slug, "sv");
  if (!post) return { title: "Artikel" };
  const body = getAllBlogArticleBody(params.slug, "sv");
  return {
    title: post.title,
    description: body?.directAnswer?.slice(0, 160) ?? post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getAllBlogPostBySlug(params.slug, "sv");
  if (!post) notFound();
  const body = getAllBlogArticleBody(params.slug, "sv") ?? null;
  const jsonLd = buildBlogPostingJsonLd({
    title: post.title,
    description: body?.directAnswer ?? post.excerpt,
    slug: post.slug,
    date: post.date,
  });

  return (
    <>
      <Script
        id={`jsonld-blogposting-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BlogArticle post={post} body={body} />
      <Footer />
    </>
  );
}
