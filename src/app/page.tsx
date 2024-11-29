import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ServiceCardsWrapper } from "@/components/cards/serice-cards-wrapper";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/section-header";
import {
  BlueImageUrl,
  CardsMocData,
  ImageCardMocData,
  ImageMocData,
} from "@/shared/const/moc-data";
import ImageCard from "@/components/ui/image-card";
import Image from "next/image";
import { SliderWrapper } from "@/components/slider/slider-wrapper";

export default function Home() {
  return (
    <div className="">
      <section className="h-dvh bg-[#EBEFF3] lg:px-[20px] lg:pt-[36px] lg:pb-[100px]">
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

          <div className="mb-[78px]">
            <div className="flex justify-between mb-[16px]">
              <div className="flex gap-1">
                <h3>Физиотерапия</h3>
                <Badge variant="default">10</Badge>
              </div>
              <Button variant="tretiary" className="hidden md:block">Смотреть все</Button>
            </div>

            <div className="flex flex-wrap justify-between gap-[130px]">
              <ImageCard
                imageData={ImageCardMocData}
                width={380}
                height={418}
              />
              <ServiceCardsWrapper cardsList={CardsMocData} />
            </div>
          </div>

          <div className="mb-[78px]">
            <div className="flex justify-between mb-[16px]">
              <div className="flex gap-1">
                <h3>Физиотерапия</h3>
                <Badge variant="default">10</Badge>
              </div>
              <Button variant="tretiary">Смотреть все</Button>
            </div>

            <div className="flex flex-wrap justify-between gap-[130px]">
              <ImageCard
                imageData={ImageCardMocData}
                width={380}
                height={418}
              />
              <ServiceCardsWrapper cardsList={CardsMocData} />
            </div>
          </div>
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
        <SliderWrapper ImageData={ImageMocData}/>
      </Container>

      </section>
        
      


      {/* <AllButtons /> */}
    </div>
  );
}
