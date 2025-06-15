import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface ReportOrder {
  id: number;
  total: number;
  createdAt: string;
  type: string;
}

const ReportingPage: React.FC = () => {
  const [orders, setOrders] = useState<ReportOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await api.get('/api/orders'); // assuming you already have /api/orders in backend
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch report');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="container">
      <h1>Sales Report</h1>
      <h3>Total Sales: ${totalSales.toFixed(2)}</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.type}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportingPage;
