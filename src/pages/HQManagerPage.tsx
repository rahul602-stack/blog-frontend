import React, { useEffect, useState } from 'react';
import { getHQSalesReport, HQSalesReport } from '../services/hqReportService';

const HQManagerPage: React.FC = () => {
  const [hqSales, setHQSales] = useState<HQSalesReport[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadHQData();
  }, []);

  const loadHQData = async () => {
    try {
      const salesData = await getHQSalesReport();
      setHQSales(salesData);
    } catch (err) {
      setError('Failed to load HQ sales');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>🏢 HQ Manager Dashboard</h1>

      <h2>Branch Sales Summary</h2>
      {hqSales.length === 0 ? (
        <p>No HQ sales data</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Total Orders</th>
              <th style={thStyle}>Total Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {hqSales.map((branchData, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>{branchData.branch}</td>
                <td style={tdStyle}>{branchData.totalOrders}</td>
                <td style={tdStyle}>{branchData.totalRevenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  borderCollapse: 'collapse',
  width: '60%',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const thStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
};

export default HQManagerPage;
