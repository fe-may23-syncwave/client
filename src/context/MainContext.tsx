/* eslint-disable max-len */
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContextType } from 'types/MainContext';
import { Product } from 'types/Product';
import { useLocalStorage } from 'utils/localStorageHook';

export const MainContext = createContext<MainContextType>({
  favProducts: [],
  setFavProducts: () => {},
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
  const [favProducts, setFavProducts] = useLocalStorage<Product[]>(
    'favorite-products',
    [],
  );
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>(
    'darkTheme',
    false,
  );

  const [globalPerPage, setGlobalPerPage] = useState('4');
  const [globalSort, setGlobalSort] = useState('age');

  const handleLike = (product: Product) => {
    const isFav = favProducts.find(
      (curr) => curr.productId === product.productId,
    );

    if (isFav) {
      const newSet = favProducts.filter(
        (curr) => curr.productId !== product.productId,
      );

      setFavProducts(newSet);

      return;
    }

    const newSet = [...favProducts, product];

    setFavProducts(newSet);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const notifyFavs = () => toast.success('Successfully added to favorites.', {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: darkTheme ? 'dark' : 'light',
  });

  const notifyFavsDelete = () => toast.success('Successfully removed from favorites.', {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: darkTheme ? 'dark' : 'light',
  });

  const notifyCart = () => toast.success('Successfully added to cart.', {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: darkTheme ? 'dark' : 'light',
  });

  const notifyCartDelete = () => toast.success('Successfully removed from cart.', {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: darkTheme ? 'dark' : 'light',
  });

  const params = {
    favProducts,
    setFavProducts,
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
