/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { NavBarRoute } from 'types/NavBarRoute';
import { MainContext, AuthContext } from 'context';
import { Link } from './Link';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as FavoritesIconLight } from '../../assets/icons/heart-light.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as CartIconLight } from '../../assets/icons/cart-light.svg';
import { Search } from '../Search';
import { ReactComponent as ProfileIconDark } from '../../assets/icons/profile.svg';
import { ReactComponent as LogoutIconDark } from '../../assets/icons/logout.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const NavBarIcons: React.FC<Props> = ({
  className,
  onClick = () => {},
}) => {
  const [cartCounter] = useState(3);

  const { products, darkTheme } = React.useContext(MainContext);
  const { isAuth, logout } = React.useContext(AuthContext);

  const favoritesCounter = products.length;

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      role="button"
    >
      <Search />
      <Link
        to={NavBarRoute.Login}
        icon={isAuth ? <LogoutIconDark /> : <ProfileIconDark />}
        onClick={
          isAuth ? () => logout() : () => console.log('Login again please')
        }
      />
      <Link
        to={NavBarRoute.Favorites}
        icon={darkTheme ? <FavoritesIconLight /> : <FavoritesIcon />}
        counter={favoritesCounter}
      />
      <Link
        to={NavBarRoute.Cart}
        icon={darkTheme ? <CartIconLight /> : <CartIcon />}
        counter={cartCounter}
      />
    </div>
  );
};
