"use client";

import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { countFileTypes, pathImage } from "@/shared/lib/utils";
import { Loader } from "@/components/ui/loader";
import { notFound } from "next/navigation";
import { ServiceCardItem } from "@/components/cards/service-card-item";
import { useGetAllDoctors } from "@/shared/hooks/services/useGetAllDoctors";
import "swiper/css";
import "swiper/css/pagination";
import "../../../components/slider/styles.css";
import { ImageType } from "@/shared/types/types";
import { ImageSliderWrapper } from "@/components/slider/image-slider";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import DoctorCard from "@/components/cards/doctor-card";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const { data, isLoading } = useGetAllDoctors();
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return notFound();
  }
  const doctor = data.doctors.filter((item) => item.id === slug)?.[0];
  const doctors = data.doctors.filter((item) => item.id !== slug);
  const typeCounts = countFileTypes(doctor.slider as ImageType[]);

  return (
    <>
      <section className="section ">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="mb-[60px] md:mb-[78px] lg:mb-[110px]">
            {doctor && <DoctorDetailInfo btnDetail={false} doctors={doctor} />}
          </div>

          {doctor?.sevices?.length > 0 && (
            <>
              <h3 className="mb-[24px]">Услуги врача</h3>
              <SliderWrapper
                btns={{
                  next: "services-next",
                  prev: "services-prev",
                }}
              >
                {doctor?.sevices.map((item) => (
                  <ServiceCardItem
                    key={item.services_id.id}
                    card={item.services_id}
                    className="w-[350px] md:w-[357px] lg:w-[396px]"
                  />
                ))}
              </SliderWrapper>
            </>
          )}
        </div>
      </section>

      {doctor?.slider?.length > 0 && (
        <section className="section ">
          <div className="container mx-auto max-w-[1364px] pl-5 md:px-5">
            <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="video"
                tittle={"Видео"}
                quantity={typeCounts.videoCount}
              />
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="photo"
                tittle={"Фото"}
                quantity={typeCounts.imageCount}
              />
            </div>

            <ImageSliderWrapper
              btns={{ next: "doctor-next", prev: "doctor-prev" }}
              slideWidth="!w-[298px] md:!w-[311px] lg:!w-[316px]"
              className="h-[434px] md:h-[467px] xl:h-[474px]"
            >
              {doctor?.slider?.map(({ directus_files_id }) => {
                const isVideo = directus_files_id?.type?.startsWith("video/");

                return isVideo ? (
                  <video
                    key={directus_files_id?.id}
                    src={pathImage(directus_files_id?.id)}
                    autoPlay
                    muted
                    playsInline
                    loop
                    width={directus_files_id?.width || 289}
                    height={directus_files_id?.height || 434}
                    className="h-full w-full object-cover"
                  >
                    <source
                      src={pathImage(directus_files_id?.id)}
                      type={directus_files_id?.type}
                    />
                  </video>
                ) : (
                  <img
                    key={directus_files_id?.id}
                    width={directus_files_id?.width || 289}
                    height={directus_files_id?.height || 434}
                    src={pathImage(directus_files_id?.id)}
                    alt={directus_files_id?.title}
                    className="h-full w-full object-cover"
                  />
                );
              })}
            </ImageSliderWrapper>
          </div>
        </section>
      )}

      <section className="section bg-[#EBEFF3]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <h3 className="mb-[40px] max-md:mb-[28px] text-[36px] leading-[45px] font-semibold tracking-[-0.72px] max-md:text-[30px] max-md:leading-[36px] max-md:tracking-[-0.6px]">
            Другие врачи
          </h3>
        </div>
        <div className="container mx-auto max-w-[1364px] pl-5 md:px-[20px]">
          <SliderWrapper
            btns={{ next: "methods-next", prev: "methods-prev" }}
            slideWidth=""
            className=""
          >
            {doctors.length > 0 &&
              doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} className="" />
              ))}
          </SliderWrapper>
        </div>
      </section>
    </>
  );
}
