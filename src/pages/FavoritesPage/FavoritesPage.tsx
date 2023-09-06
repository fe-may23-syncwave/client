/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainContext } from 'context/MainContext';
import { ProductsList } from 'pages/ProductsList';
import React from 'react';

import './FavoritesPage.scss';
import { EmptyPage } from 'components/EmptyPage';
import { BackButton } from 'components/BackButton';

export const FavoritesPage: React.FC = () => {
  const { favProducts } = React.useContext(MainContext);

  return (
    <>
      <BackButton />
      <div className="favourites__page">
        <h1 className="favourites__title">Favourites</h1>

        {favProducts.length > 0 ? (
          <>
            <p className="favourites__subtitle">{`${favProducts.length} models`}</p>
            <ProductsList products={favProducts} />
          </>
        ) : (
          <EmptyPage title="favourites page" />
        )}
      </div>
    </>
  );
};
