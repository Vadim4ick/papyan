"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { X } from "lucide-react";
import { IImage } from "@/shared/types/types";

interface ModalGalleryProps {
  images: IImage[];
  activeIndex: number;
  onClose: () => void;
}

export function ModalGallery({
  images,
  activeIndex,
  onClose,
}: ModalGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white z-50"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Main Image */}
      <style>
        {`
        .swiper-slide {
          background: transparent !important;
        }
          .thumbsrow div {
            justify-content: end;
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        initialSlide={activeIndex}
        className=" h-[100%] !bg-transparent"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.imageUrl}
              alt={`Slide ${index}`}
              className="object-contain  !w-fit h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className=" !absolute !bottom-[40px] w-[80%] h-[100px] thumbsrow"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!h-[104px] !w-[70px]">
            <img
              src={src.imageUrl}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-16 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
