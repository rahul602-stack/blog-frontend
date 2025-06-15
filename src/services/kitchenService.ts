import api from './api';
import { Order } from '../types';

export const getKitchenOrders = async (): Promise<Order[]> => {
  const res = await api.get('/api/orders/kitchen');
  return res.data;
};
