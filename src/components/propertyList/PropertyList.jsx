import "./PropertyList.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyList = () => {
  return (
    <div className="swiperContainer">
      <Swiper
        modules={[Navigation, Pagination]}
        speed={800}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide">
          <div className="swiperItem">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="deal"
              className="slideImg"
            />
           <span className="dealLocation">Tarkwa <BAy></BAy>


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
      </Swiper>
    </div>
  );
};

export default PropertyList;
