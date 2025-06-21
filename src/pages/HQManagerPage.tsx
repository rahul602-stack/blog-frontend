import React from 'react';

const salesData = [
  { branch: 'Branch A', date: '2024-06-15', orders: 12, revenue: 620.50 },
  { branch: 'Branch A', date: '2024-06-16', orders: 9, revenue: 480.00 },
  { branch: 'Branch B', date: '2024-06-15', orders: 10, revenue: 530.25 },
  { branch: 'Branch B', date: '2024-06-16', orders: 7, revenue: 390.75 },
  { branch: 'Branch C', date: '2024-06-15', orders: 6, revenue: 270.00 },
  { branch: 'Branch C', date: '2024-06-16', orders: 8, revenue: 355.10 }
];

const getTotal = (key: 'orders' | 'revenue') =>
  salesData.reduce((sum, row) => sum + row[key], 0).toFixed(2);

const HqManagerPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏢 HQ Manager Dashboard</h1>
      <h2 style={styles.subtitle}>📊 Branch Sales Summary</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Branch</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Total Orders</th>
            <th style={styles.th}>Revenue ($)</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((row, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              <td style={styles.td}>{row.branch}</td>
              <td style={styles.td}>{row.date}</td>
              <td style={styles.td}>{row.orders}</td>
              <td style={styles.td}>${row.revenue.toFixed(2)}</td>
            </tr>
          ))}
          <tr style={styles.totalRow}>
            <td style={styles.tdBold}>Total</td>
            <td></td>
            <td style={styles.tdBold}>{getTotal('orders')}</td>
            <td style={styles.tdBold}>${getTotal('revenue')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh'
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: '22px',
    marginBottom: '25px',
    color: '#34495e'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  th: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '14px',
    textAlign: 'left',
    fontSize: '15px'
  },
  td: {
    padding: '12px 14px',
    borderBottom: '1px solid #eee',
    fontSize: '14px'
  },
  tdBold: {
    fontWeight: 'bold',
    padding: '12px 14px',
    fontSize: '15px'
  },
  rowEven: {
    backgroundColor: '#fafafa'
  },
  rowOdd: {
    backgroundColor: '#fff'
  },
  totalRow: {
    backgroundColor: '#ecf0f1'
  }
};

export default HqManagerPage;
