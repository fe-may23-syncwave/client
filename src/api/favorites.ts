import { Product } from 'types/Product';
import { client } from '../utils/fetchClient';

export const getFavorites = (url: string) => {
  return client.get<Product[]>(url);
};
