"use client";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { Banner } from "@/components/banner";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { SectionHeader } from "@/components/section-header";
import { ServicesClinic } from "@/components/services-clinic";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { SpecialistsList } from "@/components/specialists-list";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useGetAboutPage } from "@/shared/hooks/services/pages/useGetAboutPage";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { pathImage } from "@/shared/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function About() {
  const router = useRouter();

  const { data, isLoading } = useGetAboutPage();
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesClinic();

  if (isLoading || isLoadingServices) {
    return <Loader />;
  }

  return (
    <>
      <section className="bg-[#F0F3F8] pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col items-center md:items-stretch gap-y-[60px] md:flex-row justify-between">
            <div className="md: max-w-[377px] xl:max-w-[651px]">
              {data?.about_page.title && (
                <h1 className="mb-[12px] md:mb-[16px] lg:mb-[24px]">
                  {data?.about_page.title}
                </h1>
              )}

              {data?.about_page.description && (
                <ReactMarkdown>{data.about_page.description}</ReactMarkdown>
              )}
            </div>

            <div className="relative">
              <ContactCardV2
                className="w-[350px] h-[296px] md:w-[323px] xl:w-[400px] xl:h-[299px] md:sticky top-[112px]"
                address={data?.about_page.adress}
                schedule={data?.about_page.time}
                phone={data?.about_page.phone}
              >
                <Button className="w-full" variant="secondary">
                  Получить консультацию
                </Button>
              </ContactCardV2>
            </div>
          </div>

          <div className="pt-[72px] md:pt-[78px] xl:pt-[72px] xl:pb-[100px]">
            <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="video"
                tittle={"Видео"}
                quantity={2}
              />
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="photo"
                tittle={"Фото"}
                quantity={5}
              />
            </div>
            <SliderWrapper className="h-[434px] md:h-[467px] xl:h-[474px]">
              {data?.about_page.slider.map(({ directus_files_id }) => {
                const isVideo = directus_files_id.type?.startsWith("video/");

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
        </div>
      </section>

      <section className="pt-[64px] pb-[30px] md:pb-[48px] xl:pb-[50px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title="Специалисты клиники"
            description="Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях"
          />
          <DoctorDetailInfo />
        </div>
      </section>

      <SpecialistsList />

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78px] lg:pb-[100px]">
        {services && (
          <ServicesClinic
            title={services?.servicesClinic.title}
            description={services?.servicesClinic.description}
            services={services}
          />
        )}

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

      {data?.about_page.baner && (
        <Banner
          imageUrl={data?.about_page.baner}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      )}
    </>
  );
}
