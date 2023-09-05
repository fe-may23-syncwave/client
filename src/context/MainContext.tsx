/* eslint-disable max-len */
import { getFavorites } from 'api/favorites';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContextType } from 'types/MainContext';
import { Product } from 'types/Product';
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
  notifyFavs: () => {},
  notifyCart: () => {},
  notifyFavsDelete: () => {},
  notifyCartDelete: () => {},
});

interface Props {
  children: JSX.Element;
}

export const Context: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useLocalStorage<Product[]>(
    'favorite-products',
    [],
  );
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>(
    'darkTheme',
    false,
  );

  const [favProducts, setFavProducts] = useState<Product[]>([]);
  const [hasErrorOnFav, setHasErrorOnFav] = useState(false);

  const [globalPerPage, setGlobalPerPage] = useState('4');
  const [globalSort, setGlobalSort] = useState('age');

  useEffect(() => {
    getFavorites('/favorites')
      .then(setFavProducts)
      .catch(() => setHasErrorOnFav(true));
  }, []);

  const handleLike = (product: Product) => {
    const isFav = products.find((curr) => curr.productId === product.productId);

    if (isFav) {
      const newSet = products.filter(
        (curr) => curr.productId !== product.productId,
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

  const notifyFavs = () => toast.success('Successfully added to favorites.', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const notifyFavsDelete = () => toast.success('Successfully removed from favorites.', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const notifyCart = () => toast.success('Successfully added to cart.', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  const notifyCartDelete = () => toast.success('Successfully removed from cart.', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

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
    notifyFavs,
    notifyCart,
    notifyFavsDelete,
    notifyCartDelete,
  };

  return <MainContext.Provider value={params}>{children}</MainContext.Provider>;
};
