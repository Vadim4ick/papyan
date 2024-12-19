import React from "react";
import Image from "next/image";
import { cn, pathImage } from "@/shared/lib/utils";
import { MediaFragmentFragment } from "@/graphql/__generated__";

interface ImageCardOneProps {
  imageData: MediaFragmentFragment;
  className?: string;
  catigoryId?: string;
  title?: string;
}

const ImageCardOne: React.FC<ImageCardOneProps> = ({
  imageData,
  className,
  title,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md group w-full h-full",
        className
      )}
    >
      <Image
        width={350}
        height={484}
        src={pathImage(imageData.id)}
        alt={imageData.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-[14px] w-full">
        <div className="mx-[14px] rounded-lg h-[42px] bg-white">{title}</div>
      </div>
    </div>
  );
};

export default ImageCardOne;
