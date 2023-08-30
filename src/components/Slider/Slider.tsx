import 'swiper/swiper-bundle.css';
import {
  Autoplay, Navigation, Pagination, A11y, EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.module.scss';

export const Slider = () => {
  return (
    <div className="fullWidth">
      <div className="main-banner">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, A11y]}
          className="swiper-container"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
          navigation
          effect="fade"
          slidesPerView={1}
          spaceBetween={0}
        >
          <SwiperSlide>
            <img
              className="carousel-img"
              src="client/img/banner-phones.png"
              alt="Phones now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src="client/img/banner-tablets.png"
              alt="Tablets now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src="client/img/banner-accessories.png"
              alt="Accessories now available in our store!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
