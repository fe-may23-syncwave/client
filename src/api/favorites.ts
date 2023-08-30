import { Phone } from 'types/PhoneType';
import { client } from '../utils/fetchPhones';

export const getFavorites = (url: string) => {
  return client.get<Phone[]>(url);
};
