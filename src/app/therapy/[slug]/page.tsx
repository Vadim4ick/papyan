import { Banner } from "@/components/banner";
import { GetConsultCard } from "@/components/cards/get-consult-card";
import { ServiceCardItem } from "@/components/cards/service-card-item";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { SecondBunnerImageUrl, servicesList } from "@/shared/const/moc-data";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <>
      <section className="pt-[64px] pb-[72px] xl:pb-[100px] ">
        <div className="container flex flex-col gap-y-[60px] md:flex-row mx-auto max-w-[1364px] px-[20px]">
          <div>
            <div className="mb-[36px] md:mb-[48px] lg:mb-[71px] lg:max-w-[718px]">
              <h1 className="mb-[12px] md:mb-[16px] lg:mb-[24px]">
                Хивамат-терапия {slug}
              </h1>
              <p>
                Физиотерапевтическая процедура, выполняемая аппаратом «Хивамат»
                (Hivamat). Принцип действия основан на массаже кожи и мышечных
                тканей посредством переменного электростатического поля,
                генерирующего осцилляции – вибрации с задаваемой определенной
                глубиной и частотой проникновения.
              </p>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start lg: flex-col gap-y-[16px] md:flex-row gap-x-[20px] my-[36px] md:my-[48px] lg:my-[64px] ">
              <div className=" h-[467px] ] w-[350px] md:h-[416px] md:w-[377px xl:h-[418px] xl:w-[396px] overflow-hidden rounded-md group">
                <Image
                  width={380}
                  height={418}
                  src={
                    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                  }
                  alt={"altText"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className=" h-[467px] ] w-[350px] md:h-[416px] md:w-[377px xl:h-[418px] xl:w-[396px] overflow-hidden rounded-md group">
                <Image
                  width={380}
                  height={418}
                  src={
                    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                  }
                  alt={"altText"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:max-w-[812px]">
              <p>
                Равным образом новая модель организационной деятельности
                позволяет выполнять важные задания по разработке дальнейших
                направлений развития. Значимость этих проблем настолько
                очевидна, что постоянное информационно-пропагандистское
                обеспечение нашей деятельности позволяет оценить значение
                системы обучения кадров, соответствует насущным потребностям.
                Разнообразный и богатый опыт сложившаяся структура организации
                влечет за собой процесс внедрения и модернизации модели
                развития.
              </p>
              <p>
                С другой стороны рамки и место обучения кадров способствует
                подготовки и реализации новых предложений. С другой стороны
                постоянное информационно-пропагандистское обеспечение нашей
                деятельности требуют определения и уточнения позиций, занимаемых
                участниками в отношении поставленных задач. Товарищи! постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                играет важную роль в формировании системы обучения кадров,
                соответствует насущным потребностям.
              </p>
            </div>
          </div>
          <div className="relative w-full ">
            <div className="xl:sticky top-[64px] max-w-fit mx-auto md:ml-auto">
              <GetConsultCard
                title={"Хивамат-терапия"}
                regularPrice={"2200"}
                newPrice={"1700"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[72px] xl:py-[100px] ">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SliderWrapper>
            {servicesList.map((item) => (
              <ServiceCardItem key={item.id} card={item} />
            ))}
          </SliderWrapper>
        </div>
      </section>

      <Banner imageUrl={SecondBunnerImageUrl} hight={"h-[494px] md:h-[520px] lg:h-[470px]"}/>
    </>
  );
}
