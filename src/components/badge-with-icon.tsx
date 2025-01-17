import * as React from "react";
import { Badge } from "./ui/badge";
import { Video } from "@/shared/icons/Video";
import { Photo } from "@/shared/icons/Photo";

interface TBadgeWithIconProps {
  variant: "video" | "photo";
  tittle: string;
  quantity: number;
  className?: string;
}

function BadgeWithIcon({
  tittle,
  quantity,
  className,
  variant,
}: TBadgeWithIconProps) {
  return (
    <Badge
      className={`${className} text-[#464646] backdrop:border-transparent gap-[6px] text-[14px] leading-[19.2px] py-[7px] px-[14px]" variant="default`}
    >
      {variant === "video" ? <Video /> : <Photo />}
      {tittle} ({quantity})
    </Badge>
  );
}

export { BadgeWithIcon };
