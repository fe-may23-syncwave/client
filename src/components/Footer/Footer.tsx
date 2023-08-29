import React from 'react';
import { Container } from 'components/common/Container';
import classNames from 'classnames';
import { Logo } from 'components/common/Logo';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import styles from './Footer.module.scss';

export enum FooterLink {
  Github = 'https://github.com/fe-may23-syncwave/client',
  Contacts = 'contacts',
  Rights = '#',
}

type Props = {
  className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.Footer)}>
      <Container>
        <div className={styles.Footer__content}>
          <Logo type="medium" />
          <div className={styles.Footer__list}>
            {Object.entries(FooterLink).map(([title, link]) => (
              <a key={title} href={link} target="blank" rel="noreferrer">
                {title.toUpperCase()}
              </a>
            ))}
          </div>
          <button type="button" className={styles.Footer__button}>
            Back to top
            <span className={styles.Footer__button__icon}>
              <ArrowUpIcon />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
};
