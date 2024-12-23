import { GetServiceBlockQuery } from "@/graphql/__generated__";
import Link from "next/link";

function ServiceCostItem({
  service,
}: {
  service: GetServiceBlockQuery["servicesBlock"][0]["allServices"][0];
}) {
  return (
    <Link
      href={`/therapy/${service.id}`}
      className="flex justify-between items-center p-[18px] w-full lg:w-[828px] h-[58px] bg-[#F0F3F8] rounded-lg "
    >
      <p className="text-[18px] leading-[23.4px] lg:leading-[22px] font-semibold"> {service.title} </p>
      <p className="relative text-[#353535] text-[18px] leading-[22px] font-semibold">
          {service.price} <span className="">₽</span>{" "}
        </p>
    </Link>
  );
}

export { ServiceCostItem };
