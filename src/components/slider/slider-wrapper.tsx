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

interface SliderWrapperProps {
  children: ReactNode;
}

function SliderWrapper({ children }: SliderWrapperProps) {
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  return (
    <div className="slider-wrapper relative w-full">
      {!isMobile && (
        <div className="swiper-navigation">
          <Button variant="arrow" className="swiper-button-prev">
            <ChevronLeft width={17} />
          </Button>
          <Button variant="arrow" className="swiper-button-next">
            <ChevronRight width={17} />
          </Button>
        </div>
      )}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        allowTouchMove={true}
        className="mySwiper"
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))
          : children && <SwiperSlide>{children}</SwiperSlide>}
      </Swiper>
    </div>
  );
      console.log("🚀 ~ SliderWrapper ~ isMobile:", isMobile)
}

export { SliderWrapper };
