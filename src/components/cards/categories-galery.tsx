"use client";

import { ImageCardMocData, servicesList } from "@/shared/const/moc-data";
import ImageCard from "../ui/image-card";
import { TCategory } from "@/shared/types/types";
import { TitleWithBadge } from "../title-with-badge";

interface CategoriesGaleryProps {
  categoryList: TCategory[];
  cardWidth: string;
  cardHeight: string;
  numberOfCardsToRender? : number
}

const CategoriesGalery: React.FC<CategoriesGaleryProps> = ({
  categoryList,
  numberOfCardsToRender = 2,
  cardWidth,
  cardHeight,
}) => {
  // const numberOfCardsToRender = 3;
  return (
    <div className="flex flex-col md:flex-row gap-y-[24px] items-center gap-x-[26px] overflow-x-auto">
      {categoryList.slice(0, numberOfCardsToRender).map((category) => (
        <div key={category.id} className="">
          <TitleWithBadge
            tittle={category.name}
            quantity={servicesList.length}
            className="mb-[12px] md:mb-[16px]"
          />
          <ImageCard
            imageData={ImageCardMocData}
            className={`${cardWidth} ${cardHeight}`}
          />
        </div>
      ))}
    </div>
  );
};

export { CategoriesGalery };
