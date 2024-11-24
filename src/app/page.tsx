import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full flex gap-5 p-20 bg-[#EBEFF3]">
      <div className="flex flex-col bg-white items-center p-8 gap-5 min-w-fit shadow-lg">
        <h1>Primary button</h1>
        <Button variant="default" size="default">
          Записаться онлайн 
        </Button>
        <Button variant="default" size="default" disabled>
          Записаться онлайн
        </Button>
      </div>
      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 min-w-fit shadow-lg">
        <h1 className="text-white">Secondary button</h1>
        <Button variant="secondary" size="default">
          Все услуги <span className="ms-[5px] mt-[3px]"><ChevronRight width={17} /></span>
        </Button>
        <Button variant="secondary" size="default" disabled>
          Все услуги <ChevronRight width={17} />
        </Button>
      </div>
    </div>
  );
}
