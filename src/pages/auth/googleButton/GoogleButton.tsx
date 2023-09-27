import { useCallback, useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authService } from 'services/authService';
import { AuthContext } from 'context';

type Props = {
  setError: (error: string) => void;
  navigateOnLogin: () => void;
};

const GoogleButton: React.FC<Props> = ({ setError, navigateOnLogin }) => {
  const { checkAuth } = useContext(AuthContext);

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

  return (
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
  );
};

export default GoogleButton;
