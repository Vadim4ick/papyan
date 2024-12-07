import { cn } from "@/shared/lib/utils";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

function SectionHeader({
  title,
  description,
  className,
  isLoading,
}: {
  title: string;
  description?: string;
  className?: string;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row gap-[12px] justify-between mb-[32px] lg:mb-[48px] ">
        <Skeleton className="h-[45px] w-[280px]" />

        <Skeleton className="h-[45px] md:max-w-[540px] w-full" />
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <div className="flex flex-col md:flex-row gap-[12px] justify-between mb-[32px] lg:mb-[48px] ">
        <h2>{title}</h2>

        {description && (
          <p className="text-[#595959] text-[16px] leading-[22px] md:max-w-[540px]">
            {description}
          </p>
        )}
      </div>

      <Separator />
    </div>
  );
}

export { SectionHeader };
