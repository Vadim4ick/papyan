"use client";

import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Banner } from "@/components/banner";
import { useGetHomePage } from "@/shared/hooks/services/pages/useGetHomePage";
import { ServicesClinic } from "@/components/services-clinic";
import { countFileTypes, pathImage } from "@/shared/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { Loader } from "@/components/ui/loader";

export type ImageType = {
  directus_files_id: {
    id: string;
    title: string;
    width: number | null;
    type: string;
    height: number | null;
  };
};

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useGetHomePage();
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesClinic();

  if (isLoading || isLoadingServices) {
    return <Loader className="size-[35px]" />;
  }

  const typeCounts = countFileTypes(
    data?.home_page.sliderClinik as ImageType[]
  );

  return (
    <>
      <section className="bg-[#EBEFF3] lg:pt-[36px] lg:pb-[100px]">
        {data?.home_page.mainBaner && (
          <Banner
            imageUrl={data.home_page.mainBaner}
            hight={"h-screen lg:max-h-[727px]"}
          />
        )}
      </section>

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78p] lg:pb-[100px] ">
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
                    cardHeight=" xl:h-[238px] md:h-[187px] h-[199px]"
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

      <section className="bg-[#EBEFF3] lg:py-[100px]">
        {data?.home_page.infoBaner && (
          <Banner
            imageUrl={data.home_page.infoBaner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        )}
      </section>

      {data && data?.home_page.sliderClinik.length > 0 && (
        <section className="pb-[72px] pt-[32px] md:pb-[78px] md:pt-[48px] lg:py-[100px]">
          <div className="container mx-auto max-w-[1364px] px-[20px]">
            <div className="flex flex-col md:flex-row justify-between mb-[28px] md:mb-[84px] lg:mb-[118px] ">
              <div>
                <h2 className="mb-[12px] md:mb-[32px] md:text-[36px] md:leading-[45px]">
                  Клиника Доктора Папяна
                </h2>
                <Button
                  variant="secondary"
                  onClick={() => router.push(`/oklinike/`)}
                  className="hidden md:flex"
                >
                  О клинике{" "}
                  <span className="ms-[5px] mt-[3px]">
                    <ChevronRight width={17} />
                  </span>
                </Button>
              </div>

              <p className="text-[#595959] text-[16px] leading-[22px] md:max-w-[377px] lg:max-w-[540px]">
                Цель текста на сайте — привлечь пациента из поисковых систем и
                убедить его в том, что ему нужна именно эта услуга и именно в
                вашей клинике. Хорошая статья показывает компетентность врачей,
                надежность клиники, и даже ее уровень оснащенности. И все это не
                через голословные утверждения, а через заботу и пользу для
                пациента.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => router.push(`/oklinike/`)}
              className="mb-[72px] md:hidden"
            >
              О клинике{" "}
              <span className="ms-[5px] mt-[3px]">
                <ChevronRight width={17} />
              </span>
            </Button>
            {data?.home_page.sliderClinik.length > 0 && (
              <div className="">
                <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
                  <BadgeWithIcon
                    className="bg-[#EBEFF3]"
                    variant="video"
                    tittle={"Видео"}
                    quantity={typeCounts?.videoCount}
                  />
                  <BadgeWithIcon
                    className="bg-[#EBEFF3]"
                    variant="photo"
                    tittle={"Фото"}
                    quantity={typeCounts?.imageCount}
                  />
                </div>
                <SliderWrapper myClass="main" slideWidth="!w-[298px] md:!w-[311px] lg:!w-[316px]" className="h-[434px] md:h-[467px] xl:h-[474px]">
                  {data?.home_page.sliderClinik.map(({ directus_files_id }) => {
                    const isVideo =
                      directus_files_id.type?.startsWith("video/");

                    return isVideo ? (
                      <video
                        key={directus_files_id.id}
                        autoPlay
                        muted
                        playsInline
                        loop
                        width={directus_files_id.width || 289}
                        height={directus_files_id.height || 434}
                        className="h-full w-full object-cover"
                      >
                        <source
                          src={pathImage(directus_files_id.id)}
                          type={directus_files_id.type}
                        />
                      </video>
                    ) : (
                      <Image
                        key={directus_files_id.id}
                        width={directus_files_id.width || 289}
                        height={directus_files_id.height || 434}
                        src={pathImage(directus_files_id.id)}
                        alt={directus_files_id.title}
                        className="h-full w-full object-cover"
                      />
                    );
                  })}
                </SliderWrapper>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
