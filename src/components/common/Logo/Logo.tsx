import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
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
  return (
    <div className={className}>
      <Link to="/" className={classNames(styles.Logo__link, logoType[type])}>
        <img src={logo} alt="Logo" className={styles.Logo__image} />
      </Link>
    </div>
  );
};
