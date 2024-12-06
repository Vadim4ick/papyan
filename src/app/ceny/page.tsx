"use client";
import { CatigoryWrapper } from "@/components/category/category-wrapper";
import { SectionHeader } from "@/components/section-header";
import { ServicesCostsWrapper } from "@/components/services-cost/services-costs-wrapper";
import { categories, SecondBunnerImageUrl } from "@/shared/const/moc-data";
import { CategoriesGalery } from "@/components/cards/categories-galery";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Banner } from "@/components/banner";
import { useGetCenyPage } from "@/shared/hooks/services/pages/useGetCenyPage";
import { Skeleton } from "@/components/ui/skeleton";

export default function Ceny() {
  const router = useRouter();

  const { data, isLoading } = useGetCenyPage();

  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[40px]"
            title={data?.ceny_page.title || ""}
            description={data?.ceny_page.description}
            isLoading={isLoading}
          />

          {isLoading && (
            <div className="flex flex-col gap-y-[8px] mb-[60px] md:mb-[64px] lg:mb-[48px]">
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
              <Skeleton className="h-[45px] w-full max-w-[450px]" />
            </div>
          )}

          {data?.ceny_page.blocks &&
            data.ceny_page.blocks.map((category) => (
              <ServicesCostsWrapper
                key={category.id}
                category={category.servicesBlock_id}
              />
            ))}
        </div>
      </section>

      <Banner
        imageUrl={SecondBunnerImageUrl}
        hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
      />

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
