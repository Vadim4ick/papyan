"use client";

import { ServiceBlockFragmentFragment } from "@/graphql/__generated__";
import { TitleWithBadge } from "../title-with-badge";
import ImageCard from "../ui/image-card";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";

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
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  if (!category) return;

  return (
    <div className="max-md:w-full">
      <TitleWithBadge
        bgcolor="bg-[#F0F3F8]"
        tittle={category.title}
        quantity={category.allServices.length}
        className="mb-[12px] md:mb-[16px] max-md:leading-[27px]"
        variantBageBg={variantBageBg}
      />
      <ImageCard
        imageData={category.img}
        bages={
          !isMobile && bages
            ? category.allServices.map((service) => service.title)
            : []
        }
        className={`${cardWidth} ${cardHeight}  max-md:h-[199px] max-md:w-full`}
        catigoryId={category.id}
      />
    </div>
  );
};

export { CategoriesGalery };
