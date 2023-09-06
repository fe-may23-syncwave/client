import React from 'react';
import { ProductCard } from 'components/ProductCard';
import './ProductsList.scss';
import { Product } from 'types/Product';

interface Props {
  products: Product[];
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};
