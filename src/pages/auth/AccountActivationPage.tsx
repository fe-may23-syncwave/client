import { Loader } from 'components/common/Loader';
import { AuthContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const AccountActivationPage = () => {
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const { activate } = useContext(AuthContext);
  const { activationToken } = useParams();

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

  if (!done) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="title">Account activation</h1>

      {error ? (
        <p className="notification is-danger is-light">{error}</p>
      ) : (
        <p className="notification is-success is-light">
          Your account is now active
        </p>
      )}
    </>
  );
};
