import "./PropertyList.css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyList = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spacebetween={10}
        slidesPerView={3}
        effect="fade"
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="deal"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
            className="pListImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="pListImg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertyList;
