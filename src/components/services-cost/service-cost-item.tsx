import { GetServiceBlockQuery } from "@/graphql/__generated__";

function ServiceCostItem({
  service,
}: {
  service: GetServiceBlockQuery["servicesBlock"][0]["allServices"][0];
}) {
  return (
    <div className="flex justify-between items-center p-[18px] w-full lg:w-[828px] h-[58px] bg-[#F0F3F8] rounded-lg text-[18px] leading-[23.4px] lg:leading-[22px] tracking-tight">
      <div> {service.title} </div>
      <div> {service.price} </div>
    </div>
  );
}

export { ServiceCostItem };
