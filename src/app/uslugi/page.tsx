import { SectionHeader } from "@/components/section-header";

import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { categories, SecondBunnerImageUrl } from "@/shared/const/moc-data";
import { Banner } from "@/components/banner";

export default function Uslugi() {
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

          {categories.map((category) => (
            <CatigoryWrapper
              key={category.id}
              className="mb-[78px]"
              category={category}
            />
          ))}
        </div>
      </section>

      <Banner
        imageUrl={SecondBunnerImageUrl}
        hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
      />
    </div>
  );
}
