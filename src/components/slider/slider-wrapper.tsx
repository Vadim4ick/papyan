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
  className?: string
}

function SliderWrapper({ children, className }: SliderWrapperProps) {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  const isMobile = useClientMediaQuery("(max-width: 768px)");

  return (
    <div className="slider-wrapper relative w-full">
      {!isTablet && (
        <div className="swiper-navigation">
          <Button variant="arrow" className="btn-prev">
            <ChevronLeft width={17} />
          </Button>
          <Button variant="arrow" className="btn-next">
            <ChevronRight width={17} />
          </Button>
        </div>
      )}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={isMobile? 16 : 20}
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        loop={true}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        watchOverflow={true}
        allowTouchMove={true}
        className={`${className} mySwiper`}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))
          : children && <SwiperSlide>{children}</SwiperSlide>}
      </Swiper>
    </div>
  );

}

export { SliderWrapper };
