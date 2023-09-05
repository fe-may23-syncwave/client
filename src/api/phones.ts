import { Product } from 'types/Product';
import { client } from '../utils/fetchClient';

export const getProducts = (url: string) => {
  return client.get<Product[]>(url);
};

export function getProductById(productId: string) {
  const url = `/products?productId=${productId}`;

  const product = client.get<Product>(url);

  return product;
}
