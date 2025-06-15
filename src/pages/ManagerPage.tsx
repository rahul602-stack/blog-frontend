import React, { useEffect, useState } from 'react';
import { getSalesReport, getInventoryReport } from '../services/reportService';

interface SalesData {
  totalOrders: number;
  totalRevenue: number;
}

interface InventoryData {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
}

const ManagerPage: React.FC = () => {
  const [sales, setSales] = useState<SalesData | null>(null);
  const [inventory, setInventory] = useState<InventoryData[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const salesData = await getSalesReport();   // returns single SalesData object
      const inventoryData = await getInventoryReport();
      setSales(salesData);
      setInventory(inventoryData);
    } catch (err) {
      console.error('Error loading reports:', err);
      setError("Failed to load reports");
    }
  };

  return (
    <div className="container">
      <h1>Manager Dashboard</h1>

      <h2>Sales Report</h2>
      {!sales ? (
        <p>No sales data</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Total Orders</th>
              <th>Total Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sales.totalOrders}</td>
              <td>{sales.totalRevenue.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}

      <h2 style={{ marginTop: '30px' }}>Inventory</h2>
      {inventory.length === 0 ? (
        <p>No inventory data</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Threshold</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ManagerPage;
