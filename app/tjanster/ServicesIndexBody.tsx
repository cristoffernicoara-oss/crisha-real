"use client";

import Link from "next/link";

import { getServiceCards } from "@/lib/i18n/content/service-cards";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";

export default function ServicesIndexBody() {
  const { locale, t } = useLocale();
  const cards = getServiceCards(locale);

  return (
    <main className="min-h-screen px-4 pb-20 pt-page-nav-loose sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-white">{t("serviceShared.servicesPageTitle")}</h1>
        <p className="mt-6 text-[rgba(255,255,255,0.6)]">
          {t("serviceShared.servicesPageLead")}
          <Link href={ROUTES.kontakt} className="text-[#2563EB] hover:underline">
            {t("serviceShared.servicesPageLeadLink")}
          </Link>
          {t("serviceShared.servicesPageLeadEnd")}
        </p>
        <ul className="mt-10 space-y-4">
          {cards.map((s) => (
            <li key={s.slug}>
              <Link
                href={`${ROUTES.tjanster}/${s.slug}`}
                className="block rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-5 no-underline transition-colors hover:border-[rgba(37,99,235,0.35)]"
              >
                <span className="font-heading text-lg font-semibold text-white">{s.title}</span>
                <p className="mt-2 text-sm text-[rgba(255,255,255,0.45)]">{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
