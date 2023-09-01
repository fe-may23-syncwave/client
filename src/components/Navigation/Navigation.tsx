/* eslint-disable max-len */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainContext } from 'context/MainContext';
import { DarkMode } from 'components/DarkMode';
import { ReactComponent as Icon } from '../../assets/icons/menu.svg';
import { ReactComponent as IconLight } from '../../assets/icons/menu-light.svg';
import { Link } from './Link';
import { NavBarLinks } from './NavBarLinks';
import { NavBarIcons } from './NavBarIcons';

import styles from './Navigation.module.scss';

type Props = {
  openModal?: () => void;
};

export const Navigation: React.FC<Props> = ({ openModal }) => {
  const location = useLocation();
  const { darkTheme } = React.useContext(MainContext);

  return (
    <nav className={styles.Nav}>
      <NavBarLinks className={styles.Nav__left_container} />
      <DarkMode />
      <NavBarIcons className={styles.Nav__right_container} />

      <div
        className={styles.Nav__menu}
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={openModal}
      >
        <Link
          to={location.pathname}
          icon={darkTheme ? <IconLight /> : <Icon />}
        />
      </div>
    </nav>
  );
};
