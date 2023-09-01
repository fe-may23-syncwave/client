import React, { FormEvent, useRef, useState } from 'react';
import './Search.scss';
import { MainContext } from 'context/MainContext';
import classNames from 'classnames';
import searchDark from 'assets/icons/search-dark.svg';
import searchLight from 'assets/icons/search-light.svg';

export const Search = () => {
  const [searchClosed, setSearchClosed] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<null | HTMLInputElement>(null);

  const { darkTheme } = React.useContext(MainContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={classNames('search__form', {
        'search__form--no-input': searchClosed,
      })}
    >
      <input
        type="text"
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={classNames('search__bar', {
          'search__bar--invisible': searchClosed,
        })}
        placeholder="Search"
      />

      <button
        onClick={() => setSearchClosed(!searchClosed)}
        className="search__button search__button--active"
        type="submit"
      >
        <img src={darkTheme ? searchLight : searchDark} alt="Search bar" />
      </button>
    </form>
  );
};
