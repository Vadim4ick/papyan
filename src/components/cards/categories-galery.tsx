"use client";

import { ServiceBlockFragmentFragment } from "@/graphql/__generated__";
import { TitleWithBadge } from "../title-with-badge";
import ImageCard from "../ui/image-card";

export type VariantBageBg = "white" | "default";

interface CategoriesGaleryProps {
  category?: ServiceBlockFragmentFragment;
  cardWidth: string;
  cardHeight: string;
  numberOfCardsToRender?: number;
  variantBageBg?: VariantBageBg;
  bages?: boolean;
}

const CategoriesGalery: React.FC<CategoriesGaleryProps> = ({
  category,
  cardWidth,
  cardHeight,
  variantBageBg = "default",
  bages = true,
}) => {
  if (!category) return;

  return (
    <div>
      <TitleWithBadge
        bgcolor="bg-[#F0F3F8]"
        tittle={category.title}
        quantity={category.allServices.length}
        className="mb-[12px] md:mb-[16px]"
        variantBageBg={variantBageBg}
      />
      <ImageCard
        imageData={category.img}
        bages={
          bages ? category.allServices.map((service) => service.title) : []
        }
        className={`${cardWidth} ${cardHeight}`}
        catigoryId={category.id}
      />
    </div>
  );
};

export { CategoriesGalery };
