import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RussianRuble } from "lucide-react";

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
  return (
    <Card className=" w-[316px] border-none ">
      <CardHeader className="h-[44px] w-full p-0 rounded-lg bg-[#EFF3F7] mb-[6px]">
        <CardTitle className=" m-auto text-[#353535] text-[16px] leading-[20px] tracking-tight font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[174px] flex flex-col rounded-lg bg-[#EFF3F7] p-[20px]">
        <CardDescription className="flex-1">
          <p className="mb-[8px] text-[16px] leading-[20px] tracking-tight font-semibold">
            Стоимость:
          </p>
          <div className="flex items-center">
            <p className=" relative text-[#353535] text-[22px] leading-[30px] tracking-tight font-semibold ">
              {regularPrice}
              <span className="absolute top-[4px]">
                <RussianRuble size={16} strokeWidth={2.25} />
              </span>{" "}
            </p>

            {newPrice && (
              <p className="ms-[18px] relative text-[#7B7B7B] text-[14px] line-through leading-[20px] tracking-tight font-semibold ">
                {newPrice}
                <span className="absolute top-[4px]">
                  <RussianRuble size={16} strokeWidth={2.25} />
                </span>{" "}
              </p>
            )}
          </div>
        </CardDescription>
        <Button className="w-full" variant="secondary">
          Получить консультацию
        </Button>
      </CardContent>
    </Card>
  );
}

export { GetConsultCard };
