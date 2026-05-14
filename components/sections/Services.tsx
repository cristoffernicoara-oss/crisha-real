"use client";

import { motion } from "framer-motion";
import { Layers, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { ServiceBrandMark, type ServiceBrand } from "@/components/icons/ServiceBrandMark";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buttonVariants } from "@/components/ui/Button";
import { getServiceCards } from "@/lib/i18n/content/service-cards";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const SERVICE_LAYOUT: Record<
  string,
  {
    gridLg: string;
    accent: string;
  } & ({ brandMark: ServiceBrand; icon?: never } | { brandMark?: never; icon: LucideIcon })
> = {
  "meta-ads": {
    brandMark: "facebook",
    gridLg: "lg:col-start-1 lg:col-end-7 lg:row-start-1",
    accent: "#2563EB",
  },
  "google-ads": {
    brandMark: "google",
    gridLg: "lg:col-start-7 lg:col-end-13 lg:row-start-1",
    accent: "#0EA5E9",
  },
  "tiktok-ads": {
    brandMark: "tiktok",
    gridLg: "lg:col-start-1 lg:col-end-7 lg:row-start-2",
    accent: "#EC4899",
  },
  webbdesign: {
    icon: Layers,
    gridLg: "lg:col-start-7 lg:col-end-13 lg:row-start-2",
    accent: "#8B5CF6",
  },
};

export default function Services() {
  const { locale, t } = useLocale();
  const cards = getServiceCards(locale);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      className="bg-[var(--bg-primary)] py-20 px-[5%] md:py-[120px] md:px-[6%]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <SectionLabel className="mb-4 text-[rgba(255,255,255,0.35)]">{t("services.label")}</SectionLabel>
          <h2
            id="services-heading"
            className="font-heading text-[clamp(40px,5vw,64px)] font-bold leading-tight text-white"
          >
            {t("services.h2a")}
            <span className="text-[#2563EB] italic"> {t("services.h2b")}</span>
          </h2>
          <p className="mx-auto mb-16 mt-0 max-w-[560px] text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)]">
            {t("services.sub")}
          </p>
        </motion.div>

        <div className={cn("grid auto-rows-auto gap-4", "grid-cols-1 md:grid-cols-2", "lg:grid-cols-12")}>
          {cards.map((service, index) => {
            const layout = SERVICE_LAYOUT[service.slug];
            if (!layout) return null;
            const Icon = "icon" in layout ? layout.icon : null;
            const accent = layout.accent;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={cn("md:col-auto", layout.gridLg)}
              >
                <MotionLink
                  href={`${ROUTES.tjanster}/${service.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-8",
                    "cursor-pointer transition-[border-color,box-shadow] duration-300 ease-out",
                    "hover:border-[rgba(37,99,235,0.5)]",
                    "hover:shadow-[0_0_40px_rgba(37,99,235,0.08),0_20px_60px_rgba(0,0,0,0.4)]"
                  )}
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-[120px] rounded-full blur-[40px]"
                    style={{ backgroundColor: hexToRgba(accent, 0.08) }}
                    aria-hidden
                  />

                  <span
                    className="absolute right-6 top-6 rounded-full border px-3 py-1 text-[11px] font-medium"
                    style={{
                      backgroundColor: hexToRgba(accent, 0.1),
                      borderColor: hexToRgba(accent, 0.22),
                      color: accent,
                    }}
                  >
                    {service.metricPill}
                  </span>

                  <div
                    className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border bg-[rgba(37,99,235,0.12)]"
                    style={{ borderColor: hexToRgba(accent, 0.25) }}
                    aria-hidden
                  >
                    {"brandMark" in layout && layout.brandMark ? (
                      <ServiceBrandMark brand={layout.brandMark} className="size-[22px] shrink-0" />
                    ) : Icon ? (
                      <Icon className="size-[22px]" style={{ color: accent }} strokeWidth={2} />
                    ) : null}
                  </div>

                  <h3 className="relative mt-5 mb-1 font-heading text-[22px] font-bold text-white">{service.title}</h3>
                  <p className="relative text-[14px] font-medium leading-snug text-[rgba(255,255,255,0.55)]">
                    {service.tagline}
                  </p>
                  <p className="relative mt-3 flex-1 text-[15px] font-normal leading-[1.65] text-[rgba(255,255,255,0.5)]">
                    {service.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs text-[rgba(255,255,255,0.4)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className={cn(
                      "relative mt-6 block text-right text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    )}
                    style={{ color: accent }}
                  >
                    {t("common.learnMoreAbout")} {service.title} →
                  </span>
                </MotionLink>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <p className="text-[15px] text-[rgba(255,255,255,0.4)]">{t("services.notFound")}</p>
          <Link href={ROUTES.kontakt} className={cn(buttonVariants({ variant: "ghost", size: "default" }))}>
            {t("services.talk")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
