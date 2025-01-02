import Link from "next/link";
import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Clock7, MapPin, Phone } from "lucide-react";
import { ContactData } from "@/shared/const/moc-data";
import { Separator } from "./ui/separator";
import { CretinLogo } from "@/shared/icons/Creatin";
import { DialogForm } from "./modal/dialog";

const contacts = ContactData;

const Footer = () => {
  return (
    <footer className="min-h-[360px] bg-[#353535] pt-[72px] z-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-y-[64px] lg:flex-row mb-[64px] lg:mb-[85px] lg:px-0">
          <div className="w-full lg:max-w-fit flex md:flex-row lg:flex-col gap-4 lg:gap-y-[58px] justify-between">
            <LogoFooter />
            <DialogForm>
              <Button variant="white" className="hidden md:block">
                Записаться онлайн
              </Button>
            </DialogForm>
          </div>

          <div className="w-full flex justify-between gap-[56px] xl:gap-[128px] flex-wrap lg:flex-nowrap lg:max-w-[701px]">
            <div className="flex flex-col gap-[32px]">
              <h4 className="font-[600] text-white text-[20px] leading-[25px]">
                Навигация
              </h4>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/"
                >
                  Главная
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/oklinike"
                >
                  О клинике
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/doctor"
                >
                  Специалисты
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-end text-right lg:items-start lg:text-start gap-[32px]">
              <h4 className="font-[600] text-white text-[20px] leading-[25px]">
                Каталог
              </h4>

              <div className="flex flex-col gap-2">
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/akcii"
                >
                  Акции
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/uslugi"
                >
                  Услуги
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/ceny"
                >
                  Цены
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h4 className="font-[600] text-white text-[20px] leading-[25px]">
                Контакты
              </h4>
              <div className="flex flex-col gap-2 text-[#B3B3B3]">
                <a href="#" className="flex items-center space-x-2 text-nowrap">
                  <MapPin className="h-[20px]" />
                  <span>{contacts.address}</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-nowrap">
                  <Clock7 className="h-[20px]" />
                  <span>{contacts.schedule}</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-nowrap">
                  <Phone className="h-[20px]" />
                  <span>{contacts.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <DialogForm>
            <Button variant="white" className="md:hidden w-full ">
              Записаться онлайн
            </Button>
          </DialogForm>
        </div>
      </Container>

      <div className="hidden md:flex md:flex-col h-[52px] border-t border-[#5E5E5E] bg-[#353535]">
        <Separator className="bg-[#5E5E5E] mb-[8px]" />
        <Container className="flex items-center justify-between w-full">
          {/* <div > */}
          <div className="flex items-center gap-4 h-full px-[20px] lg:px-0">
            <Link
              className="text-[#979797] font-medium text-[14px] leading-[18px] tracking-tight"
              href="/"
            >
              Публичная аферта
            </Link>
            <Link
              className=" text-[#979797] font-medium text-[14px] leading-[18px] tracking-tight"
              href="/"
            >
              Пользовательское соглашение
            </Link>
          </div>
          <div className="flex items-center gap-[9px] rounded-[100px] p-[3px] bg-[#414141] w-[191px h-[36px]">
            <div className="flex items-center font-['Jeko'] font-semibold ps-[16px] text-[#787878] text-[12px] leading-[14.82px]">
              разработано
            </div>
            <a href="https://creatin.ru/">
              <div className="flex items-center rounded-[100px] w-[82px] h-[30px] py-[10px] px-[18px] bg-[#353535]">
                <CretinLogo />
              </div>
            </a>
          </div>
          {/* </div> */}
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
