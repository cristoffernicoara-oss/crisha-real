"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getGoogleAdsKeywordsUi } from "@/lib/i18n/content/services/googleAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

const accent = "#0EA5E9";

export default function GoogleAdsKeywords() {
  const { locale } = useLocale();
  const ui = useMemo(() => getGoogleAdsKeywordsUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="google-ads-keywords-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="google-ads-keywords-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#0EA5E9] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-6 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.pyramidTitle}
            </p>
            <div className="mx-auto flex max-w-[420px] flex-col items-center gap-2">
              <PyramidLevel
                narrow
                badge={ui.highInt}
                badgeColor={accent}
                examples={ui.exHigh}
                metric={ui.mHigh}
                metricColor="#22C55E"
                bg="rgba(14,165,233,0.2)"
                border="rgba(14,165,233,0.4)"
              />
              <PyramidLevel
                mid
                badge={ui.midInt}
                badgeColor="#7DD3FC"
                examples={ui.exMid}
                metric={ui.mMid}
                metricColor="#86EFAC"
                bg="rgba(14,165,233,0.12)"
                border="rgba(14,165,233,0.25)"
              />
              <PyramidLevel
                badge={ui.lowInt}
                badgeColor="rgba(255,255,255,0.4)"
                examples={ui.exLow}
                metric={ui.mLow}
                metricColor="rgba(255,255,255,0.35)"
                bg="rgba(14,165,233,0.06)"
                border="rgba(14,165,233,0.12)"
              />
            </div>
            <p className="mt-4 text-xs text-[rgba(255,255,255,0.25)]">{ui.foot}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.processTitle}
            </p>
            <ul>
              {ui.steps.map((s) => (
                <li
                  key={s.n}
                  className="flex gap-4 border-b border-[rgba(255,255,255,0.05)] py-4 first:pt-0 last:border-0"
                >
                  <div
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border font-heading text-[13px] font-bold"
                    style={{
                      backgroundColor: "rgba(14,165,233,0.1)",
                      borderColor: "rgba(14,165,233,0.2)",
                      color: accent,
                    }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{s.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[rgba(255,255,255,0.4)]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PyramidLevel({
  badge,
  badgeColor,
  examples,
  metric,
  metricColor,
  bg,
  border,
  narrow,
  mid,
}: {
  badge: string;
  badgeColor: string;
  examples: string[];
  metric: string;
  metricColor: string;
  bg: string;
  border: string;
  narrow?: boolean;
  mid?: boolean;
}) {
  const w = narrow ? "w-[72%]" : mid ? "w-[88%]" : "w-full";
  return (
    <div
      className={`rounded-xl border px-4 py-4 ${w}`}
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: badgeColor }}>
        {badge}
      </p>
      <ul className="mt-2 space-y-1">
        {examples.map((ex) => (
          <li key={ex} className="text-[13px] text-white">
            {ex}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs font-medium" style={{ color: metricColor }}>
        {metric}
      </p>
    </div>
  );
}
