import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { FavouritesButton } from '../FavouritesButton';
import { AddToCartButton } from '../AddToCartButton';

export const ProductCard = () => {
  return (
    <li className="product">
      <Link
        to="`/phones/apple-iphone-11-128gb-purple"
        className="product__link"
      >
        <img
          src={`${process.env.PUBLIC_URL}/img/phones/apple-iphone-11/purple/00.jpg`}
          alt="Apple iPhone 11 128GB Purple (iMT9G2FS/A)"
          className="product__image"
        />
        <h2 className="product__title">
          Apple iPhone 11 128GB Purple (iMT9G2FS/A)
        </h2>
      </Link>

      <div className="product__prices">
        <p className="product__price">$799</p>
        <p className="product__price-full">$899</p>
      </div>

      <div className="product__info">
        <div className="product__info-block">
          <p className="product__info-title">Screen</p>
          <p className="product__info-data">6.2&quot; IPS</p>
        </div>
        <div className="product__info-block">
          <p className="product__info-title">Capacity</p>
          <p className="product__info-data">128 GB</p>
        </div>
        <div className="product__info-block">
          <p className="product__info-title">RAM</p>
          <p className="product__info-data">4 RAM</p>
        </div>
      </div>

      <div className="product__buttons">
        <AddToCartButton />
        <FavouritesButton />
      </div>
    </li>
  );
};
