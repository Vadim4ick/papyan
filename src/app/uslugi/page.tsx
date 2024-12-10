"use client";
import { Banner } from "@/components/banner";
import { ServicesClinic } from "@/components/services-clinic";
import { MediaFragment } from "@/shared/const/moc-data";

export default function Uslugi() {
  return (
    <div>
      <section className="pt-[64px] pb-[100px]">
        <ServicesClinic />
      </section>

      {MediaFragment && (
        <Banner
          imageUrl={MediaFragment}
          hight={"h-[494px] md:h-[520px] lg:h-[470px]"}
        />
      )}
    </div>
  );
}
