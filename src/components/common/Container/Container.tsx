import React from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.Container,
        className,
      )}
    >
      {children}
    </div>
  );
};
