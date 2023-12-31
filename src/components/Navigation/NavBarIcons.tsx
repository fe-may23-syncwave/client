/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useMemo } from 'react';
import { NavBarRoute } from 'types/NavBarRoute';

import { CartContext, AuthContext, MainContext } from 'context';

// import { ThemeSwitcher } from 'components/DarkMode/ThemeSwitcher';
import { useLocation } from 'react-router-dom';
import { Link } from './Link';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as FavoritesIconLight } from '../../assets/icons/heart-light.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as CartIconLight } from '../../assets/icons/cart-light.svg';
import { Search } from '../Search';
import { ReactComponent as ProfileIconDark } from '../../assets/icons/profile.svg';
import { ReactComponent as ProfileIconLight } from '../../assets/icons/profile-light.svg';
import { ReactComponent as LogoutIconDark } from '../../assets/icons/logout.svg';
import { ReactComponent as LogoutIconLight } from '../../assets/icons/logout-light.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sunIcon.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moonIcon.svg';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const NavBarIcons: React.FC<Props> = ({
  className,
  onClick = () => {},
}) => {
  const location = useLocation();
  const { cart } = React.useContext(CartContext);

  const cartCounter = useMemo(() => {
    return cart.reduce((acc, { count }) => acc + count, 0);
  }, [cart]);

  const { favProducts, darkTheme, toggleTheme } = React.useContext(MainContext);
  const { isAuth, logout } = React.useContext(AuthContext);

  const favoritesCounter = favProducts.length;

  const ProfileIcon = darkTheme ? <ProfileIconLight /> : <ProfileIconDark />;
  const LogoutIcon = darkTheme ? <LogoutIconLight /> : <LogoutIconDark />;

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
        icon={isAuth ? LogoutIcon : ProfileIcon}
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
      <Link
        to={location.pathname}
        icon={darkTheme ? <SunIcon /> : <MoonIcon />}
        onClick={() => toggleTheme()}
      />
    </div>
  );
};
