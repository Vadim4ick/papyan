import { BadgeWithIcon } from "@/components/badge-with-icon";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { SectionHeader } from "@/components/section-header";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Button } from "@/components/ui/button";
import { ContactData, ImageMocData } from "@/shared/const/moc-data";
import Image from "next/image";

export default function About() {
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
            <SliderWrapper>
              {ImageMocData.map((item) => (
                <img key={item.id} src={item.imageUrl} alt={item.altText} />
              ))}
            </SliderWrapper>
          </div>
        </div>
      </section>

      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title="Специалисты клиники"
            description="Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях"
          />
          <div>
            <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[400px] xl:h-[540px] overflow-hidden rounded-md group">
              <Image
                width={380}
                height={418}
                src="https://images.unsplash.com/photo-1630631729332-d564de91400f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={"altText"}
                className="h-full w-full object-cover"
              />
            <div className="absolute bottom-0 w-full flex flex-col gap-[8px] p-[8px] z-20">
              <Button className="w-full h-[48px]" variant="default">Записаться на прием</Button>
              <Button className="w-full h-[48px] bg-[#EBEFF3]" variant="white">Подробнее</Button>
            </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

