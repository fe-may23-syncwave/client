import React from 'react';
import { NavBarRoute } from 'types/NavBarRoute';
import { Link } from './Link';

const NavBarLink = {
  Home: NavBarRoute.Home,
  Phones: NavBarRoute.Phones,
  Tablets: NavBarRoute.Tablets,
  Accessories: NavBarRoute.Accessories,
};

type Props = {
  className?: string;
};

export const NavBarLinks: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {Object.entries(NavBarLink).map(([title, link]) => (
        <Link key={title} to={link} title={title} />
      ))}
    </div>
  );
};
