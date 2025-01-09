import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn, formattedPhoneNumber } from "@/shared/lib/utils";
import InputMask from "react-input-mask";

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
  const formattedPhone = React.useMemo(()=> {
      return formattedPhoneNumber (phone)
    }, [phone])
  return (
    <Card className={cn("w-full border-none py-7 px-7", className)}>
      <CardContent className="h-[164px] flex flex-col gap-[16px] rounded-lg p-0 mb-[31px] font-semibold  text-[18px] leading-[28px] tracking-tight">
        {address && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292]">
              Адрес клиники
            </p>

            <span>{address}</span>
          </div>
        )}
        {phone && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292]">
              Телефон для справок
            </p>
            <a href="#" className="flex items-center space-x-2">
              <span>{formattedPhone}</span>
            </a>
          </div>
        )}
        {schedule && (
          <div>
            <p className="text-[14px] leading-[18.2px] tracking-tight text-[#929292]">
              Время работы
            </p>
            <span>{schedule}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="w-full ">{children}</CardFooter>
    </Card>
  );
}

export { ContactCardV2 };
