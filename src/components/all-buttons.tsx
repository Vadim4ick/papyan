import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

function AllButtons() {
  return (
    <div className="h-full flex flex-wrap gap-5 p-20 bg-[#EBEFF3]">
      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">Secondary button</h1>
        <Button className="duration-350 ease-out" variant="default">
          Записаться онлайн
        </Button>
        <Button className="duration-350 ease-out" variant="default" disabled>
          Записаться онлайн
        </Button>
      </div>

      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">Secondary button</h1>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          className="duration-450"
          variant="secondary"
        >
          Все услуги{" "}
          <span className="ms-[5px] mt-[3px]">
            <ChevronRight width={17} />
          </span>
        </Button>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          className="duration-450"
          variant="secondary"
          disabled
        >
          Все услуги{" "}
          <span className="ms-[5px] mt-[3px]">
            <ChevronRight width={17} />
          </span>
        </Button>
      </div>

      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">Stroke button</h1>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          style={{ transition: "all 450ms cubic-bezier(0.25, 0.1, 0.25, 1)" }}
          className="duration-450"
          variant="stroke"
        >
          Подробнее
        </Button>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          style={{ transition: "all 450ms cubic-bezier(0.25, 0.1, 0.25, 1)" }}
          className="duration-450"
          variant="stroke"
          disabled
        >
          Подробнее
        </Button>
      </div>

      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">Stroke button</h1>
        <Button className="duration-350 ease-out" variant="white">
          Записаться онлайн
        </Button>
        <Button className="duration-350 ease-out" variant="white" disabled>
          Записаться онлайн
        </Button>
      </div>

      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">tretiary button</h1>
        <Button variant="tretiary">Смотреть все</Button>
        <Button variant="tretiary" disabled>
          Смотреть все
        </Button>
      </div>

      <div className="flex flex-col bg-[#1E1E1E] items-center p-8 gap-5 w-[350px] shadow-lg">
        <h1 className="text-white py-5">arrow button</h1>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          classArrow={"!me-[0.5px] !ms-[0px]"}
          variant="arrow"
        >
          <ChevronRight width={20} />
        </Button>
        <Button
          motionProps={{
            stiffness: 142.2,
            damping: 26.67,
            mass: 1,
          }}
          variant="arrow"
          disabled
        >
          <ChevronRight width={20} />
        </Button>
      </div>
    </div>
  );
}

export { AllButtons };
