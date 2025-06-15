import React, { useEffect, useState } from 'react';
import { getMyOrders } from '../services/orderService';
import { useAuth } from '../context/AuthContext';
import { Order, OrderItem } from '../types';

const OrdersPage: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) {
        console.error('User not logged in');
        return;
      }

      const customerId = typeof user.id === 'string' ? parseInt(user.id) : user.id;
      const data = await getMyOrders(customerId);
      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  return (
    <div>
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Placed: {order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}</p>
            <p>Status: {order.status}</p>
            <ul>
              {order.items.map((item: OrderItem) => (
                <li key={item.menuItem.id}>
                  {item.menuItem.name} x {item.quantity} — ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total: ${order.total.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
