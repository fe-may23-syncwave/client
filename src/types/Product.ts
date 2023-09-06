export enum Category {
  'Phones' = 'phones',
  'Tablets' = 'tablets',
  'Accessories' = 'accessories',
}

export type Capacity = '64GB' | '128GB' | '256GB' | '512GB' | '1TB';

export type Color =
  | 'black'
  | 'white'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'red'
  | 'blue'
  | 'gold'
  | 'silver'
  | 'coral'
  | 'gray'
  | 'pink';

export type Ram = '3GB' | '4GB' | '6GB' | '8GB' | '12GB' | '16GB';

export interface Product {
  id: string;
  category_id: number;
  productId: string;
  itemId?: string;
  name: string;
  fullPrice: number;
  discountPrice?: number;
  screen?: string;
  capacity_id?: number;
  color_id?: number;
  ram?: string;
  year?: number;
  image: string;
}

export interface ProductWithDetails {
  id: string;
  namespaceId?: string;
  name: string;
  capacityAvailable?: string[];
  capacity?: string;
  discountPrice?: number;
  fullPrice: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
}
