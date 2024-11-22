import { navbar } from "@/shared/const/const";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center gap-4 bg-[#EBEFF3] rounded-[8px]">
        {navbar.map((item) => (
          <Link
            className="text-[#454545] font-semibold leading-[19px] text-[14px] tracking-[0.28px] py-[11px] px-[45px] relative before:w-[1px] before:h-[24px] last:before:content-none before:bg-[#DEE2E5] before:absolute before:right-[2px] before:top-1/2 before:-translate-y-1/2"
            key={item.id}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
