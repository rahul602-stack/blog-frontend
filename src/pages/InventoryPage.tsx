import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  threshold: number;
  updatedAt: string;
}

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await api.get('/api/inventory');
      setInventory(response.data);
    } catch (err) {
      setMessage('Failed to load inventory');
    }
  };

  const handleUpdate = async (itemId: number, newQuantity: number) => {
    try {
      await api.patch(`/api/inventory/${itemId}`, { quantity: newQuantity });
      setMessage('Stock updated');
      fetchInventory();
    } catch (err) {
      setMessage('Failed to update stock');
    }
  };

  return (
    <div className="container">
      <h1>Inventory Management</h1>
      {inventory.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <p><strong>Item:</strong> {item.itemName}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
          <p><strong>Threshold:</strong> {item.threshold}</p>
          <input
            type="number"
            defaultValue={item.quantity}
            onBlur={(e) => handleUpdate(item.id, parseInt(e.target.value))}
          />
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default InventoryPage;
