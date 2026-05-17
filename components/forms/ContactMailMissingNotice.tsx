"use client";

import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactMailMissingNotice({ className }: { className?: string }) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border border-amber-500/25 bg-amber-500/[0.07] px-4 py-3 text-sm text-amber-50/95",
        className
      )}
    >
      <p className="font-semibold">Formuläret kan inte skicka e-post än</p>
      <p className="mt-2 text-xs leading-relaxed text-amber-100/75">
        Sätt hemliga variablerna{" "}
        <code className="rounded bg-black/25 px-1 font-mono text-[11px] text-amber-50">RESEND_API_KEY</code> och{" "}
        <code className="rounded bg-black/25 px-1 font-mono text-[11px] text-amber-50">RESEND_FROM</code>{" "}
        (se <span className="font-mono text-[11px]">.env.example</span>). Via Resend skickas meddelanden till{" "}
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-medium text-amber-100 underline underline-offset-2 hover:text-white"
        >
          {CONTACT.email}
        </a>
        ; verifiera avsändardomänen i Resend innan produktion.
      </p>
    </div>
  );
}
