import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { GeoIcon } from "@/shared/icons/Geo icon";
import { Clock } from "@/shared/icons/Clock";
import { PhoneSecond } from "@/shared/icons/PhoneSecond";

interface ContactCardProps {
  address: string;
  schedule: string;
  phone: string;
  className?: string;
}

function ContactCard({
  address,
  schedule,
  phone,
  className,
}: ContactCardProps) {
  return (
    <Card className={cn("w-full border-none ", className)}>
      <CardContent className="h-[148px] md:h-[160px] flex flex-col justify-between gap-[16px] rounded-lg py-4 px-3 font-semibold text-[18px] md:text-[22px] leading-[28px] tracking-tight  bg-white">
        <a href="#" className="flex items-center space-x-2">
          <GeoIcon/>
          <span className="max-md:text-[#353535]">{address}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <Clock/>
          <span className="max-md:text-[#353535]">{schedule}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <PhoneSecond/>
          <span className="max-md:text-[#353535]">{phone}</span>
        </a>
      </CardContent>
    </Card>
  );
}

export { ContactCard };
