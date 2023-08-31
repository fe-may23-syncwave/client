import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './ProductColors.scss';

type Props = {
  colors: string[],
  currentColor: string,
};

export const ProductColors: React.FC<Props> = ({ colors, currentColor }) => {
  const { pathname } = useLocation();

  return (
    <div className="colours__content">
      {colors.map((color) => (
        <div
          className={classNames('colours__wrapper', {
            'colours__wrapper--selected': color === currentColor,
          })}
          key={color}
        >
          <Link
            to={pathname.replace(currentColor, color)}
            className={`colours__colour colours__colour--${color}`}
          >
            <p hidden>{color}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
