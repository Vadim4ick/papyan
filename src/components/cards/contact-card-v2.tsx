import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock7, MapPin, Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ContactCardProps {
  address: string;
  schedule: string;
  phone: string;
  className?: string;
  children?: React.ReactNode;
}

function ContactCardV2({
  address,
  schedule,
  phone,
  className,
  children,
}: ContactCardProps) {
  return (
    <Card className={cn("w-full border-none ", className)}>
      <CardContent className=" flex flex-col gap-[16px] rounded-lg p-[20px] font-semibold  text-[18px] leading-[28px] tracking-tight">
        <div>
          <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
            Телефон для справок
          </p>
          <a href="#" className="flex items-center space-x-2">
            <Phone className="text-primary" />
            <span>{phone}</span>
          </a>
        </div>
        <div>
          <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
            Телефон для справок
          </p>
          <a href="#" className="flex items-center space-x-2">
            <MapPin className="text-primary" />
            <span>{address}</span>
          </a>
        </div>
        <div>
          <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
            Телефон для справок
          </p>
          <a href="#" className="flex items-center space-x-2">
            <Clock7 className="text-primary" />
            <span>{schedule}</span>
          </a>
        </div>
      </CardContent>
      <CardFooter className="w-full px-[20px]">{children}</CardFooter>
    </Card>
  );
}

export { ContactCardV2 };
