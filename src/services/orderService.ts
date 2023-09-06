import { AxiosResponse } from 'axios';
import { httpClient } from 'http/httpClient';

import { Order, OrderData } from 'types/Order';

function getOrders(): Promise<AxiosResponse<Order[]>> {
  return httpClient.get<Order[]>('/orders');
}

function postOrder(data: OrderData): Promise<AxiosResponse<Order>> {
  return httpClient.post<Order>('/orders', data);
}

function deleteOrder(id: number) {
  return httpClient.delete(`/orders/${id}`);
}

export const orderService = { getOrders, postOrder, deleteOrder };
