import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { FavouritesButton } from '../FavouritesButton';
import { AddToCartButton } from '../AddToCartButton';

const id = 'apple-iphone-64gb-purple';

export const ProductCard = () => {
  return (
    <li className="product">
      <Link to={`/phones/${id}`} className="product__link">
        <img
          src={`${process.env.PUBLIC_URL}/img/phones/apple-iphone-11/purple/00.jpg`}
          alt="Apple iPhone 11 64GB Purple (iMT9G2FS/A)"
          className="product__image"
        />
        <h2 className="product__title">
          Apple iPhone 11 64GB Purple (iMT9G2FS/A)
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
          <p className="product__info-data">64 GB</p>
        </div>
        <div className="product__info-block">
          <p className="product__info-title">RAM</p>
          <p className="product__info-data">4 RAM</p>
        </div>
      </div>

      <div className="product__buttons">
        <AddToCartButton styles={['product__add', 'product__add--active']} />
        <FavouritesButton
          styles={['product__favourites', 'product__favourites--active']}
        />
      </div>
    </li>
  );
};
