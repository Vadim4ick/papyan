import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";



const buttonVariants = cva(
  "flex items-center justify-center h-[36px] w-[36px] bg-[#FFFFFFB2] rounded-full text-primary disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "",
        round: "",
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
            <span className="ms-[2px] mt-[0px] ">
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
