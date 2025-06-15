import api from './api';
import { Order } from '../types';

export const createOrder = async (orderData: {
  customerId?: number;
  type: string;
  items: { menuItemId: number; quantity: number; price: number }[];
}): Promise<Order> => {
  const response = await api.post('/api/orders', orderData);
  return response.data;
};

export const getKitchenOrders = async (): Promise<Order[]> => {
  const response = await api.get('/api/orders/kitchen');
  return response.data;
};

export const updateOrderStatus = async (orderId: number, status: string): Promise<Order> => {
  const response = await api.put(`/api/orders/${orderId}/status`, { status });
  return response.data;
};

export const getMyOrders = async (customerId: number): Promise<Order[]> => {
  const response = await api.get(`/api/orders/customer/${customerId}`);
  return response.data;
};
