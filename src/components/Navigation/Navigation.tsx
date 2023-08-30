/* eslint-disable max-len */
import React from 'react';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import { Link } from './Link';

import styles from './Navigation.module.scss';

export enum NavBarLink {
  Home = '/',
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav__left_container}>
        {Object.entries(NavBarLink).map(([title, link]) => (
          <Link key={title} to={link} title={title} />
        ))}
      </div>

      <div className={styles.Nav__right_container}>
        <Link to="/favorites" icon={<FavoritesIcon />} counter={0} />
        <Link to="/cart" icon={<CartIcon />} counter={3} />
      </div>

      <div className={styles.Nav__mobile}>
        <Link to="/menu" icon={<MenuIcon />} />
      </div>
    </nav>
  );
};
