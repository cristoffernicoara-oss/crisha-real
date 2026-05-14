"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Globe, TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Award,
};

const workValues = [
  {
    icon: "BookOpen",
    color: "#2563EB",
    title: "Lär dig vid källan",
    desc: "Du jobbar direkt med Shang och Cristoffer, inte bara med en senior som delegerar. Varje kampanjbeslut förklaras och diskuteras, inte bara körs ut.",
  },
  {
    icon: "TrendingUp",
    color: "#0EA5E9",
    title: "Riktiga budgetar",
    desc: "Från första månaden arbetar du på riktiga konton med riktiga budgetar. Inga låtsasprojekt, allt är live och mätbart.",
  },
  {
    icon: "Users",
    color: "#8B5CF6",
    title: "Litet team, stor effekt",
    desc: "Vi är medvetet små. Varje person räknas, varje idé lyssnas på och varje framgång är teamets.",
  },
  {
    icon: "Globe",
    color: "#EC4899",
    title: "Internationell exponering",
    desc: "Vi jobbar med kunder i Sverige, Norden, Tyskland, Benelux, UK och USA, så du lär dig hur marknadsföring skiljer sig mellan olika marknader.",
  },
  {
    icon: "Zap",
    color: "#F59E0B",
    title: "Tempo utan byråkrati",
    desc: "Inga fem godkännanden för en idé. Om det är vettigt testar vi. Om det funkar skalar vi. Annars lär vi oss och går vidare.",
  },
  {
    icon: "Award",
    color: "#22C55E",
    title: "Erkännande och utveckling",
    desc: "Prestation belönas. Praktik kan bli heltid. Heltid kan växa till senior. Din utveckling är vår investering.",
  },
] as const;

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function CariereValues() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-labelledby="cariere-values-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-left"
        >
          <SectionLabel className="mb-3 text-[rgba(255,255,255,0.35)]">ATT JOBBA PÅ CRISHA</SectionLabel>
          <h2
            id="cariere-values-heading"
            className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
          >
            En plats där du<span className="text-[#2563EB] italic"> lär och växer.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {workValues.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className={cn(
                  "group rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-8",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                )}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hexToRgba(item.color, 0.35);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                }}
              >
                <div
                  className="flex size-12 items-center justify-center rounded-xl border"
                  style={{
                    backgroundColor: hexToRgba(item.color, 0.1),
                    borderColor: hexToRgba(item.color, 0.2),
                  }}
                >
                  {Icon && <Icon className="size-[22px]" strokeWidth={2} style={{ color: item.color }} />}
                </div>
                <h3 className="mb-2.5 mt-5 font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
