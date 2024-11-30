import Image from "next/image";
import { CatigoryWrapper } from "@/components/catigory/catigory-wrapper";
import { SectionHeader } from "@/components/section-header";
import { ServicesCostsWrapper } from "@/components/services-cost/services-costs-wrapper";
import { BlueImageUrl, CardsMocData } from "@/shared/const/moc-data";

const priceList = CardsMocData;

export default function Ceny() {
  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px]"
            title="Услуги клиники"
            description="Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих
              движениях."
          />
          <ServicesCostsWrapper priceList={priceList} />
          <ServicesCostsWrapper priceList={priceList} />
          <ServicesCostsWrapper priceList={priceList} />
          <ServicesCostsWrapper priceList={priceList} />
        </div>
      </section>

      <section className="bg-[#EBEFF3] py-[100px] lg:px-[20px]">
        <div className="container h-[494px] md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
          <Image
            width={1324}
            height={470}
            src={BlueImageUrl}
            alt={"altText"}
            className="h-full w-full object-cover lg:rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px]"
            title="Услуги клиники"
            description="Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих
              движениях."
          />

          <CatigoryWrapper className="mb-[78px]" />
          <CatigoryWrapper className="mb-[78px]" />
        </div>
      </section>
    </div>
  );
}
