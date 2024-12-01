import { TCategory } from "@/shared/types/types";
import { TitleWithBadge } from "../title-with-badge";
import { ServiceCostItem } from "./service-cost-item";
import { servicesList } from "@/shared/const/moc-data";

export interface IServisePriceList {
    id: string
    title: string
    price: string
}

interface ServicesCostsWrapperProps {
    category: TCategory
}

const priceList =  servicesList;

const ServicesCostsWrapper: React.FC<ServicesCostsWrapperProps> = ({ category }) => {

    return (
        <div className="flex flex-col gap-y-[8px] mb-[60px] md:mb-[64px] lg:mb-[48px]">
            <TitleWithBadge tittle={category.name} quantity={priceList.length} className="pb-[24px]" />

            {
                priceList.map((item) => (
                    <ServiceCostItem key={item.id} service={item} />
                )
                )
            }
        </div>

    )
}

export { ServicesCostsWrapper }