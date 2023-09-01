import { getFavorites } from 'api/favorites';
import React, { createContext, useEffect, useState } from 'react';
import { MainContextType } from 'types/MainContext';
import { Phone } from 'types/PhoneType';
import { useLocalStorage } from 'utils/localStorageHook';

export const MainContext = createContext<MainContextType>({
  favProducts: [],
  hasErrorOnFav: false,
  products: [],
  handleLike: () => {},
  toggleTheme: () => {},
  darkTheme: false,
  globalPerPage: '4',
  globalSort: 'all',
  setGlobalPerPage: () => {},
  setGlobalSort: () => {},
});

interface Props {
  children: JSX.Element;
}

export const Context: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useLocalStorage<Phone[]>(
    'favorite-products',
    [],
  );
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>(
    'darkTheme',
    false,
  );

  const [favProducts, setFavProducts] = useState<Phone[]>([]);
  const [hasErrorOnFav, setHasErrorOnFav] = useState(false);

  const [globalPerPage, setGlobalPerPage] = useState('4');
  const [globalSort, setGlobalSort] = useState('age');

  useEffect(() => {
    getFavorites('/favorites')
      .then(setFavProducts)
      .catch(() => setHasErrorOnFav(true));
  }, []);

  const handleLike = (product: Phone) => {
    const isFav = products.find((curr) => curr.phoneId === product.phoneId);

    if (isFav) {
      const newSet = products.filter(
        (curr) => curr.phoneId !== product.phoneId,
      );

      setProducts(newSet);

      return;
    }

    const newSet = [...products, product];

    setProducts(newSet);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const params = {
    favProducts,
    hasErrorOnFav,
    products,
    handleLike,
    toggleTheme,
    darkTheme,
    globalPerPage,
    globalSort,
    setGlobalPerPage,
    setGlobalSort,
  };

  return <MainContext.Provider value={params}>{children}</MainContext.Provider>;
};
