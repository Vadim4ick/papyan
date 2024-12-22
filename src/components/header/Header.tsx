"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/shared/icons/Logo";
import { Navbar } from "./Navbar";
import "./header.css";
import { ContactCard } from "../cards/contact-card";
import { ContactData } from "@/shared/const/moc-data";
import { DialogForm } from "../modal/dialog";

const contacts = ContactData;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 bg-white h-[52px] lg:h-[64px] z-50">
        <Container className="relative h-full flex items-center justify-between">
          {/* Навбар для десктопа */}
          <div className="hidden absolute w-full lg:flex flex-1 justify-center z-50 ">
            <Navbar onLinkClick={closeMenu} />
          </div>
          
          {/* Логотип */}
          <Link href={"/"} className="flex z-50">
            <Logo />
          </Link>


          {/* Кнопка "Записаться онлайн" для десктопа */}
          <div className="hidden lg:flex z-50">
            <DialogForm>
              <Button variant="default">Записаться онлайн</Button>
            </DialogForm>
          </div>

          {/* Кнопка бургер для мобильного меню */}
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50"
            variant="ghost"
          >
            <Menu className="h-6 w-6" />
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
        <div className="pt-[160px] px-[30px] lg:hidden">
          <Navbar onLinkClick={closeMenu} />
        </div>
      </div>

      {/* Плавно появляющаяся кнопка внизу */}
      <div
        className={`fixed bottom-0 left-0 p-4 w-full flex justify-center  z-40 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 block"
        } button-transition`}
      >
        <div className="flex flex-col items-center gap-[32px] lg:hidden">
          <ContactCard
            address={contacts.address}
            schedule={contacts.schedule}
            phone={contacts.phone}
          />
          <DialogForm>
            <Button variant="default" className="w-full">
              Записаться онлайн
            </Button>
          </DialogForm>
        </div>
      </div>
    </>
  );
};

export { Header };
