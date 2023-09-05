import classNames from 'classnames';
import { CartContext, MainContext } from 'context';
import { useContext } from 'react';
import { Product } from 'types/Product';

interface Props {
  styles: string[];
  product: Product;
}

export const AddToCartButton: React.FC<Props> = ({ product, styles }) => {
  const { saveToCart, cart } = useContext(CartContext);
  const { darkTheme, notifyCart } = useContext(MainContext);

  const isAddedToCart = cart.some((item) => item.itemId === product.itemId);

  return (
    <div className="cart-button">
      <button
        type="button"
        className={classNames(styles[0], {
          [styles[1]]: isAddedToCart,
          'product__add--dark': darkTheme && isAddedToCart,
        })}
        onClick={() => {
          saveToCart(product);
          notifyCart();
        }}
        disabled={isAddedToCart}
      >
        {isAddedToCart ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};
