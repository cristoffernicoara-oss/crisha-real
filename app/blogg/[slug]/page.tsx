import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import BlogArticle from "@/components/sections/blog/BlogArticle";
import {
  getAllBlogArticleBody,
  getAllBlogPostBySlug,
  getAllBlogPosts,
} from "@/lib/i18n/content/blog-all";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogPosts("sv").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getAllBlogPostBySlug(params.slug, "sv");
  if (!post) return { title: "Artikel" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getAllBlogPostBySlug(params.slug, "sv");
  if (!post) notFound();
  const body = getAllBlogArticleBody(params.slug, "sv") ?? null;

  return (
    <>
      <Navbar />
      <BlogArticle post={post} body={body} />
      <Footer />
    </>
  );
}
