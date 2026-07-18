import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-[16px] py-[12px] gap-2 whitespace-nowrap rounded-md font-semibold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-text hover:bg-primary-hover disabled:bg-disabled-bg disabled:text-disabled-text",
        secondary:
          "bg-secondary text-secondary-text hover:bg-secondary-hover disabled:bg-disabled-bg disabled:text-disabled-text",
        tertiary:
          "bg-tertiary text-tertiary-text border-2 border-tertiary-border hover:bg-tertiary-hover disabled:bg-disabled-bg disabled:text-disabled-text",
      },
      size: {
        sm: "h-[42px] text-sm",
        md: "h-[50px] text-base",
        lg: "h-[58px] text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "sm",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
