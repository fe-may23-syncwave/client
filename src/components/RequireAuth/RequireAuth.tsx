import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { NavBarRoute } from 'types/NavBarRoute';
// import { AuthContext } from './AuthContext.jsx';
// import { Loader } from './Loader.jsx';

// const styles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// };

type Props = {
  children?: React.ReactNode;
};

export const RequireAuth: React.FC<Props> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  // if (isLoading) {
  //   return <div style={styles}>...loading</div>;
  // }

  if (!user) {
    return <Navigate to={NavBarRoute.Login} state={{ from: location }} />;
  }

  return children || <Outlet />;
};
