import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import BG1 from "../../assets/images/bg2.jpg";
import BG2 from "../../assets/images/bg1.jpg";

import "./landingPage.css";

function LandingPage() {
  return (
    <div div className="pageContainer">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        loop
        className="myswiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={BG1} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BG2} alt="bg1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LandingPage;
