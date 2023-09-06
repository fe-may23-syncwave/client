/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Slider } from '../../components/Slider';
import { ProductsSlider } from '../../components/ProductsSlider';
import { ProductCategories } from '../../components/ProductCategories';
import { getBestDiscount, getHighPrices } from '../../api/products';
import { Product } from '../../types/Product';
import './HomePage.scss';
import { Typography } from 'components/common/Typography';

export const HomePage: React.FC = () => {
  const [hotPrices, setHotPrices] = useState<Product[]>([]);
  const [brandNew, setBrandNew] = useState<Product[]>([]);

  useEffect(() => {
    getHighPrices()
      .then((response) => {
        const { hightPrice } = response;
        setBrandNew(hightPrice);
      })
      .catch((error) => {
        console.error('HomePage Error:', error);
      });

    getBestDiscount()
      .then((response) => {
        const { bestDiscount } = response;
        setHotPrices(bestDiscount);
      })
      .catch((error) => {
        console.error('HomePage Error:', error);
      });
  }, []);

  return (
    <div className="home-page">
      <Typography type="h1" className="home-page__title">
        Welcome to Nice Gadgets store!
      </Typography>

      <Slider />

      <ProductsSlider title="Brand new models" phones={brandNew} />

      <ProductCategories />

      <ProductsSlider title="Hot prices" phones={hotPrices} />
    </div>
  );
};
