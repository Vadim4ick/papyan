import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-[13px] tracking-tight font-medium disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: `
          h-[40px] w-[182px] 
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
          text-primary text-[15px] font-bold
          border border-primary border-[1px] rounded-[8px] 
          transition-all duration-300 ease-out
          hover:opacity-100 hover:bg-primary hover:text-secondary
          active:bg-primary active:opacity-100 active:text-[13px] active:delay-[10ms] active:delay-[0ms] 
          disabled:border-[#C6C6C6] disabled:bg-transparent disabled:text-[#C6C6C6]
        `,
        // остальные варианты остаются неизменными
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
