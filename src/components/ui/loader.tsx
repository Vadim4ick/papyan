import { cn } from "@/shared/lib/utils";
import { Loader2 } from "lucide-react";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen z-[51] flex items-center justify-center bg-white">
      <Loader2 className={cn("animate-spin text-[#0084FF]", [className])} />
    </div>
  );
};

export { Loader };
