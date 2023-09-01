import classNames from 'classnames';
import { Phone } from 'types/PhoneType';

interface Props {
  product: Phone;
  styles: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AddToCartButton: React.FC<Props> = ({ product, styles }) => {
  const isAddedToCart = false;

  return (
    <div className="cart-button">
      <button
        type="button"
        className={classNames(styles[0], {
          [styles[1]]: isAddedToCart,
        })}
      >
        {isAddedToCart ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};
