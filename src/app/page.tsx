import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { CardsWrapper } from "@/components/card/cards-wrapper";
import { Container } from "@/components/ui/container";
import { AllButtons } from "@/components/all-buttons";
import { SectionHeader } from "@/components/section-header";
import {
  BlueImageUrl,
  CardsMocData,
  ImageCardMocData,
} from "@/shared/const/moc-data";
import ImageCard from "@/components/ui/image-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="bg-[#EBEFF3] pt-[36px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <AspectRatio ratio={1324 / 727}>
            <Image
              width={1324}
              height={727}
              src={BlueImageUrl}
              alt={"altText"}
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </div>
      </section>

      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px]"
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
              <Button variant="tretiary">Смотреть все</Button>
            </div>

            <div className="flex flex-wrap justify-between gap-[130px]">
              <ImageCard
                imageData={ImageCardMocData}
                width={380}
                height={418}
              />
              <CardsWrapper cardsList={CardsMocData} />
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
              <CardsWrapper cardsList={CardsMocData} />
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

      <AllButtons />
    </div>
  );
}
