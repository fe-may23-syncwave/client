import { Product } from 'types/Product';
import { client } from '../utils/fetchPhones';

export const getFavorites = (url: string) => {
  return client.get<Product[]>(url);
};
