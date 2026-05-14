"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  getAboutPartners,
  getAboutPartnersSectionCopy,
  getAboutTeam,
  getAboutTeamHeading,
} from "@/lib/i18n/content/about-sections-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function AboutTeam() {
  const { locale } = useLocale();
  const heading = useMemo(() => getAboutTeamHeading(locale), [locale]);
  const team = useMemo(() => getAboutTeam(locale), [locale]);
  const partners = useMemo(() => getAboutPartners(locale), [locale]);
  const partnersCopy = useMemo(() => getAboutPartnersSectionCopy(locale), [locale]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px 12% 0px",
  });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="about-team-heading"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{heading.label}</SectionLabel>
        <h2
          id="about-team-heading"
          className="font-heading text-[clamp(36px,4vw,52px)] font-bold leading-tight text-white"
        >
          {heading.h2a}
          <span className="text-[#2563EB] italic">{heading.h2b}</span>
        </h2>

        <div className="mx-auto mt-12 grid w-full max-w-[700px] grid-cols-2 gap-5 sm:mt-16">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={cn(
                "overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629]",
                "transition-all duration-300 ease-out hover:-translate-y-1"
              )}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hexToRgba(member.color, 0.3);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
              }}
            >
              <div className="relative h-[min(300px,52vw)] min-h-[260px] overflow-hidden bg-white sm:h-[308px] sm:min-h-0">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className={
                    "imageClassName" in member && member.imageClassName
                      ? member.imageClassName
                      : "object-cover object-[center_30%]"
                  }
                  sizes="(max-width: 640px) 45vw, 400px"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#0F1629] via-[#0F1629]/35 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="relative z-[2] -mt-6 mb-2 flex justify-center px-4 sm:-mt-5">
                <span
                  className="whitespace-nowrap rounded-pill border bg-[#0F1629] px-3.5 py-1.5 text-[11px] font-medium shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                  style={{
                    borderColor: hexToRgba(member.color, 0.35),
                    color: member.color,
                  }}
                >
                  {member.role}
                </span>
              </div>

              <div className="px-7 pb-7 pt-1">
                <h3 className="mb-2.5 text-center font-heading text-lg font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-4 text-center text-[13px] font-normal leading-relaxed text-[rgba(255,255,255,0.4)]">
                  {member.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill border px-2.5 py-0.5 text-[11px] opacity-80"
                      style={{
                        backgroundColor: hexToRgba(member.color, 0.08),
                        borderColor: hexToRgba(member.color, 0.15),
                        color: member.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-[100px]">
          <div className="mb-16 h-px bg-[rgba(255,255,255,0.06)]" aria-hidden />

          <p className="mb-3 text-center font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.25)]">
            {partnersCopy.label}
          </p>
          <h3 className="mb-2 text-center font-heading text-[clamp(24px,3vw,36px)] font-bold text-white">
            {partnersCopy.title}
          </h3>
          <p className="mx-auto mb-12 max-w-[480px] text-center font-sans text-[15px] leading-relaxed text-[rgba(255,255,255,0.4)]">
            {partnersCopy.description}
          </p>

          <div className="flex justify-center">
            <div className="flex w-full max-w-[560px] flex-col gap-5">
              {partners.map((partner, index) => (
                <motion.a
                  key={`${partner.name}-${partner.href}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${partnersCopy.visitCta}: ${partner.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.06, ease: "easeOut" }}
                  className={cn(
                    "grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] px-7 py-7 no-underline",
                    "shadow-none transition-[border-color,transform,box-shadow] duration-[250ms] ease-out",
                    "hover:-translate-y-[3px] hover:border-[rgba(37,99,235,0.4)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]",
                    "max-sm:grid-cols-1 max-sm:justify-items-center max-sm:text-center"
                  )}
                >
                  <div
                    className={cn(
                      "relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)]",
                      partner.logoSrc && "p-2"
                    )}
                  >
                    {partner.logoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element -- partner favicon from their origin; avoids bundling wrong local asset
                      <img
                        src={partner.logoSrc}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span
                        className="font-heading text-[22px] font-bold tracking-tight text-[#60A5FA]"
                        aria-hidden
                      >
                        {partner.logoMonogram}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 font-heading text-[17px] font-bold leading-snug text-white">
                      {partner.name}
                    </p>
                    <p className="m-0 font-sans text-[13px] leading-relaxed text-[rgba(255,255,255,0.35)]">
                      {partner.tagline}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-sans text-[13px] font-medium text-[#2563EB] max-sm:justify-center">
                    <span>{partnersCopy.visitCta}</span>
                    <span className="text-base" aria-hidden>
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-5 text-center font-sans text-xs text-[rgba(255,255,255,0.15)]">
            {partnersCopy.partnershipLeadIn}
            <a
              href={`mailto:${partnersCopy.partnershipEmail}`}
              className="text-[#2563EB] no-underline hover:underline"
            >
              {partnersCopy.partnershipEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
