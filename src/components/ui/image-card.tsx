import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn, pathImage } from "@/shared/lib/utils";
import { RoundButton } from "./round-button";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import { Badge } from "./badge";

interface ImageCardProps {
  imageData: MediaFragmentFragment;
  className?: string;
  bages?: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageData,
  bages,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-[350px] h-[301px] md:w-[357px] md:h-[394px] xl:w-[380px] xl:h-[418px]  relative space-y-3 overflow-hidden rounded-md group",
        className
      )}
    >
      <Image
        width={380}
        height={418}
        src={pathImage(imageData.id)}
        alt={imageData.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-0 right-[14px]">
        <RoundButton
          variant="default"
          className="opacity-0  group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
        >
          <ArrowUpRight />
        </RoundButton>
      </div>

      {bages && bages?.length > 0 && (
        <div className="absolute bottom-0 left-[14px] right-[14px]">
          <div className="flex flex-wrap justify-start gap-[4px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-14px] transition-all duration-300">
            {bages.map((service, idx) => (
              <Badge key={idx} variant="default">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
