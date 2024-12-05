import { Badge } from "@/components/ui/badge";
import { RussianRuble } from "lucide-react";
import Image from "next/image";

const regularPrice = 5000;
const discount = 15;
const newPrice = regularPrice - (regularPrice * discount) / 100;

export default function Akcii() {
  return (
    <section className="pt-[32px] py-5 lg:pt-[64px] lg:pb-[100px]">
      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <div className="items-center relative ] w-[350px] h-[467px] md:w-[357px] md:h-[482px] xl:w-[400px] xl:h-[540px] overflow-hidden rounded-md group">
          <Image
            width={380}
            height={418}
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={"altText"}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-5 w-full   ">
            <div className="w-[302px] h-[49px] bg-[#FFFFFF] mx-auto rounded-[41px] flex justify-between items-center pl-[16px] pr-[6px]">
              <div className="flex gap-[6px] items-center">
                <p className=" relative text-[#353535] text-[20px] leading-[25px] tracking-tight font-semibold ">
                  {newPrice}
                  <span className="absolute top-[5px]">
                    <RussianRuble size={17} strokeWidth={2.25} />
                  </span>{" "}
                </p>

                <p className="ms-[18px] relative text-[#7B7B7B] text-[14px] line-through leading-[18px] tracking-tight  ">
                  {regularPrice}
                  <span className="absolute top-[2px]">
                    <RussianRuble size={13} strokeWidth={2.25} />
                  </span>{" "}
                </p>
              </div>
              <Badge variant="discont">-15%</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
