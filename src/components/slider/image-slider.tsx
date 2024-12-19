/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ModalGallery } from "./modal-gallery";
import "swiper/css";
import "./styles.css";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import React from "react";
import { GetAboutPageQuery } from "@/graphql/__generated__";
import { pathImage } from "@/shared/lib/utils";

interface SliderWrapperProps {
  images: GetAboutPageQuery["about_page"]["slider"];
  className?: string;
}

function ImageSlider({ images, className }: SliderWrapperProps) {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
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
        {isTablet ||
          (!isNavigationDisabled && (
            <div className="swiper-nav">
              <Button variant="arrow" className="button-prev">
                <ChevronLeft width={17} />
              </Button>
              <Button variant="arrow" className="button-next">
                <ChevronRight width={17} />
              </Button>
            </div>
          ))}

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
          {images.map((src, index) => {
            const isVideo = src.directus_files_id.type?.startsWith("video/");

            if (isVideo) {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  <video
                    key={pathImage(src.directus_files_id.id)}
                    autoPlay
                    muted
                    playsInline
                    loop
                    width={src.directus_files_id.width || 289}
                    height={src.directus_files_id.height || 434}
                    className="h-full w-full object-cover"
                  >
                    {" "}
                    <source
                      src={pathImage(src.directus_files_id.id)}
                      type={src.directus_files_id.type}
                    />
                  </video>
                </SwiperSlide>
              );
            }

            return (
              <SwiperSlide key={index} onClick={() => handleImageClick(index)}>
                <img
                  src={pathImage(src.directus_files_id.id)}
                  alt={`Slide ${index}`}
                  className="cursor-pointer object-cover w-full h-full"
                />
              </SwiperSlide>
            );
          })}
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
