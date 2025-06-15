import React, { useEffect, useState } from 'react';
import { getMenuItems, MenuItem } from '../services/menuService';

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenuItems();
      setMenu(data);
    };
    fetchMenu();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ Our Delicious Menu</h1>
      <div style={styles.menuGrid}>
        {menu.map((item) => (
          <div key={item.id} style={styles.menuItem}>
            <h2 style={styles.itemName}>{item.name}</h2>
            <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '40px',
    color: '#333',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  menuItem: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    transition: 'transform 0.2s',
    textAlign: 'center',
  },
  itemName: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#222',
  },
  itemPrice: {
    fontSize: '20px',
    color: '#ff6600',
    fontWeight: 'bold',
  }
};

export default MenuPage;
