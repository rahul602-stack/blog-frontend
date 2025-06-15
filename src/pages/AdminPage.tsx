import React, { useEffect, useState } from 'react';
import { getMenuItems, createMenuItem, deleteMenuItem, MenuItem } from '../services/menuService';

const AdminPage: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await getMenuItems();
    setMenu(data);
  };

  const handleDelete = async (id: number) => {
    await deleteMenuItem(id);
    fetchMenu();
  };

  const handleAdd = async () => {
    if (!newItem.name || !newItem.price) return alert("Please enter both name and price");
    const price = parseFloat(newItem.price);
    if (isNaN(price)) return alert("Price must be a number");

    await createMenuItem({ name: newItem.name, price });
    setNewItem({ name: '', price: '' });
    fetchMenu();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🍳 Admin - Manage Menu</h1>

      <div style={styles.addContainer}>
        <input 
          type="text" 
          placeholder="Item Name" 
          value={newItem.name} 
          onChange={e => setNewItem({ ...newItem, name: e.target.value })} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="Price" 
          value={newItem.price} 
          onChange={e => setNewItem({ ...newItem, price: e.target.value })} 
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addButton}>Add Item</button>
      </div>

      <ul style={styles.menuList}>
        {menu.map((item) => (
          <li key={item.id} style={styles.menuItem}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => handleDelete(item.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  addContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '40%',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  deleteButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AdminPage;
