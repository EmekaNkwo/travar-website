import "./PropertyList.css";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyList = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <div className="swiperContainer">
      <Swiper
        modules={[Navigation, Pagination]}
        speed={800}
        slidesPerView={3}
        spaceBetween={10}
        navigation={{
          prevEl: swiperPrevRef.current,
          nextEl: swiperNextRef.current,
        }}
        loop
        className="mySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperPrevRef.current;
          swiper.params.navigation.nextEl = swiperNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className="swiperSlide">
          <div className="swiperItem">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="deal"
              className="slideImg"
            />
            <span className="dealLocation">Tarkwa </span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperSlide">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
            className="slideImg"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="slideImg"
          />
        </SwiperSlide>
        <div className="swiperNavPrev" ref={swiperPrevRef}></div>
        <div className="swiperNavNext" ref={swiperNextRef}></div>
      </Swiper>
    </div>
  );
};

export default PropertyList;
