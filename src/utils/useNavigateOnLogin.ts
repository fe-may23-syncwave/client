import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useNavigateOnLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateOnLogin = useCallback(() => {
    navigate(location.state?.from?.pathname || '/cart', { replace: true });
  }, [navigate, location.state?.from?.pathname]);

  return navigateOnLogin;
}
