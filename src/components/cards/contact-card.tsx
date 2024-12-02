import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Clock7, MapPin, Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ContactCardProps {
  address: string;
  schedule: string;
  phone: string;
  className?:string
}

function ContactCard({ address, schedule, phone, className }: ContactCardProps) {
  return (
    <Card className={cn("w-full border-none ", className)}>
      <CardContent className="h-[174px] flex flex-col gap-[16px] rounded-lg p-[20px] font-semibold  text-[18px] leading-[28px] tracking-tight">
        <a href="#" className="flex items-center space-x-2">
          <MapPin className="text-primary"/>
          <span>{address}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <Clock7 className="text-primary"/>
          <span>{schedule}</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <Phone className="text-primary"/>
          <span>{phone}</span>
        </a>
      </CardContent>
    </Card>
  );
}

export { ContactCard };
