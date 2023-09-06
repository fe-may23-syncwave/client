import React from 'react';
import { Typography } from 'components/common/Typography';
import { MainContext } from 'context/MainContext';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';
import { ReactComponent as ArrowLight } from 'assets/icons/arrow_up_light.svg';

import styles from './Footer.module.scss';

export const GoToTopButton: React.FC = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { darkTheme } = React.useContext(MainContext);

  return (
    <button type="button" className={styles.Footer__button} onClick={goToTop}>
      <Typography type="text-small">Back to top</Typography>
      <span className={styles.Footer__button__icon}>
        {darkTheme ? <ArrowLight /> : <ArrowUpIcon />}
      </span>
    </button>
  );
};
