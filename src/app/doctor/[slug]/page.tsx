"use client";
import Image from "next/image";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { SpecialistsList } from "@/components/specialists-list";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { pathImage } from "@/shared/lib/utils";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  console.log("🚀 ~ slug:", slug);

  const serviceBlocks = undefined;


     const typeCounts = countFileTypes(
        data?.about_page.slider as ImageType[]
      );

  return (
    <>
      <section className="container mx-auto max-w-[1364px] px-[20px]">
        <DoctorDetailInfo />
      </section>

      <section className="pb-[72px] xl:py-[100px] ">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          {serviceBlocks && (
            <SliderWrapper>
              {serviceBlocks?.servicesBlock[0].allServices
                .filter((item) => item.id !== params.slug)
                .map((item) => <ServiceCardItem key={item.id} card={item} />)}
            </SliderWrapper>
          )}
        </div>
      </section>

      <section className="pt-[72px] md:pt-[78px] xl:pt-[72px] xl:pb-[100px]">
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
          </section>

      <SpecialistsList />
    </>
  );
}
