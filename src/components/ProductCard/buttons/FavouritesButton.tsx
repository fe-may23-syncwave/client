import classNames from 'classnames';
import { MainContext } from 'context/MainContext';
import React from 'react';
import { Phone } from 'types/PhoneType';

interface Props{
  product: Phone,
  styles: string[],
}

export const FavouritesButton: React.FC<Props> = ({ product, styles }) => {
  const {
    products, handleLike, darkTheme,
  } = React.useContext(MainContext);

  const isFav = products.find(curr => curr.phoneId === product.phoneId);

  return (
    <div className="favourites-button">
      <button
        type="button"
        className={classNames(styles[0], styles[2], {
          [styles[1]]: isFav,
          'product__favourites-dark': darkTheme,
        })}
        onClick={() => handleLike(product)}
      >
        <p hidden>add to favourites</p>
      </button>
    </div>
  );
};
