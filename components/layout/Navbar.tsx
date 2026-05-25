"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Layers, Menu, Star, X, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import { ServiceBrandMark, type ServiceBrand } from "@/components/icons/ServiceBrandMark";
import { useLocale } from "@/lib/i18n/locale-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

type NavServiceItem =
  | { name: string; href: string; color: string; brand: ServiceBrand }
  | { name: string; href: string; color: string; icon: LucideIcon };

/** Desktop + mobile: tjänster i dropdown (ordning = meny ordning). */
const navServices: NavServiceItem[] = [
  {
    name: "Meta Ads",
    href: ROUTES.tjansterMetaAds,
    brand: "facebook",
    color: "#2563EB",
  },
  {
    name: "Google Ads",
    href: ROUTES.tjansterGoogleAds,
    brand: "google",
    color: "#0EA5E9",
  },
  {
    name: "TikTok Ads",
    href: ROUTES.tjansterTiktokAds,
    brand: "tiktok",
    color: "#EC4899",
  },
  {
    name: "Web Design",
    href: ROUTES.tjansterWebbdesign,
    icon: Layers,
    color: "#8B5CF6",
  },
  {
    name: "Full funnel",
    href: ROUTES.tjansterFullFunnel,
    icon: Star,
    color: "#06B6D4",
  },
];

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function NavTextLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative py-2 text-sm font-medium text-[rgba(255,255,255,0.55)] no-underline transition-colors duration-200 hover:text-white",
        active && "text-white"
      )}
    >
      {children}
      {active ? (
        <span
          className="absolute bottom-[-4px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#2563EB]"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

function Navbar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const tjansterWrapRef = useRef<HTMLDivElement>(null);

  const servicesNavActive = pathname.startsWith("/tjanster");
  const rezultateActive = pathname === ROUTES.fallstudier;
  const despreActive = pathname === ROUTES.omOss;
  const blogActive = pathname === ROUTES.blogg || pathname.startsWith(`${ROUTES.blogg}/`);
  const contactActive = pathname === ROUTES.kontakt;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const closeOnOutside = useCallback((e: MouseEvent) => {
    if (tjansterWrapRef.current?.contains(e.target as Node)) return;
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [servicesOpen, closeOnOutside]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const goContact = () => {
    setServicesOpen(false);
    setMobileOpen(false);
    router.push(ROUTES.kontakt);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[100] flex flex-col overflow-visible pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-[rgba(255,255,255,0.08)] bg-[rgba(6,8,16,0.95)] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "border-b border-[rgba(255,255,255,0.06)] bg-[rgba(6,8,16,0.7)] backdrop-blur-[16px]"
        )}
      >
        <div className="flex h-16 w-full items-center justify-between px-[5%] sm:px-[6%]">
        <Link
          href={ROUTES.home}
          className="relative z-[100] flex shrink-0 items-center overflow-visible no-underline"
        >
          <span className="inline-block origin-left scale-[2.15] max-[420px]:scale-[1.68] sm:scale-[2.62]">
            <Image
              src="/crisha-marketing-logo.png"
              alt="Crisha Marketing"
              width={1024}
              height={682}
              priority
              className="h-14 w-auto max-w-[min(400px,62vw)] object-contain object-left brightness-0 invert"
            />
          </span>
          <span className="sr-only">{t("nav.logoSr")}</span>
        </Link>

        <nav className="absolute left-1/2 z-[103] hidden -translate-x-1/2 md:flex" aria-label={t("nav.ariaMain")}>
          <div className="pointer-events-auto flex items-center gap-[36px]">
            <div ref={tjansterWrapRef} className="relative z-[105]">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="tjanster-dropdown-menu"
                onClick={() => setServicesOpen((o) => !o)}
                className={cn(
                  "relative flex cursor-pointer items-center gap-1.5 border-0 bg-transparent py-2 text-sm font-medium text-[rgba(255,255,255,0.55)] transition-colors duration-200",
                  (servicesOpen || servicesNavActive) && "text-white"
                )}
              >
                {t("nav.services")}
                <ChevronDown
                  className={cn(
                    "size-[14px] shrink-0 transition-transform duration-[250ms] ease-out",
                    servicesOpen && "rotate-[-180deg]"
                  )}
                  strokeWidth={2}
                  aria-hidden
                />
                {servicesNavActive && !servicesOpen ? (
                  <span
                    className="absolute bottom-[-4px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#2563EB]"
                    aria-hidden
                  />
                ) : null}
              </button>

              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    key="tjanster-dropdown"
                    id="tjanster-dropdown-menu"
                    role="menu"
                    aria-label={t("nav.services")}
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute z-[110] min-w-[240px] -translate-x-1/2 rounded-2xl p-2",
                      "border border-[rgba(255,255,255,0.08)] bg-[#0A0D18]",
                      "shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                    )}
                    style={{ top: "calc(100% + 8px)", left: "50%" }}
                  >
                    <div className="flex flex-col gap-0.5">
                      {navServices.map((s) => {
                        const isCurrent = pathname === s.href;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className={cn(
                              "flex items-center gap-3 rounded-[10px] px-3 py-2.5 no-underline transition-colors duration-150",
                              "hover:bg-[rgba(255,255,255,0.05)]",
                              isCurrent && "bg-[rgba(37,99,235,0.08)]"
                            )}
                          >
                            <span
                              className="flex size-[34px] shrink-0 items-center justify-center rounded-lg border"
                              style={{
                                backgroundColor: hexToRgba(s.color, 0.1),
                                borderColor: hexToRgba(s.color, 0.2),
                              }}
                            >
                              {"brand" in s ? (
                                <ServiceBrandMark brand={s.brand} className="size-4 shrink-0" />
                              ) : (
                                <s.icon className="size-4 shrink-0" strokeWidth={2} style={{ color: s.color }} aria-hidden />
                              )}
                            </span>
                            <span className="font-heading text-[14px] font-semibold text-white">
                              {s.href === ROUTES.tjansterWebbdesign
                                ? t("nav.serviceWebDesign")
                                : s.href === ROUTES.tjansterFullFunnel
                                  ? t("nav.serviceFullFunnel")
                                  : s.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <NavTextLink href={ROUTES.fallstudier} active={rezultateActive} onClick={() => setServicesOpen(false)}>
              {t("nav.results")}
            </NavTextLink>
            <NavTextLink href={ROUTES.omOss} active={despreActive} onClick={() => setServicesOpen(false)}>
              {t("nav.about")}
            </NavTextLink>
            <NavTextLink href={ROUTES.blogg} active={blogActive} onClick={() => setServicesOpen(false)}>
              {t("nav.blog")}
            </NavTextLink>
            <NavTextLink href={ROUTES.kontakt} active={contactActive} onClick={() => setServicesOpen(false)}>
              {t("nav.contact")}
            </NavTextLink>
          </div>
        </nav>

        <div className="relative z-[103] flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={goContact}
            className="hidden cursor-pointer rounded-full border-0 bg-[#2563EB] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#1D4ED8] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] md:inline-flex md:whitespace-nowrap"
          >
            {t("nav.freeAudit")}
          </button>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.7)] md:hidden"
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-[18px]" strokeWidth={2} /> : <Menu className="size-[18px]" strokeWidth={2} />}
          </button>
        </div>
        </div>
      </header>

      <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[98] bg-black/50 md:hidden" style={{ top: "var(--header-offset)" }} />
          <Dialog.Content
            className="fixed bottom-0 left-0 right-0 z-[98] flex flex-col overflow-y-auto border-0 bg-[#060810] p-0 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-none outline-none md:hidden"
            style={{ top: "var(--header-offset)" }}
          >
            <Dialog.Title className="sr-only">{t("nav.mobileMenuTitle")}</Dialog.Title>
            <Dialog.Description className="sr-only">{t("nav.mobileMenuDesc")}</Dialog.Description>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-1 flex-col px-[6%] pb-10 pt-6"
            >
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(255,255,255,0.25)]">
                {t("nav.mobileServices")}
              </p>
              <div className="mb-2 flex flex-col gap-0.5">
                {navServices.map((s) => {
                  const isCurrent = pathname === s.href;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-[10px] px-3 py-2.5 no-underline transition-colors duration-150",
                        "hover:bg-[rgba(255,255,255,0.05)]",
                        isCurrent && "bg-[rgba(37,99,235,0.08)]"
                      )}
                    >
                      <span
                        className="flex size-[34px] shrink-0 items-center justify-center rounded-lg border"
                        style={{
                          backgroundColor: hexToRgba(s.color, 0.1),
                          borderColor: hexToRgba(s.color, 0.2),
                        }}
                      >
                        {"brand" in s ? (
                          <ServiceBrandMark brand={s.brand} className="size-4 shrink-0" />
                        ) : (
                          <s.icon className="size-4 shrink-0" strokeWidth={2} style={{ color: s.color }} aria-hidden />
                        )}
                      </span>
                      <span className="font-heading text-[14px] font-semibold text-white">
                        {s.href === ROUTES.tjansterWebbdesign
                          ? t("nav.serviceWebDesign")
                          : s.href === ROUTES.tjansterFullFunnel
                            ? t("nav.serviceFullFunnel")
                            : s.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="my-5 h-px bg-[rgba(255,255,255,0.06)]" />

              <Link
                href={ROUTES.fallstudier}
                className="border-b border-[rgba(255,255,255,0.04)] py-3 text-base text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.results")}
              </Link>
              <Link
                href={ROUTES.omOss}
                className="border-b border-[rgba(255,255,255,0.04)] py-3 text-base text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href={ROUTES.karriar}
                className="border-b border-[rgba(255,255,255,0.04)] py-3 text-base text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.career")}
              </Link>
              <Link
                href={ROUTES.blogg}
                className="border-b border-[rgba(255,255,255,0.04)] py-3 text-base text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.blog")}
              </Link>
              <Link
                href={ROUTES.kontakt}
                className="border-b border-[rgba(255,255,255,0.04)] py-3 text-base text-white no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              <button
                type="button"
                onClick={goContact}
                className="mt-6 w-full rounded-xl border-0 bg-[#2563EB] py-4 text-center text-base font-semibold text-white"
              >
                {t("nav.freeAudit")}
              </button>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export { Navbar };
export default Navbar;
