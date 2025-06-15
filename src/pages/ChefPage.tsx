import React, { useEffect, useState } from 'react';
import { getKitchenOrders } from '../services/kitchenService';
import { Order } from '../types';

const ChefPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getKitchenOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

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
              {order.items?.map((item) => (
                <li key={item.menuItem.id}>
                  {item.menuItem.name} - Qty: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ChefPage;
