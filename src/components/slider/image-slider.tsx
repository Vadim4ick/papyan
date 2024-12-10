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


interface SliderWrapperProps {
  images: IImage[];
  className?: string;
}

function ImageSlider({ images, className }: SliderWrapperProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="slider-wrapper relative w-full">
        <div className="swiper-nav">
          <Button variant="arrow" className="button-prev">
            <ChevronLeft width={17} />
          </Button>
          <Button variant="arrow" className="button-next">
            <ChevronRight width={17} />
          </Button>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
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
