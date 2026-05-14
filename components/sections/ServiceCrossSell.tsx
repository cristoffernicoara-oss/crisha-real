"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export type ServiceCrossSellItem = {
  href: string;
  title: string;
  description: string;
};

type ServiceCrossSellProps = {
  title: string;
  items: ServiceCrossSellItem[];
  color: string;
  ariaHeadingId?: string;
};

export default function ServiceCrossSell({
  title,
  items,
  color,
  ariaHeadingId = "service-cross-sell-heading",
}: ServiceCrossSellProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0, rootMargin: "0px 0px 12% 0px" });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-labelledby={ariaHeadingId}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          id={ariaHeadingId}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 font-heading text-[clamp(24px,3vw,34px)] font-bold text-white"
        >
          {title}
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 + index * 0.08 }}
            >
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-6 no-underline transition-colors hover:border-[rgba(37,99,235,0.25)]"
              >
                <span className="font-heading text-lg font-semibold text-white group-hover:text-[#93C5FD]">
                  {item.title}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-medium" style={{ color }}>
                  Läs mer →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
