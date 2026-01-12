"use client";
import { navbar } from "@/shared/const/const";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useGetServicesBloks } from "@/shared/hooks/services/useGetServicesBlocks";

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const pathname = usePathname();

  const { data: services } = useGetServicesBloks();

  return (
    <nav className="flex flex-col items-start text-sm group/nav font-medium lg:flex-row lg:h-10 py-2 bg-[#EDF1F5] rounded-lg transition-all gap-y-[25px] ">
      {navbar.map((item) => {
        const isActive = pathname === item.path;

        if (item.children) {
          return (
            <div
              key={item.id}
              className="relative h-full w-full lg:w-[102px] lg:flex lg:justify-between group/services"
            >
              <Link
                onClick={onLinkClick}
                href={item.path}
                className={clsx(
                  `flex items-center justify-center py-[11px] mx-auto lg:w-full text-center 
   text-[20px] tracking-tight md:text-[20px] md:leading-[42px] 
   lg:text-[13px] lg:leading-[19px] transition-all
   max-md:pb-[16px] max-md:pt-[0]
   group-hover/services:text-[#454545] 
   group-hover/nav:text-[#929292]`,
                  {
                    "md:text-[#0084FF]": isActive,
                  }
                )}
              >
                <span className="flex-1 max-lg:text-start max-md:text-[#353535]">
                  {item.title}
                </span>
                <ChevronRight className="h-[22px] md:h-[24px] lg:hidden" />
              </Link>

              {/* DROPDOWN (desktop only) */}
              {services?.servicesBlock && (
                <div
                  className="
          absolute top-full pt-1 left-1/2 -translate-x-1/2
          hidden group-hover/services:block
          z-50
          min-w-[220px]
          rounded-lg
          max-lg:hidden
        "
                >
                  <div
                    className="
          bg-white
          shadow-lg
          rounded-lg
          py-2
        "
                  >
                    {services?.servicesBlock.map((child) => (
                      <Link
                        key={child.id}
                        href={"/uslugi/" + child.id}
                        className="
              block px-3 py-1.5
              hover:bg-[#EDF1F5]
              transition
            "
                      >
                        <span className="text-[12px] text-[#353535]">
                          {" "}
                          {child.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {navbar.indexOf(item) < navbar.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden lg:block h-6"
                />
              )}
              {navbar.indexOf(item) < navbar.length - 1 && (
                <Separator
                  orientation="horizontal"
                  className="z-50 lg:hidden bg-[#DEE2E5]"
                />
              )}
            </div>
          );
        }

        return (
          <div
            key={item.id}
            className="h-full w-full lg:w-[102px] lg:flex lg:justify-between "
          >
            {item.download ? (
              <a
                download
                className={clsx(
                  `flex items-center justify-center py-[11px] mx-auto lg:w-full text-center 
                text-[20px] tracking-tight md:text-[20px] md:leading-[42px] lg:text-[13px] lg:leading-[19px] transition-all
                group-hover/nav:text-[#929292] hover:!text-[#454545] max-md:pb-[16px] max-md:pt-[0]
              `,
                  {
                    "md:text-[#0084FF]": isActive,
                    "md:text-[#454545]": !isActive,
                  }
                )}
                href={item.path}
              >
                <span className="flex-1 max-lg:text-start max-md:text-[#353535]">
                  {item.title}
                </span>
                <ChevronRight className="h-[22px] md:h-[24px] lg:hidden" />
              </a>
            ) : (
              <Link
                onClick={onLinkClick}
                className={clsx(
                  `flex items-center justify-center py-[11px] mx-auto lg:w-full text-center 
                text-[20px] tracking-tight md:text-[20px] md:leading-[42px] lg:text-[13px] lg:leading-[19px] transition-all
                group-hover/nav:text-[#929292] hover:!text-[#454545] max-md:pb-[16px] max-md:pt-[0]
              `,
                  {
                    "md:text-[#0084FF]": isActive,
                    "md:text-[#454545]": !isActive,
                  }
                )}
                href={item.path}
              >
                <span className="flex-1 max-lg:text-start max-md:text-[#353535]">
                  {item.title}
                </span>
                <ChevronRight className="h-[22px] md:h-[24px] lg:hidden" />
              </Link>
            )}

            {navbar.indexOf(item) < navbar.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden lg:block h-6"
              />
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
