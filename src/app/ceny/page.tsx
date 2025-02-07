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
      <section className="section">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[32px] md:mb-[40px]"
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

      <section className="bg-[#EBEFF3] lg:py-[100px]">
        {cenyPage?.ceny_page.banner && (
          <Banner
            imageUrl={cenyPage.ceny_page.banner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        )}
      </section>

      <section className="section">
        <ServicesClinic
          title={services?.servicesClinic.title}
          description={services?.servicesClinic.description}
          services={services}
        />

        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          {services && services?.servicesClinic.dopServices.length > 0 && (
            <div className="flex flex-col md:flex-row gap-y-[24px] max-md:w-full items-center gap-x-[26px] overflow-x-auto">
              {services?.servicesClinic.dopServices.map(
                ({ servicesBlock_id }) => (
                  <CategoriesGalery
                    bages={false}
                    key={servicesBlock_id.id}
                    category={servicesBlock_id}
                    cardWidth="w-full md:w-[377px] xl:w-[380px]"
                    cardHeight="h-[199px] md:h-[187px] xl:h-[199px]"
                  />
                )
              )}
            </div>
          )}
          <Button
            motionProps={{
              stiffness: 142.2,
              damping: 26.67,
              mass: 1,
            }}
            className="duration-450"
            variant="secondary"
            onClick={() => router.push(`/uslugi/`)}
          >
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
