import React from 'react';

const dummyData = [
  {
    name: 'Cheese Pizza',
    price: 12.99,
    stock: 20,
    sold: 15,
  },
  {
    name: 'French Fries',
    price: 4.49,
    stock: 50,
    sold: 40,
  },
  {
    name: 'Grilled Chicken',
    price: 14.99,
    stock: 12,
    sold: 8,
  },
  {
    name: 'Steak Sandwich',
    price: 16.99,
    stock: 10,
    sold: 6,
  },
  {
    name: 'Ice Cream',
    price: 3.99,
    stock: 25,
    sold: 22,
  },

];

const KitchenPage = () => {
  return (
    <div style={{ padding: '30px', backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>📊 Kitchen Inventory & Sales Report</h1>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={{ padding: '15px' }}>Item</th>
            <th style={{ padding: '15px' }}>Price</th>
            <th style={{ padding: '15px' }}>Stock Left</th>
            <th style={{ padding: '15px' }}>Sold</th>
            <th style={{ padding: '15px' }}>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => (
            <tr key={index} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.name}</td>
              <td style={{ padding: '12px', color: '#e67e22' }}>${item.price.toFixed(2)}</td>
              <td style={{ padding: '12px' }}>{item.stock}</td>
              <td style={{ padding: '12px' }}>{item.sold}</td>
              <td style={{ padding: '12px', color: '#2ecc71' }}>${(item.sold * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KitchenPage;
