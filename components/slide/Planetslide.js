import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function Planetslide() {
  return (
    <>
      <div>
        <Swiper
          loop={true}
          slidesPerView={8}
          centeredSlides
          speed={10000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
        >
          <SwiperSlide>
            <Image src="/x_city/planet.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_1.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_2.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_3.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_4.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_5.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_6.png" width={80} height={80} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/x_city/planet_7.png" width={80} height={80} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
