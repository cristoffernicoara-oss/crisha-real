import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-[var(--blue)] px-6 py-3 text-sm text-white hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:translate-y-0",
        ghost:
          "rounded-pill border border-[rgba(255,255,255,0.2)] bg-transparent px-6 py-3 text-sm text-white hover:border-[var(--blue)]",
      },
      size: {
        default: "min-h-[44px] px-6 py-3 text-sm",
        sm: "min-h-9 px-4 py-2 text-xs",
        lg: "min-h-12 px-8 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
