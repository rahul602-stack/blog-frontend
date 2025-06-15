import React, { useEffect, useState } from 'react';
import { getDeliveries, updateDelivery, DeliveryOrder } from '../services/deliveryService';

const DeliveryPage: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveryOrder[]>([]);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const data = await getDeliveries();
      setDeliveries(data);
    } catch {
      setMessage('Failed to load delivery orders');
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleUpdate = async (id: number, status: string) => {
    try {
      await updateDelivery(id, status);
      setMessage('Status updated');
      fetchData();
    } catch {
      setMessage('Failed to update status');
    }
  };

  return (
    <div className="container">
      <h1>Delivery Orders</h1>
      {message && <p>{message}</p>}

      {deliveries.length === 0 ? (
        <p>No delivery orders</p>
      ) : (
        deliveries.map(delivery => (
          <div key={delivery.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <p><b>Order ID:</b> {delivery.order.id}</p>
            <p><b>Customer:</b> {delivery.order.customer?.username ?? 'N/A'}</p>
            <p><b>Status:</b> {delivery.status}</p>
            <p><b>Total:</b> ${delivery.order.total}</p>
            <ul>
              {delivery.order.items.map(item => (
                <li key={item.id}>{item.menuItem.name} x {item.quantity}</li>
              ))}
            </ul>

            <div>
              <button onClick={() => handleUpdate(delivery.id, 'IN_PROGRESS')}>In Progress</button>
              <button onClick={() => handleUpdate(delivery.id, 'DELIVERED')}>Delivered</button>
              <button onClick={() => handleUpdate(delivery.id, 'FAILED')}>Failed</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DeliveryPage;
