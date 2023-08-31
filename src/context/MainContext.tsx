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
});

interface Props {
  children: JSX.Element;
}

export const Context: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useLocalStorage<Phone[]>(
    'favorite-products',
    [],
  );

  const [favProducts, setFavProducts] = useState<Phone[]>([]);
  const [hasErrorOnFav, setHasErrorOnFav] = useState(false);

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

  const params = {
    favProducts,
    hasErrorOnFav,
    products,
    handleLike,
  };

  return <MainContext.Provider value={params}>{children}</MainContext.Provider>;
};
