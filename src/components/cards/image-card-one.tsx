import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn, pathImage } from "@/shared/lib/utils";
import { RoundButton } from "../ui/round-button";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

interface ImageCardOneProps {
  imageData: MediaFragmentFragment;
  className?: string;
  bages?: string[];
  catigoryId?:string
}

const ImageCardOne: React.FC<ImageCardOneProps> = ({
  imageData,
  className,
  catigoryId
}) => {
  const router = useRouter()
  return (
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
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-0 right-[14px]">
        <RoundButton
          variant="default"
          onClick={() => router.push(`/uslugi/${catigoryId}`)}
          className="opacity-0  group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
        >
          <ArrowUpRight />
        </RoundButton>
      </div>
    </div>
  );
};

export default ImageCardOne;
