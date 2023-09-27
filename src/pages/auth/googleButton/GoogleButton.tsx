import { useCallback, useContext } from 'react';
import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import { authService } from 'services/authService';
import { AuthContext } from 'context';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { Typography } from 'components/common/Typography';
import './GoogleButton.scss';

type Props = {
  setError: (error: string) => void;
  navigateOnLogin: () => void;
};

const GoogleButton: React.FC<Props> = ({ setError, navigateOnLogin }) => {
  const { checkAuth } = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const googleAuth = useCallback(
    async (credential: string) => {
      try {
        const { data } = await authService.googleAuth(credential);

        if (data.accessToken) {
          checkAuth();
          navigateOnLogin();
        }
      } catch (error) {
        setError('Google login failed');
      }
    },
    [checkAuth, navigateOnLogin, setError],
  );

  const login = useGoogleLogin({
    // eslint-disable-next-line no-console
    onSuccess: (tokenResponse) => googleAuth(tokenResponse.access_token),
    onError: () => {
      setError('Google login failed');
    },
  });

  return (
    <>
      <button type="button" className="button" onClick={() => login()}>
        <div className="button__text">
          <Typography type="label">Sign in with Google</Typography>
        </div>
        <div className="button__icon">
          <GoogleIcon />
        </div>
      </button>

      <GoogleLogin
        onSuccess={(response) => {
          googleAuth(response.credential as string);
        }}
        type="standard"
        onError={() => {
          setError('Google login failed');
        }}
        theme="filled_blue"
        locale="en"
        shape="rectangular"
      />
    </>
  );
};

export default GoogleButton;
