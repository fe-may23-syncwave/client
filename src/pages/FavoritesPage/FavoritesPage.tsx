/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainContext } from 'context/MainContext';
import { ProductsList } from 'pages/ProductsList';
import React from 'react';

import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const { favProducts } = React.useContext(MainContext);

  return (
    <div className="favourites__page">
      <h1 className="favourites__title">Favourites</h1>

      {favProducts.length > 0 ? (
        <>
          <p className="favourites__subtitle">{`${favProducts.length} models`}</p>
          <ProductsList products={favProducts} />
        </>
      ) : (
        <h2>You haven&apos;t added anything to your favorite products yet</h2>
      )}
    </div>
  );
};
