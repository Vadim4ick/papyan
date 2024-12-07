"use client";

import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Banner } from "@/components/banner";
import { useGetHomePage } from "@/shared/hooks/services/pages/useGetHomePage";
import { ServicesClinic } from "@/components/services-clinic";
import { pathImage } from "@/shared/lib/utils";
import Image from "next/image";

export default function Home() {
  const { data } = useGetHomePage();

  return (
    <div className="">
      {data?.home_page.mainBaner && (
        <Banner
          imageUrl={data.home_page.mainBaner}
          hight={"h-screen lg:max-h-[727px]"}
        />
      )}

      <section className="pt-[32px] lg:pt-[64px] lg:pb-[100px]">
        <ServicesClinic />
      </section>

      {data?.home_page.infoBaner && (
        <Banner
          imageUrl={data.home_page.infoBaner}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      )}

      {data && data?.home_page.sliderClinik.length > 0 && (
        <section className="pt-[100px] pb-[100px]">
          <div className="container md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
            <SliderWrapper>
              {data?.home_page.sliderClinik.map(({ directus_files_id }) => {
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
                    className="!h-[494px] max-md:!h-[434px]"
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
                    className="!h-[494px] max-md:!h-[434px]"
                  />
                );
              })}
            </SliderWrapper>
          </div>
        </section>
      )}
    </div>
  );
}
