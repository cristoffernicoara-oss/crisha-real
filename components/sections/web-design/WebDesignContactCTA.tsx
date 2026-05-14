"use client";

import ContactCTA from "@/components/sections/ContactCTA";
import { getWebDesignContactCtaUi } from "@/lib/i18n/content/services/web-design";
import { useLocale } from "@/lib/i18n/locale-context";
import { useMemo } from "react";

export default function WebDesignContactCTA() {
  const { locale } = useLocale();
  const copy = useMemo(() => getWebDesignContactCtaUi(locale), [locale]);

  return (
    <ContactCTA
      anchorId="kontakt"
      headingLine1={copy.headingLine1}
      headingAccent={copy.headingAccent}
      description={copy.description}
      defaultService="webbdesign"
    />
  );
}
