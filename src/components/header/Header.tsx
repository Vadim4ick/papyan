import { Logo } from "@/shared/icons/Logo";
import { Container } from "../ui/container";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[64px] border border-b-[#E8E8E8] sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="h-full flex items-center">
        <div className="mr-2 lg:hidden">
          <Sheet >

            <SheetTrigger asChild>
              <Button variant="arrow">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col bg-[#EBEFF3]">
              <SheetHeader className=" mb-5 border-b pb-5">
                <Logo />
              </SheetHeader>
              <div className="flex-1 lg:hidden">
              <Navbar />
              </div>
              <SheetFooter>
                <Button variant="secondary" className="w-full" >Записаться онлайн</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <Link className="mr-4 hidden lg:flex" href={"/"}>
          <Logo />
        </Link>

        <div className="hidden lg:flex flex-1 justify-center">
          <Navbar />
        </div>

        <div className="hidden lg:flex">
          <Button variant="secondary">Записаться онлайн</Button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
