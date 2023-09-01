import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './ProductCapacity.scss';

type Props = {
  capacities: string[];
  currentCapacity: string;
};

export const ProductCapacity: React.FC<Props> = ({
  capacities,
  currentCapacity,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="capacity__content">
      {capacities.map((capacity) => (
        <Link
          to={pathname.replace(
            currentCapacity.toLowerCase(),
            capacity.toLowerCase(),
          )}
          className={classNames('capacity__item', {
            'capacity__item--current': capacity === currentCapacity,
          })}
          key={capacity}
        >
          {capacity}
        </Link>
      ))}
    </div>
  );
};
