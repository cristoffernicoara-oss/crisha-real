"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Layers, Search, Target, Zap, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactCTA from "@/components/sections/ContactCTA";
import { buttonVariants } from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export type ServiceStatItem =
  | {
      label: string;
      kind: "count";
      prefix?: string;
      end: number;
      suffix?: string;
      decimals?: number;
    }
  | { label: string; kind: "text"; value: string };

export type ServiceBenefit = { title: string; desc: string };
export type ServiceProcessStep = { step: string; title: string; desc: string };

export type ServiceIconKey = "target" | "search" | "zap" | "layers";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  target: Target,
  search: Search,
  zap: Zap,
  layers: Layers,
};

export type ServiceFaqItem = { question: string; answer: string };

export type ServiceCrossSellItem = {
  href: string;
  title: string;
  description: string;
};

export interface ServicePageProps {
  serviceName: string;
  categoryLabel?: string;
  tagline: string;
  description: string;
  color: string;
  icon: ServiceIconKey;
  stats: ServiceStatItem[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs?: ServiceFaqItem[];
  crossSell?: { title: string; items: ServiceCrossSellItem[] };
}

function ServiceHero({
  serviceName,
  categoryLabel,
  tagline,
  description,
  color,
  icon,
}: Pick<
  ServicePageProps,
  "serviceName" | "tagline" | "description" | "color" | "icon"
> & { categoryLabel?: string }) {
  const { t } = useLocale();
  const resolvedCategory = categoryLabel ?? t("servicePage.category");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const Icon = SERVICE_ICONS[icon];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060810] px-[5%] pb-20 pt-32 md:px-[6%] md:pb-[100px] md:pt-40 lg:pt-[160px]"
      aria-labelledby="service-hero-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 size-[600px] max-w-[100vw]"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(color, 0.1)} 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[800px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto mb-7 flex size-[72px] items-center justify-center rounded-[20px] border"
          style={{
            backgroundColor: hexToRgba(color, 0.1),
            borderColor: hexToRgba(color, 0.25),
          }}
        >
          <Icon className="size-9" strokeWidth={2} style={{ color }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        >
          <SectionLabel className="mb-3 justify-center text-[rgba(255,255,255,0.4)]">
            {resolvedCategory}
          </SectionLabel>
        </motion.div>
        <motion.h1
          id="service-hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.05] text-white"
        >
          <span className="block">{serviceName}</span>
          <span className="block italic" style={{ color }}>
            {tagline}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mb-10 mt-5 max-w-[560px] text-center text-lg font-normal text-[rgba(255,255,255,0.5)]"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={`${ROUTES.kontakt}#contact`}
            className={cn(buttonVariants({ variant: "primary" }), "min-w-[200px] justify-center")}
          >
            {t("servicePage.bookAudit")}
          </Link>
          <Link
            href={ROUTES.fallstudier}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "min-w-[200px] justify-center border-[rgba(255,255,255,0.12)]"
            )}
          >
            {t("servicePage.seeResults")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  inView,
  index,
}: {
  stat: ServiceStatItem;
  inView: boolean;
  index: number;
}) {
  const { locale } = useLocale();
  const decimalSep = locale === "en" ? "." : ",";
  if (stat.kind === "text") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.45, delay: index * 0.1 }}
        className="flex flex-col items-center px-2 text-center"
      >
        <p className="font-heading text-[clamp(36px,4vw,56px)] font-extrabold leading-none text-white">
          {stat.value}
        </p>
        <p className="mt-2 text-sm font-normal text-[rgba(255,255,255,0.35)]">{stat.label}</p>
      </motion.div>
    );
  }

  const { prefix = "", end, suffix = "", decimals = 0 } = stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex flex-col items-center px-2 text-center"
    >
      <p
        className="font-heading text-[clamp(36px,4vw,56px)] font-extrabold leading-none text-white"
        aria-live="polite"
      >
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.2}
            decimals={decimals}
            prefix={prefix}
            suffix={suffix}
            separator=" "
            decimal={decimalSep}
            preserveValue
            className="tabular-nums"
          />
        ) : (
          <span className="tabular-nums">
            {prefix}0{suffix}
          </span>
        )}
      </p>
      <p className="mt-2 text-sm font-normal text-[rgba(255,255,255,0.35)]">{stat.label}</p>
    </motion.div>
  );
}

function ServiceStats({ stats, color }: { stats: ServiceStatItem[]; color: string }) {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="border-y border-[rgba(255,255,255,0.06)] bg-[var(--bg-secondary)]"
      style={{ boxShadow: `inset 0 1px 0 ${hexToRgba(color, 0.15)}` }}
      aria-label={t("servicePage.statsAria")}
    >
      <div className="mx-auto max-w-[1200px] px-[5%] py-12 md:px-[6%] md:py-16">
        <div
          className={cn(
            "grid text-center",
            "grid-cols-2 gap-8",
            "md:grid-cols-4 md:gap-0"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "border-[rgba(255,255,255,0.06)]",
                index % 2 === 0 && "border-r",
                index < 2 && "border-b md:border-b-0",
                index < 3 && "md:border-r"
              )}
            >
              <StatCell stat={stat} inView={inView} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBenefits({
  benefits,
  color,
}: {
  benefits: ServiceBenefit[];
  color: string;
}) {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="service-benefits-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{t("servicePage.benefitsLabel")}</SectionLabel>
        <h2
          id="service-benefits-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {t("servicePage.benefitsH2a")}{" "}
          <span className="italic" style={{ color }}>
            {t("servicePage.benefitsH2b")}
          </span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, index) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-7"
            >
              <div
                className="mb-4 flex size-8 items-center justify-center rounded-lg text-sm font-bold"
                style={{
                  backgroundColor: hexToRgba(color, 0.1),
                  color,
                }}
              >
                {index + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">
                {b.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceProcess({
  process,
  color,
}: {
  process: ServiceProcessStep[];
  color: string;
}) {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="service-process-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{t("servicePage.processLabel")}</SectionLabel>
        <h2
          id="service-process-heading"
          className="font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
        >
          {t("servicePage.processH2a")}{" "}
          <span className="italic" style={{ color }}>
            {t("servicePage.processH2b")}
          </span>
        </h2>

        <div className="mx-auto mt-10 flex max-w-[700px] flex-col md:mt-12">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative grid grid-cols-[48px_1fr] gap-4 pb-10 last:pb-0 md:gap-6"
            >
              {i < process.length - 1 && (
                <div
                  className="absolute left-6 top-12 z-0 h-[calc(100%-3rem)] w-px bg-[rgba(255,255,255,0.06)]"
                  aria-hidden
                />
              )}
              <div
                className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border font-heading text-lg font-extrabold"
                style={{
                  backgroundColor: hexToRgba(color, 0.1),
                  borderColor: hexToRgba(color, 0.25),
                  color,
                }}
              >
                {p.step}
              </div>
              <div className="min-w-0 pt-1.5 md:pt-2.5">
                <h3 className="mb-2 font-heading text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.45)]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePageFaq({
  faqs,
  color,
}: {
  faqs: ServiceFaqItem[];
  color: string;
}) {
  const { t } = useLocale();
  return (
    <section
      className="border-y border-[rgba(255,255,255,0.06)] bg-[#0D1120] px-[5%] py-20 md:px-[6%] md:py-[120px]"
      aria-labelledby="service-faq-heading"
    >
      <div className="mx-auto max-w-[860px]">
        <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{t("servicePage.faqLabel")}</SectionLabel>
        <h2
          id="service-faq-heading"
          className="mb-10 font-heading text-[clamp(28px,3.5vw,40px)] font-bold leading-tight text-white"
        >
          {t("servicePage.faqH2a")}{" "}
          <span className="italic" style={{ color }}>
            {t("servicePage.faqH2b")}
          </span>
        </h2>
        <FAQ items={faqs} accentColor={color} />
      </div>
    </section>
  );
}

function ServiceCrossSell({
  title,
  items,
  color,
}: {
  title: string;
  items: ServiceCrossSellItem[];
  color: string;
}) {
  const { t } = useLocale();
  return (
    <section
      className="bg-[#060810] px-[5%] py-16 md:px-[6%] md:py-20"
      aria-labelledby="service-cross-sell-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          id="service-cross-sell-heading"
          className="mb-8 font-heading text-[clamp(24px,3vw,34px)] font-bold text-white"
        >
          {title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-6 no-underline transition-colors hover:border-[rgba(37,99,235,0.25)]"
            >
              <span className="font-heading text-lg font-semibold text-white group-hover:text-[#93C5FD]">
                {item.title}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{item.description}</p>
              <span className="mt-4 inline-block text-sm font-medium" style={{ color }}>
                {t("servicePage.readMore")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage(props: ServicePageProps) {
  const { categoryLabel, serviceName, tagline, description, color, icon, faqs, crossSell } = props;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-page-nav">
      <Navbar />
      <ServiceHero
        categoryLabel={categoryLabel}
        serviceName={serviceName}
        tagline={tagline}
        description={description}
        color={color}
        icon={icon}
      />
      <ServiceStats stats={props.stats} color={props.color} />
      <ServiceBenefits benefits={props.benefits} color={props.color} />
      <ServiceProcess process={props.process} color={props.color} />
      {faqs?.length ? <ServicePageFaq faqs={faqs} color={color} /> : null}
      {crossSell?.items.length ? (
        <ServiceCrossSell title={crossSell.title} items={crossSell.items} color={color} />
      ) : null}
      <ContactCTA />
      <Footer />
    </main>
  );
}
