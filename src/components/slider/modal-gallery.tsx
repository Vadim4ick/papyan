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
import React from "react";

interface ModalGalleryProps {
  children: React.ReactNode[];
  activeIndex: number;
  onClose: () => void;
  btns: {
    next: string;
    prev: string;
  };
}

export function ModalGallery({
  children,
  activeIndex,
  onClose,
  btns = {
    next: "swiper-button-next",
    prev: "swiper-button-prev",
  },
}: ModalGalleryProps) {
  console.log("🚀 ~ images:", children);
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

      <div className="swiper-navigation flex">
        <Button
          variant="arrow"
          classArrow={"!me-[2px] !ms-[0px]"}
          className={`${btns.prev} pe-[2px] button-prev`}
        >
          <ChevronLeft width={17} color="white" />
        </Button>
        <Button variant="arrow" className={`${btns.next} pe-[2px] button-next`}>
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
          nextEl: `.${btns.next}`,
          prevEl: `.${btns.prev}`,
        }}
        className=" h-[100%] !bg-transparent "
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="modal-galery__image">
            {React.isValidElement(child) ? child : null}
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
        {children.map((child, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!h-[104px] !w-[70px] !rounded-sm"
            >
              {React.isValidElement(child) ? (
                child.type === "video" ? (
                  <video
                    width="100%"
                    height="100%"
                    muted
                    loop
                    className="object-cover w-full h-full cursor-pointer"
                  >
                    <source src={child.props.src} type={child.props.type} />
                  </video>
                ) : (
                  <img
                    src={child.props.src}
                    alt={`Thumbnail ${index}`}
                    className="object-cover w-full h-16 cursor-pointer"
                  />
                )
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
