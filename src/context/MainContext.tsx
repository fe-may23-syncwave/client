import { getFavorites } from 'api/favorites';
import React, { createContext, useEffect, useState } from 'react';
import { MainContextType } from 'types/MainContext';
import { Phone } from 'types/PhoneType';

export const MainContext = createContext<MainContextType>({
  favProducts: [],
  hasErrorOnFav: false,
});

interface Props {
  children: JSX.Element;
}

export const Context: React.FC<Props> = ({ children }) => {
  const [favProducts, setFavProducts] = useState<Phone[]>([]);
  const [hasErrorOnFav, setHasErrorOnFav] = useState(false);

  useEffect(() => {
    getFavorites('/favorites')
      .then(setFavProducts)
      .catch(() => setHasErrorOnFav(true));
  }, []);

  const params = {
    favProducts,
    hasErrorOnFav,
  };

  return <MainContext.Provider value={params}>{children}</MainContext.Provider>;
};
