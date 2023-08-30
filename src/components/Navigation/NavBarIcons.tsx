/* eslint-disable max-len */
import React from 'react';
import { NavBarRoute } from 'types/NavBarRoute';
import { Link } from './Link';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

type Props = {
  className?: string;
  cartCounter: number;
  favoritesCounter: number;
};

export const NavBarIcons: React.FC<Props> = ({
  className,
  favoritesCounter = 0,
  cartCounter = 0,
}) => {
  return (
    <div className={className}>
      <Link
        to={NavBarRoute.Favorites}
        icon={<FavoritesIcon />}
        counter={favoritesCounter}
      />
      <Link to={NavBarRoute.Cart} icon={<CartIcon />} counter={cartCounter} />
    </div>
  );
};
