import React from 'react';
import { MainContext } from 'context/MainContext';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import './DarkMode.scss';

export const DarkMode: React.FC = () => {
  const { toggleTheme } = React.useContext(MainContext);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => toggleTheme()}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};
