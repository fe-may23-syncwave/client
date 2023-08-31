import React from 'react';
import { Typography } from 'components/common/Typography';

import styles from './SquareButton.module.scss';

type Props = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const SquareButton: React.FC<Props> = ({ icon, text, onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      <span className={styles.Button__icon}>
        {icon || <Typography type="text-small">{text}</Typography>}
      </span>
    </button>
  );
};
