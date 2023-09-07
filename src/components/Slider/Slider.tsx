import 'swiper/swiper-bundle.css';
import React from 'react';
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainContext } from 'context/MainContext';
import firstBanner from 'assets/images/banners/banner-phones.png';
import secondBanner from 'assets/images/banners/banner-tablets.png';
import thirdBanner from 'assets/images/banners/banner-accessories.png';
import firstBannerDark from 'assets/images/banners/banner-phonesDark.png';
import secondBannerDark from 'assets/images/banners/banner-tabletsDark.jpg';
import thirdBannerDark from 'assets/images/banners/baner-accsDark.png';
import './Slider.scss';

export const Slider = () => {
  const { darkTheme } = React.useContext(MainContext);

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
              src={darkTheme ? firstBannerDark : firstBanner}
              alt="Phones now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src={darkTheme ? secondBannerDark : secondBanner}
              alt="Tablets now available in our store!"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="carousel-img"
              src={darkTheme ? thirdBannerDark : thirdBanner}
              alt="Accessories now available in our store!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
