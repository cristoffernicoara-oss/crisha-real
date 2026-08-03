import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import BlogIndex from "@/components/sections/blog/BlogIndex";
import { getAllBlogPosts } from "@/lib/i18n/content/blog-all";

export const metadata: Metadata = {
  title: "Blogg & insikter",
  description: "Artiklar om Meta Ads, Google Ads, TikTok och webbdesign från Crisha Marketing.",
};

export default function BloggPage() {
  const posts = getAllBlogPosts("sv");

  return (
    <>
      <Navbar />
      <BlogIndex posts={posts} />
      <Footer />
    </>
  );
}
