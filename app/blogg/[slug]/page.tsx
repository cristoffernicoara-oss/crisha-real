import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import BlogArticle from "@/components/sections/blog/BlogArticle";
import { BLOG_POSTS } from "@/lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artikel" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  if (!BLOG_POSTS.some((p) => p.slug === params.slug)) notFound();

  return (
    <>
      <Navbar />
      <BlogArticle slug={params.slug} />
      <Footer />
    </>
  );
}
