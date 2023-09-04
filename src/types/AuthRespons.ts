import { IUser } from './User';

export interface AuthResponse {
  accessToken: string;
  user: IUser;
  // refreshToken: string;
}
