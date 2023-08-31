import styles from './Dropdowns.module.scss';

export const Dropdowns: React.FC = () => {
  return (
    <div className={styles.Dropdowns}>
      <div className={styles.Dropdowns__dropdown}>
        <p className={styles.Dropdowns__description}>Sort By</p>
        <div className="select is-normal">
          <select className={styles.Dropdowns__selector__sort}>
            <option value="Newest">Newest</option>
            <option value="Alphabetically">Alphabetically</option>
            <option value="Cheapest">Cheapest</option>
          </select>
        </div>
      </div>

      <div className={styles.Dropdowns__dropdown}>
        <p className={styles.Dropdowns__description}>Items on page</p>
        <div className="select is-normal">
          <select className={styles.Dropdowns__selector__items}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
    </div>
  );
};
