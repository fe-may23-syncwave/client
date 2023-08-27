import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import styles from './Logo.module.scss';

type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Link to="/" className={styles.Logo__link}>
        <img
          src={logo}
          alt="Logo"
          className={styles.Logo__image}
        />
      </Link>
    </div>
  );
};
