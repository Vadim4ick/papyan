import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/shared/lib/utils";

interface ContactCardProps {
  address: string | undefined;
  schedule: string | undefined;
  phone: string | undefined;
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
        {address && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
              Адрес клиники
            </p>

            <span>{address}</span>
          </div>
        )}
        {phone && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
              Телефон для справок
            </p>
            <a href="#" className="flex items-center space-x-2">
              <span>{phone}</span>
            </a>
          </div>
        )}
        {schedule && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292] mb-[4px]">
              Время работы
            </p>
            <span>{schedule}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="w-full px-[20px]">{children}</CardFooter>
    </Card>
  );
}

export { ContactCardV2 };
