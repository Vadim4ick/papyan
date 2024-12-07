import { useGetServicesClinic } from "@/shared/hooks/services/useGetServicesClinic";
import { CatigoryWrapper } from "./category/category-wrapper";
import { SectionHeader } from "./section-header";

const ServicesClinic = () => {
  const { data: services, isLoading: servicesLoading } = useGetServicesClinic();

  return (
    <div className="container mx-auto max-w-[1364px] px-[20px]">
      <SectionHeader
        className="mb-[20px]"
        title={services?.servicesClinic.title || ""}
        description={services?.servicesClinic.description}
        isLoading={servicesLoading}
      />

      {services?.servicesClinic.servicesClinic.map(({ servicesBlock_id }) => (
        <CatigoryWrapper
          key={servicesBlock_id.id}
          className="mb-[78px]"
          category={servicesBlock_id}
        />
      ))}
    </div>
  );
};

export { ServicesClinic };
