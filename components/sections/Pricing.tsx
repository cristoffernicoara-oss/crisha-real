"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPricingPlans, PRICING_GUARANTEES } from "@/lib/i18n/content/pricing-plans";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

function useIsLg() {
  const [lg, setLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return lg;
}

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <span
        className="flex size-[18px] shrink-0 items-center justify-center rounded-full border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.12)] text-[10px] font-bold text-[#22C55E]"
        aria-hidden
      >
        ✓
      </span>
    );
  }
  return (
    <span
      className="flex size-[18px] shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[10px] font-bold text-[rgba(255,255,255,0.2)]"
      aria-hidden
    >
      ✕
    </span>
  );
}

export default function Pricing() {
  const { locale, t } = useLocale();
  const plans = getPricingPlans(locale);
  const guarantees = PRICING_GUARANTEES[locale];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const router = useRouter();
  const isLg = useIsLg();

  return (
    <section
      ref={ref}
      className="bg-[var(--bg-primary)] py-20 px-[5%] lg:py-[120px] lg:px-[6%]"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="text-center"
        >
          <SectionLabel className="mb-4 text-[rgba(255,255,255,0.4)]">{t("pricing.label")}</SectionLabel>
          <h2
            id="pricing-heading"
            className="font-heading text-[clamp(36px,4vw,56px)] font-bold leading-tight text-white"
          >
            <span className="block">{t("pricing.h2a")}</span>
            <span className="block text-[#2563EB] italic">{t("pricing.h2b")}</span>
          </h2>
          <p className="mx-auto mb-16 mt-3 max-w-[440px] text-center text-[17px] font-normal leading-relaxed text-[rgba(255,255,255,0.45)]">
            {t("pricing.sub")}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-[480px] items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 40, scale: plan.featured ? 0.98 : 1 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: plan.featured ? (isLg ? 1.03 : 1) : 1,
                      }
                    : { opacity: 0, y: 40, scale: plan.featured ? 0.98 : 1 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ease-out md:p-9",
                  plan.featured &&
                    "z-[1] border border-[rgba(37,99,235,0.4)] shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_40px_80px_rgba(37,99,235,0.12),0_20px_40px_rgba(0,0,0,0.4)]",
                  !plan.featured &&
                    "border border-[rgba(255,255,255,0.07)] bg-[#0F1629] hover:-translate-y-1 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                )}
                style={
                  plan.featured
                    ? {
                        background: "linear-gradient(160deg, #0F1B3D, #0a1128)",
                      }
                    : undefined
                }
              >
                {plan.featured && (
                  <>
                    <div
                      className="pointer-events-none absolute left-1/2 top-[-80px] size-[300px] -translate-x-1/2 rounded-full blur-[60px]"
                      style={{ backgroundColor: "rgba(37, 99, 235, 0.08)" }}
                      aria-hidden
                    />
                    <div className="absolute left-1/2 top-[-1px] z-10 -translate-x-1/2 whitespace-nowrap rounded-b-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                      ⭐ {plan.badge ?? t("pricing.featuredFallback")}
                    </div>
                  </>
                )}

                <div className={cn("relative z-[1] flex flex-1 flex-col", plan.featured && "pt-4")}>
                  <p
                    className={cn(
                      "mb-3 text-[13px] font-medium uppercase tracking-[0.12em]",
                      plan.featured ? "text-[#93C5FD]" : "text-[rgba(255,255,255,0.4)]"
                    )}
                  >
                    {plan.name}
                  </p>

                  <div className="flex flex-wrap items-end gap-1">
                    <span
                      className={cn(
                        "font-heading text-[44px] font-extrabold leading-none text-white lg:text-[clamp(40px,5vw,56px)]",
                        plan.featured && "text-[#2563EB]"
                      )}
                    >
                      {plan.price}
                    </span>
                    {plan.id !== "enterprise" && plan.currency ? (
                      <span className="pb-2 font-heading text-2xl font-semibold text-white">{plan.currency}</span>
                    ) : null}
                    <span className="pb-2 text-sm font-normal text-[rgba(255,255,255,0.35)]">{plan.period}</span>
                  </div>

                  <p className="mt-3 min-h-[60px] text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.4)]">
                    {plan.description}
                  </p>

                  <div
                    className={cn(
                      "my-6 h-px w-full",
                      plan.featured ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(255,255,255,0.06)]"
                    )}
                  />

                  <ul className="mb-6 flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon included />
                        <span className="text-sm font-normal leading-snug text-[rgba(255,255,255,0.6)]">
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon included={false} />
                        <span className="text-sm font-normal leading-snug text-[rgba(255,255,255,0.25)] line-through">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto w-full">
                    {plan.featured ? (
                      <Button
                        type="button"
                        variant="primary"
                        className="h-auto w-full !rounded-xl py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(37,99,235,0.3)] hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)]"
                        onClick={() => router.push(`${ROUTES.kontakt}?plan=${plan.id}`)}
                      >
                        {plan.cta}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-auto w-full !rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] py-3.5 text-[15px] font-medium text-white hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.15)] hover:!translate-y-0"
                        onClick={() => router.push(`${ROUTES.kontakt}?plan=${plan.id}`)}
                      >
                        {plan.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[rgba(255,255,255,0.4)]"
        >
          {guarantees.map((g, i) => (
            <div key={g.text} className="flex flex-wrap items-center gap-2">
              {i > 0 ? (
                <span className="hidden text-[rgba(255,255,255,0.15)] sm:inline" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="font-normal">{g.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
