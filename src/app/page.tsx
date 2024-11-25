import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="">
      <section className="bg-[#EBEFF3] pt-[36px] pb-[100px]">
        <div className="container mx-auto max-w-[1365px] px-[20px]">
          <AspectRatio ratio={1324 / 727}>
            <Image
              width={1324}
              height={727}
              src="https://images.unsplash.com/photo-1593012370132-c4390ff79e92?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              className="rounded-[8px] object-cover"
            />
          </AspectRatio>
        </div>
      </section>
      <section className="pt-[64px]">
        <div className="container mx-auto max-w-[1365px] px-[20px]">
          <div className="flex justify-between mb-[48px] ">
            <h2>Услуги клиники</h2>
            <p className="text-[#595959] text-[16px] leading-[22px] md:max-w-[540px]">
              Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих движениях.
            </p>
          </div>
          <Separator className="mb-[40px]"/>

          <div className="flex justify-between">
            <div className="flex gap-1">
              <h3>Физиотерапия</h3><Badge variant="default">10</Badge>
            </div>
            <Button variant='tretiary'>
              Смотреть все
            </Button>
          </div>

        </div>

      </section>

      <section>
        <div></div>
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
          <h1 className="text-white py-5">Stroke button</h1>
          <Button variant="tretiary">Смотреть все</Button>
          <Button variant="tretiary" disabled>
            Смотреть все
          </Button>
        </div>
      </div>
    </div>
  );
}
