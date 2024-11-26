import { SectionHeader } from "@/components/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCardsWrapper } from "@/components/cards/serice-cards-wrapper";
import { Container } from "@/components/ui/container";
import {
  BlueImageUrl,
  CardsMocData,
  ImageCardMocData,
} from "@/shared/const/moc-data";
import ImageCard from "@/components/ui/image-card";
import Image from "next/image";

export default function Uslugi() {
  return (
    <div>
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
    </div>
  );
}
