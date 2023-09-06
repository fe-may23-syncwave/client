import { Product } from 'types/Product';
import { Count } from 'types/CountType';
import { client } from '../utils/fetchClient';

export const getProducts = (url: string) => {
  return client.get<Product[]>(url);
};

export const getAmount = (url: string) => {
  return client.get<Count>(url);
};

export function getProductById(productId: string) {
  const url = `/products?productId=${productId}`;

  const product = client.get<Product>(url);

  return product;
}
