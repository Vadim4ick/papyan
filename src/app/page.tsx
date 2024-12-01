import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import {
  categories,
  ImageMocData,
  MainBunnerImageUrl,
  SecondBunnerImageUrl,
} from "@/shared/const/moc-data";
import Image from "next/image";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { CatigoryWrapper } from "@/components/category/category-wrapper";

export default function Home() {
  return (
    <div className="">
      <section className="h-screen bg-[#EBEFF3] lg:px-[20px] lg:pt-[36px] lg:pb-[100px]">
        <div className="container h-full mx-auto max-w-[1364px] ">
          <Image
            width={1324}
            height={727}
            src={MainBunnerImageUrl}
            alt={"altText"}
            className="h-full w-full object-cover lg:rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="pt-[32px] lg:pt-[64px] lg:pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title="Услуги клиники"
            description="Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих
              движениях."
          />
          {categories.map((category) => (
            <CatigoryWrapper key={category.id} className="mb-[78px]" category={category} />
          ))}
        </div>
      </section>

      <section className="bg-[#EBEFF3] py-[100px] lg:px-[20px]">
        <div className="container h-[494px] md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
          <Image
            width={1324}
            height={470}
            src={SecondBunnerImageUrl}
            alt={"altText"}
            className="h-full w-full object-cover lg:rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="pt-[100px] pb-[100px]">
        <Container>
          <SliderWrapper ImageData={ImageMocData} />
        </Container>
      </section>

      {/* <AllButtons /> */}
    </div>
  );
}
