"use client";

import { FORM_NOTIFICATION_EMAIL, FORMSPREE_SETUP_HINT } from "@/lib/formspree";
import { cn } from "@/lib/utils";

export function FormspreeMissingNotice({ className }: { className?: string }) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border border-amber-500/25 bg-amber-500/[0.07] px-4 py-3 text-sm text-amber-50/95",
        className
      )}
    >
      <p className="font-semibold">Formuläret skickar inte e-post än</p>
      <p className="mt-2 text-xs leading-relaxed text-amber-100/75">
        Lägg till{" "}
        <code className="rounded bg-black/25 px-1 font-mono text-[11px] text-amber-50">
          NEXT_PUBLIC_FORMSPREE_FORM_ID
        </code>{" "}
        (se <span className="font-mono text-[11px]">.env.example</span>). Sedan i Formspree: aktivera notifiering till{" "}
        <a
          href={`mailto:${FORM_NOTIFICATION_EMAIL}`}
          className="font-medium text-amber-100 underline underline-offset-2 hover:text-white"
        >
          {FORM_NOTIFICATION_EMAIL}
        </a>
        . {FORMSPREE_SETUP_HINT}
      </p>
    </div>
  );
}
