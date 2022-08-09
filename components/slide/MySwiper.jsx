import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function MySwiper() {
  return (
    <>
      <style jsx global>{`
        :root {
          --swiper-navigation-color: rgba(255, 255, 255, 1);
        }
      `}</style>
      <div className="block lg:hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Image
              src="/x_city/slide1.png"
              width={540}
              height={295}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/x_city/slide2.png"
              width={600}
              height={340}
              layout="responsive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/x_city/slide3.png"
              width={540}
              height={295}
              layout="responsive"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:block">
        <Swiper
          navigation
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={2}
          centeredSlides
          modules={[Navigation, EffectCoverflow]}
        >
          <SwiperSlide>
            <Image src="/x_city/slide1.png" width={540} height={295} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/slide2.png" width={540} height={340} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/slide3.png" width={540} height={295} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
