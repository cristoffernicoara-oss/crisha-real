"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const TICKER_ITEMS = [
  "Meta Business Suite",
  "Google Ads",
  "TikTok for Business",
  "Google Analytics 4",
  "Meta Pixel",
  "Google Tag Manager",
  "Hotjar",
  "Semrush",
  "Klaviyo",
  "Shopify",
  "Next.js",
  "Webflow",
] as const;

function StatValue({
  inView,
  end,
  decimals,
  suffix,
  prefix,
  decimalSep,
}: {
  inView: boolean;
  end: number;
  decimals: number;
  suffix: string;
  prefix?: string;
  decimalSep: string;
}) {
  if (!inView) {
    return <span className="tabular-nums">0</span>;
  }

  return (
    <CountUp
      key={`${prefix ?? ""}-${end}-${suffix}-${decimals}`}
      start={0}
      end={end}
      duration={2.5}
      decimals={decimals}
      prefix={prefix ?? ""}
      suffix={suffix}
      separator=" "
      decimal={decimalSep}
      preserveValue
      className="tabular-nums"
    />
  );
}

export default function Stats() {
  const { t, locale } = useLocale();
  const decimalSep = locale === "en" ? "." : ",";
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const STATS = [
    {
      end: 40,
      decimals: 0,
      suffix: "+",
      label: t("stats.s1"),
      sublabel: t("stats.s1b"),
    },
    {
      end: 4.8,
      decimals: 1,
      suffix: "×",
      label: t("stats.s2"),
      sublabel: t("stats.s2b"),
    },
    {
      end: 1,
      decimals: 0,
      prefix: "€",
      suffix: "M+",
      label: t("stats.s3"),
      sublabel: t("stats.s3b"),
    },
    {
      end: 98,
      decimals: 0,
      suffix: "%",
      label: t("stats.s4"),
      sublabel: t("stats.s4b"),
    },
  ] as const;

  return (
    <section
      ref={ref}
      className="border-y border-[rgba(255,255,255,0.06)] bg-[var(--bg-secondary)] shadow-[inset_0_1px_0_rgba(37,99,235,0.3)]"
      aria-label="Nyckeltal och plattformar"
    >
      <div className="mx-auto max-w-[1200px] px-[6%] py-12">
        <div className={cn("grid text-center", "grid-cols-2 gap-8", "md:grid-cols-4 md:gap-0")}>
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "flex flex-col items-center justify-center px-2",
                "border-[rgba(255,255,255,0.06)]",
                index < 2 && "border-b md:border-b-0",
                index % 2 === 0 && "border-r md:border-r",
                index === 1 && "md:border-r",
                index === 3 && "border-r-0"
              )}
            >
              <p className="font-heading text-[clamp(36px,4vw,56px)] font-extrabold leading-none text-white" aria-live="polite">
                <StatValue
                  inView={inView}
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  prefix={"prefix" in stat ? stat.prefix : undefined}
                  decimalSep={decimalSep}
                />
              </p>
              <p className="mt-1.5 text-sm font-normal tracking-[0.04em] text-[rgba(255,255,255,0.45)]">
                {stat.label}
              </p>
              <p className="mt-1 max-w-[200px] text-xs font-normal leading-snug text-[rgba(255,255,255,0.28)]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 hidden min-[480px]:block">
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-10">
            <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.25)]">
              {t("stats.platformsTitle")}
            </p>
            <div className="stats-ticker-mask overflow-hidden">
              <div className="stats-ticker-track">
                <div className="flex shrink-0 items-center gap-3 pr-3">
                  {TICKER_ITEMS.map((name) => (
                    <span
                      key={`a-${name}`}
                      className="shrink-0 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-1.5 text-[13px] whitespace-nowrap text-[rgba(255,255,255,0.4)]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
                  {TICKER_ITEMS.map((name) => (
                    <span
                      key={`b-${name}`}
                      className="shrink-0 rounded-pill border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-1.5 text-[13px] whitespace-nowrap text-[rgba(255,255,255,0.4)]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
