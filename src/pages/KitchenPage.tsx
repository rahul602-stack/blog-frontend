import React, { useEffect, useState } from 'react';
import { getKitchenOrders, updateOrderStatus } from '../services/orderService';
import { Order } from '../types';

const KitchenPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const data = await getKitchenOrders();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId: number, status: string) => {
    await updateOrderStatus(orderId, status);
    fetchOrders();
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Kitchen - Orders</h1>
      {orders.length === 0 ? (
        <p>No kitchen orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p>Order #{order.id} - {order.status}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.menuItem.id}>
                  {item.menuItem.name} - Qty: {item.quantity}
                </li>
              ))}
            </ul>
            <p>Total: ${order.total.toFixed(2)}</p>

            {order.status === 'PENDING' && (
              <button onClick={() => handleUpdateStatus(order.id, 'PREPARING')}>Mark as Preparing</button>
            )}

            {order.status === 'PREPARING' && (
              <button onClick={() => handleUpdateStatus(order.id, 'READY')}>Mark as Ready</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default KitchenPage;
