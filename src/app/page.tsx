import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full my-auto p-20 ">
      <div className="flex flex-col items-center p-8 gap-5 w-60 shadow-lg">
        <h1>Primary button</h1>
        <Button variant="default" size="default">
          Primary Button
        </Button>
        <Button variant="default" size="default" disabled>
          Disabled Button
        </Button>
      </div>
    </div>
  );
}
