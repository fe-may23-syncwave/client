import classNames from 'classnames';
import { CartContext } from 'context';
import { useContext } from 'react';
import { Product } from 'types/Product';

interface Props {
  styles: string[];
  product: Product;
}

export const AddToCartButton: React.FC<Props> = ({ product, styles }) => {
  const isAddedToCart = false;
  const { saveToCart } = useContext(CartContext);

  return (
    <div className="cart-button">
      <button
        type="button"
        className={classNames(styles[0], {
          [styles[1]]: isAddedToCart,
        })}
        onClick={() => {
          saveToCart(product);
        }}
      >
        {isAddedToCart ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};
