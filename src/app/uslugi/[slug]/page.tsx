/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { CategoriesGalery } from "@/components/cards/categories-galery";
import { ServiceCardsWrapper } from "@/components/cards/serice-cards-wrapper";
import { SectionHeader } from "@/components/section-header";
import { Loader } from "@/components/ui/loader";
import { useGetServicesBlockById } from "@/shared/hooks/services/useGetServicesBlockById";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { pathImage } from "@/shared/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const { data: services, isLoading } = useGetServicesClinic();

  const { data, isLoading: isLoadingBlock } = useGetServicesBlockById({
    id: slug,
  });

  if (isLoading || isLoadingBlock) {
    return <Loader />;
  }

  if (!data?.servicesBlock_by_id) {
    return notFound();
  }

  return (
    <>
      <section className="section">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px] md:mb-[36px]"
            title={data.servicesBlock_by_id.title || ""}
            description={data.servicesBlock_by_id.description || ""}
          />

          <div className="flex flex-col md:flex-row  justify-between md:gap-[40px] xl:gap-[130px]">
            <div className="min-w-[350px] md:w-[357px] xl:w-[380px] mb-[60px] md:mb-[0px]">
              <div className=" h-[262px] ] md:h-[394px]  xl:h-[418px] mb-[36px] md:mb-[48px] overflow-hidden rounded-md group">
                {/* TODO */}
                <img
                  // width={380}
                  // height={418}
                  src={pathImage(data.servicesBlock_by_id.img.id)}
                  alt={"altText"}
                  className="h-full w-full object-cover"
                />
              </div>

              {data.servicesBlock_by_id.descriptionBlock && (
                <p className="text-[#595959] text-[16px] leading-[22px] tracking-[-0.32px]">
                  {" "}
                  {data.servicesBlock_by_id.descriptionBlock}
                </p>
              )}
            </div>

            <ServiceCardsWrapper
              //@ts-ignore
              cardsList={
                services?.servicesClinic.servicesClinic[0].servicesBlock_id
                  .allServices
              }
              showFullList={true}
            />
          </div>
        </div>
      </section>

      {services && services?.servicesClinic.dopServices.length > 0 && (
        <section className="pt-[32px] pb-[72px] md:pt-[48px] md:pb-[78px] xl:pt-[88px] xl:pb-[100px] bg-[#F0F3F8]">
          <div className="container mx-auto max-w-[1364px] px-[20px]">
            <h2 className="mb-[32px] md:mb-[48px]">Другие услуги</h2>

            <div className="flex items-center flex-wrap gap-[26px]">
              {services?.servicesClinic.dopServices.map(
                ({ servicesBlock_id }) => (
                  <CategoriesGalery
                    variantBageBg="white"
                    key={servicesBlock_id.id}
                    category={servicesBlock_id}
                    cardWidth="w-[350px] md:w-[311px] xl:w-[396px]"
                    cardHeight="h-[262px] md:h-[311px] xl:h-[464px]"
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
