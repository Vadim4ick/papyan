import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatNumberWithSpaces } from "@/shared/lib/utils";

interface ServiceCardItemProps {
  title: string;
  regularPrice: number;
  newPrice?: number;
}

function GetConsultCard({
  title,
  regularPrice,
  newPrice,
}: ServiceCardItemProps) {
  const formatPrice = React.useCallback((item: any) => {
    return formatNumberWithSpaces(item);
  }, []);

  return (
    <Card className="w-full md:w-[316px] border-none ">
      <CardHeader className="h-[44px] w-full p-0 rounded-lg bg-[#EFF3F7] mb-[6px]">
        <CardTitle className=" flex justify-start items-center px-5 py-3 ">
          <p className="line-clamp-1 text-[#353535] text-[16px] leading-[20px] tracking-tight font-semibold">
            {title}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative h-[174px] flex flex-col rounded-lg bg-[#EFF3F7] p-[20px]">
        <div className="absolute top-0 right-[20px] w-[70px] h-[24px] flex justify-center items-center bg-[#E7402A] rounded-b-md text-white text-[14px] font-semibold leading-[19.12px]">
          -15%
        </div>
        <CardDescription className="flex-1">
          <p className="mb-[8px] text-[16px] text-[#7B7B7B] leading-[20px] tracking-tight font-semibold">
            Стоимость:
          </p>
          <div className="flex items-center">
            <p className=" relative text-[#353535] text-[22px] leading-[30px] tracking-tight font-semibold ">
              {formatPrice(regularPrice)} ₽
            </p>

            {newPrice && (
              <p className="ms-[8px] relative text-[#7B7B7B] text-[14px] line-through leading-[20px] tracking-tight font-semibold ">
                {formatPrice(newPrice)} ₽
              </p>
            )}
          </div>
        </CardDescription>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          className="w-full duration-450"
          variant="secondary"
        >
          Получить консультацию
        </Button>
      </CardContent>
    </Card>
  );
}

export { GetConsultCard };
