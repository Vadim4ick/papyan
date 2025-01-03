import * as React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/shared/lib/utils";
import { VariantBageBg } from "./cards/categories-galery";

interface TitleWithBadgeProps {
  tittle: string;
  quantity: number;
  className?: string;
  bgcolor?: string;
  variantBageBg?: VariantBageBg;
}

function TitleWithBadge({
  tittle,
  quantity,
  className,
  bgcolor,
  variantBageBg = "default",
}: TitleWithBadgeProps) {
  return (
    <div className={cn("flex items-center gap-[5px]", className)}>
      <h4>{tittle}</h4>
      <Badge
        variantBageBg={variantBageBg}
        variant="secondary"
        className={`${bgcolor}`}
      >
        {quantity}
      </Badge>
    </div>
  );
}

export { TitleWithBadge };
