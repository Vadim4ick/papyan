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
import { useRouter } from "next/navigation";
import { ServiceFragmentFragment } from "@/graphql/__generated__";
import { formatNumberWithSpaces } from "@/shared/lib/utils";

interface ServiceCardItemProps {
  card: ServiceFragmentFragment;
  className?: string;
}

function ServiceCardItem({ card, className }: ServiceCardItemProps) {
  const price = React.useMemo(() => {
    return formatNumberWithSpaces(card.price);
  }, [card.price]);
  const router = useRouter();
  return (
    <Card
      className={`h-[199px] w-full md:h-[187px] lg:h-[199px] bg-[#F0F3F8] rounded-lg p-[18px] flex flex-col ${className}`}
    >
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
        <p className="relative text-[#353535] text-[18px] leading-[22px] font-semibold mt-[7px]">
          {price} <span className="">₽</span>{" "}
        </p>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          className="z-10 btnAnimate"
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
