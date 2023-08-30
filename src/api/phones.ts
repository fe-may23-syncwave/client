import { Phone } from 'types/PhoneType';
import { client } from '../utils/fetchPhones';

export const getProducts = (url: string) => {
  return client.get<Phone[]>(url);
};
