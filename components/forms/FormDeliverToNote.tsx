"use client";

import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormDeliverToNoteProps = {
  /** Use `{email}` once where the clickable address should appear. */
  hint: string;
  className?: string;
};

export function FormDeliverToNote({ hint, className }: FormDeliverToNoteProps) {
  if (!hint.includes("{email}")) {
    return (
      <p
        className={cn(
          "text-center text-[11px] leading-relaxed text-[rgba(255,255,255,0.28)]",
          className
        )}
      >
        {hint}
      </p>
    );
  }
  const [before, after] = hint.split("{email}");
  return (
    <p
      className={cn(
        "text-center text-[11px] leading-relaxed text-[rgba(255,255,255,0.28)]",
        className
      )}
    >
      {before}
      <a
        href={`mailto:${CONTACT.email}`}
        className="font-medium text-[rgba(147,197,253,0.9)] underline-offset-2 hover:underline"
      >
        {CONTACT.email}
      </a>
      {after}
    </p>
  );
}
