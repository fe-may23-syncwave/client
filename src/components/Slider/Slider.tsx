import 'swiper/swiper-bundle.css';
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstBanner from 'assets/images/banners/banner-phones.png';
import secondBanner from 'assets/images/banners/banner-tablets.png';
import thirdBanner from 'assets/images/banners/banner-accessories.png';
import './Slider.scss';

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
              src={firstBanner}
              alt="Phones now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src={secondBanner}
              alt="Tablets now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src={thirdBanner}
              alt="Accessories now available in our store!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
