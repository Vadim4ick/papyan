import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Clock7, MapPin, Phone } from "lucide-react";

interface ContactCardProps {
  address: string;
  schedule: string;
  phone: string;
}

function ContactCard({ address, schedule, phone }: ContactCardProps) {
  return (
    <Card className=" w-full border-none ">
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
