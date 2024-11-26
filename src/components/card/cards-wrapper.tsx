import { CardItem } from "./card-item";

export interface ICards {
  title: string;
  description: string;
  price: string;
  id: string;
}

interface CardsWrapperProps {
  cardsList: ICards[];
}

const CardsWrapper: React.FC<CardsWrapperProps> = ({ cardsList }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
      {cardsList.map((cardItem) => (
        <CardItem key={cardItem.id} card={cardItem} />
      ))}
    </div>
  );
};

export { CardsWrapper };
