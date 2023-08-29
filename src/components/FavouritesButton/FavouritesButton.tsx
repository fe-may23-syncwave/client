import classNames from 'classnames';

export const FavouritesButton: React.FC = () => {
  const isAddedToFavourites = false;

  return (
    <div className="favourites-button">
      <button
        type="button"
        className={classNames('product__favourites', {
          'product__favourites--active': isAddedToFavourites,
        })}
      >
        <p hidden>add to favourites</p>
      </button>
    </div>
  );
};
