"use client";

import { motion } from "framer-motion";
import { Clock, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useInView } from "react-intersection-observer";

import { ContactMailMissingNotice } from "@/components/forms/ContactMailMissingNotice";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fetchContactMailReady, submitContactMail } from "@/lib/client/submit-contact-mail";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const CTA_SERVICE_OPTIONS = [
  { value: "meta-ads", labelKey: "contactCta.optMeta" as const },
  { value: "google-ads", labelKey: "contactCta.optGoogle" as const },
  { value: "tiktok-ads", labelKey: "contactCta.optTiktok" as const },
  { value: "webbdesign", labelKey: "contactCta.optWeb" as const },
  { value: "complet", labelKey: "contactCta.optBundle" as const },
  { value: "osaker", labelKey: "contactCta.optUnsure" as const },
] as const;

const inputClass =
  "w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[18px] py-3.5 text-sm font-normal text-white outline-none transition-[border-color,background-color] duration-200 placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(37,99,235,0.5)] focus:bg-[rgba(37,99,235,0.04)]";

/** Native select needs solid bg + color-scheme or it flashes white (Chrome/Win). */
const selectFieldClass = cn(
  inputClass,
  "!bg-[#0F1629] hover:!bg-[#121a2e] focus:!bg-[#0F1629] focus-visible:!bg-[#0F1629] active:!bg-[#0F1629] [color-scheme:dark]",
  "[&>option]:bg-[#0F1629] [&>option]:text-white"
);

export type ContactCTAProps = {
  /** Anchor for in-page links (e.g. #kontakt). Default: contact */
  anchorId?: string;
  headingLine1?: string;
  headingAccent?: string;
  description?: string;
  /** Pre-select service dropdown (option value) */
  defaultService?: string;
};

function ContactCTAForm({
  inView,
  defaultService,
  t,
}: {
  inView: boolean;
  defaultService?: string;
  t: ReturnType<typeof useLocale>["t"];
}) {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService ?? "",
    message: "",
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((s) => ({ ...s, service: defaultService }));
    }
  }, [defaultService]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const el = e.currentTarget;
    if (!el.reportValidity()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    const result = await submitContactMail(
      "contactCta",
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      honeypot
    );
    setSubmitting(false);
    if (result.ok) setSucceeded(true);
    else setSubmitError(t("contactCta.submitFailed"));
  };


  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
      className="scroll-mt-24"
    >
      {succeeded ? (
        <div className="flex flex-col items-center py-8 text-center">
          <span className="text-5xl text-[#22C55E]" aria-hidden>
            ✓
          </span>
          <p className="mt-4 font-heading text-2xl font-bold text-white">{t("contactCta.successTitle")}</p>
          <p className="mt-2 text-[15px] text-[rgba(255,255,255,0.5)]">{t("contactCta.successP1")}</p>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.35)]">{t("contactCta.successP2")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="pointer-events-none absolute left-[-9999px] h-px w-px opacity-0"
          />
          {submitError ? (
            <div className="rounded-lg bg-[rgba(239,68,68,0.08)] px-3 py-2 text-sm text-[#FCA5A5]" role="alert">
              {submitError}
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              required
              type="text"
              name="name"
              placeholder={t("contactCta.namePh")}
              className={inputClass}
              value={formData.name}
              onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Telefon *"
              className={inputClass}
              value={formData.phone}
              onChange={(e) => setFormData((s) => ({ ...s, phone: e.target.value }))}
            />
          </div>
          <input
            required
            type="email"
            name="email"
            placeholder={t("contactCta.emailPh")}
            className={inputClass}
            value={formData.email}
            onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
          />
          <select
            required
            name="service"
            className={cn(
              selectFieldClass,
              "cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 text-[rgba(255,255,255,0.88)]"
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            }}
            value={formData.service}
            onChange={(e) => setFormData((s) => ({ ...s, service: e.target.value }))}
          >
            <option value="" disabled>
              {t("contactCta.servicePh")}
            </option>
            {CTA_SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {t(o.labelKey)}
              </option>
            ))}
          </select>
          <textarea
            required
            name="message"
            rows={4}
            placeholder={t("contactCta.msgPh")}
            className={cn(inputClass, "min-h-[100px] resize-none")}
            value={formData.message}
            onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
          />
          <Button
            type="submit"
            disabled={submitting}
            variant="primary"
            className="h-auto w-full !rounded-xl py-4 text-[15px] font-semibold shadow-[0_12px_32px_rgba(37,99,235,0.3)] hover:-translate-y-px hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? t("contactCta.sending") : t("contactCta.submit")}
          </Button>
          <p className="text-center text-xs text-[rgba(255,255,255,0.2)]">{t("contactCta.privacy")}</p>
        </form>
      )}
    </motion.div>
  );
}

export default function ContactCTA({
  anchorId = "contact",
  headingLine1: headingLine1Prop,
  headingAccent: headingAccentProp,
  description: descriptionProp,
  defaultService,
}: ContactCTAProps) {
  const { t } = useLocale();
  const headingLine1 = headingLine1Prop ?? t("contactCta.h1");
  const headingAccent = headingAccentProp ?? t("contactCta.h2");
  const description = descriptionProp ?? t("contactCta.desc");
  const benefits = [
    { icon: Clock, key: "b1", text: t("contactCta.b1") },
    { icon: Shield, key: "b2", text: t("contactCta.b2") },
    { icon: TrendingUp, key: "b3", text: t("contactCta.b3") },
  ] as const;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const [mailReady, setMailReady] = useState<boolean | null>(null);

  useEffect(() => {
    fetchContactMailReady().then(setMailReady);
  }, []);

  const showSkeleton = mailReady === null;
  return (
    <section
      id={anchorId}
      className="scroll-mt-24 bg-[var(--bg-primary)] px-[5%] py-20 md:py-[100px] lg:px-[6%]"
      aria-labelledby="contact-cta-heading"
    >
      <div ref={ref} className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-[rgba(37,99,235,0.2)] p-8 md:p-16"
          style={{
            background: "linear-gradient(160deg, #0F1B3D, #080D1A)",
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[-100px] h-[300px] w-[500px] -translate-x-1/2 rounded-full blur-[80px]"
            style={{ backgroundColor: "rgba(37, 99, 235, 0.06)" }}
            aria-hidden
          />

          <div className="relative z-[1] grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              >
                <SectionLabel className="mb-3 text-[rgba(255,255,255,0.4)]">{t("contactCta.label")}</SectionLabel>
              </motion.div>
              <motion.h2
                id="contact-cta-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="mb-4 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-tight text-white"
              >
                <span className="block">{headingLine1}</span>
                <span className="block text-[#2563EB] italic">{headingAccent}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                className="mb-8 text-base font-normal leading-[1.7] text-[rgba(255,255,255,0.5)]"
              >
                {description}
              </motion.p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <motion.li
                    key={b.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.2 + i * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.12)]">
                      <b.icon className="size-[15px] text-[#2563EB]" strokeWidth={2} />
                    </span>
                    <span className="text-sm text-[rgba(255,255,255,0.55)]">{b.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              className="scroll-mt-24"
            >
              {showSkeleton ? (
                <div className="min-h-[340px] animate-pulse rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0d1528]/90" aria-hidden />
              ) : mailReady ? (
                <ContactCTAForm inView={inView} defaultService={defaultService} t={t} />
              ) : (
                <ContactMailMissingNotice />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
