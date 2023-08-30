import { MainContext } from 'context/MainContext';
import { ProductsList } from 'pages/ProductsList';
import React from 'react';

import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const { favProducts, hasErrorOnFav } = React.useContext(MainContext);

  return (
    <>
      <h1 className="favourites__title">Favourites</h1>
      {!hasErrorOnFav && (
        <p className="favourites__subtitle">{`${favProducts.length} models`}</p>
      )}
      {hasErrorOnFav && (
        <h2 className="favourites__title">There is some problems</h2>
      )}

      {favProducts.length > 0 && !hasErrorOnFav && (
        <ProductsList products={favProducts} />
      )}
    </>
  );
};
