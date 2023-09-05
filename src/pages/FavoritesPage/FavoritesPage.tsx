/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainContext } from 'context/MainContext';
import { ProductsList } from 'pages/ProductsList';
import React from 'react';

import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const { favProducts, hasErrorOnFav, products }
    = React.useContext(MainContext);

  return (
    <div className="favourites__page">
      <h1 className="favourites__title">Favourites</h1>
      {/* {!hasErrorOnFav && (
        <p className="favourites__subtitle">{`${favProducts.length} models`}</p>
      )}
      {hasErrorOnFav && (
        <h2 className="favourites__title">There is some problems</h2>
      )} */}

      {/* {favProducts.length > 0 && !hasErrorOnFav && (
        <ProductsList products={favProducts} />
      )} */}

      {/* commented for testing */}

      <ProductsList products={products} />
      {/* remove this line when DB is ready */}
    </div>
  );
};
