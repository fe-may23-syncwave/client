import classNames from 'classnames';

type Props = {
  styles: string[],
};

export const FavouritesButton: React.FC<Props> = ({ styles }) => {
  const isAddedToFavourites = false;

  return (
    <div className="favourites-button">
      <button
        type="button"
        className={classNames(styles[0], {
          [styles[1]]: isAddedToFavourites,
        })}
      >
        <p hidden>add to favourites</p>
      </button>
    </div>
  );
};
