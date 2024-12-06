"use client";

import { DiscountCard } from "@/components/cards/discount-card";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";

const data = [
  { title: "Хивамат-терапия", newPrice: 100, regularPrice: 120, discount: 20 },
  {
    title: "Комплексное лечение заболеваний опорно-двигательного аппарата",
    regularPrice: 240,
    discount: 40,
  },
  {
    title: "Лечебно-оздоровительный Массаж",
    regularPrice: 360,
    discount: 60,
  },
  {
    title: "Мануальная терапия",
    regularPrice: 120,
    discount: 20,
  },
  {
    title: "Мануальная терапия",
    regularPrice: 240,
    discount: 40,
  },
  { title: "Хивамат-терапия", regularPrice: 360, discount: 60 },
  {
    title: "Магнитотерапия высокой интенсивности",
    regularPrice: 120,
    discount: 20,
  },
  { title: "Хивамат-терапия", regularPrice: 360, discount: 60 },
  { title: "Хивамат-терапия", regularPrice: 360, discount: 60 },
  { title: "Хивамат-терапия", regularPrice: 360, discount: 60 },
  { title: "Хивамат-терапия", regularPrice: 360, discount: 60 },
];

export default function Akcii() {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  let rows = [data.slice(0, 2), data.slice(2, 4), data.slice(4)];

  if (isTablet) {
    rows = [
      data.slice(0, 1),
      data.slice(1, 3),
      data.slice(3, 4),
      data.slice(4),
    ];
  }

  return (
    <section className="pt-[32px] py-5 lg:pt-[64px] lg:pb-[100px]">
      <div className="container mx-auto max-w-[1364px] px-[20px]">
        <h1>{isTablet}</h1>
        <div className="flex flex-wrap gap-4 ">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap gap-4 w-full justify-between ${
                rowIndex % 2 === 1 ? "flex-row-reverse" : ""
              } flex gap-4`}
            >
              {row.map((card, index) => (
                <DiscountCard
                  key={index}
                  card={card}
                  className={`text-center text-xl font-extrabold 
                  ${
                    isTablet
                      ? rowIndex === 0
                        ? "w-[100%] bg-red-500"
                        : rowIndex === 1
                        ? "w-full md:w-[48%] bg-green-500"
                        : rowIndex === 2
                        ? "w-[100%] bg-yellow-500"
                        : "w-full md:w-[48%] bg-purple-500"
                      : rowIndex === 2
                      ? "w-[32%]"
                      : index === 0
                      ? "w-[66%]"
                      : "w-[32%]"
                  }
                `}
                />
                  
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
