import React, { useState, useEffect } from 'react';
import { getMenuItems, MenuItem } from '../services/menuService';

const CustomerPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenuItems();
      setMenu(data);
    };
    fetchMenu();
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Customer Order</h1>

      <div style={styles.menuGrid}>
        {menu.map((item) => (
          <div key={item.id} style={styles.menuItem}>
            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
            <button style={styles.addButton} onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={styles.cartContainer}>
        <h2>🧺 Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
        )}
        <button 
          onClick={placeOrder} 
          disabled={cart.length === 0}
          style={styles.placeOrderButton}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '40px',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  menuItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  itemName: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  itemPrice: {
    fontSize: '18px',
    color: '#ff6600',
    marginBottom: '15px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  cartContainer: {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  placeOrderButton: {
    marginTop: '20px',
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default CustomerPage;
