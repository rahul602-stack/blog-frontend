// src/services/hqReportService.ts

export interface HQSalesReport {
  branch: string;
  totalOrders: number;
  totalRevenue: number;
}


export const getHQSalesReport = async (): Promise<HQSalesReport[]> => {
  return [
    { branch: "Main Branch", totalOrders: 10, totalRevenue: 500 },
    { branch: "Branch A", totalOrders: 7, totalRevenue: 350 },
    { branch: "Branch B", totalOrders: 4, totalRevenue: 180 }
  ];
};
