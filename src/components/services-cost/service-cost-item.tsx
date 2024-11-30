import { IServisePriceList } from "./services-costs-wrapper";

interface ServiceItemCostProps {
  service: IServisePriceList;
}

function ServiceCostItem({ service }: ServiceItemCostProps) {
  return (
    <div className="flex justify-between items-center p-[18px] w-full lg:w-[828px] h-[58px] bg-[#F0F3F8] rounded-lg text-[18px] leading-[23.4px] lg:leading-[22px] tracking-tight">
      <div> {service.title} </div>
      <div> {service.price} </div>
    </div>
  );
}

export { ServiceCostItem };
