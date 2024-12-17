import { navbar } from "@/shared/const/const";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

interface NavbarProps {
  onLinkClick?: () => void; // Функция, которая вызывается при клике на ссылку
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  return (
    <nav className="flex flex-col items-start text-sm font-medium lg:flex-row  lg:h-10 py-2 bg-[#EDF1F5] rounded-lg">
      {navbar.map((item, index) => (
        <div key={item.id} className="h-full w-full lg:w-[132px] lg:flex lg:justify-between ">
          <Link
            onClick={onLinkClick} // Закрываем меню при клике
            className="text-[#454545] font-semibold leading-[32px] text-[24px] tracking-tight py-[11px] mx-auto flex items-center justify-center lg:w-max
                        md:text-[32px] md:leading-[42px] md:mb-24px lg:text-[14px] lg:leading-[19px] 
            "
            href={item.path}
          >
            <span className="flex-1">{item.title}</span>
            <ChevronRight className="h-[22px] md:h-[24px] lg:hidden" />
          </Link>
          
          {index < navbar.length - 1 && (
            <Separator orientation="vertical" className="hidden lg:block h-6" />
          )}
          {index < navbar.length - 1 && (
            <Separator
              orientation="horizontal"
              className="z-50 lg:hidden bg-[#DEE2E5]"
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export { Navbar };
