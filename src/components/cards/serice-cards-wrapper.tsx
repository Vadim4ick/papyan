"use client";

import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import { ServiceCardItem } from "./service-card-item";
import { ServiceBlockFragmentFragment } from "@/graphql/__generated__";

export interface IServiceCards {
  title: string;
  description: string;
  price: string;
  id: string;
}

interface ServiceCardsWrapperProps {
  cardsList: ServiceBlockFragmentFragment["allServices"];
  showFullList?: boolean;
}

const ServiceCardsWrapper = ({
  cardsList,
  showFullList,
}: ServiceCardsWrapperProps) => {
  const isMobile = useClientMediaQuery("(max-width: 991px)");
  const numberOfCardsToRender = isMobile ? 2 : 4;

  return (
    <div className="grid grid-cols-2 w-full max-tablet:grid-cols-1 gap-x-[20px] gap-y-[12px] lg:gap-y-5 justify-items-center auto-rows-max">
      {!showFullList
        ? cardsList
            .slice(0, numberOfCardsToRender)
            .map((item) => (
              <ServiceCardItem
                key={item.id}
                card={item}
                className="max-md:w-full"
              />
            ))
        : cardsList.map((item) => (
            <ServiceCardItem
              key={item.id}
              card={item}
              className="max-md:w-full"
            />
          ))}
    </div>
  );
};

export { ServiceCardsWrapper };
