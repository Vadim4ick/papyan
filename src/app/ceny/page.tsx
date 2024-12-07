"use client";

import { SectionHeader } from "@/components/section-header";
import { ServicesCostsWrapper } from "@/components/services-cost/services-costs-wrapper";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Banner } from "@/components/banner";
import { useGetCenyPage } from "@/shared/hooks/services/pages/useGetCenyPage";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { ServicesClinic } from "@/components/services-clinic";

export default function Ceny() {
  const router = useRouter();

  const { data: cenyPage, isLoading: cenyPageLoading } = useGetCenyPage();
  const { data: services } = useGetServicesClinic();

  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px]"
            title={cenyPage?.ceny_page.title || ""}
            description={cenyPage?.ceny_page.description}
            isLoading={cenyPageLoading}
          />

          {cenyPageLoading && (
            <div className="flex flex-col gap-y-[8px] mb-[60px] md:mb-[64px] lg:mb-[48px]">
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
            </div>
          )}

          {cenyPage?.ceny_page.blocks &&
            cenyPage.ceny_page.blocks.map((category) => (
              <ServicesCostsWrapper
                key={category.id}
                category={category.servicesBlock_id}
              />
            ))}
        </div>
      </section>

      {cenyPage?.ceny_page.banner && (
        <Banner
          imageUrl={cenyPage.ceny_page.banner}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      )}

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78px] lg:pb-[100px]">
        <ServicesClinic />

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
    </div>
  );
}
