"use client";

import { ServiceBlockFragmentFragment } from "@/graphql/__generated__";
import { TitleWithBadge } from "../title-with-badge";
import ImageCard from "../ui/image-card";

interface CategoriesGaleryProps {
  category?: ServiceBlockFragmentFragment;
  cardWidth: string;
  cardHeight: string;
  numberOfCardsToRender?: number;
}

const CategoriesGalery: React.FC<CategoriesGaleryProps> = ({
  category,
  cardWidth,
  cardHeight,
}) => {
  if (!category) return;

  return (
    <div>
      <TitleWithBadge
        tittle={category.title}
        quantity={category.allServices.length}
        className="mb-[12px] md:mb-[16px]"
      />
      <ImageCard
        imageData={category.img}
        bages={category.allServices.map((service) => service.title)}
        className={`${cardWidth} ${cardHeight}`}
        catigoryId={category.id}
      />
    </div>
  );
};

export { CategoriesGalery };
