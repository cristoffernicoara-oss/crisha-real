"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, type FormEvent } from "react";

import { ContactMailMissingNotice } from "@/components/forms/ContactMailMissingNotice";
import { FormDeliverToNote } from "@/components/forms/FormDeliverToNote";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { consumeCariereApplyPosition } from "@/lib/cariere-apply";
import { fetchContactMailReady, submitContactMail } from "@/lib/client/submit-contact-mail";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const POSITION_OPTIONS = [
  "Meta Ads-specialist (heltid)",
  "Google Ads-specialist (heltid)",
  "Webbdesigner / utvecklare (heltid)",
  "Praktik: performance marketing",
  "Praktik: webbdesign och CRO",
  "Praktik: data och strategi",
  "Annan roll (beskriv nedan)",
] as const;

const CAREERS_FORM_DELIVER_HINT =
  "Ansökningar levereras till {email} via sajten och Resend (avsändaren måste vara verifierad i Resend).";

const inputClass =
  "w-full rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm font-normal text-white outline-none transition-all duration-200 placeholder:text-[rgba(255,255,255,0.2)] focus:border-[rgba(37,99,235,0.5)] focus:bg-[rgba(37,99,235,0.03)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]";

const inputErrorClass =
  "border-[rgba(239,68,68,0.5)] bg-[rgba(239,68,68,0.03)] focus:border-[rgba(239,68,68,0.6)]";

const selectChevronBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")";

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

function CariereFormFields({ inView }: { inView: boolean }) {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    why: "",
    experience: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const preset = consumeCariereApplyPosition();
    if (!preset) return;
    const valid = POSITION_OPTIONS.some((o) => o === preset);
    if (valid) setForm((s) => ({ ...s, position: preset }));
  }, []);

  const setField = (key: keyof typeof form, value: string) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "Obligatoriskt.";
    if (!form.lastName.trim()) next.lastName = "Obligatoriskt.";
    if (!form.email.trim()) next.email = "Obligatoriskt.";
    else if (!validateEmail(form.email)) next.email = "Ogiltig e-postadress.";
    if (!form.position) next.position = "Välj en tjänst.";
    if (!form.why.trim()) next.why = "Fyll i detta fält.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitError(null);
    setSubmitting(true);
    const result = await submitContactMail(
      "careers",
      {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        position: form.position,
        portfolio: form.portfolio,
        why: form.why,
        experience: form.experience,
      },
      honeypot
    );
    setSubmitting(false);
    if (result.ok) setSucceeded(true);
    else setSubmitError(`Ansökan kunde inte skickas. Försök igen om en stund eller mejla oss direkt på ${CONTACT.email}.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-6 md:p-10"
    >
      <AnimatePresence mode="wait">
        {succeeded ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-2 py-8 text-center md:py-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="mx-auto mb-6 flex size-[72px] items-center justify-center rounded-full border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.1)]"
            >
              <CheckCircle className="size-9 text-[#22C55E]" strokeWidth={2} />
            </motion.div>
            <h3 className="mb-3 font-heading text-[22px] font-bold text-white">Ansökan mottagen! 🙌</h3>
            <p className="text-[15px] font-normal text-[rgba(255,255,255,0.5)]">
              Vi går igenom din profil och kontaktar dig inom 48 timmar om det finns en träff. Tack för ditt intresse!
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-3"
          >
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
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Förnamn *"
                  value={form.firstName}
                  onChange={(e) => setField("firstName", e.target.value)}
                  className={cn(inputClass, errors.firstName && inputErrorClass)}
                />
                {errors.firstName ? <p className="mt-1 text-xs text-[#EF4444]">{errors.firstName}</p> : null}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Efternamn *"
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
                  name="email"
                  placeholder="E-post *"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={cn(inputClass, errors.email && inputErrorClass)}
                />
                {errors.email ? <p className="mt-1 text-xs text-[#EF4444]">{errors.email}</p> : null}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <select
                name="position"
                value={form.position}
                onChange={(e) => setField("position", e.target.value)}
                className={cn(selectFieldClass, errors.position && inputErrorClass)}
                style={{ backgroundImage: selectChevronBg }}
              >
                <option value="" disabled>
                  Tjänst du söker *
                </option>
                {POSITION_OPTIONS.map((o) => (
                  <option key={o} value={o} className="bg-[#0F1629]">
                    {o}
                  </option>
                ))}
              </select>
              {errors.position ? <p className="mt-1 text-xs text-[#EF4444]">{errors.position}</p> : null}
            </div>

            <input
              type="url"
              name="portfolio"
              placeholder="LinkedIn eller portfölj (rekommenderas)"
              value={form.portfolio}
              onChange={(e) => setField("portfolio", e.target.value)}
              className={inputClass}
            />

            <div>
              <textarea
                name="why"
                rows={5}
                placeholder="Varför vill du jobba på Crisha Marketing och vad kan du bidra med? *"
                value={form.why}
                onChange={(e) => setField("why", e.target.value)}
                className={cn(inputClass, "min-h-[120px] resize-none", errors.why && inputErrorClass)}
              />
              {errors.why ? <p className="mt-1 text-xs text-[#EF4444]">{errors.why}</p> : null}
            </div>

            <textarea
              name="experience"
              rows={4}
              placeholder="Kort om relevant erfarenhet eller projekt du drivit..."
              value={form.experience}
              onChange={(e) => setField("experience", e.target.value)}
              className={cn(inputClass, "min-h-[100px] resize-none")}
            />

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border-0 bg-[#2563EB] py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden />
                  Skickar...
                </>
              ) : (
                "Skicka ansökan →"
              )}
            </button>
            <FormDeliverToNote hint={CAREERS_FORM_DELIVER_HINT} className="mt-2" />
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CariereForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const [mailReady, setMailReady] = useState<boolean | null>(null);

  useEffect(() => {
    fetchContactMailReady().then(setMailReady);
  }, []);

  const showSkeleton = mailReady === null;

  return (
    <section
      id="aplica"
      ref={ref}
      className="scroll-mt-24 border-t border-[rgba(255,255,255,0.06)] bg-[#060810] px-[5%] py-20 md:px-[6%] md:py-[100px]"
      aria-labelledby="cariere-form-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <SectionLabel className="mb-3 justify-center text-[rgba(255,255,255,0.35)]">ANSÖK NU</SectionLabel>
          <h2
            id="cariere-form-heading"
            className="font-heading text-[clamp(28px,4vw,42px)] font-bold leading-tight text-white"
          >
            Första steget är<span className="text-[#2563EB] italic"> alltid det tyngsta.</span>
          </h2>
          <p className="mt-3 text-[15px] font-normal text-[rgba(255,255,255,0.4)]">
            Skicka CV och en kort presentation. Vid matchning hör vi av oss inom 48 timmar.
          </p>
        </motion.div>

        {showSkeleton ? (
          <div className="min-h-[440px] animate-pulse rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[#0F1629]/90" aria-hidden />
        ) : mailReady ? (
          <CariereFormFields inView={inView} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#0F1629] p-6 md:p-10"
          >
            <ContactMailMissingNotice />
          </motion.div>
        )}
      </div>
    </section>
  );
}
