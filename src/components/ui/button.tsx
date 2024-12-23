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
        ghost: "",
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
          z-10
          h-[48px] w-[260px] 
          bg-transparent
          text-[#1467E1] text-[15px]
          border border-[#1467E1] border-[1px]
          transition-all duration-300 ease-out
          hover:opacity-100 hover:bg-primary hover:text-secondary
          active:bg-primary active:opacity-100 active:text-[13px]
          disabled:border-[#C6C6C6] disabled:bg-transparent disabled:text-[#C6C6C6]
        `,
        stroke: `
          relative h-[36px] w-[105px]
          text-[#353535] text-[12px] font-semibold
          bg-transparent border border-[#353535] rounded-full
          overflow-hidden
          transition-all duration-300 ease-out
          hover:text-secondary
          active:delay-[100ms] active:duration-[300ms] active:text-[11px]
          disabled:border-[#C6C6C6] disabled:bg-transparent disabled:text-[#C6C6C6]
          
          before:absolute before:top-[-150px] before:left-1/2 before:h-[150px] before:w-[150px] before:-z-10
          before:-translate-x-1/2 before:rounded-full before:bg-primary
          before:transition-transform before:duration-500 before:ease-out hover:before:translate-y-[50%]
          
          after:absolute after:bottom-[-150px] after:left-1/2 after:h-[150px] after:w-[150px] after:-z-10
          after:-translate-x-1/2 after:rounded-full after:bg-primary
          after:transition-transform after:duration-500 after:ease-out hover:after:-translate-y-[50%]
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
        arrow: `
          flex items-center justify-center
          h-[48px] w-[48px] border-[#EBEFF3] border-[1px]
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
        ) : variant === "arrow" ? (
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
Button.displayName = "Button";

export { Button, buttonVariants };
