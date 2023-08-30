/* eslint-disable max-len */
import React, { useState } from 'react';
import { NavBarRoute } from 'types/NavBarRoute';
import { Link } from './Link';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const NavBarIcons: React.FC<Props> = ({
  className,
  onClick = () => {},
}) => {
  const [favoritesCounter] = useState(0);
  const [cartCounter] = useState(3);

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      role="button"
    >
      <Link
        to={NavBarRoute.Favorites}
        icon={<FavoritesIcon />}
        counter={favoritesCounter}
      />
      <Link to={NavBarRoute.Cart} icon={<CartIcon />} counter={cartCounter} />
    </div>
  );
};
