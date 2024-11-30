import { TitleWithBadge } from "../title-with-badge";
import { ServiceCostItem } from "./service-cost-item";

export interface IServisePriceList {
    id: string
    title: string
    price: string
}

interface ServicesCostsWrapperProps {
    priceList: IServisePriceList[];
}

const ServicesCostsWrapper: React.FC<ServicesCostsWrapperProps> = ({ priceList }) => {

    return (
        <div className="flex flex-col gap-y-[8px]">
            <TitleWithBadge tittle={"Физиотерапия"} quantity={"10"} className="pb-[24px]" />

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