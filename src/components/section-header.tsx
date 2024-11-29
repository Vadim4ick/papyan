import { cn } from "@/shared/lib/utils";
import { Separator } from "./ui/separator";


function SectionHeader({
  title,
  description,
  className
}: {
  title: string;
  description: string;
  className?:string;
}) {
  return (
    <div className={cn( className)} >
      <div className="flex flex-col gap-[12px] justify-between mb-[32px] lg:mb-[48px] ">
        <h2>{title}</h2>
        <p className="text-[#595959] text-[16px] leading-[22px] md:max-w-[540px]">
          {description}
        </p>
      </div>
        <Separator />
    </div>
  );
}

export { SectionHeader };
