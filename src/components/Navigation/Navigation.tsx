import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { Link } from './Link';
import { NavBarLinks } from './NavBarLinks';
import { NavBarIcons } from './NavBarIcons';

import styles from './Navigation.module.scss';

type Props = {
  openModal?: () => void;
};

export const Navigation: React.FC<Props> = ({ openModal }) => {
  const [favoritesCounter] = useState(0);
  const [cartCounter] = useState(3);

  const location = useLocation();

  return (
    <nav className={styles.Nav}>
      <NavBarLinks className={styles.Nav__left_container} />
      <NavBarIcons
        className={styles.Nav__right_container}
        favoritesCounter={favoritesCounter}
        cartCounter={cartCounter}
      />

      <div
        className={styles.Nav__menu}
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
