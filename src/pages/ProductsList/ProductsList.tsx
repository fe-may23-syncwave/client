import React from 'react';
import { ProductCard } from 'components/ProductCard';
import { Phone } from 'types/PhoneType';
import './ProductsList.scss';

interface Props{
  products: Phone[],
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <section className="products">
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </section>
  );
};
