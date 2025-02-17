import React from "react";
import { cn, pathImage } from "@/shared/lib/utils";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import Link from "next/link";

interface ImageCardOneProps {
  imageData: MediaFragmentFragment;
  className?: string;
  catigoryId?: string;
  title?: string;
  link?: string;
}

const ImageCardOne: React.FC<ImageCardOneProps> = ({
  imageData,
  className,
  title,
  link,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg group w-full h-full",
        className
      )}
    >
      {link ? (
        <Link href={link}>
          <img
            width={350}
            height={484}
            src={pathImage(imageData.id)}
            alt={imageData.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      ) : (
        <img
          width={350}
          height={484}
          src={pathImage(imageData.id)}
          alt={imageData.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="absolute top-[14px] w-full">
        <div className="flex px-[14px] items-center text-[#1467E1] text-[18px] leading-[18px] tracking-tight font-semibold mx-[14px] rounded-lg h-[42px] bg-white">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ImageCardOne;
