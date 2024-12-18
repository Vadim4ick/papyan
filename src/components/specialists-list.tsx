import Image from "next/image";
import { RoundButton } from "./ui/round-button";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";
import { GetAllDoctorsQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

const SpecialistsList = ({
  doctors,
}: {
  doctors: GetAllDoctorsQuery["doctors"];
}) => {
  const router = useRouter();
  return (
    <section className="pt-[30px] xl:pt-[50px] pb-[100px]">
      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <div className="flex flex-col xl:flex-row gap-y-[48px] gap-x-[20px] xl:flex-wrap ">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`md:flex ${
                index % 2 === 1 ? "" : "md:flex-row-reverse"
              } gap-x-[40px] xl:flex-col-reverse xl:gap-y-[12px]`}
            >
              <div className="md:w-1/2 xl:w-full">
                <Separator className="mb-[32px] md:hidden" />
                <Badge variant="secondary" className="mb-[16px] xl:mb-[8px]">
                  {doctor.post}
                </Badge>
                <div className="w-full flex flex-col gap-y-[10px] mb-[10px]">
                  {doctor?.name && (
                    <h4 className="md:text-[28px] md:leading-[35px] xl:text-[16px] xl:leading-[22px]">
                      {doctor.name}
                    </h4>
                  )}

                  {doctor?.description && (
                    <p className="md:text-[16px] md:leading-[22px] xl:hidden">
                      {doctor.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[316px] xl:h-[455px] overflow-hidden rounded-md group">
                <Image
                  width={380}
                  height={418}
                  src={pathImage(doctor.img.id)}
                  alt={"altText"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 right-[14px] z-20">
                  <RoundButton
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-300"
                    variant="default"
                    onClick={() => router.push(`/doctor/${doctor.id}`)}
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
  );
};

export { SpecialistsList };