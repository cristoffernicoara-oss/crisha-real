"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type FAQItem = { question: string; answer: string };

type FAQProps = {
  items: FAQItem[];
  accentColor?: string;
  className?: string;
};

export default function FAQ({ items, accentColor = "#2563EB", className }: FAQProps) {
  return (
    <Accordion.Root type="single" collapsible className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`faq-${index}`}
          className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1629]"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-white",
                "transition-colors hover:bg-[rgba(255,255,255,0.02)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,99,235,0.45)]",
                "data-[state=open]:text-[#93C5FD]"
              )}
            >
              <span className="pr-2">{item.question}</span>
              <ChevronDown
                className="size-5 shrink-0 text-[rgba(255,255,255,0.35)] transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div
              className="whitespace-pre-line border-t border-[rgba(255,255,255,0.06)] px-5 pb-5 pt-3 text-[15px] font-normal leading-relaxed text-[rgba(255,255,255,0.55)]"
              style={{ borderTopColor: `${accentColor}20` }}
            >
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
