// src/services/customerService.ts

import api from './api';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface CreateOrderPayload {
  customerId?: number;
  type: string;
  items: {
    menuItemId: number;
    quantity: number;
    price: number;
  }[];
}

// Fetch menu
export const getMenu = async (): Promise<MenuItem[]> => {
  const response = await api.get('/api/menu');
  return response.data;
};

// Create order
export const createOrder = async (orderData: CreateOrderPayload) => {
  const response = await api.post('/api/orders', orderData);
  return response.data;
};
