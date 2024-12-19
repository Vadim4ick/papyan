"use client";

import { CategoriesGalery } from "@/components/cards/categories-galery";
import { DiscountCard } from "@/components/cards/discount-card";
import { SectionHeader } from "@/components/section-header";
import { ServicesClinic } from "@/components/services-clinic";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useGetStockPage } from "@/shared/hooks/services/pages/useGetStockPage";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Akcii() {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  const { data } = useGetStockPage();

  const { data: services, isLoading } = useGetServicesClinic();

  const router = useRouter();

  const items = data?.stock_page.stockItems || [];

  let rows = [items.slice(0, 2), items.slice(2, 4), items.slice(4)];

  if (isTablet) {
    rows = [
      items.slice(0, 1),
      items.slice(1, 3),
      items.slice(3, 4),
      items.slice(4),
    ];
  }

  if (isLoading) {
    return <Loader className="size-[35px]" />;
  }

  return (
    <section className="section">
      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <SectionHeader
          className="mb-[20px]"
          title={data?.stock_page.title || ""}
          description={data?.stock_page.description || ""}
        />
      </div>

      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <h1>{isTablet}</h1>
        <div className="flex flex-wrap gap-4 ">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap gap-4 w-full justify-between ${
                rowIndex % 2 === 1 ? "" : "flex-row-reverse"
              } flex gap-4`}
            >
              {row.map((card, index) => (
                <DiscountCard
                  key={index}
                  card={card}
                  className={`text-center text-xl font-extrabold 
                  ${
                    isTablet
                      ? rowIndex === 0
                        ? "w-[100%] md:wide"
                        : rowIndex === 1
                          ? "w-full md:w-[48%]"
                          : rowIndex === 2
                            ? "w-[100%] md:wide"
                            : "w-full md:w-[48%]"
                      : rowIndex === 2
                        ? "w-[32%]"
                        : index === 0
                          ? "w-[66%] wide"
                          : "w-[32%]"
                  }
                `}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <ServicesClinic
          title={services?.servicesClinic.title}
          description={services?.servicesClinic.description}
          services={services}
        />

        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          {services && services?.servicesClinic.dopServices.length > 0 && (
            <div className="flex flex-col md:flex-row gap-y-[24px] items-center gap-x-[26px] overflow-x-auto">
              {services?.servicesClinic.dopServices.map(
                ({ servicesBlock_id }) => (
                  <CategoriesGalery
                    key={servicesBlock_id.id}
                    category={servicesBlock_id}
                    cardWidth="w-[350px] md:w-[377px] xl:w-[380px]"
                    cardHeight="h-[238px] md:h-[187px] xl:h-[199px]"
                  />
                )
              )}
            </div>
          )}
          <Button variant="secondary" onClick={() => router.push(`/uslugi/`)}>
            Все услуги{" "}
            <span className="ms-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </Button>
        </div>
      </section>
    </section>
  );
}
