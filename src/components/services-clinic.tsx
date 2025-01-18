import { CatigoryWrapper } from "./category/category-wrapper";
import { SectionHeader } from "./section-header";
import { GetServiceClinicQuery } from "@/graphql/__generated__";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ServicesClinic = ({
  title,
  description,
  services,
}: {
  title?: string;
  description?: string;
  services?: GetServiceClinicQuery | undefined;
}) => {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-[1364px] px-[20px] mb-[78px]">
      <SectionHeader
        className="mb-[20px] md:mb-[32px] lg:mb-[40px]"
        title={title || ""}
        description={description}
      />

      {services?.servicesClinic.servicesClinic.map(({ servicesBlock_id }) => (
        <CatigoryWrapper
          key={servicesBlock_id.id}
          category={servicesBlock_id}
        />
      ))}

      <div className="flex items-center justify-center md:hidden">
        <Button
          onClick={() => router.push(`/uslugi/`)}
          className="flex items-center gap-2 justify-center text-[14px] leading-[19px] tracking-[-0.28px] font-[600] mt-4"
          variant={"secondary"}
        >
          Смотреть все{" "}
          <svg
            className="mt-[1px]"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46281 6.62267L1.74865 11.5725L0.570312 10.3353L4.69531 6.00405L0.570312 1.6728L1.74865 0.435547L6.46281 5.38542C6.61904 5.54951 6.7068 5.77203 6.7068 6.00405C6.7068 6.23607 6.61904 6.45859 6.46281 6.62267Z"
              fill="#1467E1"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export { ServicesClinic };
