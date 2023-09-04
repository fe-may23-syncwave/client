import { AxiosResponse } from 'axios';
import { httpClient } from 'http/httpClient';
import { IUser } from 'types/User';

function getAll(): Promise<AxiosResponse<IUser[]>> {
  return httpClient.get<IUser[]>('/users');
}

export const userService = { getAll };
