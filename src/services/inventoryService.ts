// src/services/inventoryService.ts

import api from './api';

export interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
  updatedAt: string;
}

// Fetch full inventory list
export const getInventory = async (): Promise<InventoryItem[]> => {
  const response = await api.get('/api/inventory');
  return response.data;
};

// Update inventory quantity
export const updateInventory = async (itemId: number, quantity: number): Promise<InventoryItem> => {
  const response = await api.patch(`/api/inventory/${itemId}`, { quantity });
  return response.data;
};
