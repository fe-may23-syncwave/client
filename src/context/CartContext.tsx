import { useLocalStorage } from 'hooks/useLocalStorage';
import React, {
  createContext, useMemo,
} from 'react';
import { Product } from 'types/Product';

interface Cart {
  count: number;
  id: string;
  category_id: number;
  productId: string;
  itemId?: string;
  name: string;
  fullPrice: number;
  discountPrice?: number;
  screen?: string;
  capacity_id?: number;
  color?: string;
  color_id?: number;
  ram?: string;
  year?: number;
  image: string;
}

type ContextProps = {
  cart: Cart[];
  saveToCart: (product: Product) => void;
  isInCart: (productId: string) => boolean;
  handleDelete: (cart: Cart) => void;
  handleAdd: (cart: Cart) => void;
  handleRemove: (product: Cart) => void;
};

export const CartContext = createContext<ContextProps>({
  cart: [],
  saveToCart: () => {},
  isInCart: () => false,
  handleAdd: () => {},
  handleDelete: () => {},
  handleRemove: () => {},
});

type Props = {
  children: JSX.Element;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<Cart[]>('cart', []);

  const isInCart = (id: string) => cart.some((product) => product.id === id);

  const saveToCart = (product: Product) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, count: item.count + 1 };
        }

        return item;
      });

      setCart(newCart);

      return;
    }

    setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
  };

  const handleAdd = (product: Cart) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count + 1 };
      }

      return item;
    });

    setCart(newCart);
  };

  const handleDelete = (product: Cart) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count - 1 };
      }

      return item;
    });

    setCart(newCart);
  };

  const handleRemove = (product: Cart) => {
    const newCart = cart.filter((item) => item.id !== product.id);

    setCart(newCart);
  };

  const contextValue = useMemo(
    () => ({
      cart,
      saveToCart,
      isInCart,
      handleDelete,
      handleAdd,
      handleRemove,
    }),
    [cart],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
