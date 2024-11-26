import { ServiceCardItem } from "./service-card-item";

export interface IServiceCards {
  title: string;
  description: string;
  price: string;
  id: string;
}

interface ServiceCardsWrapperProps {
  cardsList: IServiceCards[];
}

const ServiceCardsWrapper: React.FC<ServiceCardsWrapperProps> = ({ cardsList }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
      {cardsList.map((item) => (
        <ServiceCardItem key={item.id} card={item} />
      ))}
    </div>
  );
};

export { ServiceCardsWrapper };
