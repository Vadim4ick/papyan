import * as React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/shared/lib/utils";


interface TitleWithBadgeProps {
    tittle: string;
    quantity: number;
    className?: string;
}

function TitleWithBadge({ tittle, quantity, className }: TitleWithBadgeProps) {
    return (
        <div className={cn("flex items-center gap-[5px]", className)}>
            <h4>{tittle}</h4>
            <Badge variant="secondary">{quantity}</Badge>
        </div>
    );
}

export { TitleWithBadge };