"use client"
import Image from "next/image";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { SectionHeader } from "@/components/section-header";
import { ServicesCostsWrapper } from "@/components/services-cost/services-costs-wrapper";
import { categories, SecondBunnerImageUrl } from "@/shared/const/moc-data";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Ceny() {
  const router = useRouter();
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
            <ServicesCostsWrapper key={category.id} category={category}  />
          ))}
        </div>
      </section>

      <section className="bg-[#EBEFF3] py-[100px] lg:px-[20px]">
        <div className="container h-[494px] md:h-[520px] lg:h-[470px]  mx-auto max-w-[1364px]">
          <Image
            width={1324}
            height={470}
            src={SecondBunnerImageUrl}
            alt={"altText"}
            className="h-full w-full object-cover lg:rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="pt-[32px] lg:pt-[64px] pb-[72px] md:pb-[78px] lg:pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[20px]"
            title="Услуги клиники"
            description="Наши специалисты используют передовые методы и индивидуальный
              подход, чтобы вы вновь почувствовали уверенность в своих
              движениях."
          />
          {categories.slice(0, 2).map((category) => (
            <CatigoryWrapper
              key={category.id}
              className="mb-[78px]"
              category={category}
            />
          ))}
        </div>
        <div className="container mx-auto max-w-[1364px] px-[20px] flex flex-col gap-y-[48px] items-center xl:flex-row justify-between xl:items-end">
          <CategoriesGalery
            categoryList={categories}
            cardWidth="w-[350px] md:w-[377px] xl:w-[380px]"
            cardHeight="h-[238px] md:h-[187px] xl:h-[199px]"
          />
          <Button variant="secondary" onClick={() => router.push(`/uslugi/`)}>
            Все услуги{" "}
            <span className="ms-[5px] mt-[3px]">
              <ChevronRight width={17} />
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}
