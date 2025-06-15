import api from './api';
import { Order } from '../types';

export const getPendingOrdersForCashier = async (): Promise<Order[]> => {
  const response = await api.get('/api/cashier/orders');
  return response.data;
};
