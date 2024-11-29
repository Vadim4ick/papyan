"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  id: number;
  imageUrl: string;
  altText: string;
}

function SliderWrapper({ImageData}:{ImageData:ImageData[]}) {
  return (
    <div className="slider-wrapper relative w-full">
      <div className="swiper-navigation">
        <Button variant="arrow" className="swiper-button-prev">
          <ChevronLeft width={17} />
        </Button>
        <Button variant="arrow" className="swiper-button-next">
          <ChevronRight width={17} />
        </Button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        // slideToClickedSlide={true}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"
      >
        {ImageData.map((item, index) => (
          <SwiperSlide key={index}>
            <img  src={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { SliderWrapper };
