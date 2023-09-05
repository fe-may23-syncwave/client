export interface Order {
  id: number,
  userId: number,
  totalPrice: number,
  quantity: number,
  createdAt: string,
  updatedAt: string,
  user: {
    id: number,
    email: string,
  }
}

export interface OrderData {
  userId: number,
  totalPrice: number,
  quantity: number,
}
