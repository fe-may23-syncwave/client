import { ProductsList } from 'pages/ProductsList';
import React from 'react';
import { ProductCard } from '../../components/ProductCard';

export const CatalogPage: React.FC = () => {
  return (
    <div>
      CatalogPage
      <ProductsList />
    </div>
  );
};
