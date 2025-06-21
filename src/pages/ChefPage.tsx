import React, { useEffect, useState } from 'react';
import { getMenuItems, createMenuItem, deleteMenuItem } from '../services/menuService';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const ChefPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await getMenuItems();
    setMenuItems(data);
  };

  const handleAddItem = async () => {
    if (!newItem.name.trim() || isNaN(Number(newItem.price))) {
      alert('Please enter valid item name and price.');
      return;
    }

    try {
      await createMenuItem({
        name: newItem.name.trim(),
        price: parseFloat(newItem.price),
      });
      setNewItem({ name: '', price: '' });
      fetchMenu();
    } catch (error) {
      alert('Failed to add menu item.');
    }
  };

  const handleDeleteItem = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      await deleteMenuItem(id);
      fetchMenu();
    } catch (error) {
      alert('Failed to delete item.');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>🍽️ Chef Panel - Menu Management</h1>

      <div style={{ marginBottom: '30px' }}>
        <input
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '300px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px'
          }}
        />
        <input
          placeholder="Price"
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '150px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px'
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ➕ Add Menu Item
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '12px 20px',
              marginBottom: '10px',
              border: '1px solid #eee',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <span>
              <strong>{item.name}</strong> - ₹{item.price.toFixed(2)}
            </span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChefPage;
