import * as React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/shared/lib/utils";


interface TBadgeWithIconProps {
    variant: "video" | "photo";
    tittle: string;
    quantity: number;
    className?: string;
}

function BadgeWithIcon({ tittle, quantity, className }: TBadgeWithIconProps) {
    return (
        <div className={cn("flex gap-1", className)}>
            <h3>{tittle}</h3>
            <Badge variant="default">{quantity}</Badge>
        </div>
    );
}

export { BadgeWithIcon };