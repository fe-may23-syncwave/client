/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Slider } from '../../components/Slider';
import { ProductsSlider } from '../../components/ProductsSlider';
import { ProductCategories } from '../../components/ProductCategories';
import {
  getBestDiscount,
  getHighPrices,
} from '../../api/products';
import { Product } from '../../types/Product';
import { Loader } from 'components/common/Loader';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const HomePage: React.FC = () => {
  const [hotPrices, setHotPrices] = useState<Product[]>([]);
  const [brandNew, setBrandNew] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storedData, setStoredData] = useLocalStorage<Product[]>(
    'productsData',
    [],
  );

  useEffect(() => {
    getHighPrices()
      .then((response) => {
        const { hightPrice } = response;
        setBrandNew(hightPrice);
      })
      .catch(() => {
        setIsLoading(false);
      });

    getBestDiscount()
      .then((response) => {
        const { bestDiscount } = response;
        setHotPrices(bestDiscount);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (brandNew.length > 0 && hotPrices.length > 0) {
      setIsLoading(false);
    }
  }, [brandNew, hotPrices]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />

      <ProductsSlider title="Brand new models" phones={brandNew} />

      <ProductCategories />

      <ProductsSlider title="Hot prices" phones={hotPrices} />
    </div>
  );
};
