import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import BlogIndex from "@/components/sections/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Blogg & insikter",
  description: "Artiklar om Meta Ads, Google Ads, TikTok och webbdesign från Crisha Marketing.",
};

export default function BloggPage() {
  return (
    <>
      <Navbar />
      <BlogIndex />
      <Footer />
    </>
  );
}
