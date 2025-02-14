"use client";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { Banner } from "@/components/banner";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { DialogForm } from "@/components/modal/dialog";
import { SectionHeader } from "@/components/section-header";
import { ServicesClinic } from "@/components/services-clinic";
import { ImageSliderWrapper } from "@/components/slider/image-slider";
import { SpecialistsList } from "@/components/specialists-list";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useGetAboutPage } from "@/shared/hooks/services/pages/useGetAboutPage";
import { useGetAllDoctors } from "@/shared/hooks/services/useGetAllDoctors";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { countFileTypes, pathImage } from "@/shared/lib/utils";
import { ImageType } from "@/shared/types/types";
import { Separator } from "@radix-ui/react-separator";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function About() {
  const router = useRouter();

  const { data, isLoading } = useGetAboutPage();
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesClinic();

  const { data: doctors, isLoading: isLoadingDoctors } = useGetAllDoctors();

  if (isLoading || isLoadingServices || isLoadingDoctors) {
    return <Loader />;
  }

  const typeCounts = countFileTypes(data?.about_page.slider as ImageType[]);

  return (
    <>
      <section className="section bg-[#F0F3F8]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col items-center md:items-stretch gap-y-[60px] md:flex-row justify-between mb-[72px] md:mb-[78px] lg:mb-[60px]">
            <div className="md:max-w-[377px] xl:max-w-[651px]">
              {data?.about_page.title && (
                <h1 className="mb-[32px] lg:mb-[40px]">
                  {data?.about_page.title}
                </h1>
              )}

              <div>
                {data?.about_page.description && (
                  <ReactMarkdown
                    components={{
                      p: ({ className, children, ...rest }) => {
                        return (
                          <p
                            {...rest}
                            className={`${className} markdown-paragraph`}
                          >
                            {children}
                          </p>
                        );
                      },
                    }}
                  >
                    {data.about_page.description}
                  </ReactMarkdown>
                )}
              </div>

              <style jsx>{`
                .markdown-paragraph:not(:last-child) {
                  margin-bottom: 25px;
                  letter-spacing: -0.03em;
                }
              `}</style>
            </div>

            <div className="relative w-full md:w-fit">
              <ContactCardV2
                className="w-full md:w-[323px] xl:w-[400px] md:sticky top-[112px] bg-[#FFFFFF]"
                address={data?.about_page.adress}
                schedule={data?.about_page.time}
                phone={data?.about_page.phone}
              >
                <DialogForm>
                  <Button
                    motionProps={{
                      stiffness: 142.2,
                      damping: 26.67,
                      mass: 1,
                    }}
                    className="w-full duration-450"
                    variant="secondary"
                  >
                    Получить консультацию
                  </Button>
                </DialogForm>
              </ContactCardV2>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1364px] pl-5 md:px-5">
          {data && data?.about_page.slider.length > 0 && (
            <div>
              <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
                <BadgeWithIcon
                  className="bg-[#FFFFFF]"
                  variant="video"
                  tittle={"Видео"}
                  quantity={typeCounts.videoCount}
                />
                <BadgeWithIcon
                  className="bg-[#FFFFFF]"
                  variant="photo"
                  tittle={"Фото"}
                  quantity={typeCounts.imageCount}
                />
              </div>

              <ImageSliderWrapper
                btns={{ next: "about-next", prev: "about-prev" }}
                slideWidth="!w-[298px] md:!w-[311px] lg:!w-[316px]"
                className="h-[434px] md:h-[467px] xl:h-[474px]"
                btnBg="bg-white"
              >
                {data?.about_page.slider.map(({ directus_files_id }) => {
                  const isVideo = directus_files_id.type?.startsWith("video/");

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
                    <img
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

      <section className="section">
        <div className="container mx-auto max-w-[1364px] px-[20px] mb-[60px] md:mb-[78px] lg:mb-[100px]">
          <SectionHeader
            className="mb-[32px] md:mb-[56px] xl:mb-[48px]"
            title="Специалисты клиники"
            description="Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях"
          />

          {doctors && doctors?.doctors.length > 0 && (
            <DoctorDetailInfo doctors={doctors?.doctors[0]} />
          )}
        </div>

        {doctors && doctors?.doctors.length > 1 && (
          <SpecialistsList
            doctors={doctors?.doctors.slice(1)}
            badgecolor="bg-[#F0F3F8]"
          />
        )}
      </section>

      <Separator className="h-2 md:h-[10px] lg:h-4 bg-[#F0F3F8]" />

      <section className="section">
        {services && (
          <ServicesClinic
            title={services?.servicesClinic.title}
            description={services?.servicesClinic.description}
            services={services}
          />
        )}

        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          {services && services?.servicesClinic.dopServices.length > 0 && (
            <div className="flex flex-col md:flex-row gap-y-[36px] max-md:w-full items-center justify-center gap-x-[26px] overflow-x-auto">
              {services?.servicesClinic.dopServices.map(
                ({ servicesBlock_id }) => (
                  <CategoriesGalery
                    key={servicesBlock_id.id}
                    bages={false}
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

      <section className="bg-[#EBEFF3] lg:py-[100px]">
        {data?.about_page.baner && (
          <Banner
            imageUrl={data?.about_page.baner}
            hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
          />
        )}
      </section>
    </>
  );
}
