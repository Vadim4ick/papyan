import { TitleWithBadge } from "../title-with-badge";
import { GetServiceBlockQuery } from "@/graphql/__generated__";
import { ServiceCostItem } from "./service-cost-item";

const ServicesCostsWrapper = ({
  category,
}: {
  category: GetServiceBlockQuery["servicesBlock"][0];
}) => {
  return (
    <div className="flex flex-col gap-y-[8px] mb-[60px] md:mb-[64px] lg:mb-[48px]">
      <TitleWithBadge
        tittle={category.title}
        quantity={category.allServices.length}
        className="pb-[24px]"
      />

      {category.allServices.map((item) => (
        <ServiceCostItem key={item.id} service={item} />
      ))}
    </div>
  );
};

export { ServicesCostsWrapper };
