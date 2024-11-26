import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ImageCard from "@/components/ui/image-card";
import { CardsWrapper } from "@/components/card/cards-wrapper";
import { Container } from "@/components/ui/container";

const CardsMocData = [
  {
    id: "1",
    title: "PRP-терапия 1",
    description:
      "1 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "1000",
  },
  {
    id: "2",
    title: "PRP-терапия 2",
    description:
      "2 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "2000",
  },
  {
    id: "3",
    title: "PRP-терапия 3",
    description:
      "3 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "3000",
  },
  {
    id: "4",
    title: "PRP-терапия 4",
    description:
      "4 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "4000",
  },
];

const ImageCardMocData = {
  id: 1,
  imageUrl:
    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  altText: "string",
  tagData: [
    { id: 1, label: "PRP-терапия" },
    { id: 2, label: "PRP-терапия" },
    { id: 3, label: "PRP-терапия" },
    { id: 3, label: "PRP-терапия" },
    { id: 3, label: "PRP-терапия" },
  ],
};

const BlueImageUrl =
  "https://images.unsplash.com/photo-1593012370132-c4390ff79e92?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
          <div className="flex justify-between mb-[48px] ">
            <h2>Услуги клиники</h2>
            <p className="text-[#595959] text-[16px] leading-[22px] md:max-w-[540px]">
              Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих
              движениях.
            </p>
          </div>

          <Separator className="mb-[40px]" />

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

      <div className="h-full flex flex-wrap gap-5 p-20 bg-[#EBEFF3]">
        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">Secondary button</h1>
          <Button variant="default">Записаться онлайн</Button>
          <Button variant="default" disabled>
            Записаться онлайн
          </Button>
        </div>

        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">Secondary button</h1>
          <Button variant="secondary">
            Все услуги{" "}
            <span className="ms-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </Button>
          <Button variant="secondary" disabled>
            Все услуги{" "}
            <span className="ms-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </Button>
        </div>

        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">Stroke button</h1>
          <Button variant="stroke">Подробнее</Button>
          <Button variant="stroke" disabled>
            Подробнее
          </Button>
        </div>

        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">Stroke button</h1>
          <Button variant="white">Записаться онлайн</Button>
          <Button variant="white" disabled>
            Записаться онлайн
          </Button>
        </div>

        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">tretiary button</h1>
          <Button variant="tretiary">Смотреть все</Button>
          <Button variant="tretiary" disabled>
            Смотреть все
          </Button>
        </div>

        <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
          <h1 className="text-white py-5">arrow button</h1>
          <Button variant="arrow">
            <ChevronRight width={20} />
          </Button>
          <Button variant="arrow" disabled>
            <ChevronRight width={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
