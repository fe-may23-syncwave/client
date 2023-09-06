/* eslint-disable max-len */
import cn from 'classnames';
import './Pagination.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'utils/searchHelper';
import { useContext } from 'react';
import { MainContext } from 'context';

interface Props {
  currentPage: number;
  totalPages: number[];
  onPageChange: (item: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const [searchParams] = useSearchParams();

  const { darkTheme } = useContext(MainContext);

  const findColor = () => {
    if (darkTheme) {
      if (currentPage === 1) {
        return '#313237';
      }

      return '#e2e6e9';
    }

    if (currentPage === 1) {
      return '#e2e6e9';
    }

    return '#313237';
  };

  const findColorArrow = () => {
    if (darkTheme) {
      if (currentPage !== totalPages.length) {
        return '#e2e6e9';
      }

      return '#313237';
    }

    if (currentPage !== totalPages.length) {
      return '#313237';
    }

    return '#e2e6e9';
  };

  return (
    <ul className="pagination">
      <li
        className={cn('page__item page__item__arrow', {
          page__item__disabled: currentPage === 1,
        })}
      >
        <Link
          to={{
            search: getSearchWith(searchParams, {
              page: String(currentPage - 1),
            }),
          }}
          className="page__link"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
          onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z"
              fill={findColor()}
            />
          </svg>
        </Link>
      </li>
      {totalPages.map((item: number) => (
        <li
          className={cn('page__item', {
            page__item__active: currentPage === item,
          })}
          key={item}
        >
          <Link
            to={{
              search: getSearchWith(searchParams, { page: String(item) }),
            }}
            className="page__link"
            onClick={() => onPageChange(item)}
          >
            {item}
          </Link>
        </li>
      ))}

      <li
        className={cn('page__item page__item__arrow', {
          page__item__disabled: currentPage === totalPages.length,
        })}
      >
        <Link
          to={{
            search: getSearchWith(searchParams, {
              page: String(currentPage + 1),
            }),
          }}
          className="page__link"
          aria-disabled={currentPage === totalPages.length ? 'true' : 'false'}
          onClick={() => currentPage !== totalPages.length && onPageChange(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.52876 3.52851C5.78911 3.26816 6.21122 3.26816 6.47157 3.52851L10.4716 7.52851C10.7319 7.78886 10.7319 8.21097 10.4716 8.47132L6.47157 12.4713C6.21122 12.7317 5.78911 12.7317 5.52876 12.4713C5.26841 12.211 5.26841 11.7889 5.52876 11.5285L9.05735 7.99992L5.52876 4.47132C5.26841 4.21097 5.26841 3.78886 5.52876 3.52851Z"
              fill={findColorArrow()}
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
