import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../types/PhoneType';

import './ProductsSlider.scss';

interface Props {
  phones: Phone[];
  title: string;
}

export const ProductsSlider: React.FC<Props> = (props) => {
  const breakpoints = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 18,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 70,
    },
    730: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1050: {
      slidesPerView: 3.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  };

  return (
    <div className="products-slider">
      <div className="products-slider__container">
        <h2 className="products-slider__title">{props.title}</h2>
      </div>
      <div className="slider-items">
        <Swiper
          modules={[A11y, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={18}
          breakpoints={breakpoints}
          navigation
        >
          {props.phones.map((phone: Phone) => (
            <SwiperSlide key={phone.id}>
              <ProductCard product={phone} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
