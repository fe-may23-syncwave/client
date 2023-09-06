import { Order, OrderData } from 'types/Order';
import { client } from '../utils/fetchClient';

export const getOrders = (url: string) => {
  return client.get<Order[]>(url);
};

export const postOrder = (data: OrderData) => {
  return client.post<Order>('orders', data);
};

export const deleteOrder = (id: number) => {
  return client.delete(`orders/${id}`);
};
