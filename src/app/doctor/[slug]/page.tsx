"use client";

import Image from "next/image";
import { DoctorDetailInfo } from "@/components/doctor-detail-info";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { pathImage } from "@/shared/lib/utils";
import { useGetDoctorById } from "@/shared/hooks/services/useGetDoctorById";
import { Loader } from "@/components/ui/loader";
import { notFound } from "next/navigation";
import { ServiceCardItem } from "@/components/cards/service-card-item";
import { useGetAllDoctors } from "@/shared/hooks/services/useGetAllDoctors";
import { SpecialistsList } from "@/components/specialists-list";

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

  return (
    <>
      <section className="container mx-auto max-w-[1364px] px-[20px]">
        {doctor && <DoctorDetailInfo doctors={doctor} />}
      </section>

      <section className="pb-[72px] xl:py-[100px] ">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          {doctor.sevices.length > 0 && (
            <SliderWrapper>
              {doctor.sevices.length > 0 &&
                doctor.sevices.map((item) => (
                  <ServiceCardItem
                    key={item.services_id.id}
                    card={item.services_id}
                  />
                ))}
            </SliderWrapper>
          )}
        </div>
      </section>

      {doctor?.slider?.length > 0 && (
        <section className="pt-[72px] md:pt-[78px] xl:pt-[72px] xl:pb-[100px]">
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
          <SliderWrapper className="h-[434px] md:h-[467px] xl:h-[474px]">
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
          </SliderWrapper>
        </section>
      )}

      {doctors.length > 0 && <SpecialistsList doctors={doctors} />}
    </>
  );
}
