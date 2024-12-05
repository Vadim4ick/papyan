import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";



const buttonVariants = cva(
  "inline-flex items-center justify-center h-[48px] w-[48px] bg-[#FFFFFFB2] rounded-full text-primary disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "",
        round: `
          flex items-center justify-center
           border-[#EBEFF3] border-[1px]
          bg-[#EBEFF3] rounded-full
          transition-all duration-300 ease-out
          text-[#353535] text-[15px]
          hover:text-[#1467E1] hover:border-[1px] hover:border-[#0084FF]
          active:text-[#0084FF]
          disabled:text-[#C6C6C6] disabled:cursor-not-allowed
        `,
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const RoundButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {variant === "round" ? (
            <span className="ms-[2px] mt-[0px] chevron transition-transform duration-300 ease-out active:scale-[0.9]">
              {children}
            </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
RoundButton.displayName = "RoundButton";

export { RoundButton, buttonVariants };
