"use client";

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
import { RussianRuble } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceFragmentFragment } from "@/graphql/__generated__";

interface ServiceCardItemProps {
  card: ServiceFragmentFragment;
}

function ServiceCardItem({ card }: ServiceCardItemProps) {
  const router = useRouter();
  return (
    <Card className="w-[350px]  h-[199px] md:w-[377px] md:h-[187px] lg:w-[396px] lg:h-[199px] bg-[#F0F3F8] rounded-lg p-[18px] flex flex-col">
      <CardHeader className="pb-[14px]">
        <CardTitle className="text-[#353535] text-[18px] text-left mb-[12px] leading-[22px] tracking-tight font-semibold">
          {card.title}
        </CardTitle>
        <CardDescription className="text-[#696969] text-[14px] text-left leading-[18px] tracking-tight font-medium line-clamp-2 mt-0">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <p className="relative text-[#353535] text-[18px] leading-[22px]  font-semibold ">
          {card.price}{" "}
          <span className="absolute top-[4px]">
            <RussianRuble size={16} strokeWidth={2.5} />
          </span>{" "}
        </p>
        <Button
          className="z-10"
          variant="stroke"
          onClick={() => router.push(`/therapy/${card.id}`)}
        >
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}

export { ServiceCardItem };
