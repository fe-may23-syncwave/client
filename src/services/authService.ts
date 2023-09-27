import { AxiosResponse } from 'axios';
import { authClient } from 'http/authClient';
import { AuthResponse } from 'types/AuthRespons';

function register({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{ message: string }>> {
  return authClient.post<{ message: string }>('/registration', {
    email,
    password,
  });
}

function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<AuthResponse>> {
  return authClient.post<AuthResponse>('/login', { email, password });
}

function logout(): Promise<void> {
  return authClient.post('/logout');
}

function activate(
  activationToken: string,
): Promise<AxiosResponse<AuthResponse>> {
  return authClient.get<AuthResponse>(`/activation/${activationToken}`);
}

function refresh(): Promise<AxiosResponse<AuthResponse>> {
  return authClient.get<AuthResponse>('/refresh');
}

function googleAuth(token: string): Promise<AxiosResponse<AuthResponse>> {
  return authClient.post<AuthResponse>('/google', { token });
}

export const authService = {
  register,
  login,
  logout,
  activate,
  refresh,
  googleAuth,
};
