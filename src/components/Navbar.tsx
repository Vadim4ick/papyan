import { navbar } from "@/shared/const/const";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-start text-sm font-medium lg:flex-row lg:space-x-4">
      {/* <div className="flex items-center gap-4 bg-[#EBEFF3] rounded-[8px]"> */}
      {navbar.map((item, index) => (
        <div key={item.id} className="h-full w-full flex ">
          <Link
            className="text-[#454545] font-semibold leading-[19px] text-[14px] tracking-[0.28px] py-[11px] lg:px-[45px] w-full flex lg:w-max"
            href={item.path}
          >
            {" "}
            <span className="flex-1">{item.title}</span>
            <ChevronRight width={20} className="lg:hidden"/>
          </Link>
          {index < navbar.length - 1 && <Separator orientation="vertical" />}
        </div>
      ))}
      {/* </div> */}
    </nav>
  );
};

export { Navbar };
