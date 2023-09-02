import React, { useMemo, useState } from 'react';
import { IUser } from 'types/User';
import { accessTokenService } from 'services/accessTokenService';
import { authService } from 'services/authService';

interface State {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuth: () => Promise<void>;
  activate: (activationToken: string) => Promise<void>;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

const initialState: State = {
  user: null,
  isAuth: false,
  isLoading: true,
  setIsLoading: () => {},
  setIsAuth: () => {},
  checkAuth: () => Promise.resolve(),
  activate: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => {},
};

export const AuthContext = React.createContext<State>(initialState);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  async function activate(activationToken: string) {
    const { data } = await authService.activate(activationToken);

    // eslint-disable-next-line no-console
    console.log('Activate response', data);

    accessTokenService.save(data.accessToken);
    setUser(data.user);
  }

  async function checkAuth() {
    setIsLoading(true);
    try {
      const { data } = await authService.refresh();

      accessTokenService.save(data.accessToken);

      setIsAuth(true);
      setUser(data.user);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('User is not authenticated');
    } finally {
      setIsLoading(false);
    }
  }

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const { data } = await authService.login({ email, password });

    accessTokenService.save(data.accessToken);

    setUser(data.user);
    setIsAuth(true);
  }

  async function logout() {
    await authService.logout();

    accessTokenService.remove();

    setUser(null);
    setIsAuth(false);
  }

  const contextValue = useMemo(
    () => ({
      user,
      isAuth,
      isLoading,
      setIsLoading,
      setIsAuth,
      checkAuth,
      activate,
      login,
      logout,
    }),
    [user, isAuth, isLoading],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
