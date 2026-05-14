"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getGoogleAdsQualityUi } from "@/lib/i18n/content/services/googleAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

const accent = "#0EA5E9";

export default function GoogleAdsQualityScore() {
  const { locale } = useLocale();
  const ui = useMemo(() => getGoogleAdsQualityUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="google-ads-qs-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="google-ads-qs-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#0EA5E9] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            {ui.factors.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-base font-bold text-white">{f.name}</h3>
                  <span
                    className="rounded-pill border px-2.5 py-0.5 text-[11px] font-medium"
                    style={{
                      backgroundColor: "rgba(14,165,233,0.1)",
                      borderColor: "rgba(14,165,233,0.2)",
                      color: accent,
                    }}
                  >
                    {ui.factorBadge}
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-[rgba(255,255,255,0.45)]">{f.desc}</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[rgba(255,255,255,0.2)]">
                  {ui.howOpt}
                </p>
                <ul className="mt-2 space-y-1">
                  {f.bullets.map((b) => (
                    <li key={b} className="text-xs text-[rgba(255,255,255,0.4)]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-7"
          >
            <p className="mb-6 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.cpcTitle}
            </p>
            <div className="divide-y divide-[rgba(255,255,255,0.04)]">
              {ui.rows.map((r) => (
                <div
                  key={r.qs}
                  className={`flex items-center justify-between gap-3 py-2.5 ${r.baseline ? "bg-[rgba(255,255,255,0.02)] px-2 -mx-2 rounded-lg" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-9 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{
                        backgroundColor: r.glow ? accent : "rgba(255,255,255,0.08)",
                        boxShadow: r.glow ? `0 0 20px rgba(14,165,233,0.35)` : undefined,
                      }}
                    >
                      {r.qs}
                    </span>
                    <span className="text-[13px] text-[rgba(255,255,255,0.45)]">{r.label}</span>
                    {r.baseline ? (
                      <span className="rounded-pill bg-[rgba(14,165,233,0.12)] px-2 py-0.5 text-[10px] text-[#7DD3FC]">
                        {ui.baselineTag}
                      </span>
                    ) : null}
                  </div>
                  <span className="font-heading text-sm font-bold" style={{ color: r.color }}>
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[rgba(255,255,255,0.25)]">{ui.foot}</p>

            <div className="mt-5 rounded-xl border border-[rgba(14,165,233,0.15)] bg-[rgba(14,165,233,0.06)] p-4 text-[13px] leading-relaxed text-[rgba(255,255,255,0.55)]">
              {ui.tip}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
