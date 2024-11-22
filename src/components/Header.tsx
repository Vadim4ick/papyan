import { Logo } from "@/shared/icons/Logo";
import { Container } from "./ui/container";
import Link from "next/link";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <header className="h-[64px] border border-b-[#E8E8E8]">
      <Container className="h-full">
        <div className="flex items-center gap-2 justify-between h-full">
          <Link href={"/"}>
            <Logo />
          </Link>

          <Navbar />
          <div>2</div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
