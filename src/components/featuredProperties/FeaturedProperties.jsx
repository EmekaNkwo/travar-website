import "./FeaturedProperties.css";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedProperties = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  //map through the data and display the properties
  const properties = [
    {
      id: 1,
      img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      title: "Aparthotel Stare Miasto",
      price: "Starting from $120",
      location: "Madrid",
      rating: "4.5",
    },
    {
      id: 2,
      img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
      title: "Comfort Suites Airport",
      price: "Starting from $140",
      location: "Austin",
      rating: "4.5",
    },
    {
      id: 3,
      img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1",
      title: "Four Seasons Hotel",
      price: "Starting from $99",
      location: "Lisbon",
      rating: "4.5",
    },
  ];

  return (
    <div className="propertyContainer">
      <h1>Hotel in Popular Locations</h1>

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
        className="propertySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperPrevRef.current;
          swiper.params.navigation.nextEl = swiperNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="swiperItem">
              <img src={property.img} alt="property" />

              <div className="swiperSlide__info">
                <div className="swiperSlide__info__title">
                  <h3>{property.title}</h3>
                </div>
                <div className="swiperSlide__info__price">
                  <p>{property.price}</p>
                </div>
                <div className="swiperSlide__info__location">
                  <p>{property.location}</p>
                </div>
                <div className="swiperSlide__info__rating">
                  <p>{property.rating}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiperNavPrev" ref={swiperPrevRef}></div>
        <div className="swiperNavNext" ref={swiperNextRef}></div>
      </Swiper>
    </div>
  );
};

export default FeaturedProperties;
