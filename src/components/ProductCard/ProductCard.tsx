/* eslint-disable max-len */
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/PhoneType';
import { AddToCartButton, FavouritesButton } from './buttons';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

interface Props {
  product: Phone;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <li className="product">
      <Link to={product.phoneId} className="product__link">
        <img
          src={`${CLOUDINARY}/${product.image}`}
          alt={product.name}
          className="product__image"
        />
        <h2 className="product__title">{`${product.name} (XXXXX)`}</h2>
      </Link>

      <div className="product__prices">
        <p className="product__price">{`$${product.price}`}</p>
        <p className="product__price-full">{`$${product.fullPrice}`}</p>
      </div>

      <div className="product__info">
        <div className="product__info-block">
          <p className="product__info-title">Screen</p>
          <p className="product__info-data">{product.screen}</p>
        </div>
        <div className="product__info-block">
          <p className="product__info-title">Capacity</p>
          <p className="product__info-data">{product.capacity}</p>
        </div>
        <div className="product__info-block">
          <p className="product__info-title">RAM</p>
          <p className="product__info-data">{product.ram}</p>
        </div>
      </div>

      <div className="product__buttons">
        <AddToCartButton />
        <FavouritesButton product={product} />
      </div>
    </li>
  );
};
