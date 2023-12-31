import { Product, ProductWithDetails } from 'types/Product';
import { Count } from 'types/CountType';
import { client } from '../utils/fetchClient';
import {
  BestDiscountResponse,
  HighPricesResponse,
  NewestResponse,
} from '../types/responseTypes';

export const getProducts = (url: string) => {
  return client.get<Product[]>(url);
};

export const getAmount = (url: string) => {
  return client.get<Count>(url);
};

export const getHighPrices = (): Promise<HighPricesResponse> => {
  return client.get<HighPricesResponse>('home/hightPrice');
};

export const getBestDiscount = (): Promise<BestDiscountResponse> => {
  return client.get<BestDiscountResponse>('home/bestDiscount');
};

export const getNewest = (): Promise<NewestResponse> => {
  return client.get<NewestResponse>('home/newest');
};

export function getProductById(productId: string) {
  const url = `products/${productId}`;

  const product = client.get<Product>(url);

  return product;
}

export function getProductByIdWihDetails(link: string) {
  const url = link;
  const product = client.get<ProductWithDetails>(url);

  return product;
}
