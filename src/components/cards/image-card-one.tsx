import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn, pathImage } from "@/shared/lib/utils";
import { RoundButton } from "../ui/round-button";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import { useRouter } from "next/navigation";

interface ImageCardOneProps {
  imageData: MediaFragmentFragment;
  className?: string;
  catigoryId?: string;
}

const ImageCardOne: React.FC<ImageCardOneProps> = ({
  imageData,
  className,
  catigoryId,
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "relative space-y-3 overflow-hidden rounded-md group",
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

      <div className="absolute top-0 w-full">
        <div className="mx-[14px] rounded-lg h-[42px] bg-white">{imageData.title}</div>
      </div>
    </div>
  );
};

export default ImageCardOne;
