"use client";

import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { Loader } from "@/components/ui/loader";
import { notFound } from "next/navigation";
import { useGetAllDoctors } from "@/shared/hooks/services/useGetAllDoctors";
import { SpecialistsList } from "@/components/specialists-list";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../components/slider/styles.css";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const isMobile = useClientMediaQuery("(max-width: 768px)");

  const { data, isLoading } = useGetAllDoctors();
  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return notFound();
  }
  const doctor = data.doctors.filter((item) => item.id === slug)?.[0];
  const doctors = data.doctors.filter((item) => item.id !== slug);

  return (
    <>
      <section className="container mx-auto max-w-[1364px] px-[20px]">
        {doctor && <DoctorDetailInfo doctors={doctor} />}
      </section>

      <section className="pb-[72px] xl:py-[100px] ">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="slider-wrapper relative w-full">
            <div className="swiper-nav">
              <Button variant="arrow" className={`swiper1-button-prev`}>
                <ChevronLeft width={17} />
              </Button>
              <Button variant="arrow" className={`swiper1-button-next`}>
                <ChevronRight width={17} />
              </Button>
            </div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={isMobile ? 16 : 20}
              modules={[Pagination, Navigation]}
              scrollbar={{ draggable: true }}
              // loop={!isNavigationDisabled}
              navigation={{
                nextEl: `.swiper1-button-next`,
                prevEl: `.swiper1-button-prev`,
              }}
              watchOverflow={true}
              allowTouchMove={true}
              className="mySwiper1"
            >
              {doctor.sevices.length > 0 &&
                doctor.sevices.map((item) => (
                  <SwiperSlide key={item.services_id.id}>
                    <ServiceCardItem
                      card={item.services_id}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>

      {doctor?.slider?.length > 0 && (
        <section className="pt-[72px] md:pt-[78px] xl:pt-[72px] xl:pb-[100px]">
          <div className="container mx-auto max-w-[1364px] px-[20px]">
            <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="video"
                tittle={"Видео"}
                quantity={3}
              />
              <BadgeWithIcon
                className="bg-[#EBEFF3]"
                variant="photo"
                tittle={"Фото"}
                quantity={5}
              />
            </div>

            <div className="slider-wrapper relative w-full">
              <div className="swiper-nav">
                <Button variant="arrow" className={`swiper2-button-prev`}>
                  <ChevronLeft width={17} />
                </Button>
                <Button variant="arrow" className={`swiper2-button-next`}>
                  <ChevronRight width={17} />
                </Button>
              </div>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={isMobile ? 16 : 20}
                modules={[Pagination, Navigation]}
                scrollbar={{ draggable: true }}
                // loop={!isNavigationDisabled}
                navigation={{
                  nextEl: `.swiper2-button-next`,
                  prevEl: `.swiper2-button-prev`,
                }}
                watchOverflow={true}
                allowTouchMove={true}
                className="mySwiper2 h-[434px] md:h-[467px] xl:h-[474px]"
              >
                {doctor.slider.map(({ directus_files_id }) => {
                  const isVideo = directus_files_id.type?.startsWith("video/");
                  return isVideo ? (
                    <SwiperSlide>
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
                    </SwiperSlide>
                  ) : (
                    <SwiperSlide>
                      <Image
                        key={directus_files_id.id}
                        width={directus_files_id.width || 289}
                        height={directus_files_id.height || 434}
                        src={pathImage(directus_files_id.id)}
                        alt={directus_files_id.title}
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide> */}

            {/* <SliderWrapper
            mySwiperNumber="1"
            className="h-[434px] md:h-[467px] xl:h-[474px]"
          >
            {doctor.slider.map(({ directus_files_id }) => {
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
          </SliderWrapper> */}
          </div>
        </section>
      )}

      {doctors.length > 0 && <SpecialistsList doctors={doctors} />}
    </>
  );
}
