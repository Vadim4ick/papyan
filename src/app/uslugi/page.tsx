"use client";
import { Banner } from "@/components/banner";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { SectionHeader } from "@/components/section-header";
import { useGetServicesPage } from "@/shared/hooks/services/pages/useGetServicesPage";
import { useGetServicesBloks } from "@/shared/hooks/services/useGetServicesBlocks";

export default function Uslugi() {
  const { data } = useGetServicesPage();

  const { data: services } = useGetServicesBloks();

  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title={data?.services_page.title || ""}
            description={data?.services_page.description || ""}
          />

          {services?.servicesBlock.map((el) => (
            <CatigoryWrapper key={el.id} className="mb-[78px]" category={el} />
          ))}
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
