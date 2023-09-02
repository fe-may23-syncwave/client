import { AuthContext } from 'context';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const AccountActivationPage = () => {
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const { activate } = useContext(AuthContext);
  const { activationToken } = useParams();

  useEffect(() => {
    // if (!activationToken) {
    //   setError('Wrong activation link');
    //   setDone(true);

    //   return;
    // }

    activate(activationToken as string)
      .catch((e) => {
        setError(e.response?.data?.message || 'Wrong activation link');
      })
      .finally(() => {
        setDone(true);
      });
  }, []);

  if (!done) {
    // return <Loader />;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Loading...
      </div>
    );
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
