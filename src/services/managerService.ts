import api from './api';

export interface SalesReport {
  totalOrders: number;
  totalRevenue: number;
  date: string;
}

export interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
  updatedAt: string;
}

export const getSalesReport = async (): Promise<SalesReport[]> => {
  const response = await api.get('/api/reports/sales');
  return response.data;
};

export const getInventoryReport = async (): Promise<InventoryItem[]> => {
  const response = await api.get('/api/inventory');
  return response.data;
};
