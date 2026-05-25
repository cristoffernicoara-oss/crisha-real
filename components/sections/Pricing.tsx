"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, type KeyboardEvent } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPricingPlans, PRICING_GUARANTEES, type PricingPlan } from "@/lib/i18n/content/pricing-plans";
import type { Locale } from "@/lib/i18n/types";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

/** Desktop layout (lg+): flip med mus via mouseenter/leave.
 *  Vi använder inte `(hover: hover)` — pekskärms-laptops (t.ex. Windows) rapporterar ofta `hover: none`
 *  trots mus, och då triggades aldrig hover-flip. */
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

function PlanCta({
  plan,
  onNavigate,
}: {
  plan: PricingPlan;
  onNavigate: (e: React.MouseEvent) => void;
}) {
  if (plan.featured) {
    return (
      <Button
        type="button"
        variant="primary"
        className="h-auto w-full !rounded-xl py-3.5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(37,99,235,0.3)] hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)]"
        onClick={onNavigate}
      >
        {plan.cta}
      </Button>
    );
  }
  return (
    <Button
      type="button"
      variant="ghost"
      className="h-auto w-full !rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] py-3.5 text-[15px] font-medium text-white hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.15)] hover:!translate-y-0"
      onClick={onNavigate}
    >
      {plan.cta}
    </Button>
  );
}

function cardShellClass(plan: PricingPlan) {
  return cn(
    "absolute inset-0 flex flex-col overflow-hidden rounded-3xl p-7 md:p-9",
    plan.featured &&
      "border border-[rgba(37,99,235,0.4)] shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_40px_80px_rgba(37,99,235,0.12),0_20px_40px_rgba(0,0,0,0.4)]",
    !plan.featured &&
      "border border-[rgba(255,255,255,0.07)] bg-[#0F1629] transition-[border-color,box-shadow] duration-300 group-hover/card:border-[rgba(37,99,235,0.3)] group-hover/card:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
  );
}

const FLIP_HINT: Record<Locale, string> = {
  sv: "Hovra eller tryck för mer om erbjudandet",
  en: "Hover or tap for more on what we offer",
};

/** “Från” — samma typografi som period ( /mån ). Endast Starter & Growth. */
const FROM_PRICE_PREFIX: Record<Locale, string> = {
  sv: "Fr.",
  en: "From",
};

function showFromPriceLabel(planId: string) {
  return planId === "starter" || planId === "growth";
}

export default function Pricing() {
  const { locale, t } = useLocale();
  const plans = getPricingPlans(locale);
  const guarantees = PRICING_GUARANTEES[locale];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const router = useRouter();
  const isLg = useIsLg();
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [touchFlip, setTouchFlip] = useState<Record<string, boolean>>({});

  const isFlipped = (planId: string) => (isLg ? hoverId === planId : !!touchFlip[planId]);

  const goContact = (planId: string) => {
    router.push(`${ROUTES.kontakt}?plan=${planId}`);
  };

  const handleCardPointer = (planId: string) => {
    if (isLg) return;
    setTouchFlip((s) => ({ ...s, [planId]: !s[planId] }));
  };

  const handleCardKeyDown = (e: KeyboardEvent<HTMLElement>, planId: string) => {
    if (isLg) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardPointer(planId);
    }
  };

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

        <div className="mx-auto grid max-w-[480px] items-start gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => {
            const flipped = isFlipped(plan.id);
            const showFrom = showFromPriceLabel(plan.id);
            return (
              <motion.article
                key={plan.id}
                // Bara opacity på den yttre noden: Framers y/scale ger transform på förälder och
                // “flat:ar” 3D — då kan sidkort se tomma ut efter flip (backface-bugg i WebKit/Blink).
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={cn(
                  // Alla kort samma stacking: z-0, vid hover ovanpå grannar så hover träffar rätt kort.
                  "group/card relative z-0 lg:min-h-[720px]",
                  isLg && "lg:hover:z-20",
                  !isLg &&
                    "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
                )}
                onMouseEnter={() => isLg && setHoverId(plan.id)}
                onMouseLeave={() => isLg && setHoverId(null)}
                onClick={() => handleCardPointer(plan.id)}
                onKeyDown={(e) => handleCardKeyDown(e, plan.id)}
                tabIndex={isLg ? undefined : 0}
                role="group"
                aria-expanded={isLg ? undefined : flipped}
                aria-label={`${plan.name}. ${FLIP_HINT[locale]}.`}
              >
                <div className="h-full min-h-0 [perspective:1200px]">
                  <div
                    className={cn(
                      "relative h-full min-h-[640px] w-full transition-transform duration-500 [transform-style:preserve-3d] lg:min-h-[700px]",
                      flipped && "[transform:rotateY(180deg)]"
                    )}
                  >
                  {/* Front */}
                  <div
                    className={cn(
                      cardShellClass(plan),
                      "[backface-visibility:hidden] [transform:translateZ(1px)]",
                      plan.featured && "pt-4"
                    )}
                    style={plan.featured ? { background: "linear-gradient(160deg, #0F1B3D, #0a1128)" } : undefined}
                    aria-hidden={flipped}
                  >
                    {plan.featured ? (
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
                    ) : null}

                    <div className={cn("relative z-[1] flex min-h-0 flex-1 flex-col", plan.featured && "pt-4")}>
                      <p
                        className={cn(
                          "text-[13px] font-medium uppercase tracking-[0.12em]",
                          plan.featured ? "text-[#93C5FD]" : "text-[rgba(255,255,255,0.4)]",
                          showFrom ? "mb-1" : "mb-3"
                        )}
                      >
                        {plan.name}
                      </p>
                      {showFrom ? (
                        <p className="mb-3 text-sm font-normal text-[rgba(255,255,255,0.35)]">
                          {FROM_PRICE_PREFIX[locale]}
                        </p>
                      ) : null}

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

                      <p className="mt-3 min-h-[48px] text-sm font-normal leading-[1.65] text-[rgba(255,255,255,0.4)] md:min-h-[60px]">
                        {plan.description}
                      </p>

                      <div
                        className={cn(
                          "my-6 h-px w-full",
                          plan.featured ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(255,255,255,0.06)]"
                        )}
                      />

                      <ul className="mb-4 flex flex-col gap-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckIcon included />
                            <span className="text-sm font-normal leading-snug text-[rgba(255,255,255,0.6)]">{f}</span>
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

                      <p className="mb-3 text-center text-[11px] leading-snug text-[rgba(255,255,255,0.28)]">
                        {FLIP_HINT[locale]}
                      </p>

                      <div className="mt-auto w-full">
                        <PlanCta plan={plan} onNavigate={(e) => { e.stopPropagation(); goContact(plan.id); }} />
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={cn(
                      cardShellClass(plan),
                      "[backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)]"
                    )}
                    style={plan.featured ? { background: "linear-gradient(160deg, #0F1B3D, #0a1128)" } : undefined}
                    aria-hidden={!flipped}
                  >
                    <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
                      <p
                        className={cn(
                          "text-[13px] font-medium uppercase tracking-[0.12em]",
                          plan.featured ? "text-[#93C5FD]" : "text-[rgba(255,255,255,0.4)]",
                          showFrom ? "mb-1" : "mb-2"
                        )}
                      >
                        {plan.name}
                      </p>
                      {showFrom ? (
                        <p className="mb-2 text-sm font-normal text-[rgba(255,255,255,0.35)]">
                          {FROM_PRICE_PREFIX[locale]}
                        </p>
                      ) : null}
                      <h3 className="font-heading text-xl font-bold text-white md:text-2xl">{plan.flipTitle}</h3>
                      <div
                        className={cn(
                          "my-5 h-px w-full",
                          plan.featured ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(255,255,255,0.06)]"
                        )}
                      />
                      <ul className="mb-6 flex flex-1 flex-col gap-3 overflow-y-auto">
                        {plan.flipBullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <CheckIcon included />
                            <span className="text-sm font-normal leading-relaxed text-[rgba(255,255,255,0.65)]">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto w-full">
                        <PlanCta plan={plan} onNavigate={(e) => { e.stopPropagation(); goContact(plan.id); }} />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
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
