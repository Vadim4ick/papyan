import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Clock7, MapPin, Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";

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
      <CardContent className="md:h-[174px] flex flex-col gap-[16px] rounded-lg p-[20px] font-semibold text-[18px] leading-[28px] tracking-tight max-md:py-4 max-md:px-3 max-md:bg-white">
        <a href="#" className="flex items-center space-x-2">
          <MapPin className="text-primary max-md:size-[20px]" />
          <span className="max-md:text-[#353535]">{address}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <Clock7 className="text-primary max-md:size-[20px]" />
          <span className="max-md:text-[#353535]">{schedule}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <Phone className="text-primary max-md:size-[20px]" />
          <span className="max-md:text-[#353535]">{phone}</span>
        </a>
      </CardContent>
    </Card>
  );
}

export { ContactCard };
