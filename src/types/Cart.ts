export interface Cart {
  id: string;
  category_id: number;
  productId: string;
  itemId?: string;
  name: string;
  fullPrice: number;
  discountPrice?: number;
  screen?: string;
  capacity_id?: number;
  color?: string;
  color_id?: number;
  ram?: string;
  year?: number;
  image: string;
  count: number;
}
