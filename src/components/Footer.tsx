import Link from "next/link";
import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Clock7, MapPin, Phone } from "lucide-react";
import { ContactData } from "@/shared/const/moc-data";
import { Separator } from "./ui/separator";

const contacts = ContactData;

const Footer = () => {
  return (
    <footer className="min-h-[360px] bg-[#353535] py-[70px] ">
      <Container className="container">
        <div className="flex flex-col items-center justify-between gap-y-[65px] lg:flex-row mb-[64px] lg:px-0">
          <div className="w-full lg:max-w-fit flex md:flex-row lg:flex-col gap-4 lg:gap-y-[58px] justify-between">
            <LogoFooter />
            <Button variant="white" className="hidden md:block">
              Записаться онлайн
            </Button>
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
                  href="/"
                >
                  О клинике
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/"
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
                  href="/"
                >
                  Акции
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/"
                >
                  Услуги
                </Link>
                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/"
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

          <Button variant="white" className="md:hidden w-full ">
            Записаться онлайн
          </Button>
        </div>
      </Container>

      <div className="hidden md:flex md:flex-col h-[52px] border-t border-[#5E5E5E] bg-[#353535]">
        <Separator className="bg-[#5E5E5E]" />
        <Container>
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
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
