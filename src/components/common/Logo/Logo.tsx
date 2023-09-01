import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { MainContext } from 'context/MainContext';
import logo from '../../../assets/images/logo.png';
import darkLogo from '../../../assets/images/dark-logo.png';
import styles from './Logo.module.scss';

const logoType = {
  small: styles['Logo__wrapper--small'],
  medium: styles['Logo__wrapper--medium'],
  large: styles['Logo__wrapper--large'],
};

type Props = {
  className?: string;
  type?: keyof typeof logoType;
};

export const Logo: React.FC<Props> = ({ className, type = 'small' }) => {
  const { darkTheme } = React.useContext(MainContext);

  return (
    <div className={className}>
      <Link to="/" className={classNames(styles.Logo__link, logoType[type])}>
        <img
          src={darkTheme ? darkLogo : logo}
          alt="Logo"
          className={styles.Logo__image}
        />
      </Link>
    </div>
  );
};
