import { Product, ProductWithDetails } from 'types/Product';
import { client } from '../utils/fetchPhones';

export const getProducts = (url: string) => {
  return client.get<Product[]>(url);
};

export function getProductById(productId: string) {
  const url = `/products?productId=${productId}`;

  const product = client.get<Product>(url);

  return product;
}

export function getProductByIdWihDetails(link: string) {
  const url = link;

  const product = client.get<ProductWithDetails>(url);

  return product;
}
