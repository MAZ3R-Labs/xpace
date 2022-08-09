import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function Petslide() {
  return (
    <>
      <div>
        <Swiper
          loop={true}
          slidesPerView={5}
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
          <Image src="/x_city/pet.png" width={160} height={160} />
          </SwiperSlide>
          <SwiperSlide>
          <Image src="/x_city/pet.png" width={160} height={160} />
          </SwiperSlide>
          <SwiperSlide>
          <Image src="/x_city/pet.png" width={160} height={160} />
          </SwiperSlide>
          <SwiperSlide>
          <Image src="/x_city/pet.png" width={160} height={160} />
          </SwiperSlide>
          <SwiperSlide>
          <Image src="/x_city/pet.png" width={160} height={160} />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
}
