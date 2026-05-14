"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { CONTACT } from "@/lib/constants";
import { clearCookieConsentPreference } from "@/lib/cookie-consent";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const navigateLinks = [
  { key: "footer.home", href: ROUTES.home },
  { key: "footer.about", href: ROUTES.omOss },
  { key: "footer.servicesLink", href: ROUTES.tjanster },
  { key: "footer.caseStudies", href: ROUTES.fallstudier },
  { key: "footer.blog", href: ROUTES.blogg },
  { key: "footer.contact", href: ROUTES.kontakt },
] as const;

const serviceLinks = [
  { label: "Meta Ads", href: ROUTES.tjansterMetaAds },
  { label: "Google Ads", href: ROUTES.tjansterGoogleAds },
  { label: "TikTok Ads", href: ROUTES.tjansterTiktokAds },
  { labelKey: "footer.webDesign" as const, href: ROUTES.tjansterWebbdesign },
  { labelKey: "footer.careers" as const, href: ROUTES.karriar },
] as const;

const social = [
  { href: "https://instagram.com", label: "Instagram", Icon: Camera },
  { href: "https://facebook.com", label: "Facebook", Icon: MessageCircle },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Briefcase },
  { href: "https://youtube.com", label: "YouTube", Icon: PlayCircle },
] as const;

const legal = [
  { key: "footer.privacy", href: "/integritetspolicy" },
  { key: "footer.terms", href: "/anvandarvillkor" },
  { key: "footer.cookies", href: "/cookies" },
] as const;

function Footer() {
  const { t } = useLocale();
  const year = 2026;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <footer
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.06)] bg-[#030508]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-[5%] pb-12 pt-12 md:px-[6%] md:pb-12 md:pt-16 lg:px-[6%]"
      >
        <div className="grid grid-cols-2 gap-x-12 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link href={ROUTES.home} className="inline-flex items-center overflow-visible">
              <span className="inline-block origin-left scale-[2.48] sm:scale-[2.85]">
                <Image
                  src="/crisha-marketing-logo.png"
                  alt="Crisha Marketing"
                  width={1024}
                  height={682}
                  className="h-16 w-auto max-w-[min(480px,94vw)] object-contain object-left brightness-0 invert"
                />
              </span>
            </Link>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[rgba(255,255,255,0.35)]">
              {t("footer.tagline")}
            </p>
            <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-[rgba(255,255,255,0.28)]">
              {t("footer.founded")} {CONTACT.addressLine} 🇸🇪
            </p>
            <p className="mt-2 text-xs text-[rgba(255,255,255,0.35)]">{t("footer.rating")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)]",
                    "text-[rgba(255,255,255,0.4)] transition-all duration-200",
                    "hover:border-[rgba(37,99,235,0.3)] hover:bg-[rgba(37,99,235,0.15)] hover:text-[#2563EB]"
                  )}
                >
                  <Icon className="size-4" strokeWidth={2} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("footer.navigate")}
            </p>
            <nav className="flex flex-col gap-2.5" aria-label={t("footer.navigate")}>
              {navigateLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 hover:text-white"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("footer.servicesCol")}
            </p>
            <nav className="flex flex-col gap-2.5" aria-label={t("footer.servicesCol")}>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 hover:text-white"
                >
                  {"labelKey" in item ? t(item.labelKey) : item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
              {t("footer.contactCol")}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-3.5 shrink-0 text-[#2563EB]" strokeWidth={2} />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-[rgba(255,255,255,0.4)] transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-3.5 shrink-0 text-[#2563EB]" strokeWidth={2} />
                <div className="min-w-0 flex flex-col gap-1.5 text-sm text-[rgba(255,255,255,0.4)]">
                  <a
                    href={CONTACT.cristoffer.telHref}
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    Cristoffer · {CONTACT.cristoffer.telDisplay}
                  </a>
                  <a href={CONTACT.shang.telHref} className="whitespace-nowrap transition-colors hover:text-white">
                    Shang · {CONTACT.shang.telDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-[#2563EB]" strokeWidth={2} />
                <span className="text-sm text-[rgba(255,255,255,0.4)]">{CONTACT.addressLine}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1200px] border-t border-[rgba(255,255,255,0.05)]" />

      <div className="mx-auto flex max-w-[1200px] flex-col flex-wrap items-center justify-between gap-3 px-[5%] py-5 md:flex-row md:px-[6%]">
        <p className="text-center text-xs text-[rgba(255,255,255,0.2)] md:text-left">
          © {year} Crisha Marketing AB. {t("footer.copyright")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-[rgba(255,255,255,0.2)] no-underline transition-colors hover:text-[rgba(255,255,255,0.4)]"
            >
              {t(item.key)}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => clearCookieConsentPreference()}
            className="cursor-pointer border-0 bg-transparent p-0 text-xs text-[rgba(255,255,255,0.2)] no-underline transition-colors hover:text-[rgba(255,255,255,0.4)]"
          >
            {t("footer.cookieSettings")}
          </button>
        </div>
      </div>

      <p className="px-[5%] pb-3 text-center text-[10px] text-[rgba(255,255,255,0.15)] md:px-[6%]">
        {t("footer.bottomLine")}
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="pointer-events-none select-none pb-[max(2rem,env(safe-area-inset-bottom,0px))] text-center font-heading text-[60px] font-extrabold leading-none tracking-[-0.02em] text-[rgba(255,255,255,0.02)] md:text-[clamp(60px,12vw,140px)]"
        aria-hidden
      >
        CRISHA
      </motion.p>
    </footer>
  );
}

export { Footer };
export default Footer;
