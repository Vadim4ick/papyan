"use client"
import { navbar } from "@/shared/const/const";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-start text-sm font-medium lg:flex-row lg:h-10 py-2 bg-[#EDF1F5] rounded-lg">
      {navbar.map((item) => {
        const isActive = pathname === item.path;

        return (
          <div key={item.id} className="h-full w-full lg:w-[132px] lg:flex lg:justify-between ">
            <Link
              onClick={onLinkClick}
              className={`flex items-center justify-center py-[11px] mx-auto lg:w-max
                text-[24px] tracking-tight md:text-[32px] md:leading-[42px] lg:text-[14px] lg:leading-[19px] 
                ${isActive ? 'text-[#0084FF]' : 'text-[#454545]'} // Активный элемент
                hover:text-[#929292] // Ховер эффект
              `}
              href={item.path}
            >
              <span className="flex-1">{item.title}</span>
              <ChevronRight className="h-[22px] md:h-[24px] lg:hidden" />
            </Link>
            
            {navbar.indexOf(item) < navbar.length - 1 && (
              <Separator orientation="vertical" className="hidden lg:block h-6" />
            )}
            {navbar.indexOf(item) < navbar.length - 1 && (
              <Separator
                orientation="horizontal"
                className="z-50 lg:hidden bg-[#DEE2E5]"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export { Navbar };

