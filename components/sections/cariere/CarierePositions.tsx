"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Clock, MapPin, Plus } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { persistCariereApplyPosition } from "@/lib/cariere-apply";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const positions = [
  {
    id: 1,
    title: "Meta Ads-specialist",
    type: "Heltid",
    typeColor: "#2563EB",
    location: "Remote · Sverige / EU",
    experience: "1–3 års erfarenhet",
    applyValue: "Meta Ads-specialist (heltid)",
    description:
      "Vi söker en Meta Ads-specialist som självständigt hanterar Facebook- och Instagram-konton, bygger effektiva kampanjstrukturer och optimerar dagligen för maximal ROAS.",
    requirements: [
      "Minst 1 års erfarenhet av Meta Ads Manager",
      "Förståelse för TOF/MOF/BOF-funnel",
      "Erfarenhet av A/B-testning och kreativ optimering",
      "Kan läsa och tolka data från annonser",
      "Tydlig kommunikation med kunder på svenska och engelska",
    ],
    nice: ["Erfarenhet av e-handel", "Copywriting-kunskaper", "Erfarenhet av Google Ads"],
  },
  {
    id: 2,
    title: "Google Ads-specialist",
    type: "Heltid",
    typeColor: "#0EA5E9",
    location: "Remote · Sverige / EU",
    experience: "1–3 års erfarenhet",
    applyValue: "Google Ads-specialist (heltid)",
    description:
      "Vi söker en Google Ads-specialist med erfarenhet av Search, Shopping och Performance Max. Du förstår budstrategier, Quality Score och optimerar för verkliga konverteringar, inte bara klick.",
    requirements: [
      "Minst 1 års erfarenhet av Google Ads",
      "Erfarenhet av Search, Shopping och Display",
      "Kunskap i Google Analytics 4 och Google Tag Manager",
      "Förståelse för Quality Score och budstrategier",
      "Analysförmåga och tydlig rapportering",
    ],
    nice: ["Google Ads-certifiering", "Erfarenhet av Performance Max", "Grundläggande SEO"],
  },
  {
    id: 3,
    title: "Webbdesigner / utvecklare",
    type: "Heltid",
    typeColor: "#8B5CF6",
    location: "Remote · Sverige / EU",
    experience: "1–2 års erfarenhet",
    applyValue: "Webbdesigner / utvecklare (heltid)",
    description:
      "Vi söker en webbdesigner med stark estetik och solid teknik. Du kan bygga webbplatser och landningssidor som inte bara ser bra ut utan även konverterar besökare till kunder.",
    requirements: [
      "Portfölj med minst 3–5 relevanta projekt",
      "Erfarenhet av Figma",
      "Grundläggande HTML, CSS och JavaScript",
      "Erfarenhet av Webflow eller Next.js (minst ett)",
      "Förståelse för UX och CRO",
    ],
    nice: ["Next.js och Tailwind CSS", "PageSpeed-optimering", "Shopify"],
  },
] as const;

export default function CarierePositions() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scrollToApply = (applyValue: string) => {
    persistCariereApplyPosition(applyValue);
    document.getElementById("aplica")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]" aria-labelledby="cariere-positions-heading">
      <div className="mx-auto max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.35)]">LEDIGA TJÄNSTER</SectionLabel>
          <h2 id="cariere-positions-heading" className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white">
            Vi söker<span className="text-[#2563EB] italic"> exceptionella människor.</span>
          </h2>
          <p className="mt-3 max-w-[440px] text-base font-normal text-[rgba(255,255,255,0.45)]">
            Vi jagar inte perfekta CV:n. Vi söker nyfikna, ambitiösa personer som drivs av resultat.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 md:mt-12">
          {positions.map((position, index) => {
            const isOpen = expandedId === position.id;
            const color = position.typeColor;
            return (
              <motion.article
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className={cn(
                  "overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] transition-all duration-300",
                  "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                )}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(color, 0.3);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                }}
              >
                <div className="h-[3px] w-full" style={{ backgroundColor: color }} aria-hidden />
                <div className="px-6 py-7 md:px-8 md:py-7">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">{position.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-[rgba(255,255,255,0.4)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-[13px] text-[rgba(255,255,255,0.3)]" aria-hidden />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-[13px] text-[rgba(255,255,255,0.3)]" aria-hidden />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className="shrink-0 self-start rounded-full border px-4 py-1.5 text-[13px] font-medium"
                      style={{
                        backgroundColor: hexToRgba(color, 0.1),
                        borderColor: hexToRgba(color, 0.2),
                        color,
                      }}
                    >
                      {position.type}
                    </span>
                  </div>

                  <p className="mt-5 max-w-[680px] text-[15px] font-normal leading-[1.7] text-[rgba(255,255,255,0.5)]">
                    {position.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : position.id)}
                    className="mt-5 flex cursor-pointer items-center gap-1.5 border-0 bg-transparent text-[13px] font-medium"
                    style={{ color }}
                  >
                    <ChevronDown className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")} />
                    {isOpen ? "Dölj" : "Visa krav"}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="exp"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-6 border-t border-[rgba(255,255,255,0.06)] pt-5 lg:grid-cols-2 lg:gap-6">
                          <div>
                            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
                              Vad vi söker
                            </p>
                            <ul className="space-y-2">
                              {position.requirements.map((r) => (
                                <li key={r} className="flex gap-2 text-[13px] leading-snug text-[rgba(255,255,255,0.55)]">
                                  <Check className="mt-0.5 size-3.5 shrink-0 text-[#22C55E]" strokeWidth={2} aria-hidden />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
                              PLUS (INTE KRAV)
                            </p>
                            <ul className="space-y-2">
                              {position.nice.map((n) => (
                                <li key={n} className="flex gap-2 text-[13px] leading-snug text-[rgba(255,255,255,0.4)]">
                                  <Plus className="mt-0.5 size-3.5 shrink-0 text-[#2563EB]" strokeWidth={2} aria-hidden />
                                  {n}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => scrollToApply(position.applyValue)}
                          className="mt-5 rounded-[10px] border-0 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                          style={{ backgroundColor: color }}
                        >
                          Ansök till denna tjänst →
                        </button>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
