import React from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Замените на путь к вашей кнопке
import { Badge } from "@/components/ui/badge"; // Замените на путь к вашему Badge
import { ChevronRight } from "lucide-react";

interface CardProps {
  imageUrl: string;
  altText?: string;
  width?: number;
  height?: number;
  badges?: { label: string; variant?: string }[];
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText = "Image",
  width = 250,
  height = 330,
  badges = [],
}) => {
  return (
    <div
      className="relative space-y-3 overflow-hidden rounded-md group"
      style={{ width, height }}
    >
      {/* Изображение с соотношением сторон */}
      <AspectRatio ratio={width / height}>
        <Image
          width={width}
          height={height}
          src={imageUrl}
          alt={altText}
          className="rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>

      {/* Плавающая кнопка при наведении */}
      <div className="absolute -inset-y-1 right-1 flex items-start justify-center">
        <Button
          variant="arrow"
          className="opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-[10px] transition-all duration-300"
        >
          <span className="ms-[3px] mt-[0px] chevron transition-transform duration-300 ease-out active:scale-[0.9]">
            <ChevronRight width={20} />
          </span>
        </Button>
      </div>

      {/* Бейджи снизу */}
      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex justify-center space-x-2 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300">
          {badges.map((badge, index) => (
            <Badge key={index} variant="default">
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
