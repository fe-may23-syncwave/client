import classNames from 'classnames';

export const AddToCartButton: React.FC = () => {
  const isAddedToCart = false;

  return (
    <div className="cart-button">
      <button
        type="button"
        className={classNames('product__add', {
          'product__add--active': isAddedToCart,
        })}
      >
        {isAddedToCart ? 'Added to cart' : 'Add to cart'}
      </button>
    </div>
  );
};
