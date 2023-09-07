import { Loader } from 'components/common/Loader';
import { MainContext, AuthContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import darkSuccessImg from '../../assets/images/darkEmail.png';
import successImg from '../../assets/images/email.png';
import errorImg from '../../assets/images/error-page.png';
import { StylishComponent } from '../../components/StylishComponent';

export const AccountActivationPage = () => {
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const { activate } = useContext(AuthContext);
  const { activationToken } = useParams();
  const { darkTheme } = useContext(MainContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!activationToken) {
      setError('Wrong activation link');
      setDone(true);

      return;
    }

    // eslint-disable-next-line no-console
    console.log('activationPage', activationToken);

    activate(activationToken)
      .catch((e) => {
        setError(e.response?.data?.message || 'Wrong activation link');
      })
      .finally(() => {
        setDone(true);
      });
  }, []);

  let imageToUse;

  if (error) {
    imageToUse = errorImg;
  } else {
    imageToUse = darkTheme ? darkSuccessImg : successImg;
  }

  if (!done) {
    return <Loader />;
  }

  return (
    <StylishComponent
      imageSrc={imageToUse}
      text={(
        <>
          <h1 className="title">Account activation</h1>
          {error ? (
            <p className="notification is-danger is-light">{error}</p>
          ) : (
            <>
              <p className="notification is-success is-light">
                Your account is now active
              </p>
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                className="button is-primary"
                onClick={() => navigate('/login')} // this will redirect to login page
              >
                Go to Login
              </button>
            </>
          )}
        </>
      )}
    />
  );
};
