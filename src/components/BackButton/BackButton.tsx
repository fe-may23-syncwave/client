import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBackIcon } from 'assets/icons/arrow_back.svg';
import './BackButton.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button type="button" className="back-button" onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </button>
  );
};
