import { Badge } from "@/components/ui/badge";
import { RussianRuble } from "lucide-react";
import Image from "next/image";

interface IDiscountCard {
  title: string;
  regularPrice: number;
  discount: number;
  image: string;
}

export interface discountCardProps {
  card: IDiscountCard;
  className?: string;
}

const DiscountCard = ({ card, className }: discountCardProps) => {
  const newPrice =
    card.regularPrice - (card.regularPrice * card.discount) / 100;

  return (
    <div
      className={`${className} items-center relative ] h-[466px] md:h-[502px] xl:h-[570px] overflow-hidden rounded-md group`}
    >
      <Image
        width={380}
        height={418}
        src={card.image}
        alt={"altText"}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-5 w-full   ">
        <div className="w-[302px] h-[49px] bg-[#FFFFFF] mx-auto rounded-[41px] flex justify-between items-center pl-[16px] pr-[6px]">
          <div className="flex gap-[6px] items-center">
            <p className=" relative text-[#353535] text-[20px] leading-[25px] tracking-tight font-semibold ">
              {newPrice}
              <span className="absolute top-[5px]">
                <RussianRuble size={17} strokeWidth={2.25} />
              </span>{" "}
            </p>

            <p className="ms-[18px] relative text-[#7B7B7B] text-[14px] line-through leading-[18px] tracking-tight  ">
              {card.regularPrice}
              <span className="absolute top-[2px]">
                <RussianRuble size={13} strokeWidth={2.25} />
              </span>{" "}
            </p>
          </div>
          <Badge variant="discont">-15%</Badge>
        </div>
      </div>
    </div>
  );
};

export { DiscountCard };
