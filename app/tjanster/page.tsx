import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import ServicesIndexBody from "./ServicesIndexBody";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Meta Ads, Google Ads, TikTok Ads och webbdesign. Performance marketing från Crisha Marketing i Sverige.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesIndexBody />
      <Footer />
    </>
  );
}
