import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IServiceCards } from "./serice-cards-wrapper";
import { RussianRuble } from "lucide-react";

interface ServiceCardItemProps {
  card: IServiceCards;
}

function ServiceCardItem({ card }: ServiceCardItemProps) {
  return (
    <Card className="w-[396px] h-[199px] bg-[#F0F3F8] rounded-lg p-[18px] flex flex-col">
      <CardHeader className="pb-[14px]">
        <CardTitle className="text-[#353535] text-[18px] leading-[22px] tracking-tight font-semibold">
          {card.title}
        </CardTitle>
        <CardDescription className="text-[#696969] text-[14px] leading-[18px] tracking-tight font-medium line-clamp-2">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <p className="relative text-[#353535] text-[18px] leading-[22px] tracking-tight font-semibold ">
          {card.price}{" "}
          <span className="absolute top-[4px]">
            <RussianRuble size={16} strokeWidth={2.25} />
          </span>{" "}
        </p>
        <Button className="z-10" variant="stroke">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}

export { ServiceCardItem };
