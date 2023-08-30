import { getFavorites } from 'api/favorites';
import React, { createContext, useState } from 'react';
import { Phone } from 'types/PhoneType';

type MainContextType = {
  favProducts: Phone[];
  hasErrorOnFav: boolean;
};

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

  getFavorites('/favorites')
    .then(setFavProducts)
    .catch(() => setHasErrorOnFav(true));

  const params = {
    favProducts,
    hasErrorOnFav,
  };

  return <MainContext.Provider value={params}>{children}</MainContext.Provider>;
};
