"use client"
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui/button";
import ImageCard from "../ui/image-card";
import { ServiceCardsWrapper } from "../cards/serice-cards-wrapper";
import { ImageCardMocData, servicesList } from "@/shared/const/moc-data";
import { TitleWithBadge } from "../title-with-badge";
import { useRouter } from "next/navigation";
import { TCategory } from "@/shared/types/types";

interface CategotyWrapperProps {
  category: TCategory
  className?: string;
}


const CatigoryWrapper: React.FC<CategotyWrapperProps> = ({ className, category }) => {
  const router = useRouter();
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between mb-[16px]">
        <TitleWithBadge tittle={category.name} quantity={servicesList.length}/>
        <Button variant="tretiary" className="hidden md:block" onClick={() => router.push(`/uslugi/${category.id}`)}>
          Смотреть все
        </Button>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between md:gap-[40px] xl:gap-[130px]">
        <ImageCard imageData={ImageCardMocData} className="mb-[36px] md:mb-0" />
        <ServiceCardsWrapper cardsList={servicesList} />
      </div>
    </div>
  );
};

export { CatigoryWrapper };
