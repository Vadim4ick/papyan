import Image from "next/image";
import { RoundButton } from "./ui/round-button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";
import { GetAllDoctorsQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";
import { ArrowUpRight } from "@/shared/icons/ArrowUpRight";
import Link from "next/link";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";

const SpecialistsList = ({
  doctors,
  badgecolor,
}: {
  doctors: GetAllDoctorsQuery["doctors"];
  badgecolor?: string;
}) => {
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-[1364px] px-[20px]">
      <div className="flex flex-col xl:flex-row gap-y-[48px] gap-x-[20px] xl:flex-wrap ">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`md:flex ${
              index % 2 === 1 ? "" : "md:flex-row-reverse"
            } gap-x-[40px] xl:flex-col-reverse xl:gap-y-[12px]`}
          >
            <div className="md:w-1/2 xl:w-full mb-8 md:mb-0">
              <Separator className="mb-[32px] md:hidden" />
              <Badge
                variant="secondary"
                className={`mb-[16px] xl:mb-[8px] py-[6px] px-[14px] hover:bg-transparent w-fit ${badgecolor}`}
              >
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
            <Link
              href={`/doctor/${doctor.id}`}
              className="w-full flex justify-center"
              
            >
              <div className="items-center relative w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[316px] xl:h-[383px] rounded-lg overflow-hidden  group">
                <Image
                  width={380}
                  height={418}
                  src={pathImage(doctor.img.id)}
                  alt={"altText"}
                  className="h-full w-full object-cover transition-transform duration-450 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute top-0 right-[14px] z-20">
                  <RoundButton
                    className={
                      !isMobile
                        ? "opacity-0 group-hover:opacity-100 group-hover:translate-y-[14px] transition-all duration-450"
                        : "opacity-100  translate-y-[14px]"
                    }
                    variant="default"
                    onClick={() => router.push(`/doctor/${doctor.id}`)}
                  >
                    <ArrowUpRight />
                  </RoundButton>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SpecialistsList };
