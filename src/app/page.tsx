"use client";

import { ImageMocData } from "@/shared/const/moc-data";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Banner } from "@/components/banner";
import { useGetHomePage } from "@/shared/hooks/services/pages/useGetHomePage";
import { ServicesClinic } from "@/components/services-clinic";

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

      <section className="pt-[100px] pb-[100px]">
        <div className="container h-[494px] md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
          <SliderWrapper>
            {ImageMocData.map((item) => (
              <img key={item.id} src={item.imageUrl} alt={item.altText} />
            ))}
          </SliderWrapper>
        </div>
      </section>

      {/* <AllButtons /> */}
    </div>
  );
}
