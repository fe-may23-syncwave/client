import { Product } from './Product';

export interface BestDiscountResponse {
  bestDiscount: Product[];
}

export interface HighPricesResponse {
  hightPrice: Product[];
}

export interface NewestResponse {
  newest: Product[];
}
