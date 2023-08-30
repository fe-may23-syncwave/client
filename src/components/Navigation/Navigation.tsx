/* eslint-disable max-len */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarRoute } from 'types/NavBarRoute';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { Link } from './Link';

import styles from './Navigation.module.scss';

const NavBarLink = {
  Home: NavBarRoute.Home,
  Phones: NavBarRoute.Phones,
  Tablets: NavBarRoute.Tablets,
  Accessories: NavBarRoute.Accessories,
};

type Props = {
  openModal?: () => void;
};

export const Navigation: React.FC<Props> = ({ openModal }) => {
  const location = useLocation();

  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav__left_container}>
        {Object.entries(NavBarLink).map(([title, link]) => (
          <Link key={title} to={link} title={title} />
        ))}
      </div>

      <div className={styles.Nav__right_container}>
        <Link to={NavBarRoute.Favorites} icon={<FavoritesIcon />} counter={0} />
        <Link to={NavBarRoute.Cart} icon={<CartIcon />} counter={3} />
      </div>

      <div
        className={styles.Nav__mobile}
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={openModal}
      >
        <Link to={location.pathname} icon={<MenuIcon />} />
      </div>
    </nav>
  );
};
