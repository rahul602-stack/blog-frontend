import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Delivery {
  id: number;
  orderId: number;
  status: string;
  address: string;
}

const DeliveryGuyPage: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const fetchDeliveries = async () => {
    try {
      const response = await api.get('/api/deliveries');
      setDeliveries(response.data);
    } catch (err) {
      console.error('Failed to fetch deliveries');
    }
  };

  const updateStatus = async (deliveryId: number, status: string) => {
    try {
      await api.patch(`/api/deliveries/${deliveryId}/status`, { status });
      fetchDeliveries();
    } catch (err) {
      console.error('Failed to update delivery');
    }
  };

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div className="container">
      <h1>Delivery Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Delivery ID</th>
            <th>Order ID</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.orderId}</td>
              <td>{delivery.address}</td>
              <td>{delivery.status}</td>
              <td>
                <button onClick={() => updateStatus(delivery.id, 'DELIVERED')}>Delivered</button>
                <button onClick={() => updateStatus(delivery.id, 'FAILED')}>Failed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryGuyPage;
