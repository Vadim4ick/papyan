import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GetAllDoctorsQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { DialogForm } from "./modal/dialog";
import { useRouter } from "next/navigation";

const DoctorDetailInfo = ({
  doctors,
  btnDetail = true,
}: {
  doctors: GetAllDoctorsQuery["doctors"][0];
  btnDetail?: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <div className="relative min-h-[540px] mb-[32px] md:mb-0 flex flex-col-reverse items-center gap-y-[32px] md:items-start md:flex-row gap-x-[40px] xl:gap-x-[48px]">
        <div className="items-center relative ] w-full h-[467px] md:w-[357px] md:h-[482px] xl:w-[400px] xl:h-[540px] overflow-hidden rounded-md group">
          <Image
            width={380}
            height={418}
            src={pathImage(doctors.img.id)}
            alt={"altText"}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 w-full flex flex-col gap-[8px] p-[8px] z-20">
            <DialogForm>
              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                className="w-full duration-450 h-[48px] text-[15px] font-bold leading-[20px] tracking-[-0.3px]"
                variant="default"
              >
                Записаться на прием
              </Button>
            </DialogForm>
            {btnDetail && (
              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                className="w-full h-[48px] duration-450 border-[1px] border-[#DEE3EA] text-[15px] font-semibold tracking-[-0.3px] leading-[20px] bg-[#EBEFF3] hover:bg-[#EBEFF3]"
                variant="white"
                onClick={() => {
                  router.push(`/doctor/${doctors.id}`);
                }}
              >
                Подробнее
              </Button>
            )}
          </div>
          <div className="absolute bottom-0 w-full h-[112px] z-10 backdrop-blur-md bg-white/5"></div>
        </div>
        <div className="flex flex-col justify-between  md:min-h-[540px]">
          <div className="md:max-w-[377px] lg:max-w-[512px]">
            {doctors.post && (
              <Badge
                variant="secondary"
                className="mb-[20px] px-[14px] py-[6px] w-fit bg-[#F0F3F8]"
              >
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

          <div className="w-full hidden xl:flex flex-col justify-end">
            {doctors.education && (
              <div className="mb-[32px]">
                <p className="leading-[21.86px] font-semibold mb-4 md:mb-2">
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
                        <li className="mb-[6px] last:mb-0 relative pl-[6px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary before:rounded-[100px]">
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
                <p className="leading-[21.86px] font-semibold mb-4 md:mb-2">
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
                        <li className="mb-[6px] last:mb-0 relative pl-[6px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#E7402A] before:rounded-[100px]">
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
          <p className="leading-[21.86px] font-semibold mb-4 md:mb-2">
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
                  <li className="mb-[6px] last:mb-0 relative pl-[6px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary before:rounded-[100px]">
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
          <p className="leading-[21.86px] font-semibold mb-4 md:mb-2">
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
                  <li className="mb-[6px] last:mb-0 relative pl-[6px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#E7402A] before:rounded-[100px]">
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
