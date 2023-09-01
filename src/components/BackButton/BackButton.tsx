import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBackIcon } from 'assets/icons/arrow_back.svg';
import { ReactComponent as ArrowBackLight } from 'assets/icons/arrow-light.svg';
import './BackButton.scss';
import { MainContext } from 'context/MainContext';
import React from 'react';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const { darkTheme } = React.useContext(MainContext);

  return (
    <button type="button" className="back-button" onClick={() => navigate(-1)}>
      { darkTheme ? <ArrowBackLight /> : <ArrowBackIcon />}
    </button>
  );
};
