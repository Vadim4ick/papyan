"use client";
import { Banner } from "@/components/banner";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { SectionHeader } from "@/components/section-header";
import { Loader } from "@/components/ui/loader";
import { useGetServicesPage } from "@/shared/hooks/services/pages/useGetServicesPage";
import { useGetServicesBloks } from "@/shared/hooks/services/useGetServicesBlocks";

export default function Uslugi() {
  const { data, isLoading: isLoadingPage } = useGetServicesPage();

  const { data: services, isLoading } = useGetServicesBloks();

  if (isLoadingPage || isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <section className="section">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[32px] md:mb-[48px] lg:mb-[40px]"
            title={data?.services_page.title || ""}
            description={data?.services_page.description || ""}
          />

          <div className="flex flex-col gap-[78px] max-md:gap-[60px]">
            {services?.servicesBlock.map((el) => (
              <CatigoryWrapper key={el.id} category={el} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBEFF3] lg:py-[100px]">
        {data?.services_page.baner && (
          <Banner
            imageUrl={data?.services_page.baner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        )}
      </section>
    </div>
  );
}
