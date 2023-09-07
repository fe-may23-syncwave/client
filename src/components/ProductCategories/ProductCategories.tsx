import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCategories.scss';
import phonesImage from '../../assets/images/categories/category-phones.png';
import tabletsImage from '../../assets/images/categories/category-tablets.png';
// eslint-disable-next-line max-len
import accessoriesImage from '../../assets/images/categories/category-accessories.png';

interface ProductCategoryProps {
  counts: {
    phones: number;
    tablets: number;
    accessories: number;
  };
}

export const ProductCategories: React.FC<ProductCategoryProps> = ({
  counts,
}) => {
  return (
    <div className="product-categories">
      <h2 className="product-categories__title">Shop by category</h2>
      <div className="product-categories__list">
        <Link to="/phones" className="product-categories__item">
          <div className="product-categories__image-wrapper">
            <img
              src={phonesImage}
              alt="phones"
              className="product-categories__image"
            />
          </div>
          <h3 className="product-categories__subtitle">Phones</h3>
          <p className="product-categories__description">
            {counts.phones}
            {' '}
            models
          </p>
        </Link>

        <Link to="/tablets" className="product-categories__item">
          <div className="product-categories__image-wrapper">
            <img
              src={tabletsImage}
              alt="tablets"
              className="product-categories__image"
            />
          </div>
          <h3 className="product-categories__subtitle">Tablets</h3>
          <p className="product-categories__description">
            {counts.tablets}
            {' '}
            models
          </p>
        </Link>

        <Link to="/accessories" className="product-categories__item">
          <div className="product-categories__image-wrapper">
            <img
              src={accessoriesImage}
              alt="accessories"
              className="product-categories__image"
            />
          </div>
          <h3 className="product-categories__subtitle">Accessories</h3>
          <p className="product-categories__description">
            {counts.accessories}
            {' '}
            models
          </p>
        </Link>
      </div>
    </div>
  );
};
