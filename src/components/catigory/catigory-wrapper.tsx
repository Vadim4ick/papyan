import { cn } from "@/shared/lib/utils";
import { Button } from "../ui/button";
import ImageCard from "../ui/image-card";
import { ServiceCardsWrapper } from "../cards/serice-cards-wrapper";
import { ImageCardMocData, ServicesList } from "@/shared/const/moc-data";
import { TitleWithBadge } from "../title-with-badge";

interface CategotyWrapperProps {
  className?: string;
}

const CatigoryWrapper: React.FC<CategotyWrapperProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between mb-[16px]">
        <TitleWithBadge tittle={"Физиотерапия"} quantity={"10"}/>
        <Button variant="tretiary" className="hidden md:block">
          Смотреть все
        </Button>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between md:gap-[40px] xl:gap-[130px]">
        <ImageCard imageData={ImageCardMocData} className="mb-[36px] md:mb-0" />
        <ServiceCardsWrapper cardsList={ServicesList} />
      </div>
    </div>
  );
};

export { CatigoryWrapper };
