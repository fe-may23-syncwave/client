import { Link, useLocation } from 'react-router-dom'; //
import classNames from 'classnames';
import './ProductColors.scss';

type Props = {
  colors: string[];
  currentColor: string;
};

export const ProductColors: React.FC<Props> = ({ colors, currentColor }) => {
  const { pathname } = useLocation();

  return (
    <div className="colors__container">
      {colors.map((color) => (
        <div
          className={classNames('colors__wrapper', {
            'colors__wrapper--selected': color === currentColor,
          })}
          key={color}
        >
          <Link
            to={pathname.replace(currentColor, color)}
            className={`colors__color colors__color--${color}`}
          >
            <p hidden>{color}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
