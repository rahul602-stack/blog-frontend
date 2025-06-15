import React, { useEffect, useState } from 'react';
import { getPendingOrdersForCashier } from '../services/cashierService';
import { updateOrderStatus } from '../services/orderService';
import { Order } from '../types';


const CashierPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const data = await getPendingOrdersForCashier();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleMarkServed = async (orderId: number) => {
    await updateOrderStatus(orderId, 'SERVED');
    fetchOrders();
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Cashier - Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
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

            {order.status === 'READY' && (
              <button onClick={() => handleMarkServed(order.id)}>Mark as Served</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CashierPage;
