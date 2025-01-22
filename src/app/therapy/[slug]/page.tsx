"use client";

import { Banner } from "@/components/banner";
import { GetConsultCard } from "@/components/cards/get-consult-card";
import { ServiceCardItem } from "@/components/cards/service-card-item";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Loader } from "@/components/ui/loader";
import { useGetServiceById } from "@/shared/hooks/services/useGetServiceById";
import { useGetServicesBlocksFilterByServices } from "@/shared/hooks/services/useGetServicesBlocksFilterByServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function Page({ params }: { params: { slug: string } }) {
  const { data: service, isLoading } = useGetServiceById({ id: params.slug });

  const { data: serviceBlocks, isLoading: isLoadingBlocks } =
    useGetServicesBlocksFilterByServices({ id: params.slug });

  if (isLoading || isLoadingBlocks) {
    return <Loader />;
  }

  if (!service?.services_by_id) {
    return notFound();
  }

  return (
    <>
      <section className="section">
        <div className="container  mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col gap-y-[60px] md:flex-row mb-[72px] md:mb-[78px] lg:mb-[100px]">
            <div className="w-full">
              <div className=" mb-[36px] md:mb-[48px] lg:mb-[71px] ">
                <div className="flex justify-between">
                  <div className="md:max-w-[397px] lg:max-w-[718px]">
                    <h1 className="mb-[12px] md:mb-[16px] lg:mb-[24px]">
                      {service.services_by_id.title}
                    </h1>
                    <p>{service.services_by_id.description}</p>
                  </div>
                  <div className="hidden md:block lg:hidden">
                    <GetConsultCard
                      title={service.services_by_id.title}
                      regularPrice={service.services_by_id.price}
                      newPrice={
                        service.services_by_id.sale
                          ? service.services_by_id.price +
                            (service.services_by_id.price / 100) *
                              service.services_by_id.sale
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[36px] md:gap-[48px] lg:gap-[64px]">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => {
                      return <p>{children}</p>;
                    },

                    img: ({ src }) => {
                      return (
                        <div className="w-[350px] h-[467px] md:w-[377px] md:h-[416px] xl:w-[396px] xl:h-[418px] overflow-hidden group">
                          {src && (
                            <Image
                              width={380}
                              height={418}
                              src={src}
                              alt={"altText"}
                              className="h-full w-full object-cover transition-transform duration-300 rounded-[8px]"
                            />
                          )}
                        </div>
                      );
                    },

                    ul: ({ children }) => {
                      return (
                        <ul className="flex flex-col items-center justify-center md:flex-row lg:justify-start gap-y-4 gap-x-5">
                          {children}
                        </ul>
                      );
                    },
                  }}
                >
                  {service.services_by_id.info}
                </ReactMarkdown>
              </div>
            </div>
            <div className="md:hidden lg:block relative w-full ">
              <div className="xl:sticky top-[100px] md:max-w-fit mx-auto md:ml-auto">
                <GetConsultCard
                  title={service.services_by_id.title}
                  regularPrice={service.services_by_id.price}
                  newPrice={
                    service.services_by_id.sale
                      ? service.services_by_id.price +
                        (service.services_by_id.price / 100) *
                          service.services_by_id.sale
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
          {serviceBlocks?.servicesBlock[0] &&
            serviceBlocks.servicesBlock[0].allServices.length > 1 && (
              <>
                <h3 className="mb-[20px] md:mb-[24px] ">Другие услуги</h3>

                <SliderWrapper
                  btns={{
                    next: "services-next",
                    prev: "services-prev",
                  }}
                >
                  {serviceBlocks?.servicesBlock[0].allServices
                    .filter((item) => item.id !== params.slug)
                    .map((item) => (
                      <ServiceCardItem key={item.id} card={item} />
                    ))}
                </SliderWrapper>
              </>
            )}
        </div>

        {/* <div className="container mx-auto max-w-[1364px] px-[20px]"></div> */}
      </section>

      {service.services_by_id.baner && (
        <section className="bg-[#EBEFF3] lg:py-[100px]">
          <Banner
            imageUrl={service.services_by_id.baner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        </section>
      )}
    </>
  );
}
