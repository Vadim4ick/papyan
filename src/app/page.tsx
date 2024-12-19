"use client";

import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Banner } from "@/components/banner";
import { useGetHomePage } from "@/shared/hooks/services/pages/useGetHomePage";
import { ServicesClinic } from "@/components/services-clinic";
import { cn, countFileTypes, pathImage } from "@/shared/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { Loader } from "@/components/ui/loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "@/shared/icons/ArrowRight";
import { useState } from "react";
import { useGetProblems } from "@/shared/hooks/services/useGetProblems";
import ImageCardOne from "@/components/cards/image-card-one";

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
  const { data: problems, isLoading: isLoadingProblems } = useGetProblems();

  const [isOpen, setIsOpen] = useState<string>("");

  const handleAccordionChange = (value: string) => {
    setIsOpen(value);
  };

  if (isLoading || isLoadingServices || isLoadingProblems) {
    return <Loader className="size-[35px]" />;
  }

  console.log(problems);

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

      <section className="section">
        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          <div className="flex justify-between w-full gap-[43px] pb-[100px] border-b border-b-[#E8E8E8]">
            <div className="flex flex-col gap-[43px] w-full">
              <h3 className="font-[600] text-[36px] leading-[45px] tracking-[-0.72px]">
                Какая проблема вас беспокоит?
              </h3>

              <Accordion
                value={isOpen}
                onValueChange={handleAccordionChange}
                className="flex flex-col gap-[10px] w-full max-w-[652px]"
                type="single"
                collapsible
              >
                <AccordionItem
                  className="bg-[#F0F3F8] p-[18px] rounded-[8px]"
                  value="item-1"
                >
                  <AccordionTrigger className="p-0 text-[18px] group font-semibold leading-[22px] tracking-[-0.36px]">
                    <p
                      className={cn("text-[#353535]", {
                        "text-[#979797]": isOpen === "item-1",
                        "group-hover:text-[#1467E1]": !isOpen,
                      })}
                    >
                      Cколиоз
                    </p>
                  </AccordionTrigger>

                  <AccordionContent className="p-0 mt-[26px]">
                    <p className="font-semibold text-[22px] leading-[26px] tracking-[-0.44px] mb-[22px]">
                      При сколиозе лучше всего поможет:
                    </p>

                    <div className="flex flex-col gap-[8px] w-full max-w-[548px]">
                      <Link
                        href="/"
                        className="bg-white rounded-[8px] py-4 pl-4 pr-[20px] flex items-center justify-between"
                      >
                        <p className="font-semibold">PRP-терапия</p>

                        <ArrowRight />
                      </Link>
                      <Link
                        href="/"
                        className="bg-white rounded-[8px] py-4 pl-4 pr-[20px] flex items-center justify-between"
                      >
                        <p className="font-semibold">PRP-терапия</p>

                        <ArrowRight />
                      </Link>
                      <Link
                        href="/"
                        className="bg-white rounded-[8px] py-4 pl-4 pr-[20px] flex items-center justify-between"
                      >
                        <p className="font-semibold">PRP-терапия</p>

                        <ArrowRight />
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="w-full flex flex-col gap-[45px]">
              <p className="text-[#595959] font-medium leading-[22px] tracking-[-0.22px] text-right">
                Подберем и назначим неообходимое лечение
              </p>

              <div className="flex items-end justify-end">
                <Image
                  src={"/accordion.png"}
                  width={407}
                  height={410}
                  alt="accordion"
                />
              </div>
            </div>
          </div>
        </div>

        <SliderWrapper
          slideWidth="!w-[298px] md:!w-[311px] lg:!w-[316px]"
          className="h-[434px] md:h-[467px] xl:h-[474px]"
        >
          <ImageCardOne imageData={imageData} catigoryId={""} />
        </SliderWrapper>
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
                <SliderWrapper
                  slideWidth="!w-[298px] md:!w-[311px] lg:!w-[316px]"
                  className="h-[434px] md:h-[467px] xl:h-[474px]"
                >
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
