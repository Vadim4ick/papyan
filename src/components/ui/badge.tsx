import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
 
import { cn } from "@/shared/lib/utils"
 
const badgeVariants = cva(
  "inline-flex items-center rounded-[100px] border px-[10px] py-[2px] text-[12px] font-semibold min-w-[29px] tracking-tight",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFFFFF]/70 backdrop-blur-[20px] text-[#353535] text-[12px] leading-[15.6px]",
        secondary:
          "border-transparent bg-[#F0F3F8] text-[#1467E1] text-[14px] leading-[18px] hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
 
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
 
export { Badge, badgeVariants }