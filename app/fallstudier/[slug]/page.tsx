import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudyDetail from "@/components/sections/case-studies/CaseStudyDetail";
import ContactCTA from "@/components/sections/ContactCTA";
import { caseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return { title: "Fallstudie | Crisha Marketing" };
  }
  return {
    title: `${study.client} | Fallstudier | Crisha Marketing`,
    description: `${study.service}, ${study.category}. ${study.challenge.slice(0, 155)}…`,
  };
}

export default function CaseStudyPage({ params }: Props) {
  if (!getCaseStudyBySlug(params.slug)) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <CaseStudyDetail slug={params.slug} />
      <ContactCTA />
      <Footer />
    </main>
  );
}
