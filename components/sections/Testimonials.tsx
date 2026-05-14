"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  getTestimonials,
  PLATFORM_PILLS,
  type TestimonialItem,
} from "@/lib/i18n/content/testimonials-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const SERVICE_COLORS: Record<string, string> = {
  "Meta Ads": "#2563EB",
  "Google Ads": "#0EA5E9",
  "TikTok Ads": "#EC4899",
  Webbdesign: "#8B5CF6",
  "Web design": "#8B5CF6",
};

function TestimonialCard({
  data,
  className,
  starAriaSuffix,
}: {
  data: TestimonialItem;
  className?: string;
  starAriaSuffix: string;
}) {
  const color = SERVICE_COLORS[data.service] ?? "#2563EB";

  return (
    <article
      className={cn(
        "w-[300px] shrink-0 cursor-default rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-5 transition-colors duration-200 md:w-[360px] md:p-6",
        "hover:border-[rgba(37,99,235,0.3)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm tracking-[2px] text-[#FBBF24]" aria-label={`${data.stars} ${starAriaSuffix}`}>
          {"★".repeat(data.stars)}
        </div>
        <span
          className="shrink-0 rounded-pill border px-2.5 py-0.5 text-[11px]"
          style={{
            backgroundColor: hexToRgba(color, 0.12),
            borderColor: hexToRgba(color, 0.25),
            color,
          }}
        >
          {data.service}
        </span>
      </div>
      <p className="mt-4 text-sm font-normal italic leading-[1.7] text-[rgba(255,255,255,0.65)]">
        &ldquo;{data.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-[13px] font-bold text-white"
          aria-hidden
        >
          {data.avatar}
        </div>
        <div className="min-w-0">
          <p className="font-heading text-sm font-semibold text-white">{data.name}</p>
          <p className="text-xs text-[rgba(255,255,255,0.35)]">
            {data.role} · {data.company}
          </p>
        </div>
      </div>
      <span
        className="mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-medium"
        style={{
          backgroundColor: hexToRgba(color, 0.08),
          borderColor: hexToRgba(color, 0.15),
          color,
        }}
      >
        {data.result}
      </span>
    </article>
  );
}

export default function Testimonials() {
  const { locale, t } = useLocale();
  const testimonials = getTestimonials(locale);
  const ROW_1 = testimonials.slice(0, 5);
  const ROW_2 = testimonials.slice(5, 9);
  const pills = PLATFORM_PILLS[locale];
  const starAriaSuffix = t("testimonials.starAria");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  const row1Loop = [...ROW_1, ...ROW_1];
  const row2Loop = [...ROW_2, ...ROW_2];

  return (
    <section
      id="testimoniale"
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[var(--bg-secondary)] py-20 px-[5%] lg:py-[120px] lg:px-[6%]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <SectionLabel className="mb-4 text-[rgba(255,255,255,0.4)]">{t("testimonials.label")}</SectionLabel>
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(36px,4vw,56px)] font-bold leading-tight text-white"
          >
            <span className="block">{t("testimonials.h2a")}</span>
            <span className="block text-[#2563EB] italic">{t("testimonials.h2b")}</span>
          </h2>
          <p className="mx-auto mb-16 mt-3 max-w-xl text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)]">
            {t("testimonials.sub")}
          </p>
        </motion.div>

        <div className="space-y-4">
          <div className="testimonials-marquee-mask overflow-hidden">
            <div className="testimonial-marquee-row-left">
              {row1Loop.map((item, i) => (
                <TestimonialCard key={`r1-${item.id}-${i}`} data={item} starAriaSuffix={starAriaSuffix} />
              ))}
            </div>
          </div>
          <div className="testimonials-marquee-mask overflow-hidden">
            <div className="testimonial-marquee-row-right">
              {row2Loop.map((item, i) => (
                <TestimonialCard key={`r2-${item.id}-${i}`} data={item} starAriaSuffix={starAriaSuffix} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-heading text-5xl font-extrabold leading-none text-white md:text-[48px]">
              {locale === "en" ? "4.9" : "4,9"}
            </span>
            <div>
              <div className="text-xl tracking-[2px] text-[#FBBF24]">★★★★★</div>
              <p className="mt-1 text-[13px] text-[rgba(255,255,255,0.35)]">{t("testimonials.ratingSub")}</p>
            </div>
          </div>

          <div
            className="h-px w-[60px] shrink-0 bg-[rgba(255,255,255,0.08)] md:h-[60px] md:w-px"
            aria-hidden
          />

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[13px] text-[rgba(255,255,255,0.5)]"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
