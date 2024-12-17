import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { expirience, graduation } from "@/shared/const/moc-data";
import Image from "next/image";

const DoctorDetailInfo = () => {
  return (
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
  );
}

export {DoctorDetailInfo};