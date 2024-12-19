import { Badge } from "@/components/ui/badge";
import { GetStockPageQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";
import { RussianRuble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface discountCardProps {
  card: GetStockPageQuery["stock_page"]["stockItems"][0];
  className?: string;
}

const DiscountCard = ({ card, className }: discountCardProps) => {
  const newPrice =
    card.services_id.price -
    (card.services_id.price * card.services_id.sale) / 100;

  const isWide = className?.includes("wide");

  return (
    <div
      className={`${className} items-center relative h-[466px] md:h-[502px] xl:h-[570px] overflow-hidden rounded-md group`}
    >
      <Link href={`therapy/${card.services_id.id}`}>
        <Image
          width={380}
          height={418}
          src={pathImage(card.services_id.img.id)}
          alt={"altText"}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between py-5 md:py-5 lg:py-8 px-0 md:px-[28px] lg:px-[36px]">
          <h3 className="mx-5 md:mx-0 text-left text-[#FFFFFF]">
            {card.services_id.title}
          </h3>
          <div
            className={`${isWide ? "mx-auto md:ml-auto md:me-[28px] lg:me-[36px] " : "mx-auto"} w-[302px] h-[49px] bg-[#FFFFFF]  rounded-[41px] flex justify-between items-center pl-[16px] pr-[6px]`}
          >
            <div className="flex gap-[6px] items-center">
              <p className=" relative text-[#353535] text-[20px] leading-[25px] tracking-tight font-semibold ">
                {newPrice}
                <span className="absolute top-[5px]">
                  <RussianRuble size={17} strokeWidth={2.25} />
                </span>{" "}
              </p>

              <p className="ms-[18px] relative text-[#7B7B7B] text-[14px] line-through leading-[18px] tracking-tight  ">
                {card.services_id.price}
                <span className="absolute top-[2px]">
                  <RussianRuble size={13} strokeWidth={2.25} />
                </span>{" "}
              </p>
            </div>
            <Badge variant="discont">-{card.services_id.sale}%</Badge>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { DiscountCard };
