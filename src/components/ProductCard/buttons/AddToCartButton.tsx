import classNames from 'classnames';
import { Phone } from 'types/PhoneType';

interface Props {
  product: Phone;
  styles: string[];
}

export const AddToCartButton: React.FC<Props> = ({ product, styles }) => {
  const isAddedToCart = false;

  // eslint-disable-next-line no-console
  console.log(product);

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
