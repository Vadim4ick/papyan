"use client"
import { ServicesClinic } from "@/components/services-clinic";

export default function Uslugi() {

  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <ServicesClinic />
      </section>

      {data && (
        <Banner
          imageUrl={SecondBunnerImageUrl}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      )}
    </div>
  );
}
