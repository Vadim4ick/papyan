"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/shared/icons/Logo";
import { Navbar } from "./Navbar";
import "./header.css";
import { ContactCard } from "../cards/contact-card";
import { ContactData } from "@/shared/const/moc-data";
// import { DialogForm } from "../modal/dialog";

const contacts = ContactData;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [menuOpen]);

  // Вставляем скрипт Medflex один раз при монтировании
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://booking.medflex.ru/components/round/round_widget_button.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.charset = "utf-8";
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <header className="sticky top-0 bg-white h-[52px] lg:h-[64px] z-50 border-b-[1px] border-[#E8E8E8]">
        <Container className="relative h-full flex items-center justify-between">
          {/* Навбар для десктопа */}
          <div className="hidden absolute right-0 w-full lg:flex flex-1 justify-center z-50 ">
            <Navbar onLinkClick={closeMenu} />
          </div>

          {/* Логотип */}
          <Link href={"/"} className="flex z-50">
            <span className="hidden md:block">
              <Logo />
            </span>
            <span className="md:hidden">
              <Logo className="max-h-[40px] max-w-[56.6px]" />
            </span>
          </Link>

          {/* Кнопка "Записаться онлайн" для десктопа */}
          <div className="hidden lg:flex z-50">
            <Link
              target="_blank"
              href="https://booking.medflex.ru?user=f30838ef8e59df310c6ad309493205ba"
            >
              <Button className="duration-350 ease-out" variant="default">
                Записаться онлайн
              </Button>
            </Link>
          </div>

          {/* <div className="hidden lg:flex z-50">
            <div
              id="medflexRoundWidgetData"
              data-src="https://booking.medflex.ru?user=f30838ef8e59df310c6ad309493205ba&isRoundWidget=true"
            ></div>
          </div> */}

          {/* Кнопка бургер для мобильного меню */}
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50"
            variant="ghost"
          >
            {!menuOpen && <Menu className="h-6 w-6" />}

            {menuOpen && (
              <div className="size-6 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L1 15M1 1L15 15"
                    stroke="#353535"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </Button>
        </Container>
      </header>
      {/* Мобильное меню */}
      <div
        className={`fixed z-30 -top-[54px] left-0 w-full h-[calc(100vh+64px)] bg-[#EBEFF3]  ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } menu-transition `}
      >
        {/* Навбар в мобильном меню */}
        <div className="pt-[137px] px-[20px] lg:hidden">
          <Navbar onLinkClick={closeMenu} />
        </div>
      </div>

      {/* Плавно появляющаяся кнопка внизу */}
      <div
        className={`fixed bottom-0 left-0 pb-8 px-5 md:pb-12 w-full flex justify-center z-40 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 block"
        } button-transition`}
      >
        <div className="flex flex-col items-center gap-[32px] lg:hidden max-md:gap-[24px] w-full md:w-[382px]">
          <ContactCard
            address={contacts.address}
            schedule={contacts.schedule}
            phone={contacts.phone}
          />
          <Link
            target="_blank"
            href="https://booking.medflex.ru?user=f30838ef8e59df310c6ad309493205ba"
          >
            <Button
              variant="default"
              className="w-full h-[48px] md:h-[54px] max-md:text-[15px] max-md:leading-[18px] max-md:tracking-[-0.3px]"
            >
              Записаться онлайн
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Header };
