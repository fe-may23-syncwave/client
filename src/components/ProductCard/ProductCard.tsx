import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { getCategoryName } from 'utils/getCategoryName';
import { CAPACITY_ID, CATEGORY_ID, COLOR_ID } from 'utils/constants';
import { Product } from 'types/Product';
import { AddToCartButton, FavouritesButton } from './buttons';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

interface Props {
  product: Product;
}

// const tablet = {
//   id: 98,
//   category_id: 2,
//   productId: 'apple-ipad-mini-6-256gb-purple',
//   itemId: 'apple-ipad-mini-6-256gb-purple',
//   name: 'Apple iPad Mini 6 256GB Purple',
//   fullPrice: 972,
//   discountPrice: 874,
//   screen: "8,3' IPS",
//   capacity_id: 4,
//   color_id: 9,
//   ram: '4GB',
//   year: 2021,
//   image: 'img/tablets/apple-ipad-mini-6/purple/00.jpg',
// };

// const product = {
//   id: 111,
//   category_id: 3,
//   productId: 'iphone-7-silicon-case-red',
//   itemId: null,
//   name: 'iPhone 7 Silicone Case Red',
//   fullPrice: 49,
//   discountPrice: null,
//   screen: null,
//   capacity_id: null,
//   color_id: 7,
//   ram: null,
//   year: null,
//   image: 'img/accessories/iphone-7-cases/red/00.jpg',
// };

export const ProductCard: React.FC<Props> = ({ product }) => {
  const techSpecsTechnics = [
    ['Screen', product.screen],
    ['Capacity', getCategoryName(product.capacity_id || 0, CAPACITY_ID)],
    ['RAM', product.ram],
  ];

  const techSpecsAscesories = [
    ['Color', getCategoryName(product.color_id || 0, COLOR_ID)],
    ['Made in', 'USA'],
  ];

  return (
    <li className="product">
      <div className="product__container">
        <Link
          to={`/${getCategoryName(product.category_id, CATEGORY_ID)}/${
            product.productId
          }`}
          relative="path"
          className="product__link"
        >
          <div className="product__image-block">
            <img
              src={`${CLOUDINARY}/${product.image}`}
              alt={product.name}
              className="product__image"
            />
          </div>
          <h2 className="product__title">{`${product.name} XXXX`}</h2>
        </Link>

        <div className="product__prices">
          <p className="product__price">
            {product.discountPrice
              ? `$${product.discountPrice}`
              : `$${product.fullPrice}`}
          </p>
          {product.discountPrice && (
            <p className="product__price-full">{`$${product.fullPrice}`}</p>
          )}
        </div>

        <div className="product__techspecs">
          {product.category_id === 1 || product.category_id === 2
            ? techSpecsTechnics.map((spec) => (
              <div className="product__techspecs-block" key={spec[0]}>
                <p className="product__techspecs-title">{spec[0]}</p>
                <p className="product__techspecs-data">{spec[1]}</p>
              </div>
            ))
            : techSpecsAscesories.map((spec) => (
              <div className="product__techspecs-block" key={spec[0]}>
                <p className="product__techspecs-title">{spec[0]}</p>
                <p className="product__techspecs-data">{spec[1]}</p>
              </div>
            ))}
        </div>

        <div className="product__buttons">
          <AddToCartButton
            product={product}
            styles={['product__add', 'product__add--active']}
          />
          <FavouritesButton
            product={product}
            styles={['product__favourites', 'product__favourites--active']}
          />
        </div>
      </div>
    </li>
  );
};
