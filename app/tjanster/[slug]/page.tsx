import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SERVICES } from "@/lib/constants";

/** Slugs med egen sida under `app/tjanster/<slug>/` — ska inte dubbelbyggas av `[slug]`. */
const DEDICATED_SERVICE_SLUGS = new Set([
  "meta-ads",
  "google-ads",
  "tiktok-ads",
  "webbdesign",
  "full-funnel",
]);

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.filter((s) => !DEDICATED_SERVICE_SLUGS.has(s.slug)).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Tjänst" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-page-nav-loose sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)]">Tjänst</p>
          <h1 className="mt-2">{service.title}</h1>
          <p className="mt-6 text-lg text-[rgba(255,255,255,0.65)]">
            {service.longDescription}
          </p>
          <ul className="mt-8 list-inside list-disc space-y-2 text-[rgba(255,255,255,0.6)]">
            {service.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Link
            href="/kontakt"
            className="mt-10 inline-block text-sm font-medium text-[var(--blue-light)] hover:underline"
          >
            Gratis konsultation →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
