import React from 'react';
import { Container } from 'components/common/Container';
import classNames from 'classnames';
import { Logo } from 'components/common/Logo';
import { Typography } from 'components/common/Typography';

import styles from './Footer.module.scss';
import { GoToTopButton } from './GoToTopButton';

export enum FooterLink {
  Github = 'https://github.com/fe-may23-syncwave/client',
  Contacts = 'https://goo.gl/maps/BmXqVNG6ch3Ny5rS9',
  Rights = 'https://choosealicense.com/licenses/mit/',
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
              <a
                key={title}
                href={link}
                target="blank"
                rel="noreferrer"
                className={styles.Footer__list__link}
              >
                <Typography type="uppercase">{title}</Typography>
              </a>
            ))}
          </div>
          <GoToTopButton />
        </div>
      </Container>
    </div>
  );
};
