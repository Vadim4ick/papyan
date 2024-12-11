import { CatigoryWrapper } from "./category/category-wrapper";
import { SectionHeader } from "./section-header";
import { GetServiceClinicQuery } from "@/graphql/__generated__";

const ServicesClinic = ({
  title,
  description,
  services,
}: {
  title?: string;
  description?: string;
  services?: GetServiceClinicQuery | undefined;
}) => {
  return (
    <div className="container mx-auto max-w-[1364px] px-[20px]">
      <SectionHeader
        className="mb-[20px]"
        title={title || ""}
        description={description}
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
