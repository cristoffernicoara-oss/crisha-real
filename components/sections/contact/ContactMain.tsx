"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState, type FormEvent } from "react";

import {
  CONTACT_BUDGET_VALUES,
  CONTACT_HEAR_VALUES,
  CONTACT_SERVICE_VALUES,
} from "@/lib/i18n/content/contact-options";
import { useLocale } from "@/lib/i18n/locale-context";
import { CONTACT } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

function slugToCamelKey(slug: string) {
  return slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

const inputClass =
  "w-full rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm font-normal text-white outline-none transition-all duration-200 placeholder:text-[rgba(255,255,255,0.2)] focus:border-[rgba(37,99,235,0.5)] focus:bg-[rgba(37,99,235,0.03)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]";

const inputErrorClass =
  "border-[rgba(239,68,68,0.5)] bg-[rgba(239,68,68,0.03)] focus:border-[rgba(239,68,68,0.6)] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]";

const selectChevronBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")";

/** Solid dark surface; native select ignores faint rgba bg on some browsers (white flash). */
const selectFieldClass = cn(
  "w-full rounded-[10px] border border-[rgba(255,255,255,0.1)] px-4 py-3 pr-10 text-sm font-normal text-[rgba(255,255,255,0.88)] outline-none transition-[border-color,box-shadow,background-color] duration-200 [color-scheme:dark]",
  "!bg-[#0F1629] hover:!bg-[#121a2e] focus:!bg-[#0F1629] focus-visible:!bg-[#0F1629] active:!bg-[#0F1629]",
  "cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
  "focus:border-[rgba(37,99,235,0.55)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]",
  "[&>option]:bg-[#0F1629] [&>option]:text-white"
);

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactMain() {
  const { t } = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    hearAbout: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setField = (key: keyof typeof form, value: string) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  const runValidation = () => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = t("contactMain.errFn");
    if (!form.lastName.trim()) next.lastName = t("contactMain.errLn");
    if (!form.email.trim()) next.email = t("contactMain.errEmail");
    else if (!validateEmail(form.email)) next.email = t("contactMain.errEmailFmt");
    if (!form.phone.trim()) next.phone = t("contactMain.errPhone");
    else if (form.phone.replace(/\s/g, "").length < 10) next.phone = t("contactMain.errPhoneLen");
    if (!form.service) next.service = t("contactMain.errService");
    if (!form.budget) next.budget = t("contactMain.errBudget");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!runValidation()) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <section ref={ref} className="bg-[#060810] px-[5%] pb-20 pt-12 md:px-[6%] md:pb-[120px] md:pt-[60px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-4 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-6 transition-colors duration-200 hover:border-[rgba(37,99,235,0.3)]">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)]">
              <Mail className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
            </span>
            <div>
              <p className="mb-1 font-heading text-[14px] font-semibold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.4)]">
                EMAIL
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-heading text-[17px] font-bold text-white no-underline hover:text-[#93C5FD]"
              >
                {CONTACT.email}
              </a>
              <p className="mt-0.5 text-[13px] font-normal text-[rgba(255,255,255,0.35)]">
                {t("contactMain.emailReply")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-6 transition-colors duration-200 hover:border-[rgba(37,99,235,0.3)]">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)]">
              <MapPin className="size-5 text-[#2563EB]" strokeWidth={2} aria-hidden />
            </span>
            <div>
              <p className="mb-1 font-heading text-[14px] font-semibold uppercase tracking-[0.08em] text-[rgba(255,255,255,0.4)]">
                {t("contactMain.placeCaption")}
              </p>
              <p className="font-heading text-[17px] font-bold text-white">{CONTACT.addressLine}</p>
              <p className="mt-0.5 text-[13px] font-normal text-[rgba(255,255,255,0.35)]">
                {t("contactMain.workEu")}
              </p>
            </div>
          </div>

          <div className="mt-2">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("contactMain.cofounder")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] font-heading text-base font-extrabold text-white">
                  SH
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm font-semibold text-white">{CONTACT.shang.name}</p>
                  <p className="text-xs font-normal text-[rgba(255,255,255,0.35)]">{t("contactMain.shangRole")}</p>
                  <a
                    href={CONTACT.shang.telHref}
                    className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-[#93C5FD] no-underline hover:text-white"
                  >
                    <Phone className="size-3 shrink-0" strokeWidth={2} aria-hidden />
                    {CONTACT.shang.telDisplay}
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#0F1629] p-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] font-heading text-base font-extrabold text-white">
                  CR
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm font-semibold text-white">{CONTACT.cristoffer.name}</p>
                  <p className="text-xs font-normal text-[rgba(255,255,255,0.35)]">{t("contactMain.cristofferRole")}</p>
                  <a
                    href={CONTACT.cristoffer.telHref}
                    className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-[#93C5FD] no-underline hover:text-white"
                  >
                    <Phone className="size-3 shrink-0" strokeWidth={2} aria-hidden />
                    {CONTACT.cristoffer.telDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-3 rounded-[14px] border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.06)] p-5">
            <Clock className="size-5 shrink-0 text-[#2563EB]" strokeWidth={2} aria-hidden />
            <div>
              <p className="font-heading text-[15px] font-semibold text-white">{t("contactMain.responseTitle")}</p>
              <p className="mt-0.5 text-[13px] font-normal text-[rgba(255,255,255,0.4)]">
                {t("contactMain.responseBody")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-6 md:p-10"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-2 py-6 text-center md:py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="mx-auto mb-6 flex size-[72px] items-center justify-center rounded-full border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.1)]"
                >
                  <CheckCircle className="size-9 text-[#22C55E]" strokeWidth={2} aria-hidden />
                </motion.div>
                <h3 className="mb-3 font-heading text-[22px] font-bold text-white">{t("contactMain.successTitle")}</h3>
                <p className="text-[15px] font-normal text-[rgba(255,255,255,0.5)]">{t("contactMain.successP1")}</p>
                <p className="mt-2 text-[13px] font-normal text-[rgba(255,255,255,0.3)]">
                  {t("contactMain.successP2")}
                </p>
                <Link
                  href={ROUTES.fallstudier}
                  className="mt-6 inline-block rounded-full border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:border-[rgba(37,99,235,0.4)] hover:text-[#93C5FD]"
                >
                  {t("contactMain.successCta")}
                </Link>
                <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.2)]">{t("contactMain.privacy")}</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="mb-1.5 font-heading text-2xl font-bold text-white">{t("contactMain.formTitle")}</h2>
                <p className="mb-7 text-sm font-normal text-[rgba(255,255,255,0.4)]">{t("contactMain.formLead")}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        placeholder={t("contactMain.fnPh")}
                        value={form.firstName}
                        onChange={(e) => setField("firstName", e.target.value)}
                        className={cn(inputClass, errors.firstName && inputErrorClass)}
                        aria-invalid={!!errors.firstName}
                      />
                      {errors.firstName ? <p className="mt-1 text-xs text-[#EF4444]">{errors.firstName}</p> : null}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={t("contactMain.lnPh")}
                        value={form.lastName}
                        onChange={(e) => setField("lastName", e.target.value)}
                        className={cn(inputClass, errors.lastName && inputErrorClass)}
                      />
                      {errors.lastName ? <p className="mt-1 text-xs text-[#EF4444]">{errors.lastName}</p> : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        type="email"
                        placeholder={t("contactCta.emailPh")}
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        className={cn(inputClass, errors.email && inputErrorClass)}
                      />
                      {errors.email ? <p className="mt-1 text-xs text-[#EF4444]">{errors.email}</p> : null}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Telefon *"
                        value={form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        className={cn(inputClass, errors.phone && inputErrorClass)}
                      />
                      {errors.phone ? <p className="mt-1 text-xs text-[#EF4444]">{errors.phone}</p> : null}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder={t("contactMain.companyPh")}
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    className={inputClass}
                  />

                  <div>
                    <select
                      value={form.service}
                      onChange={(e) => setField("service", e.target.value)}
                      className={cn(selectFieldClass, errors.service && inputErrorClass)}
                      style={{ backgroundImage: selectChevronBg }}
                    >
                      <option value="" disabled>
                        {t("contactCta.servicePh")}
                      </option>
                      {CONTACT_SERVICE_VALUES.map((v) => (
                        <option key={v} value={v} className="bg-[#0F1629]">
                          {t(`contactMain.service.${slugToCamelKey(v)}`)}
                        </option>
                      ))}
                    </select>
                    {errors.service ? <p className="mt-1 text-xs text-[#EF4444]">{errors.service}</p> : null}
                  </div>

                  <div>
                    <select
                      value={form.budget}
                      onChange={(e) => setField("budget", e.target.value)}
                      className={cn(selectFieldClass, errors.budget && inputErrorClass)}
                      style={{ backgroundImage: selectChevronBg }}
                    >
                      <option value="" disabled>
                        {t("contactMain.budgetPh")}
                      </option>
                      {CONTACT_BUDGET_VALUES.map((v) => (
                        <option key={v} value={v} className="bg-[#0F1629]">
                          {t(`contactMain.budget.${v}`)}
                        </option>
                      ))}
                    </select>
                    {errors.budget ? <p className="mt-1 text-xs text-[#EF4444]">{errors.budget}</p> : null}
                  </div>

                  <textarea
                    rows={4}
                    placeholder={t("contactMain.msgPh")}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    className={cn(inputClass, "min-h-[100px] resize-none")}
                  />

                  <select
                    value={form.hearAbout}
                    onChange={(e) => setField("hearAbout", e.target.value)}
                    className={selectFieldClass}
                    style={{ backgroundImage: selectChevronBg }}
                  >
                    <option value="">{t("contactMain.hearPh")}</option>
                    {CONTACT_HEAR_VALUES.map((v) => (
                      <option key={v} value={v} className="bg-[#0F1629]">
                        {t(`contactMain.hear.${v}`)}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border-0 bg-[#2563EB] py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="size-5 animate-spin" aria-hidden />
                        {t("contactMain.sending")}
                      </>
                    ) : (
                      t("contactMain.submit")
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-[rgba(255,255,255,0.2)]">{t("contactMain.privacy")}</p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
