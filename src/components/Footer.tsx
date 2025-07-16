"use client";

import Link from "next/link";
import { LogoFooter } from "@/shared/icons/LogoFooter";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Clock7, MapPin, Phone } from "lucide-react";
import { ContactData } from "@/shared/const/moc-data";
import { Separator } from "./ui/separator";
import { CretinLogo } from "@/shared/icons/Creatin";
// import { DialogForm } from "./modal/dialog";
import { motion, Variants } from "framer-motion";

const contacts = ContactData;

const animate = {
  transition: {
    type: "spring",
    stiffness: 180,
    damping: 30,
    mass: 1,
  },
};

const developedVariants: Variants = {
  rest: {
    y: 11,
    opacity: 1,

    ...animate,
  },

  hover: {
    y: -20,
    opacity: 0,
    ...animate,
  },
};

const goVariants = {
  rest: {
    y: 20,
    opacity: 0,

    ...animate,
  },

  hover: {
    y: 10,
    opacity: 1,
    ...animate,
  },
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
      <Container className="max-md:px-[40px]">
        <div className="flex flex-col items-center justify-between gap-y-[64px] lg:flex-row mb-[72px] lg:mb-[85px] lg:px-0">
          <div className="w-full lg:max-w-fit flex md:flex-row lg:flex-col gap-4 lg:gap-y-[58px] justify-between max-md:justify-center">
            <LogoFooter className="max-md:h-[62px] max-md:w-[310px]" />

            <Link
              target="_blank"
              href="https://booking.medflex.ru?user=f30838ef8e59df310c6ad309493205ba"
            >
              <Button
                variant="white"
                className="hidden md:block duration-350 ease-out"
              >
                Записаться онлайн
              </Button>
            </Link>
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
                  href="/uslugi"
                >
                  Услуги
                </Link>

                <Link
                  className="font-[600] text-[#B3B3B3] leading-[22px]"
                  href="/oklinike"
                >
                  О клинике
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
                <div className="flex items-center space-x-2 text-nowrap">
                  <MapPin className="h-[20px]" />
                  <span>{contacts.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-nowrap">
                  <Clock7 className="h-[20px]" />
                  <span>{contacts.schedule}</span>
                </div>
                <a
                  href={`tel:${contacts.phone}`}
                  className="flex items-center space-x-2 text-nowrap"
                >
                  <Phone className="h-[20px]" />
                  <span>{contacts.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <Link
            target="_blank"
            href="https://booking.medflex.ru?user=f30838ef8e59df310c6ad309493205ba"
          >
            <Button
              variant="white"
              className="md:hidden ease-out w-full h-[48px] duration-350"
            >
              Записаться онлайн
            </Button>
          </Link>
        </div>
      </Container>

      <div className="flex flex-col md:h-[52px] border-t border-[#5E5E5E] bg-[#353535]">
        <Separator className="bg-[#5E5E5E] mb-[8px] max-md:hidden" />

        <Container className="flex items-center justify-between w-full max-md:flex-col max-md:pb-[36px] max-md:pt-[32px] max-md:gap-[48px]">
          <div className="flex items-center gap-4 max-md:flex-col h-full px-[20px] lg:px-0 max-md:w-full max-md:gap-3">
            <a
              download
              className=" text-[#979797] font-medium text-[14px] leading-[18px] tracking-tight"
              href="/обработка_персональных_данных.pdf"
            >
              Обработка персональных данных
            </a>
          </div>

          <div className="md:hidden flex flex-col gap-2 items-center">
            <div className="font-['Jeko'] font-semibold text-[#979797] text-[12px] leading-[14.82px]">
              разработано
            </div>

            <a
              className="text-[12px] leading-[14.82px] text-white flex items-center gap-[3px]"
              target="_blank"
              href="https://creatin.ru/"
            >
              <svg
                width="116"
                height="24"
                viewBox="0 0 116 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2356_4192)">
                  <path
                    d="M10.325 23.9386C4.87601 23.9386 0.453125 19.3182 0.453125 13.6429C0.453125 7.67645 5.12369 3.41992 10.325 3.41992C13.4741 3.41992 16.3755 5.02067 17.9678 7.38541L14.3941 10.9507C13.5449 9.24082 11.7403 8.51321 10.3604 8.51321C7.88358 8.51321 5.40676 10.4778 5.40676 13.6429C5.40676 16.5169 7.60051 18.8453 10.3604 18.8453C12.1295 18.8453 13.7572 17.7903 14.4294 16.3714L17.9678 19.9367C16.4109 22.3378 13.4741 23.9386 10.325 23.9386Z"
                    fill="white"
                  />
                  <path
                    d="M20.1123 23.5774V4.15076H24.8822V6.40207C25.7788 4.65912 28.5403 4.04183 30.8355 4.15076V9.23437C27.9306 8.72601 25.1332 10.5779 25.1332 13.6281V23.5774H20.1123Z"
                    fill="white"
                  />
                  <path
                    d="M41.9522 23.9386C35.8412 23.9386 31.7295 18.699 31.7295 13.6427C31.7295 8.36654 35.3131 3.38348 41.4618 3.42012C48.1763 3.45676 52.8539 8.58638 50.9677 15.9144H37.501C37.765 17.6731 39.9152 19.3586 42.4803 19.3586C43.876 19.3952 46.2902 18.7723 46.9692 17.8563L50.9677 20.8242C48.9308 23.0592 45.6489 23.9386 41.9522 23.9386ZM37.4632 11.4809H45.7998C45.9884 10.1619 44.8945 7.92686 41.6504 7.92686C38.859 7.92686 37.4632 9.90542 37.4632 11.4809Z"
                    fill="white"
                  />
                  <path
                    d="M63.0239 23.7912C57.3869 23.7912 52.8184 19.2233 52.8184 13.5872C52.8184 7.98781 57.3869 3.41992 63.0239 3.41992C68.624 3.41992 73.1925 7.98781 73.1925 13.5872V23.9386H68.0345V21.5073C66.8924 22.8703 65.0871 23.7912 63.0239 23.7912ZM63.0239 18.6339C65.7871 18.6339 68.0345 16.3868 68.0345 13.5872C68.0345 10.8243 65.7871 8.57722 63.0239 8.57722C60.2238 8.57722 57.9764 10.8243 57.9764 13.5872C57.9764 16.3868 60.2238 18.6339 63.0239 18.6339Z"
                    fill="white"
                  />
                  <path
                    d="M85.8825 23.7584C81.8195 23.7584 75.4913 22.6602 75.4913 15.5583V9.18855H73.7295V4.06346H75.4913V0H80.5251V4.06346H85.1993V9.18855H80.5251V14.4235C80.5251 18.2673 83.3297 18.6334 85.8825 18.6334V23.7584Z"
                    fill="white"
                  />
                  <path
                    d="M88.4854 23.6063V4.13086H93.5944V23.6063H88.4854Z"
                    fill="white"
                  />
                  <path
                    d="M95.7119 23.5786V13.3698C95.7119 7.52564 99.848 3.41992 105.363 3.41992C110.841 3.41992 115.014 7.52564 115.014 13.3698V23.5786H109.934V13.3698C109.934 10.3737 108.084 8.5983 105.363 8.5983C102.642 8.5983 100.791 10.3737 100.791 13.3698V23.5786H95.7119Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2356_4192">
                    <rect
                      width="114.56"
                      height="24"
                      fill="white"
                      transform="translate(0.453125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          <motion.div
            variants={parentVariants}
            initial="rest"
            whileHover="hover"
            className="relative flex items-center gap-[9px] rounded-[100px] p-[3px] bg-[#414141] w-[191px] h-[36px] max-md:hidden"
            style={{ overflow: "hidden" }}
          >
            <div className="relative flex-1 h-full">
              <motion.div
                variants={developedVariants}
                className="absolute left-[14px] top-[-3px] flex items-center font-['Jeko'] font-semibold text-[#787878] text-[12px] leading-[14.82px]"
              >
                разработано
              </motion.div>

              <motion.div
                variants={goVariants}
                className="absolute left-[20px] font-['Jeko'] font-semibold text-[#787878] text-[12px] leading-[14.82px]"
              >
                <a
                  className="text-[12px] leading-[14.82px] text-white flex items-center gap-[3px]"
                  target="_blank"
                  href="https://creatin.ru/"
                >
                  перейти
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
              <a
                className="text-[12px] leading-[14.82px] text-white flex items-center gap-[3px]"
                target="_blank"
                href="https://creatin.ru/"
              >
                <CretinLogo />
              </a>
            </div>
          </motion.div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
