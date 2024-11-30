import { cn } from "@/shared/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ImageCard from "../ui/image-card";
import { ServiceCardsWrapper } from "../cards/serice-cards-wrapper";
import { ImageCardMocData, CardsMocData } from "@/shared/const/moc-data";

interface CategotyWrapperProps {
  className?: string;
}

const CatigoryWrapper: React.FC<CategotyWrapperProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between mb-[16px]">
        <div className="flex gap-1">
          <h3>Физиотерапия</h3>
          <Badge variant="default">10</Badge>
        </div>
        <Button variant="tretiary" className="hidden md:block">
          Смотреть все
        </Button>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between md:gap-[40px] xl:gap-[130px]">
        <ImageCard imageData={ImageCardMocData} className="mb-[36px] md:mb-0" />
        <ServiceCardsWrapper cardsList={CardsMocData} />
      </div>
    </div>
  );
};

export { CatigoryWrapper };
