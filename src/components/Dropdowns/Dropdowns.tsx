import React from 'react';
import styles from './Dropdowns.module.scss';

interface Props {
  handleDropdownChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    v: string,
  ) => void;
  perPage: string;
  sortBy: string;
}

export const Dropdowns: React.FC<Props> = ({
  handleDropdownChange,
  perPage,
  sortBy,
}) => {
  return (
    <div className={styles.Dropdowns}>
      <div className={styles.Dropdowns__dropdown}>
        <p className={styles.Dropdowns__description}>Sort By</p>
        <div className="select is-normal">
          <select
            className={styles.Dropdowns__selector__sort}
            value={sortBy}
            onChange={(event) => handleDropdownChange(event, 'sort')}
          >
            <option value="age">Newest</option>
            <option value="title">Alphabetically</option>
            <option value="price">Cheapest</option>
          </select>
        </div>
      </div>

      <div className={styles.Dropdowns__dropdown}>
        <p className={styles.Dropdowns__description}>Items on page</p>
        <div className="select is-normal">
          <select
            className={styles.Dropdowns__selector__items}
            value={perPage}
            onChange={(event) => handleDropdownChange(event, 'perPage')}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>
    </div>
  );
};
