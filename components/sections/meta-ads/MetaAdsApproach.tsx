"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { getMetaApproachUi } from "@/lib/i18n/content/services/metaAdsUi";
import { useLocale } from "@/lib/i18n/locale-context";

export default function MetaAdsApproach() {
  const { locale } = useLocale();
  const ui = useMemo(() => getMetaApproachUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="meta-ads-approach-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="meta-ads-approach-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="text-[#2563EB] italic">{ui.h2b}</span>
        </h2>
        <p className="mt-3 max-w-[480px] text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)] md:mb-16">
          {ui.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.colBefore}
            </p>
            <div className="mb-4 rounded-2xl border border-[rgba(239,68,68,0.15)] bg-[rgba(239,68,68,0.04)] p-6">
              <p className="mb-4 font-heading text-[15px] font-semibold text-white">{ui.titleBefore}</p>
              <ul className="flex flex-col gap-3">
                {ui.beforeItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <X className="mt-0.5 size-[13px] shrink-0 text-[#EF4444]" strokeWidth={2.5} />
                    <span className="text-[13px] leading-relaxed text-[rgba(255,255,255,0.5)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.04)] p-6">
              <p className="mb-4 font-heading text-[15px] font-semibold text-[#2563EB]">{ui.titleAfter}</p>
              <ul className="flex flex-col gap-3">
                {ui.afterItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-[13px] shrink-0 text-[#22C55E]" strokeWidth={2.5} />
                    <span className="text-[13px] leading-relaxed text-[rgba(255,255,255,0.6)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-[rgba(255,255,255,0.3)]">
              {ui.colFunnel}
            </p>
            <FunnelLevel
              narrow
              label={ui.tof.label}
              title={ui.tof.title}
              m1={ui.tof.m1}
              m2={ui.tof.m2}
              bg="rgba(37,99,235,0.1)"
              border="rgba(37,99,235,0.2)"
            />
            <div className="py-2 text-center text-xl text-[#2563EB]" aria-hidden>
              ↓
            </div>
            <FunnelLevel
              label={ui.mof.label}
              title={ui.mof.title}
              m1={ui.mof.m1}
              m2={ui.mof.m2}
              bg="rgba(37,99,235,0.15)"
              border="rgba(37,99,235,0.3)"
            />
            <div className="py-2 text-center text-xl text-[#2563EB]" aria-hidden>
              ↓
            </div>
            <FunnelLevel
              wide
              label={ui.bof.label}
              title={ui.bof.title}
              m1={ui.bof.m1}
              m2={ui.bof.m2}
              bg="rgba(37,99,235,0.2)"
              border="rgba(37,99,235,0.4)"
            />
            <p className="mt-4 text-xs text-[rgba(255,255,255,0.25)]">{ui.foot}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FunnelLevel({
  label,
  title,
  m1,
  m2,
  bg,
  border,
  narrow,
  wide,
}: {
  label: string;
  title: string;
  m1: string;
  m2: string;
  bg: string;
  border: string;
  narrow?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto rounded-xl border px-5 py-4 ${narrow ? "max-w-[92%]" : ""} ${wide ? "max-w-full" : !narrow ? "max-w-[96%]" : ""}`}
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#93C5FD]">{label}</p>
      <p className="mt-1 font-heading text-sm font-semibold text-white">{title}</p>
      <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-[rgba(255,255,255,0.3)]">
        <span>{m1}</span>
        <span>{m2}</span>
      </div>
    </div>
  );
}
