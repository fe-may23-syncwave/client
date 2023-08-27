/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import styles from './Navigation.module.scss';

export enum NavBarLink {
  Home = '/',
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles.Nav__link, {
    [styles.Nav__link_active]: isActive,
  });
};

export const Navigation = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav__left_container}>
        {Object.entries(NavBarLink).map(([title, link]) => (
          <NavLink key={title} to={link} className={getLinkClass}>
            {title.toUpperCase()}
          </NavLink>
        ))}
      </div>

      <div className={styles.Nav__right_container}>
        <NavLink to="/favorites" className={styles.Nav__iconLink}>
          <div className={styles.Nav__iconLink__icon}>
            <FavoritesIcon />
            <span className={styles.Nav__iconLink__icon__counter}>0</span>
          </div>
        </NavLink>
        <NavLink to="/cart" className={styles.Nav__iconLink}>
          <div className={styles.Nav__iconLink__icon}>
            <CartIcon />
            <span className={styles.Nav__iconLink__icon__counter}>0</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
