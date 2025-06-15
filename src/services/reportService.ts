import api from './api';

// Correct clean interface names
export interface SalesData {
  totalOrders: number;
  totalRevenue: number;
}

export interface SalesReport {
  date: string;
  totalOrders: number;
  revenue: number;
}

export interface InventoryReport {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
}

// If you want to fetch full detailed sales report (array by date)
export const getFullSalesReport = async (): Promise<SalesReport[]> => {
  const response = await api.get('/api/reports/sales');  // ✅ <-- your correct URL here
  return response.data;
};

// ManagerPage will use this: summarize sales data
export const getSalesReport = async (): Promise<SalesData> => {
  const response = await api.get('/api/reports/sales');  // ✅ use same URL
  const salesArray: SalesReport[] = response.data;

  const totalOrders = salesArray.reduce((sum, item) => sum + item.totalOrders, 0);
  const totalRevenue = salesArray.reduce((sum, item) => sum + item.revenue, 0);

  return { totalOrders, totalRevenue };
};

// Inventory report remains same
export const getInventoryReport = async (): Promise<InventoryReport[]> => {
  const response = await api.get('/api/reports/inventory');
  return response.data;
};
