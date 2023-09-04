/* eslint-disable max-len */
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Product } from 'types/Product';

type Cart = {
  count: number;
  product: Product;
};

type ContextProps = {
  cart: Cart[];
  saveToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  totalPrice: number;
  totalItems: number;
};

export const CartContext = createContext<ContextProps>({
  cart: [],
  saveToCart: () => { },
  removeFromCart: () => { },
  isInCart: () => false,
  increaseCount: () => { },
  decreaseCount: () => { },
  totalPrice: 0,
  totalItems: 0,
});

type Props = {
  children: JSX.Element;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<Cart[]>('cart', []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, { count, product }) => acc + count * (product.discountPrice || product.fullPrice),
      0,
    );

    const newTotalItems = cart.reduce((acc, { count }) => acc + count, 0);

    setTotalItems(newTotalItems);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const isInCart = (id: string) => cart.some(({ product }) => product.id === id);

  const saveToCart = (product: Product) => {
    if (isInCart(product.id)) {
      return;
    }

    const newCart = [...cart, { count: 1, product }];

    setCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(
      ({ product }) => product.id !== id,
    );

    setCart(newCart);
  };

  const increaseCount = (id: string) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.product.id !== id) {
        return cartItem;
      }

      return {
        ...cartItem,
        count: cartItem.count + 1,
      };
    });

    setCart(newCart);
  };

  const decreaseCount = (id: string) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.product.id !== id) {
        return cartItem;
      }

      return {
        ...cartItem,
        count: cartItem.count - 1,
      };
    });

    setCart(newCart);
  };

  const contextValue = useMemo(
    () => ({
      cart,
      saveToCart,
      removeFromCart,
      isInCart,
      increaseCount,
      decreaseCount,
      totalPrice,
      totalItems,
    }),
    [cart, totalPrice, totalItems],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
