import React from 'react';
import { createMenuItem } from '../services/menuService';

const SeedMenuPage = () => {
  const handleSeed = async () => {
    const items = [
      { name: 'Classic Burger', price: 9.99 },
      { name: 'Cheese Pizza', price: 12.99 },
      { name: 'French Fries', price: 4.49 },
      { name: 'Grilled Chicken', price: 14.99 },
      { name: 'Veggie Wrap', price: 8.49 },
      { name: 'Steak Sandwich', price: 16.99 },
      { name: 'Fish & Chips', price: 13.49 },
      { name: 'Caesar Salad', price: 7.99 },
      { name: 'Soda', price: 1.99 },
      { name: 'Ice Cream', price: 3.99 },
    ];

    for (const item of items) {
      await createMenuItem(item);
    }
    alert('Menu seeded!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Seed Menu</h1>
      <button onClick={handleSeed}>Seed Menu Items</button>
    </div>
  );
};

export default SeedMenuPage;
