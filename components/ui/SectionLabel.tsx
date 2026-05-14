import { cn } from "@/lib/utils";

export function SectionLabel({
  className,
  children,
  as: Comp = "p",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: "p" | "span" }) {
  return (
    <Comp
      className={cn(
        "text-xs font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
