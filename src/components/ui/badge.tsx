import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
 
import { cn } from "@/shared/lib/utils"
 
const badgeVariants = cva(
  " flex items-center justify-center border-none rounded-[100px] px-[10px] py-[2px] text-[12px] font-bold min-w-[29px] tracking-tight",
  {
    variants: {
      variant: {
        default:
          " bg-[#FFFFFF]/70 backdrop-blur-[20px] text-[#353535] text-[12px] leading-[15.6px]",
        secondary:
          " bg-[#F0F3F8] text-[#1467E1] text-[14px] leading-[18.2px] tracking-tight hover:bg-secondary/80",
        discont:
          " bg-[#72D459] text-destructive-foreground w-[70px] h-[37px] text-center",
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
    <p className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
 
export { Badge, badgeVariants }