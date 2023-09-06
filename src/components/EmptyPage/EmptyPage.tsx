import React from 'react';
import './EmptyPage.scss';

interface Props{
  title: string,
}

export const EmptyPage: React.FC<Props> = ({ title }) => {
  return (
    <div className="cart__block">
      <h1 className="cart__title">{`Your ${title} is empty...`}</h1>
      <p className="cart__subtitle">
        But it&apos;s never too late to fix it!
      </p>
      <a className="back-home" href="#/">
        Go main page
      </a>
    </div>
  );
};
