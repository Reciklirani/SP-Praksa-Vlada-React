import { Swiper, SwiperSlide } from "swiper/react";
import style from "./main7.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export function Main7() {
  return (
    <div className="main7">
      <h3>Istaknuti brendovi za koje radimo distribuciju</h3>
      <div className="line"></div>
      <div className="brands">
        <img src="src\assets\img\brand1.jpg" alt="" />
        <img src="src\assets\img\brand2.jpg" alt="" />
        <img src="src\assets\img\brand3.jpg" alt="" />
        <img src="src\assets\img\brand4.jpg" alt="" />
        <img src="src\assets\img\brand5.jpg" alt="" />
        <img src="src\assets\img\brand6.jpg" alt="" />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        autoHeight={true}
        breakpoints={{
          481: {
            slidesPerView: "5",
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="src\assets\img\brand1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\brand6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <button>Svi brendovi u nasem portfoliju</button>
    </div>
  );
}
