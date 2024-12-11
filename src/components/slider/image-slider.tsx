"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ModalGallery } from "./modal-gallery";
import { IImage } from "@/shared/types/types";
import "swiper/css";
import "./styles.css"
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import React from "react";


interface SliderWrapperProps {
  images: IImage[];
  className?: string;
}

function ImageSlider({ images, className }: SliderWrapperProps) {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const slideCount = images.length;
  const isNavigationDisabled = slideCount <= 4;

  return (
    <>
      <div className="slider-wrapper relative w-full">
      {isTablet || !isNavigationDisabled && (
        <div className="swiper-nav">
          <Button variant="arrow" className="button-prev">
            <ChevronLeft width={17} />
          </Button>
          <Button variant="arrow" className="button-next">
            <ChevronRight width={17} />
          </Button>
        </div>
      )}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          loop={!isNavigationDisabled}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          className={`${className} mySwiper`}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} onClick={() => handleImageClick(index)}>
              <img
                src={src.imageUrl}
                alt={`Slide ${index}`}
                className="cursor-pointer object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && (
        <ModalGallery
          images={images}
          activeIndex={activeIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export { ImageSlider };
