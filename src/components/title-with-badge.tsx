import * as React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/shared/lib/utils";


interface TitleWithBadgeProps {
    tittle: string;
    quantity: string;
    className?: string;
}

function TitleWithBadge({ tittle, quantity, className }: TitleWithBadgeProps) {
    return (
        <div className={cn("flex gap-1", className)}>
            <h3>{tittle}</h3>
            <Badge variant="default">{quantity}</Badge>
        </div>
    );
}

export { TitleWithBadge };