import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "./MySwiper.module.css";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, EffectCarousel],
    breakpoints: { 768: {} },
    centeredSlides: true,
    effect: "carousel",
    slidesPerView: "auto",
    loop: true,
  };
  return (
    <>
      <Swiper {...swiperParameters} className="h-1/2 w-1/2">
        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/01.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Spider-Man: No Way Home</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/02.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Free Guy</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">The Nice Guys</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">John Wick</div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
