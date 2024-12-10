"use client";
import { BadgeWithIcon } from "@/components/badge-with-icon";
import { Banner } from "@/components/banner";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { SectionHeader } from "@/components/section-header";
import { ServicesClinic } from "@/components/services-clinic";
import { ImageSlider } from "@/components/slider/image-slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RoundButton } from "@/components/ui/round-button";
import { Separator } from "@/components/ui/separator";
import {
  categories,
  ContactData,
  cpecialistsList,
  expirience,
  graduation,
  ImageMocData,
} from "@/shared/const/moc-data";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const MediaFragment = undefined; // ToDo Прокинуть данные о фото

  return (
    <>
      <section className="bg-[#F0F3F8] pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col items-center md:items-stretch gap-y-[60px] md:flex-row justify-between">
            <div className="md: max-w-[377px] xl:max-w-[651px]">
              <h1 className="mb-[12px] md:mb-[16px] lg:mb-[24px]">
                Клиника Доктора Папяна
              </h1>
              <p>
                Клиника «Dr.Papyan» — место, где наша главная миссия заключается
                в возвращении людям качества жизни. Мы специализируемся на
                восстановлении физической активности, помогая нашим клиентам
                вернуться к полноценному образу жизни. В нашей клинике
                принимаются дети и взрослые всех возрастов.
              </p>
              <p>
                Мы лечим широкий спектр диагнозов, связанных с
                опорно-двигательным аппаратом: травмы, боли, реабилитация после
                операций, повреждения суставов, повреждения мышечно-связочного
                аппарата, воспалительные процессы, грыжи, протрузии, а также
                купирование острых болей.
              </p>
              <p>
                В нашей клинике вы встретите врачей с богатым опытом и высокой
                квалификацией. Специалисты обладают глубокими знаниями в области
                лечения, а также постоянно совершенствуют свои навыки, чтобы
                обеспечить нашим пациентам лучшее качество медицинской помощи.
                Мы гордимся нашей командой врачей, которые с большим
                профессионализмом и заботой относятся к каждому пациенту,
                стремясь найти наилучшее решение для их здоровья и благополучия.
              </p>
            </div>
            <div className="relative">
              <ContactCardV2
                className="w-[350px] h-[296px] md:w-[323px] xl:w-[400px] xl:h-[299px] md:sticky top-[112px]"
                address={ContactData.address}
                schedule={ContactData.schedule}
                phone={ContactData.phone}
              >
                <Button className="w-full" variant="secondary">
                  Получить консультацию
                </Button>
              </ContactCardV2>
            </div>
          </div>

          <div className="pt-[72px] md:pt-[78px] xl:pt-[72px] xl:pb-[100px]">
            <div className="flex gap-[6px] mb-[24px] md:mb-[38px] xl:mb-[24px]">
              <BadgeWithIcon variant="video" tittle={"Видео"} quantity={10} />
              <BadgeWithIcon variant="photo" tittle={"Фото"} quantity={10} />
            </div>

            <ImageSlider images={ImageMocData} />

          </div>
        </div>
      </section>

      <section className="pt-[64px] pb-[30px] md:pb-[48px] xl:pb-[50px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title="Специалисты клиники"
            description="Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях"
          />
          <div className="flex flex-col-reverse items-center gap-y-[32px] md:items-start md:flex-row gap-x-[40px] mb-[32px] xl:mb-[52px] xl:gap-x-[48px]">
            <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[400px] xl:h-[540px] overflow-hidden rounded-md group">
              <Image
                width={380}
                height={418}
                src="https://images.unsplash.com/photo-1630631729332-d564de91400f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={"altText"}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 w-full flex flex-col gap-[8px] p-[8px] z-20">
                <Button className="w-full h-[48px]" variant="default">
                  Записаться на прием
                </Button>
                <Button
                  className="w-full h-[48px] bg-[#EBEFF3]"
                  variant="white"
                >
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 justify-between">
              <div className="max-w-[377px] ">
                <Badge variant="secondary" className="mb-[20px]">
                  Заведущий клиникой
                </Badge>
                <h3 className="mb-[12px]">Папян Артем Месробович</h3>
                <p className="text-[16px] leading-[22px] xl:text-[16px] xl:leading-[22px]">
                  Является специалистом по ЛФК, а также работает в сфере
                  ортопедии и травматологии. В качестве тренера по лечебной
                  физкультуре он ведет работу с пациентами самых разных групп
                </p>
              </div>

              <div className="w-full hidden xl:block">
                <div className="mb-[32px]">
                  <p className="leading-[21.86px] font-semibold mb-[8px]">
                    Образование:
                  </p>
                  <ul className="text-[16px] leading-[22px]">
                    {graduation.map((item, index) => (
                      <li
                        key={index}
                        className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="leading-[21.86px] font-semibold mb-[8px]">
                    Опыт и достижения:
                  </p>
                  <ul className="text-[16px] leading-[22px]">
                    {expirience.map((item, index) => (
                      <li
                        key={index}
                        className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FF8A00]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:hidden">
            <div className="mb-[32px]">
              <p className="leading-[21.86px] font-semibold mb-[8px]">
                Образование:
              </p>
              <ul className="text-[16px] leading-[22px]">
                {graduation.map((item, index) => (
                  <li
                    key={index}
                    className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="leading-[21.86px] font-semibold mb-[8px]">
                Опыт и достижения:
              </p>
              <ul className="text-[16px] leading-[22px]">
                {expirience.map((item, index) => (
                  <li
                    key={index}
                    className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FF8A00]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[30px] xl:pt-[50px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex flex-col xl:flex-row gap-y-[48px] gap-x-[20px] xl:flex-wrap ">
            {cpecialistsList.map((item, index) => (
              <div
                key={item.id}
                className={`md:flex ${index % 2 === 1 ? "" : "md:flex-row-reverse"
                  } gap-x-[40px] xl:flex-col-reverse xl:gap-y-[12px]`}
              >
                <div className="md:w-1/2 xl:w-full">
                  <Separator className="mb-[32px] md:hidden" />
                  <Badge variant="secondary" className="mb-[16px] xl:mb-[8px]">
                    {item.cpeciality
                      .map((speciality, index) =>
                        index === 0
                          ? speciality.charAt(0).toUpperCase() +
                          speciality.slice(1).toLowerCase()
                          : speciality.toLowerCase()
                      )
                      .join(", ")}
                  </Badge>
                  <div className="w-full flex flex-col gap-y-[10px] mb-[10px]">
                    <h4 className="md:text-[28px] md:leading-[35px] xl:text-[16px] xl:leading-[22px]">
                      {item.name}
                    </h4>
                    <p className="md:text-[16px] md:leading-[22px] xl:hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[316px] xl:h-[455px] overflow-hidden rounded-md group">
                  <Image
                    width={380}
                    height={418}
                    src={item.imageUrl}
                    alt={"altText"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-[14px] z-20">
                    <RoundButton
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
                      variant="default"
                      onClick={() => router.push(`/doctor/${item.id}`)}
                    >
                      <ArrowUpRight />
                    </RoundButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78px] lg:pb-[100px]">
        <ServicesClinic />

        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          <CategoriesGalery
            category={categories}
            cardWidth="w-[350px] md:w-[377px] xl:w-[380px]"
            cardHeight="h-[238px] md:h-[187px] xl:h-[199px]"
          />
          <Button variant="secondary" onClick={() => router.push(`/uslugi/`)}>
            Все услуги{" "}
            <span className="ms-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </Button>
        </div>
      </section>

      {
        MediaFragment &&
        <Banner
          imageUrl={MediaFragment}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      }
    </>
  );
}
