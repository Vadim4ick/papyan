"use client";

import Link from "next/link";
import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Clock7, MapPin, Phone } from "lucide-react";
import { ContactData } from "@/shared/const/moc-data";
import { Separator } from "./ui/separator";
import { CretinLogo } from "@/shared/icons/Creatin";
import { DialogForm } from "./modal/dialog";
import { motion, Variants } from "framer-motion";

const contacts = ContactData;

const developedVariants: Variants = {
  rest: { y: 9, opacity: 1 },
  hover: { y: -20, opacity: 0 },
};

const goVariants = {
  rest: { y: 20, opacity: 0 },
  hover: { y: 9, opacity: 1 },
};

const parentVariants = {
  rest: {},
  hover: {
    backgroundColor: "#292929",
  },
};

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

          <motion.div
            variants={parentVariants}
            initial="rest"
            whileHover="hover"
            className="relative flex items-center gap-[9px] rounded-[100px] p-[3px] bg-[#414141] w-[191px] h-[36px]"
            style={{ overflow: "hidden" }}
          >
            <div className="relative flex-1 h-full">
              <motion.div
                variants={developedVariants}
                transition={{ duration: 0.3 }}
                className="absolute left-[14px] -top-[2px] flex items-center font-['Jeko'] font-semibold text-[#787878] text-[12px] leading-[14.82px]"
              >
                разработано
              </motion.div>

              <motion.div
                variants={goVariants}
                transition={{ duration: 0.3 }}
                className="absolute left-4 font-['Jeko'] font-semibold text-[#787878] text-[12px] leading-[14.82px]"
              >
                <a
                  className="ext-[12px] leading-[14.82px] text-white flex items-center gap-[3px]"
                  target="_blank"
                  href="https://creatin.ru/"
                >
                  Перейти
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.52057 7.28326L0.717035 6.47973L5.53822 1.65855L1.1188 1.65855L1.1188 0.517535L7.48276 0.517534L7.48276 6.8815L6.34175 6.8815L6.34175 2.46208L1.52057 7.28326Z"
                      fill="#C0FF00"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            <div className="flex items-center rounded-[100px] w-[82px] h-[30px] py-[10px] px-[18px] bg-[#353535]">
              <CretinLogo />
            </div>
          </motion.div>
          {/* </div> */}
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
