"use client"

import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import { ServiceCardItem } from "./service-card-item";

export interface IServiceCards {
  title: string;
  description: string;
  price: string;
  id: string;
}

interface ServiceCardsWrapperProps {
  cardsList: IServiceCards[];
  showFullList?: boolean
}


const ServiceCardsWrapper: React.FC<ServiceCardsWrapperProps> = ({ cardsList, showFullList }) => {

  const isMobile = useClientMediaQuery('(max-width: 1280px)')
  const numberOfCardsToRender = isMobile ? 2 : 4;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[20px] gap-y-5 justify-items-center auto-rows-max">
        { !showFullList ?
        cardsList.slice(0, numberOfCardsToRender).map((item) => (
          <ServiceCardItem key={item.id} card={item} />
        )) 
        :
        cardsList.map((item) => (
          <ServiceCardItem key={item.id} card={item} />
        )) 

      }
    </div>
  );
};

export { ServiceCardsWrapper };
