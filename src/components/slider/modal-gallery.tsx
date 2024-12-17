/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "../ui/button";
import { GetAboutPageQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

interface ModalGalleryProps {
  images: GetAboutPageQuery["about_page"]["slider"];
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

      <div className="swiper-navigation">
        <Button variant="arrow" className="swiper-button-prev">
          <ChevronLeft width={17} color="white" />
        </Button>
        <Button variant="arrow" className="swiper-button-next">
          <ChevronRight width={17} color="white" />
        </Button>
      </div>

      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        initialSlide={activeIndex}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" h-[100%] !bg-transparent"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={pathImage(src.directus_files_id.id)}
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
        loop={true}
        watchSlidesProgress
        className=" !absolute !bottom-[40px] w-[80%] h-[100px] thumbsrow"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!h-[104px] !w-[70px] !rounded-sm">
            <img
              src={pathImage(src.directus_files_id.id)}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-16 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
