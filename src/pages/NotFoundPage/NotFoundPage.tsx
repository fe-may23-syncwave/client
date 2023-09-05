import React from 'react';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="section">
      <h1 className="error">404</h1>
      <div className="page">Ooops! Page Not Found</div>
      <a className="back-home" href="/client/#">
        Go home
      </a>
    </div>
  );
};
