import React from 'react';
import { Typography } from 'components/common/Typography';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import styles from './Footer.module.scss';

export const GoToTopButton: React.FC = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" className={styles.Footer__button} onClick={goToTop}>
      <Typography type="text-small">Back to top</Typography>
      <span className={styles.Footer__button__icon}>
        <ArrowUpIcon />
      </span>
    </button>
  );
};
