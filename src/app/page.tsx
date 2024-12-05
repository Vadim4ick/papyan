import { SectionHeader } from "@/components/section-header";
import {
  categories,
  ImageMocData,
  MainBunnerImageUrl,
  SecondBunnerImageUrl,
} from "@/shared/const/moc-data";
import { SliderWrapper } from "@/components/slider/slider-wrapper";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { Banner } from "@/components/banner";

export default function Home() {
  return (
    <div className="">

      <Banner imageUrl={MainBunnerImageUrl} hight={"h-screen lg:max-h-[727px]"}/>


      <section className="pt-[32px] lg:pt-[64px] lg:pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
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

      <Banner imageUrl={SecondBunnerImageUrl} hight={"h-[494px] md:h-[520px] lg:h-[470px]"}/>

      <section className="pt-[100px] pb-[100px]">
        <div className="container h-[494px] md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
          <SliderWrapper>
            {ImageMocData.map((item) => (
              <img key={item.id} src={item.imageUrl} alt={item.altText} />
            ))}
          </SliderWrapper>
        </div>
      </section>

      {/* <AllButtons /> */}
    </div>
  );
}
