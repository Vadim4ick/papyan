import React from "react";
import Image from "next/image";
import { cn, pathImage } from "@/shared/lib/utils";
import { RoundButton } from "../ui/round-button";
import { GetAllDoctorsQuery } from "@/graphql/__generated__";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "@/shared/icons/ArrowUpRight";
import Link from "next/link";

interface DoctorCardProps {
  doctor: GetAllDoctorsQuery["doctors"][0];
  className?: string;
  bages?: string[];
  badgecolor?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  bages,
  className,
  badgecolor,
}) => {
  const router = useRouter();

  if (!doctor) return null;
  return (
    <Link href={`/doctor/${doctor.id}`}>
      <div className={cn(" group", className)}>
        <div className="w-[289px] h-[350px] md:w-[311px] md:h-[377px] xl:w-[316px] xl:h-[383px] relative overflow-hidden mb-3 rounded-lg">
          {/* TODO */}
          <img
            // width={380}
            // height={418}
            src={pathImage(doctor.img.id)}
            alt={doctor.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-450"
          />
        </div>

        <Badge
          variant="secondary"
          className={`mb-2 xl:mb-[8px] py-[6px] px-[14px] hover:bg-transparent w-fit ${badgecolor}`}
        >
          {doctor.post}
        </Badge>
        <p className="text-left text-[16px] leading-[22px]">{doctor.name}</p>

        <div className="absolute -top-[14px] right-[14px]">
          <RoundButton
            variant="default"
            onClick={() => router.push(`/doctor/${doctor.id}`)}
            className="md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-[24px] max-md:translate-y-[24px] duration-450 transition-all h-9 w-9 ease-out"
          >
            <ArrowUpRight className="text-[#E7402A]" />
          </RoundButton>
        </div>
        {bages && bages?.length > 0 && (
          <div className="absolute -bottom-[10px] left-[14px] right-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-24px] duration-450 transition-all ease-out">
            <div className="flex flex-wrap justify-start gap-[5px] ">
              {bages.map((service, idx) => (
                <Badge
                  key={idx}
                  variant="default"
                  className="text-[12px] leading-[15.6px] px-2 py-1"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default DoctorCard;
