"use client";
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui/button";
import ImageCard from "../ui/image-card";
import { ServiceCardsWrapper } from "../cards/serice-cards-wrapper";
import { TitleWithBadge } from "../title-with-badge";
import { useRouter } from "next/navigation";
import { ServiceBlockFragmentFragment } from "@/graphql/__generated__";

interface CategotyWrapperProps {
  category: ServiceBlockFragmentFragment;
  className?: string;
}

const CatigoryWrapper: React.FC<CategotyWrapperProps> = ({
  className,
  category,
}) => {
  const router = useRouter();

  return (
    <div className={cn("", className)}>
      <div className="flex justify-between mb-[16px]">
        <TitleWithBadge
          tittle={category.title}
          quantity={category.allServices.length}
        />

        <Button
          variant="tretiary"
          className="hidden md:block"
          onClick={() => router.push(`/uslugi/${category.id}`)}
        >
          Смотреть все
        </Button>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between md:gap-[40px] xl:gap-[130px]">
        <ImageCard
          imageData={category.img}
          className="mb-[36px] md:mb-0"
          bages={category.allServices.map((service) => service.title)}
        />

        <ServiceCardsWrapper cardsList={category.allServices} />
      </div>
    </div>
  );
};

export { CatigoryWrapper };
