import React from 'react';
import './HomePage.scss';

import { Slider } from '../../components/Slider';
import { ProductsSlider } from '../../components/ProductsSlider';

const productForTesting = {
  id: '6',
  category: 'phones',
  phoneId: 'apple-iphone-11-256gb-green',
  itemId: 'apple-iphone-11-256gb-green',
  name: 'Apple iPhone 11 256GB Green',
  fullPrice: 1172,
  price: 1115,
  screen: "6.1' IPS",
  capacity: '256GB',
  color: 'green',
  ram: '4GB',
  year: 2019,
  image: 'img/phones/apple-iphone-11/green/00.jpg',
};

const productsArray = [
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
  productForTesting,
];

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />
      {
        productsArray.length > 0 && (
          <ProductsSlider
            phones={productsArray}
            title="Brand new models"
          />
        )
      }

      <h2 className="home-page__categories">
        Shop by category(your advertising could be here)
      </h2>

      {
        productsArray.length > 0 && (
          <ProductsSlider
            phones={productsArray}
            title="Hot prices"
          />
        )
      }
    </div>
  );
};
