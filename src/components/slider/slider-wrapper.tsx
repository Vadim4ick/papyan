"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import React from "react";

interface SliderWrapperProps {
  children: ReactNode;
  className?: string;
  slideWidth?: string;
  mySwiperNumber?: string;

  btns: {
    next: string;
    prev: string;
  };
}

function SliderWrapper({
  children,
  className,
  slideWidth,
  btns = {
    next: "swiper-button-next",
    prev: "swiper-button-prev",
  },
  mySwiperNumber,
}: SliderWrapperProps) {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  const isMobile = useClientMediaQuery("(max-width: 768px)");

  const slideCount = React.Children.count(children);
  const isNavigationDisabled = slideCount <= 4;

  return (
    <div className="slider-wrapper relative w-full">
      {isTablet ||
        (!isNavigationDisabled && (
          <div className="swiper-nav flex gap-4">
            <Button
              variant="arrow"
              className={`${btns.prev} pe-[2px] duration-450`}
              classArrow={"!me-[2px] !ms-[0px]"}
              motionProps={{
                stiffness: 142.2,
                damping: 26.67,
                mass: 1,
              }}
            >
              <ChevronLeft strokeWidth={2.5} width={22} />
            </Button>
            <Button
              variant="arrow"
              className={`${btns.next} ps-[1px] duration-450`}
              motionProps={{
                stiffness: 142.2,
                damping: 26.67,
                mass: 1,
              }}
            >
              <ChevronRight strokeWidth={2.5} width={22} />
            </Button>
          </div>
        ))}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={isMobile ? 16 : 20}
        modules={[Pagination, Navigation]}
        speed={450}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: `.${btns.next}`,
          prevEl: `.${btns.prev}`,
        }}
        watchOverflow={true}
        allowTouchMove={true}
        className={`${className} mySwiper${mySwiperNumber} `}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <SwiperSlide className={`${slideWidth}`} key={index}>
                {child}
              </SwiperSlide>
            ))
          : children && <SwiperSlide>{children}</SwiperSlide>}
      </Swiper>
    </div>
  );
}

export { SliderWrapper };
