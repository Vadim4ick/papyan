/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { ModalGallery } from "./modal-gallery";
import "swiper/css";
import "./styles.css";
import { useClientMediaQuery } from "@/shared/hooks/useClientMediaQuery";
import React from "react";

interface SliderWrapperProps {
  children: ReactNode;
  className?: string;
  slideWidth?: string;
  mySwiperNumber?: string;
  btnBg?: string;
  btns: {
    next: string;
    prev: string;
  };
}

function ImageSliderWrapper({
  children,
  className,
  slideWidth,
  btnBg,
  btns = {
    next: "swiper-button-next",
    prev: "swiper-button-prev",
  },
  mySwiperNumber,
}: SliderWrapperProps) {
  const isTablet = useClientMediaQuery("(max-width: 1024px)");
  const isMobile = useClientMediaQuery("(max-width: 768px)");

  const [isModalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = React.Children.count(children);
  const isNavigationDisabled = slideCount <= 4;

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="slider-wrapper relative w-full">
        {isTablet ||
          (!isNavigationDisabled && (
            <div className="swiper-nav flex gap-4">
              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                variant="arrow"
                classArrow={"!me-[2px] !ms-[0px]"}
                className={`${btns.prev} ${btnBg} pe-[2px] duration-450`}
              >
                <ChevronLeft strokeWidth={2.5} width={22} />
              </Button>
              <Button
                motionProps={{
                  stiffness: 142.2,
                  damping: 26.67,
                  mass: 1,
                }}
                variant="arrow"
                className={`${btns.next} ${btnBg} ps-[1px] duration-450`}
              >
                <ChevronRight strokeWidth={2.5} width={22} />
              </Button>
            </div>
          ))}

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={isMobile ? 16 : 20}
          modules={[Pagination, Navigation]}
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
                <SwiperSlide
                  className={`${slideWidth}`}
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  {child}
                </SwiperSlide>
              ))
            : children && <SwiperSlide>{children}</SwiperSlide>}
        </Swiper>
      </div>

      {isModalOpen && (
        <ModalGallery
          btns={{ next: "about-next", prev: "about-prev" }}
          activeIndex={activeIndex}
          onClose={() => setModalOpen(false)}
        >
          {React.Children.toArray(children)}
        </ModalGallery>
      )}
    </>
  );
}

export { ImageSliderWrapper };
