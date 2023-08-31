import classNames from 'classnames';
import { MainContext } from 'context/MainContext';
import React from 'react';
import { Phone } from 'types/PhoneType';

interface Props{
  product: Phone,
}

export const FavouritesButton: React.FC<Props> = ({ product }) => {
  const {
    products, handleLike,
  } = React.useContext(MainContext);

  const isFav = products.find(curr => curr.phoneId === product.phoneId);

  return (
    <div className="favourites-button">
      <button
        type="button"
        className={classNames('product__favourites', {
          'product__favourites--active': isFav,
        })}
        onClick={() => handleLike(product)}
      >
        <p hidden>add to favourites</p>
      </button>
    </div>
  );
};
