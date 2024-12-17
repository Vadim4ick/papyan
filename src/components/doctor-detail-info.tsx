import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GetAllDoctorsQuery,
  GetDoctorByIdQuery,
} from "@/graphql/__generated__";
import { expirience, graduation } from "@/shared/const/moc-data";
import { pathImage } from "@/shared/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const DoctorDetailInfo = ({
  doctors,
}: {
  doctors: GetAllDoctorsQuery["doctors"][0];
}) => {
  return (
    <>
      <div className="flex flex-col-reverse items-center gap-y-[32px] md:items-start md:flex-row gap-x-[40px] mb-[32px] xl:mb-[52px] xl:gap-x-[48px]">
        <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[400px] xl:h-[540px] overflow-hidden rounded-md group">
          <Image
            width={380}
            height={418}
            src={pathImage(doctors.img.id)}
            alt={"altText"}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 w-full flex flex-col gap-[8px] p-[8px] z-20">
            <Button className="w-full h-[48px]" variant="default">
              Записаться на прием
            </Button>
            <Button className="w-full h-[48px] bg-[#EBEFF3]" variant="white">
              Подробнее
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 justify-between">
          <div className="max-w-[377px] ">
            {doctors.post && (
              <Badge variant="secondary" className="mb-[20px]">
                {doctors.post}
              </Badge>
            )}
            {doctors.name && <h3 className="mb-[12px]">{doctors.name}</h3>}
            {doctors.description && (
              <p className="text-[16px] leading-[22px] xl:text-[16px] xl:leading-[22px]">
                {doctors.description}
              </p>
            )}
          </div>

          <div className="w-full hidden xl:block">
            {doctors.education && (
              <div className="mb-[32px]">
                <p className="leading-[21.86px] font-semibold mb-[8px]">
                  Образование:
                </p>

                <ReactMarkdown
                  components={{
                    ul: ({ children }) => {
                      return (
                        <ul className="text-[16px] leading-[22px]">
                          {children}
                        </ul>
                      );
                    },

                    li: ({ children }) => {
                      return (
                        <li className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary">
                          {children}
                        </li>
                      );
                    },
                  }}
                >
                  {doctors.education}
                </ReactMarkdown>
              </div>
            )}

            {doctors.experience && (
              <div>
                <p className="leading-[21.86px] font-semibold mb-[8px]">
                  Опыт и достижения:
                </p>

                <ReactMarkdown
                  components={{
                    ul: ({ children }) => {
                      return (
                        <ul className="text-[16px] leading-[22px]">
                          {children}
                        </ul>
                      );
                    },

                    li: ({ children }) => {
                      return (
                        <li className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FF8A00]">
                          {children}
                        </li>
                      );
                    },
                  }}
                >
                  {doctors.experience}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full xl:hidden">
        <div className="mb-[32px]">
          <p className="leading-[21.86px] font-semibold mb-[8px]">
            Образование:
          </p>
          <ReactMarkdown
            components={{
              ul: ({ children }) => {
                return (
                  <ul className="text-[16px] leading-[22px]">{children}</ul>
                );
              },

              li: ({ children }) => {
                return (
                  <li className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary">
                    {children}
                  </li>
                );
              },
            }}
          >
            {doctors.education}
          </ReactMarkdown>
        </div>
        <div>
          <p className="leading-[21.86px] font-semibold mb-[8px]">
            Опыт и достижения:
          </p>

          <ReactMarkdown
            components={{
              ul: ({ children }) => {
                return (
                  <ul className="text-[16px] leading-[22px]">{children}</ul>
                );
              },

              li: ({ children }) => {
                return (
                  <li className="mb-[6px] last:mb-0 relative pl-[4px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#FF8A00]">
                    {children}
                  </li>
                );
              },
            }}
          >
            {doctors.experience}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export { DoctorDetailInfo };
