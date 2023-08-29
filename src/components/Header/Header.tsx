import React from 'react';
import classNames from 'classnames';
import { Navigation } from 'components/Navigation';
import { Logo } from '../common/Logo';
import styles from './Header.module.scss';

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.Header, className)}>
      <Logo className={styles.Header__logo} type="small" />

      <Navigation />
    </div>
  );
};
