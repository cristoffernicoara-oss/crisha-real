import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "muted";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variant === "default" &&
          "border-transparent bg-[var(--blue)]/15 text-[var(--blue-light)]",
        variant === "outline" &&
          "border-[var(--border)] bg-transparent text-[rgba(255,255,255,0.7)]",
        variant === "muted" &&
          "border-transparent bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.5)]",
        className
      )}
      {...props}
    />
  );
}
