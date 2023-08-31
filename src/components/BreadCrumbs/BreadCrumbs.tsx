import React from 'react';
import './BreadCrumbs.scss';
import classNames from 'classnames';
import { useLocation, Link } from 'react-router-dom';
import arrow from 'assets/icons/arrow_right.svg';
import home from 'assets/icons/home.svg';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const links = location.pathname.split('/').filter((link) => link !== '');

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__home-link">
            <img
              src={home}
              alt="home"
              className="breadcrumbs__image"
            />
          </Link>
        </li>

        {links.map((link, index) => {
          const title = link.split('-').join(' ');

          return (
            <li key={link} className="breadcrumbs__item">
              <img
                src={arrow}
                alt="arrow"
                className="breadcrumbs__image"
              />

              <Link
                to={`/${link}`}
                className={classNames('breadcrumbs__link', {
                  'breadcrumbs__link--disabled': index === links.length - 1,
                })}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
