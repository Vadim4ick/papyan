"use client";

import Image from "next/image";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { countFileTypes, pathImage } from "@/shared/lib/utils";
import { Loader } from "@/components/ui/loader";
import { notFound } from "next/navigation";
import { ServiceCardItem } from "@/components/cards/service-card-item";
import { useGetAllDoctors } from "@/shared/hooks/services/useGetAllDoctors";
import { SpecialistsList } from "@/components/specialists-list";
import "swiper/css";
import "swiper/css/pagination";
import "../../../components/slider/styles.css";
import { ImageType } from "@/shared/types/types";
import { ImageSliderWrapper } from "@/components/slider/image-slider";
import { SliderWrapper } from "@/components/slider/slider-wrapper";

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
            {doctor && <DoctorDetailInfo doctors={doctor} />}
          </div>

          <h3 className="mb-[24px]">Услуги врача</h3>

          {/* <div className="slider-wrapper relative w-full">
            {isTablet ||
              (!isNavSwiper1Disabled && (
                <div className="swiper-nav">
                  <Button variant="arrow" className={`swiper1-button-prev`}>
                    <ChevronLeft width={17} />
                  </Button>
                  <Button variant="arrow" className={`swiper1-button-next`}>
                    <ChevronRight width={17} />
                  </Button>
                </div>
              ))}
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
                    <ServiceCardItem card={item.services_id} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div> */}
          <SliderWrapper
            btns={{
              next: "services-next",
              prev: "services-prev",
            }}
          >
            {doctor?.sevices?.length > 0 &&
              doctor?.sevices.map((item) => (
                <ServiceCardItem
                  key={item.services_id.id}
                  card={item.services_id}
                />
              ))}
          </SliderWrapper>
        </div>
      </section>

      {doctor?.slider?.length > 0 && (
        <section className="section ">
          <div className="container mx-auto max-w-[1364px] px-[20px]">
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
              {doctor.slider.map(({ directus_files_id }) => {
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
        </section>
      )}

      <section className="section bg-[#EBEFF3]">
        {doctors.length > 0 && <SpecialistsList doctors={doctors} />}
      </section>
    </>
  );
}
