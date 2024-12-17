"use client";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { Banner } from "@/components/banner";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { SectionHeader } from "@/components/section-header";
import { ServicesClinic } from "@/components/services-clinic";
import { ImageSlider } from "@/components/slider/image-slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { RoundButton } from "@/components/ui/round-button";
import { Separator } from "@/components/ui/separator";
import {
  cpecialistsList,
  expirience,
  graduation,
} from "@/shared/const/moc-data";
import { useGetAboutPage } from "@/shared/hooks/services/pages/useGetAboutPage";
import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { ArrowUpRight, ChevronRight } from "lucide-react";
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
              <BadgeWithIcon variant="video" tittle={"Видео"} quantity={10} />
              <BadgeWithIcon variant="photo" tittle={"Фото"} quantity={10} />
            </div>

            {data?.about_page.slider && (
              <ImageSlider images={data?.about_page.slider} />
            )}
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
          <div className="w-full xl:hidden">
            <div className="mb-[32px]">
              <p className="leading-[21.86px] font-semibold mb-[8px]">
                Образование:
              </p>
              <ul className="text-[16px] leading-[22px]">
                {graduation.map((item, index) => (
                  <li
                    key={index}
                    className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="leading-[21.86px] font-semibold mb-[8px]">
                Опыт и достижения:
              </p>
              <ul className="text-[16px] leading-[22px]">
                {expirience.map((item, index) => (
                  <li
                    key={index}
                    className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FF8A00]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[30px] xl:pt-[50px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col xl:flex-row gap-y-[48px] gap-x-[20px] xl:flex-wrap ">
            {cpecialistsList.map((item, index) => (
              <div
                key={item.id}
                className={`md:flex ${
                  index % 2 === 1 ? "" : "md:flex-row-reverse"
                } gap-x-[40px] xl:flex-col-reverse xl:gap-y-[12px]`}
              >
                <div className="md:w-1/2 xl:w-full">
                  <Separator className="mb-[32px] md:hidden" />
                  <Badge variant="secondary" className="mb-[16px] xl:mb-[8px]">
                    {item.cpeciality
                      .map((speciality, index) =>
                        index === 0
                          ? speciality.charAt(0).toUpperCase() +
                            speciality.slice(1).toLowerCase()
                          : speciality.toLowerCase()
                      )
                      .join(", ")}
                  </Badge>
                  <div className="w-full flex flex-col gap-y-[10px] mb-[10px]">
                    <h4 className="md:text-[28px] md:leading-[35px] xl:text-[16px] xl:leading-[22px]">
                      {item.name}
                    </h4>
                    <p className="md:text-[16px] md:leading-[22px] xl:hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[316px] xl:h-[455px] overflow-hidden rounded-md group">
                  <Image
                    width={380}
                    height={418}
                    src={item.imageUrl}
                    alt={"altText"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-[14px] z-20">
                    <RoundButton
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
                      variant="default"
                      onClick={() => router.push(`/doctor/${item.id}`)}
                    >
                      <ArrowUpRight />
                    </RoundButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
