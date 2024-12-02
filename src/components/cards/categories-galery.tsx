"use client";

import { ImageCardMocData, servicesList } from "@/shared/const/moc-data";
import ImageCard from "../ui/image-card";
import { TCategory } from "@/shared/types/types";
import { TitleWithBadge } from "../title-with-badge";

interface CategoriesGaleryProps {
  categoryList: TCategory[];
}

const CategoriesGalery: React.FC<CategoriesGaleryProps> = ({
  categoryList,
}) => {
  const numberOfCardsToRender = 3;
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
            className="w-[350px] h-[262px] md:w-[311px] md:h-[343px] xl:w-[396px] xl:h-[464px]"
          />
        </div>
      ))}
    </div>
  );
};

export { CategoriesGalery };
