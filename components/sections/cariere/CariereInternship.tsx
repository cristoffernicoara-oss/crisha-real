"use client";

import { motion } from "framer-motion";
import { BarChart2, Calendar, Clock, DollarSign, Layers, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { persistCariereApplyPosition } from "@/lib/cariere-apply";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const DETAIL_ROWS: {
  icon: LucideIcon;
  strong: string;
  span: string;
}[] = [
  {
    icon: Calendar,
    strong: "Längd: 3–6 månader",
    span: "möjlighet till förlängning",
  },
  {
    icon: Clock,
    strong: "Omfattning: Deltid eller heltid",
    span: "flexibelt, 100 % remote",
  },
  {
    icon: DollarSign,
    strong: "Ersättning:",
    span: "Praktik med ersättning beroende på erfarenhet",
  },
  {
    icon: TrendingUp,
    strong: "Väg till heltid:",
    span: "De bästa kan erbjudas anställning",
  },
];

const TRACKS: {
  name: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}[] = [
  {
    name: "Performance Marketing",
    icon: Target,
    color: "#2563EB",
    skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics", "A/B-testning", "Rapportering"],
  },
  {
    name: "Web Design & CRO",
    icon: Layers,
    color: "#8B5CF6",
    skills: ["Figma", "Webflow", "Landing Pages", "UX/UI", "PageSpeed", "Copywriting"],
  },
  {
    name: "Data & Strategy",
    icon: BarChart2,
    color: "#0EA5E9",
    skills: ["GA4", "GTM", "Looker Studio", "Kampanjstrategi", "Konkurrentanalys"],
  },
];

export default function CariereInternship() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  const goApply = () => {
    persistCariereApplyPosition("Praktik: performance marketing");
    document.getElementById("aplica")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="cariere-internship-heading"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.35)]">PRAKTIKPROGRAM</SectionLabel>
          <h2
            id="cariere-internship-heading"
            className="mb-5 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
          >
            <span className="block">Starta karriären inom</span>
            <span className="block text-[#2563EB] italic">digital marknadsföring.</span>
          </h2>
          <p className="mb-8 text-base font-normal leading-[1.75] text-[rgba(255,255,255,0.5)]">
            Crishas praktik vänder sig till studenter och nyexaminerade som vill förstå hur digital marknadsföring fungerar i praktiken, inte bara i teoriböcker utan genom riktiga kampanjer du hanterar tillsammans med teamet.
          </p>

          <ul className="mb-8 space-y-4">
            {DETAIL_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.strong} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)]">
                    <Icon className="size-4 text-[#2563EB]" strokeWidth={2} aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{row.strong}</p>
                    <p className="text-[13px] font-normal text-[rgba(255,255,255,0.4)]">{row.span}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={goApply}
            className="rounded-full border-0 bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
          >
            Ansök om praktik →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
            DET DU LÄR DIG
          </p>
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.name}
                className="mb-3 rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-5 last:mb-0"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="size-[18px]" strokeWidth={2} style={{ color: track.color }} aria-hidden />
                  <h3 className="font-heading text-base font-semibold text-white">{track.name}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill border px-2.5 py-0.5 text-[11px] opacity-90"
                      style={{
                        backgroundColor: hexToRgba(track.color, 0.08),
                        borderColor: hexToRgba(track.color, 0.15),
                        color: track.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
