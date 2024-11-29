import React from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Замените на путь к вашей кнопке
import { Badge } from "@/components/ui/badge"; // Замените на путь к вашему Badge
import { ChevronRight } from "lucide-react";

interface ImageCardProps {
  imageData: ImageData;
  width: number;
  height: number;
}

interface ImageData {
  id: number;
  imageUrl: string;
  altText: string;
  tagData?: { id: number; label: string }[];
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData, width, height }) => {
  return (
    <div
      className="relative space-y-3 overflow-hidden rounded-md group"
      style={{ width, height }}
    >
      <AspectRatio ratio={width / height}>
        <Image
          width={width}
          height={height}
          src={imageData.imageUrl}
          alt={imageData.altText}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>

      <div className="absolute top-0 right-[14px]">
        <Button
          variant="arrow"
          className="opacity-0  group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
        >
          <ChevronRight width={20} />
        </Button>
      </div>

      <div className="absolute bottom-0 left-[14px] right-[14px]">
        <div className="flex flex-wrap justify-start gap-[4px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-14px] transition-all duration-300">
          {imageData.tagData &&
            imageData.tagData.map((tag) => (
              <Badge key={tag.id} variant="default">
                {tag.label}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
