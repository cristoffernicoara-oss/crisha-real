"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const PILLS = [
  "🚀 Snabb tillväxt",
  "📊 Riktiga budgetar, riktiga konton",
  "🎯 Mentorering direkt med grundarna",
  "🌍 Internationella kunder",
] as const;

export default function CariereHero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-16 pt-28 md:px-[6%] md:pb-20 md:pt-[160px]"
      aria-labelledby="cariere-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[760px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="mb-4 justify-center text-[rgba(255,255,255,0.35)]">KARRIÄR & PRAKTIK</SectionLabel>
        </motion.div>

        <motion.h1
          id="cariere-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="font-heading text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.05] text-white"
        >
          <span className="block">Bygg framtiden för</span>
          <span className="block text-[#2563EB] italic">marknadsföring med oss.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-[560px] text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.5)]"
        >
          Crisha Marketing är inte en plats för att bara logga timmar. Här lär du mer på sex månader än på tre år någon annanstans. Vi jobbar med riktiga budgetar, riktiga kunder och resultat som räknas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {PILLS.map((p) => (
            <span
              key={p}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]",
                "px-[18px] py-2 text-[13px] text-[rgba(255,255,255,0.5)]"
              )}
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
