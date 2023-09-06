import React from 'react';
import './StylishComponent.scss';

type StylishComponentProps = {
  text: React.ReactNode;
  imageSrc: string;
};

export const StylishComponent: React.FC<StylishComponentProps> = ({
  text,
  imageSrc,
}) => (
  <div className="container">
    <div className="textContainer">
      {text}
    </div>
    <img src={imageSrc} alt="" className="image" />
  </div>
);
