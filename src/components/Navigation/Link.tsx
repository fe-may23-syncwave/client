import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navigation.module.scss';

const {
  Nav__link: TextLink,
  'Nav__link--active': ActiveTextLink,
  'Nav__link--active-menu': ActiveMenuLink,
  Nav__iconLink: IconLink,
  Nav__iconLink__icon: Icon,
  Nav__iconLink__icon__counter: IconCounter,
} = styles;

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(TextLink, {
    [ActiveTextLink]: isActive,
  });
};

const getMenuLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(TextLink, {
    [ActiveMenuLink]: isActive,
  });
};

interface Props {
  title?: string;
  to: string;
  icon?: React.ReactNode;
  counter?: number;
  onClick?: () => void;
  isMenu?: boolean;
}

export const Link: React.FC<Props> = ({
  title,
  to,
  icon,
  counter = 0,
  onClick = () => {},
  isMenu = false,
}) => {
  const getActiveLink = isMenu ? getMenuLinkClass : getLinkClass;

  return (
    <NavLink
      to={to}
      className={title ? getActiveLink : IconLink}
      onClick={onClick}
    >
      {title}

      {icon && (
        <div className={Icon}>
          {icon}
          {counter > 0 && <span className={IconCounter}>{counter}</span>}
        </div>
      )}
    </NavLink>
  );
};
