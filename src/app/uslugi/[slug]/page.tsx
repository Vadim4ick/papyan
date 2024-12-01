import { ServiceCardsWrapper } from "@/components/cards/serice-cards-wrapper";
import { SectionHeader } from "@/components/section-header";
import { servicesList } from "@/shared/const/moc-data";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug)
  return (
    <>
      <section className="pt-[64px] pb-[100px]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <SectionHeader
            className="mb-[36px]"
            title="Физиотерапия"
            description="Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях."
          />

          <div className="flex flex-col md:flex-row justify-between md:gap-[40px] xl:gap-[130px]">

            <div className="w-[350px] md:w-[357px xl:w-[380px] mb-[36px] md:mb-0">
              <div className=" h-[301px] ] md:h-[394px]  xl:h-[418px] mb-[48px] overflow-hidden rounded-md group">
                <Image
                  width={380}
                  height={418}
                  src={"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"}
                  alt={"altText"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p>
                Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях.
                Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях.
                Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях.
                Наши специалисты используют передовые методы и индивидуальный подход, чтобы вы вновь почувствовали уверенность в своих движениях.
              </p>
            </div>

            <ServiceCardsWrapper cardsList={servicesList} showFullList={true}/>
          </div>
        </div>
      </section>

      <section className="pt-[88px] pb-[100px] bg-[#F0F3F8]">
        <div className="container mx-auto max-w-[1364px] px-[20px]">
          <h2>Другие услуги</h2>
        </div>

      </section>
    </>
  );
}
