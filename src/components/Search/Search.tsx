import React, { useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MainContext } from 'context/MainContext';
import './Search.scss';
import classNames from 'classnames';
import searchDark from 'assets/icons/search-dark.svg';
import searchLight from 'assets/icons/search-light.svg';
import closeDark from 'assets/icons/close-dark.svg';
import closeLight from 'assets/icons/close-light.svg';
import { getSearchWith } from '../../utils/searchHelper';

export const Search = () => {
  const [searchClosed, setSearchClosed] = useState(true);
  const { darkTheme } = React.useContext(MainContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const search = searchParams.get('search') || '';
  const [searchValue, setSearchValue] = useState(search);
  const location = useLocation();

  useMemo(() => {
    setSearchValue(search);
  }, [search]);

  const searchIsVisible
    = location.pathname === '/phones'
    || location.pathname === '/tablets'
    || location.pathname === '/accessories';

  if (!searchIsVisible) {
    return null;
  }

  const handleParamsChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchParams(
        getSearchWith(searchParams, {
          search: event.target.value.trim() || null,
        }),
      );
    },
    800,
  );

  const updateSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    handleParamsChange(event);
  };

  const resetSearch = () => {
    setSearchValue('');
    setSearchParams(getSearchWith(searchParams, { search: null }));
  };

  return (
    <form
      onSubmit={() => resetSearch()}
      className={classNames('search__form', {
        'search__form--no-input': searchClosed,
      })}
    >
      <input
        type="text"
        ref={inputRef}
        value={searchValue}
        onChange={updateSearchValue}
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
        {searchValue.length > 0 ? (
          <img src={darkTheme ? closeLight : closeDark} alt="Search bar" />
        ) : (
          <img src={darkTheme ? searchLight : searchDark} alt="Search bar" />
        )}
      </button>
    </form>
  );
};
