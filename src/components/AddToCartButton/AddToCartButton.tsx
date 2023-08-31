import classNames from 'classnames';

type Props = {
  styles: string[],
};

export const AddToCartButton: React.FC<Props> = ({ styles }) => {
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
