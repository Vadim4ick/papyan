import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { ChevronRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-[14px] tracking-tight font-bold disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: `
          h-[40px] w-[182px] 
          text-[13px]
          bg-primary text-primary-foreground
          transition-[font-size,background-color]
          duration-500 ease-out
          hover:bg-[#E2F1FF] hover:text-primary hove:border hover:border-primary hover:border-[1px]
          active:border active:border-primary active:text-[12px] 
          disabled:bg-[#E1E3E5] disabled:border-transparent
        `,
        secondary: `
          h-[48px] w-[260px] 
          bg-transparent
          text-primary text-[15px]
          border border-primary border-[1px]
          transition-all duration-300 ease-out
          hover:opacity-100 hover:bg-primary hover:text-secondary
          active:bg-primary active:opacity-100 active:text-[13px]
          disabled:border-[#C6C6C6] disabled:bg-transparent disabled:text-[#C6C6C6]
        `,
        stroke: `
          h-[36px] w-[105px]
          text-[#353535] text-[12px] font-semibold
          bg-transparent border border-[#353535] rounded-full
          transition-all duration-300 ease-out
          hover:bg-primary hover:text-secondary
          active:delay-[100ms] active:duration-[300ms] active:text-[11px]
          disabled:border-[#C6C6C6] disabled:bg-transparent disabled:text-[#C6C6C6]
        `,
        white: `
          h-[40px] w-[182px] 
          text-[13px]
          bg-[#FFFFFF]
          transition-all duration-300 ease-out
          hover:border-[1px] hover:border-[#0084FF] hover:bg-transparent hover:text-primary
          active:border-[1px] active:border-[#0084FF] active:delay-[100ms] active:text-[12px]
          disabled:bg-[#404040] disabled:text-[#595959]
        `,
        tretiary: `
          transition-all duration-300 ease-out
          text-[#1467E1] 
          hover:text-[#0084FF] 
          active:text-[#0084FF]
          active:transition-[spring]  active:[transition-duration:300ms] active:[transition-timing-function:cubic-bezier(0.17, 0.67, 0.83, 0.67)]
          disabled:text-[#C6C6C6]
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {variant === "tretiary" ? (
          <div className="relative flex items-center">
            <span className="transition-transform duration-300 ease-out hover:-translate-x-1">
              {children}
            </span>
            <span className="ml-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
