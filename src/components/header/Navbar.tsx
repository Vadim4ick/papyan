import { navbar } from "@/shared/const/const";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
  
  return (
    <nav className="flex flex-col items-start text-sm font-medium lg:flex-row lg:space-x-4">
      {navbar.map((item, index) => (
        <div key={item.id} className="h-full w-full lg:flex ">
          <Link
            className="text-[#454545] font-semibold leading-[32px] text-[24px] tracking-tight py-[11px] lg:px-[45px] w-full flex items-center justify-center lg:w-max
                        md:text-[32px] md:leading-[42px] md:mb-24px lg:text-[14px] lg:leading-[19px] 
            "
            href={item.path}
          >
            {" "}
            <span className="flex-1">{item.title}</span>
            <ChevronRight className="h-[22px] md:h-[24px] lg:hidden"/>
          </Link>
          {index < navbar.length - 1 && <Separator orientation="vertical" className="hidden lg:block" />}
          {index < navbar.length - 1 && <Separator orientation="horizontal" className="lg:hidden"/>}
        </div>
      ))}
    </nav>
  );
};

export { Navbar };
