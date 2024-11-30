import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import {
  BlueImageUrl,
  ImageMocData,
} from "@/shared/const/moc-data";
import Image from "next/image";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { CatigoryWrapper } from "@/components/catigory/catigory-wrapper";

export default function Home() {
  return (
    <div className="">
      <section className="h-screen bg-[#EBEFF3] lg:px-[20px] lg:pt-[36px] lg:pb-[100px]">
        <div className="container h-full mx-auto max-w-[1364px] ">
          <Image
            width={1324}
            height={727}
            src={BlueImageUrl}
            alt={"altText"}
            className="h-full object-cover lg:rounded-lg transition-transform duration-300 group-hover:scale-105"
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
          
          {/* ToDo реализовать передачу обьекта Категории */}
          <CatigoryWrapper className="mb-[78px]" />

          <CatigoryWrapper className="mb-[78px]" />
        </div>
      </section>

      <section className="bg-[#EBEFF3] pt-[36px] pb-[100px]">
        <Container>
          <AspectRatio ratio={1324 / 470}>
            <Image
              width={1324}
              height={470}
              src={BlueImageUrl}
              alt={"altText"}
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </Container>
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
