import { DialogForm } from "@/components/modal/dialog";
import { ContactsMap } from "./ContactsMap";

import { Button } from "@/components/ui/button";
import { VkIcon } from "@/shared/icons/VkIcon";
import { TgIcon } from "@/shared/icons/TgIcon";
import { WhatSapp } from "@/shared/icons/WhatSapp";

const Conacts = ({ mapHeight }: { mapHeight: string }) => {
  return (
    <section>
      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <div className="border-t border-t-[#E8E8E8] pt-[62px] max-lg:pt-[48px] pb-[64px] max-lg:flex max-lg:gap-[20px] max-md:flex-col max-md:gap-[32px]">
          <div className="flex items-center justify-between gap-2 lg:pb-[36px] w-full">
            <div className="flex items-center gap-[70px] max-xl:gap-[40px] max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:p-[28px] max-lg:bg-[#F0F3F8] w-full max-lg:rounded-[8px]">
              <div className="flex flex-col gap-1">
                <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                  Адрес клиники
                </p>

                <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                  Краснодар, Постовая улица, 23
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                  Время работы
                </p>

                <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                  Пн-сб: 08:00—20:00
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                  Телефон для справок
                </p>

                <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                  +7 (918) 232-13-13
                </div>
              </div>

              {/* Иконки соцсетей */}
              <div className="flex items-center gap-4">
                <a
                  href="https://vk.com/kompaskrd?ysclid=mi960qadg3753683184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <VkIcon className="size-[30px] text-blue-600" />
                </a>
                <a
                  href="https://t.me/kompas_zdorovya_krd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <TgIcon className="size-[25px] text-blue-500" />
                </a>
                <a
                  href="https://wa.me/79182321313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <WhatSapp className="size-[25px] text-green-500" />
                </a>
              </div>

              <DialogForm>
                <Button
                  motionProps={{
                    stiffness: 142.2,
                    damping: 26.67,
                    mass: 1,
                  }}
                  variant={"secondary"}
                  className="h-[48px] lg:hidden w-full max-md:mt-[12px] duration-450"
                >
                  Получить консультацию
                </Button>
              </DialogForm>
            </div>

            <DialogForm>
              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                variant={"secondary"}
                className="h-[48px] max-lg:hidden duration-450"
              >
                Получить консультацию
              </Button>
            </DialogForm>
          </div>

          <ContactsMap className={mapHeight} />
        </div>
      </div>
    </section>
  );
};

export { Conacts };
