import { SectionHeader } from "@/components/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container } from "@/components/ui/container";

import Image from "next/image";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { categories, SecondBunnerImageUrl } from "@/shared/const/moc-data";

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
            <CatigoryWrapper key={category.id} className="mb-[78px]" category={category} />
          ))}

        </div>
      </section>

      <section className="bg-[#EBEFF3] pt-[36px] pb-[100px]">
        <Container>
          <AspectRatio ratio={1324 / 470}>
            <Image
              width={1324}
              height={470}
              src={SecondBunnerImageUrl}
              alt={"altText"}
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </Container>
      </section>
    </div>
  );
}
