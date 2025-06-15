import api from './api';

export interface HQSalesReport {
  branch: string;
  totalOrders: number;
  totalRevenue: number;
}

// use this function in HQManagerPage.tsx
export const getBranchSalesReport = async (): Promise<HQSalesReport[]> => {
  const response = await api.get('/api/reports/hq');
  return response.data;
};
