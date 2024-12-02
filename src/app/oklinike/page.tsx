import { BadgeWithIcon } from "@/components/badge-with-icon";
import { ContactCardV2 } from "@/components/cards/contact-card-v2";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { Button } from "@/components/ui/button";
import { ContactData, ImageMocData } from "@/shared/const/moc-data";

export default function About() {
  return (
    <>
      <section className="bg-[#F0F3F8] pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <div className="flex justify-between">
            <div className="max-w-[651px]">
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
            <div>
              <ContactCardV2
                className="w-[400px] h-[299px]"
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

          <div className="xl:pt-[72px] xl:pb-[100px]">
            <div className="flex gap-[6px] xl:mb-[24px]">
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
    </>
  );
}
