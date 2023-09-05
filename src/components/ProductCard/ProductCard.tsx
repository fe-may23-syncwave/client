import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Product } from 'types/Product';
import { AddToCartButton, FavouritesButton } from './buttons';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <li className="product">
      <div className="product__container">
        <Link
          to={`/${product.category_id}/${product.productId}`}
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
          <h2 className="product__title">{`${product.name} (XXXXX)`}</h2>
        </Link>

        <div className="product__prices">
          <p className="product__price">{`$${product.discountPrice}`}</p>
          <p className="product__price-full">{`$${product.fullPrice}`}</p>
        </div>

        <div className="product__info">
          <div className="product__info-block">
            <p className="product__info-title">Screen</p>
            <p className="product__info-data">{product.screen}</p>
          </div>
          <div className="product__info-block">
            <p className="product__info-title">Capacity</p>
            <p className="product__info-data">{product.capacity_id}</p>
          </div>
          <div className="product__info-block">
            <p className="product__info-title">RAM</p>
            <p className="product__info-data">{product.ram}</p>
          </div>
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
