"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import { cn } from "@/lib/utils";

export interface AnimatedNumberProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  "aria-label"?: string;
}

export function AnimatedNumber({
  end,
  duration = 2.2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  "aria-label": ariaLabel,
}: AnimatedNumberProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <span
      ref={ref}
      className={cn(
        "font-heading text-4xl font-extrabold tabular-nums text-[var(--blue)] sm:text-5xl",
        className
      )}
      aria-label={ariaLabel}
    >
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          preserveValue
        />
      ) : (
        <span className="opacity-0">0</span>
      )}
    </span>
  );
}
