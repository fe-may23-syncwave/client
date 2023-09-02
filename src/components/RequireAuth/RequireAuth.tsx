import { Loader } from 'components/common/Loader';
import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { NavBarRoute } from 'types/NavBarRoute';

type Props = {
  children?: React.ReactNode;
};

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={NavBarRoute.Login} state={{ from: location }} />;
  }

  return children || <Outlet />;
};
