import "./PropertyList.css";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightShort } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import img1 from "../../assets/images/bg1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyList = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  return (
    <div className="swiperContainer">
      <h1>Homes guest Love</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={400}
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
            <img src={img1} alt="deal" className="slideImg" />
            <div className="swiperItemContent">
              <div className="itemLeft">
                <div className="itemLeftIcon">
                  <GiCommercialAirplane />
                </div>

                <div className="itemLeftText">
                  <h3 className="dealLocation">
                    Lagos <BsArrowRightShort /> Dubai
                  </h3>
                  <span className="date">Jun 20, 2022 - Jun 26, 2022</span>
                  <p className="price">
                    <FaDollarSign />
                    500
                  </p>
                </div>
              </div>
              <div className="itemRight">
                <button className="swiperBtn">Book Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="swiperItem">
            <img src={img1} alt="deal" className="slideImg" />
            <div className="swiperItemContent">
              <div className="itemLeft">
                <div className="itemLeftIcon">
                  <GiCommercialAirplane />
                </div>

                <div className="itemLeftText">
                  <h3 className="dealLocation">
                    Lagos <BsArrowRightShort /> Dubai
                  </h3>
                  <span className="date">Jun 20, 2022 - Jun 26, 2022</span>
                  <p className="price">
                    <FaDollarSign />
                    500
                  </p>
                </div>
              </div>
              <div className="itemRight">
                <button className="swiperBtn">Book Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="swiperItem">
            <img src={img1} alt="deal" className="slideImg" />
            <div className="swiperItemContent">
              <div className="itemLeft">
                <div className="itemLeftIcon">
                  <GiCommercialAirplane />
                </div>

                <div className="itemLeftText">
                  <h3 className="dealLocation">
                    Lagos <BsArrowRightShort /> Dubai
                  </h3>
                  <span className="date">Jun 20, 2022 - Jun 26, 2022</span>
                  <p className="price">
                    <FaDollarSign />
                    500
                  </p>
                </div>
              </div>
              <div className="itemRight">
                <button className="swiperBtn">Book Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiperNavPrev" ref={swiperPrevRef}></div>
        <div className="swiperNavNext" ref={swiperNextRef}></div>
      </Swiper>
    </div>
  );
};

export default PropertyList;
