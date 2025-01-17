import React from "react";
import Image from "next/image";
import { cn, pathImage } from "@/shared/lib/utils";
import { RoundButton } from "./round-button";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import { Badge } from "./badge";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "@/shared/icons/ArrowUpRight";
import Link from "next/link";

interface ImageCardProps {
  imageData: MediaFragmentFragment;
  className?: string;
  bages?: string[];
  catigoryId: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageData,
  bages,
  className,
  catigoryId,
}) => {
  const router = useRouter();
  return (
    <Link href={`/uslugi/${catigoryId}`}>
      <div
        className={cn(
          "w-[350px] h-[262px] md:w-[357px] md:h-[394px] xl:w-[380px] xl:h-[418px]  relative space-y-3 overflow-hidden rounded-md group",
          className
        )}
      >
        <Image
          width={380}
          height={418}
          src={pathImage(imageData.id)}
          alt={imageData.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute -top-[24px] right-[14px]">
          <RoundButton
            variant="default"
            onClick={() => router.push(`/uslugi/${catigoryId}`)}
            className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-[24px] max-md:translate-y-[24px] transition-all duration-700 h-9 w-9 ease-out"
          >
            <ArrowUpRight />
          </RoundButton>
        </div>
        {bages && bages?.length > 0 && (
          <div className="absolute -bottom-[10px] left-[14px] right-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-24px] transition-all duration-700 ease-out">
            <div className="flex flex-wrap justify-start gap-[5px] ">
              {bages.map((service, idx) => (
                <Badge
                  key={idx}
                  variant="default"
                  className="text-[12px] leading-[15.6px] px-2 py-1"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ImageCard;
