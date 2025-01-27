/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-expressions */
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
import ImageCardOne from "@/components/cards/image-card-one";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "@/shared/icons/ArrowRight";
import { useMemo, useState } from "react";
import { useGetProblems } from "@/shared/hooks/services/useGetProblems";
import {
  YMaps,
  Map,
  ZoomControl,
  //   TypeSelector,
  Placemark,
} from "@r3flector/react-yandex-maps";
import { Input } from "@/components/ui/input";
import InputMask from "react-input-mask";
import { Separator } from "@/components/ui/separator";
import { ImageSliderWrapper } from "@/components/slider/image-slider";

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

  const typeCounts = useMemo(
    () => countFileTypes(data?.home_page.sliderClinik as ImageType[]),
    [data?.home_page.sliderClinik]
  );

  const handleAccordionChange = (value: string) => {
    setIsOpen(value);
  };

  if (isLoading || isLoadingServices || isLoadingProblems) {
    return <Loader className="size-[35px]" />;
  }

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
        <div className="container mx-auto max-w-[1364px] px-[20px] mb-[48px] md:mb-[60px] lg:mb-[80px]  flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          <div className="flex justify-between w-full gap-[43px] pb-[100px] max-lg:pb-[66px] border-b border-b-[#E8E8E8] max-lg:flex-col">
            <div className="flex flex-col gap-[43px] max-lg:gap-[12px] w-full">
              <h3 className="font-[600] text-[36px] leading-[45px] max-md:text-[30px] max-md:leading-[36px] max-md:tracking-[-0.6px] tracking-[-0.72px]">
                Какая проблема вас беспокоит?
              </h3>

              <div className="w-full flex flex-col gap-[36px] lg:hidden pb-[16px]">
                <p className="text-[#595959] font-medium leading-[22px] tracking-[-0.22px] text-start">
                  Подберем и назначим неообходимое лечение
                </p>

                <div className="flex items-center justify-center lg:hidden w-full">
                  <Image
                    src={"/accordion.png"}
                    width={407}
                    height={410}
                    alt="accordion"
                  />
                </div>
              </div>

              {problems && problems?.problems.blocks.length > 0 && (
                <Accordion
                  value={isOpen}
                  onValueChange={handleAccordionChange}
                  className="flex flex-col gap-[10px] w-full max-w-[652px]"
                  type="single"
                  collapsible
                >
                  {problems?.problems.blocks?.map(({ problems_block_id }) => (
                    <AccordionItem
                      key={problems_block_id.id}
                      className="bg-[#F0F3F8] rounded-[8px]"
                      value={`item-${problems_block_id.id}`}
                    >
                      <AccordionTrigger className="p-[18px] group font-semibold">
                        <p
                          className={cn(
                            "text-[#353535] text-[18px] leading-[22px] tracking-[-0.36px]",
                            {
                              "text-[#979797]":
                                isOpen === `item-${problems_block_id.id}`,
                              "group-hover:text-[#1467E1]": !isOpen,
                            }
                          )}
                        >
                          {problems_block_id.title}
                        </p>
                      </AccordionTrigger>

                      <AccordionContent className="pb-[22px] px-[18px] pt-[10px]">
                        <p className="font-semibold text-[22px] leading-[26px] tracking-[-0.44px] mb-[22px]">
                          При сколиозе лучше всего поможет:
                        </p>

                        <div className="w-full max-w-[548px] flex flex-col gap-[28px]">
                          <div className="flex flex-col gap-[8px] w-full">
                            {problems_block_id.services.map(
                              ({ services_id }) => (
                                <Link
                                  key={services_id.id}
                                  href={`/therapy/${services_id.id}`}
                                  className="bg-white rounded-[8px] py-4 pl-4 pr-[20px] flex items-center justify-between"
                                >
                                  <p className="font-semibold text-[16px] leading-[22px] tracking-[-0.32px]">
                                    {services_id.title}
                                  </p>

                                  <ArrowRight />
                                </Link>
                              )
                            )}
                          </div>

                          <div className="flex items-center w-full justify-between gap-4 max-lg:flex-col max-md:flex-col-reverse">
                            <Button
                              motionProps={{
                                stiffness: 142.2,
                                damping: 26.67,
                                mass: 1,
                              }}
                              className="w-full h-[54px] duration-450 max-lg:h-[48px] bg-[#1467E1] text-[15px] leading-[20px] tracking-[-0.15px]"
                            >
                              Получить консультацию
                            </Button>

                            <Button
                              motionProps={{
                                stiffness: 142.2,
                                damping: 26.67,
                                mass: 1,
                              }}
                              onClick={() => router.push("/uslugi")}
                              className="w-full h-[54px] max-lg:h-[48px] flex duration-450 items-center gap-[7.5px] md:justify-between pl-[18px] pr-[20px] group text-[15px] leading-[20px] tracking-[-0.15px]"
                              variant={"secondary"}
                            >
                              Все услуги
                              <ArrowRight className="group-hover:fill-white max-md:max-h-[11px] max-md:mt-[2px]" />
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>

            <div className="w-full flex flex-col gap-[45px] max-lg:hidden">
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

        <div className="container mx-auto max-w-[1364px] pl-5 md:px-[20px]">
          <h2 className="mb-[32px] md:mb-[51px]">Методы лечения</h2>
          <SliderWrapper
            btns={{ next: "methods-next", prev: "methods-prev" }}
            slideWidth="!w-[316px]"
            className="h-[484px]"
          >
            {problems?.problems.slider.map((item) => (
              <ImageCardOne
                key={item.problems_slide_id.id}
                imageData={item.problems_slide_id.img}
                title={item.problems_slide_id.title}
                catigoryId={""}
              />
            ))}
          </SliderWrapper>

          <p className="text-[#595959] text-[16px] leading-[22px] pt-[48px] max-lg:pt-[24px]">
            *Набор методов индивидуален, их подбирает врач на основе диагностики
          </p>
        </div>
      </section>

      <Separator className="h-2 md:h-[10px] lg:h-4 bg-[#F0F3F8]" />

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78p] lg:pb-[100px] ">
        <ServicesClinic
          title={services?.servicesClinic.title}
          description={services?.servicesClinic.description}
          services={services}
        />

        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          {services && services?.servicesClinic.dopServices.length > 0 && (
            <div className="flex flex-col md:flex-row gap-y-[24px] max-md:w-full items-center gap-x-[26px] overflow-x-auto max-md:gap-[36px]">
              {services?.servicesClinic.dopServices.map(
                ({ servicesBlock_id }) => (
                  <CategoriesGalery
                    key={servicesBlock_id.id}
                    bages={false}
                    category={servicesBlock_id}
                    cardWidth="w-[350px] md:w-[377px] xl:w-[380px]"
                    cardHeight=" h-[238px] md:h-[187px] xl:h-[199px]"
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

      <section className="bg-[#EBEFF3] lg:py-[100px]">
        {data?.home_page.infoBaner && (
          <Banner
            imageUrl={data.home_page.infoBaner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        )}
      </section>

      {data && data?.home_page.sliderClinik.length > 0 && (
        <section className="pb-[72px] pt-[32px] md:pb-[78px] md:pt-[48px] lg:pt-[100px] lg:pb-[70px] max-lg:pb-[48px]">
          <div className="container mx-auto max-w-[1364px] px-5">
            <div className="flex flex-col md:flex-row justify-between mb-[28px] md:mb-[84px] lg:mb-[118px] ">
              <div>
                <h2 className="mb-[12px] md:mb-[32px] md:text-[36px] md:leading-[45px]">
                  Клиника Доктора Папяна
                </h2>
                <Button
                  variant="secondary"
                  motionProps={{
                    stiffness: 142.2,
                    damping: 26.67,
                    mass: 1,
                  }}
                  onClick={() => router.push(`/oklinike/`)}
                  className="hidden md:flex duration-450"
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
              motionProps={{
                stiffness: 142.2,
                damping: 26.67,
                mass: 1,
              }}
              onClick={() => router.push(`/oklinike/`)}
              className="mb-[72px] md:hidden duration-450"
            >
              О клинике{" "}
              <span className="ms-[5px] mt-[3px]">
                <ChevronRight width={17} />
              </span>
            </Button>
          </div>
          <div className="container mx-auto max-w-[1364px] pl-5 md:px-5">
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
                <ImageSliderWrapper
                  btns={{ next: "main-next", prev: "main-prev" }}
                  slideWidth="!w-[289px] md:!w-[311px] lg:!w-[316px]"
                  className="h-[434px] md:h-[467px] xl:h-[474px]"
                >
                  {data?.home_page.sliderClinik.map(({ directus_files_id }) => {
                    const isVideo =
                      directus_files_id.type?.startsWith("video/");

                    return isVideo ? (
                      <video
                        key={directus_files_id.id}
                        src={pathImage(directus_files_id.id)}
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
                </ImageSliderWrapper>
              </div>
            )}
          </div>
        </section>
      )}

      <section>
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="border-t border-t-[#E8E8E8] pt-[62px] max-lg:pt-[48px] pb-[64px] max-lg:flex max-lg:gap-[20px] max-md:flex-col max-md:gap-[32px]">
            <div className="flex items-center justify-between gap-2 lg:pb-[36px] w-full">
              <div className="flex items-center gap-[70px] max-xl:gap-[40px] max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:p-[28px] max-lg:bg-[#F0F3F8] w-full max-lg:rounded-[8px]">
                <div className="flex flex-col gap-1">
                  <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                    Адрес клиники
                  </p>

                  <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                    Краснодар, Постовая улица, 23
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                    Время работы
                  </p>

                  <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                    Пн-сб: 08:00—20:00
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#929292] font-semibold text-[14px] leading-[18.2px] tracking-[-0.28px]">
                    Телефон для справок
                  </p>

                  <div className="font-semibold text-[18px] leading-[23px] tracking-[-0.36px] text-[#353535]">
                    +7 (918) 232-13-13
                  </div>
                </div>

                <Button
                  motionProps={{
                    stiffness: 142.2,
                    damping: 26.67,
                    mass: 1,
                  }}
                  variant={"secondary"}
                  className="h-[48px] lg:hidden w-full max-md:mt-[12px] duration-450"
                >
                  Получить консультацию
                </Button>
              </div>

              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                variant={"secondary"}
                className="h-[48px] max-lg:hidden duration-450"
              >
                Получить консультацию
              </Button>
            </div>

            <div className="rounded-[8px] overflow-hidden w-full">
              <YMaps>
                <Map
                  instanceRef={(ref) => {
                    ref && ref.behaviors.disable("scrollZoom");
                  }}
                  defaultState={{
                    center: [45.016485318057406, 38.95953056745904],
                    zoom: 18,
                  }}
                  className="h-[376px] w-full max-lg:h-[296px] max-md:h-[460px]"
                >
                  <Placemark
                    geometry={[45.016485318057406, 38.95953056745904]}
                    options={{
                      iconLayout: "default#image",

                      iconImageHref: "/placemark.svg",
                    }}
                  />
                  <ZoomControl />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBEFF3] py-[131px] max-md:pt-[32px] max-md:pb-[60px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex items-center gap-4 justify-between max-md:flex-col">
            <div className="flex flex-col gap-[57px] max-md:gap-[20px]">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[36px] max-md:text-[30px] max-md:leading-[36px] max-md:tracking-[-0.6px] font-semibold leading-[45px] tracking-[-0.72px] text-[#353535]">
                  Задайте вопросы администратору
                </h3>

                <p className="text-[16px] font-medium leading-[22px] tracking-[-0.32px] text-[#353535]">
                  Наш специалист перезвонит <br className="md:hidden" /> и
                  проконсультирует по телефону
                </p>
              </div>

              <div className="h-[200px] relative md:hidden">
                <Image
                  src={"/phone.png"}
                  className="object-contain"
                  fill
                  alt="phone"
                />
              </div>

              <div className="flex flex-col gap-[31px] max-md:gap-4">
                <div className="flex gap-[20px] md:h-[54px] max-md:flex-col max-md:gap-3">
                  <InputMask mask="+7 (999) 999-99-99">
                    {(inputProps: any) => (
                      <Input
                        {...inputProps}
                        className="bg-white max-w-[336px] h-[54px] max-md:max-w-full max-md:text-center"
                        placeholder={"+7(000)000-00-00"}
                      />
                    )}
                  </InputMask>

                  <Button
                    motionProps={{
                      stiffness: 142.2,
                      damping: 26.67,
                      mass: 1,
                    }}
                    className="bg-[#1467E1] duration-450 w-full max-w-[267px] h-[54px] text-[15px] leading-[20px] tracking-[-0.3px] max-md:max-w-full"
                  >
                    Как записаться онлайн
                  </Button>
                </div>

                <p className="max-w-[540px] text-[12px] leading-[16.8px] font-medium text-[#353535] tracking-[-0.24px]">
                  Нажимая на кнопку "Перезвоните мне", я подтверждаю, что
                  ознакомлен и согласен с условиями политики конфиденциальности
                  и правилами обработки персональных данных
                </p>
              </div>
            </div>

            <Image
              src={"/phone.png"}
              className="max-md:hidden"
              width={343}
              height={305}
              alt="phone"
            />
          </div>
        </div>
      </section>
    </>
  );
}
