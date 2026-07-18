import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        bnotes:
          "bg-notes text-notes-text rounded-3xl px-6 py-2.5 border-2 border-[#E0DED7] font-extralight",
        btitle: "bg-btitle text-btitle-text px-4 py-3 rounded-full font-bold",
        bbest:
          "bg-primary text-primary-text rounded-3xl px-3.5 py-2.5",
      },
      size: {
        notes: "h-13 text-lg font-medium",
        title: "h-11.5 text-base font-semibold tracking-wide",
        best: "h-9 text-sm tracking-wide font-semibold",
      },
    },
    defaultVariants: {
      variant: "bnotes",
      size: "notes",
    },
  },
);

function Buttonnotes({
  className,
  variant = "bnotes",
  size = "notes",
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

export { Buttonnotes, buttonVariants };
