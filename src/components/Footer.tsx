import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import Link from "next/link";
import { Location } from "@/shared/icons/Location";
import { Time } from "@/shared/icons/Time";
import { Phone } from "@/shared/icons/Phone";

const Footer = () => {
  return (
    <footer className="min-h-[360px] bg-[#353535]">
      <Container className="h-full">
        <section className="flex flex-col items-center justify-between gap-y-3 lg:flex-row ">
        {/* <div className="flex justify-between gap-2 pt-[72px]"> */}
          <div className="flex flex-col gap-4 justify-between">
            <LogoFooter />

            <Button className="bg-white text-[#353535] h-[40px] w-full max-w-[180px]">
              Записаться онлайн
            </Button>
          </div>

          <div className="flex gap-[128px] flex-wrap">
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

            <div className="flex flex-col gap-[32px]">
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
                <div className="flex items-center gap-1">
                  <Location />
                  Краснодар, Постовая улица, 23
                </div>

                <div className="flex items-center gap-1">
                  <Time />
                  Пн-Сб: 08:00—20:00
                </div>

                <div className="flex items-center gap-1">
                  <Phone />
                  +7 (918) 232-13-13
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        </section>
      </Container>

      <div className="h-[52px] border-t border-[#5E5E5E] bg-[#353535]">
        <Container className="h-full">
          <div className="flex items-center gap-4 h-full">
            <Link
              className="text-[#979797] font-medium text-[14px] leading-[18px] tracking-[0.28px]"
              href="/"
            >
              Публичная аферта
            </Link>
            <Link
              className="text-[#979797] font-medium text-[14px] leading-[18px] tracking-[0.28px]"
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
