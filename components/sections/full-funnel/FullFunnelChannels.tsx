"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { ServiceBrandMark } from "@/components/icons/ServiceBrandMark";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFullFunnelChannelsUi } from "@/lib/i18n/content/services/fullFunnelUi";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";

const ACCENT = "#06B6D4";

const HREF: Record<"meta" | "google" | "tiktok" | "web", string> = {
  meta: ROUTES.tjansterMetaAds,
  google: ROUTES.tjansterGoogleAds,
  tiktok: ROUTES.tjansterTiktokAds,
  web: ROUTES.tjansterWebbdesign,
};

export default function FullFunnelChannels() {
  const { locale } = useLocale();
  const ui = useMemo(() => getFullFunnelChannelsUi(locale), [locale]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="full-funnel-channels-heading"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{ui.label}</SectionLabel>
        <h2
          id="full-funnel-channels-heading"
          className="font-heading text-[clamp(30px,4vw,48px)] font-bold leading-tight text-white"
        >
          {ui.h2a}
          <span className="italic" style={{ color: ACCENT }}>
            {ui.h2b}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-[rgba(255,255,255,0.48)]">
          {ui.intro}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2">
        {ui.items.map((item, index) => {
          const href = HREF[item.key];
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                href={href}
                className={cn(
                  "group flex h-full flex-col rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-6 no-underline transition-colors duration-200",
                  "hover:border-[rgba(6,182,212,0.35)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: "rgba(6,182,212,0.25)",
                      backgroundColor: "rgba(6,182,212,0.08)",
                    }}
                  >
                    {item.key === "web" ? (
                      <Layers className="size-6" strokeWidth={2} style={{ color: "#8B5CF6" }} />
                    ) : (
                      <ServiceBrandMark
                        brand={item.key === "meta" ? "facebook" : item.key === "google" ? "google" : "tiktok"}
                        className="size-6"
                      />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[rgba(255,255,255,0.5)]">{item.body}</p>
                    <span className="mt-4 inline-block text-sm font-medium" style={{ color: ACCENT }}>
                      {ui.linkCta}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
