import SwiperCore, { Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper's Controller component
SwiperCore.use([Navigation]);

const CustomSlider = ({ data = [], ...otherSwiperProps }) => {
  return (

    <Swiper
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      // index={0}
      slidesPerView={5}
      navigation={true}
      allowSlideNext={true}
      spaceBetween={10}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        "clickable": true
      }}
      className="mySwiper"
      {...otherSwiperProps}
    >
      {data.length > 0 && data?.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>

  );
};

export { CustomSlider };
