import React, { useState } from 'react';

const initialUsers = [
  { id: 1, username: 'rahul123', role: 'ADMIN', branch: 'HQ' },
  { id: 2, username: 'cashier123', role: 'CASHIER', branch: 'Branch A' },
  { id: 3, username: 'manager123', role: 'BRANCH_MANAGER', branch: 'Branch A' },
  { id: 4, username: 'hqmanager123', role: 'HQ_MANAGER', branch: 'All' },
  { id: 5, username: 'support123', role: 'SUPPORT', branch: 'HQ' },
  { id: 6, username: 'delivery123', role: 'DELIVERY', branch: 'Logistics' },
  { id: 7, username: 'chef123', role: 'CHEF', branch: 'Branch A' },
  { id: 8, username: 'kitchen123', role: 'WRITER', branch: 'Kitchen' },
  { id: 9, username: 'chefb123', role: 'CHEF', branch: 'Branch B' },
  { id: 10, username: 'chefc123', role: 'CHEF', branch: 'Branch C' },
  { id: 11, username: 'cashierb123', role: 'CASHIER', branch: 'Branch B' },
  { id: 12, username: 'cashierc123', role: 'CASHIER', branch: 'Branch C' }
];


const roles = [
  'ADMIN', 'CHEF', 'CASHIER', 'CUSTOMER',
  'SUPPORT', 'DELIVERY', 'HQ_MANAGER', 'BRANCH_MANAGER', 'WRITER'
];

const branches = ['Branch A', 'Branch B', 'Branch C', 'HQ', 'Kitchen', 'Logistics'];

const AdminPage = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, role: newRole } : u)));
  };

  const handleBranchChange = (id: number, newBranch: string) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, branch: newBranch } : u)));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👑 Admin Panel</h1>
      <p style={styles.subheading}>Manage user roles and assign branches (only non-admin roles can switch branches)</p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>👤 Username</th>
            <th style={styles.th}>🔖 Role</th>
            <th style={styles.th}>🏢 Branch</th>
            <th style={styles.th}>🛠️ Change Role</th>
            <th style={styles.th}>📍 Assign Branch</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={styles.tr}>
              <td style={styles.td}>{user.username}</td>
              <td style={{ ...styles.td, color: getRoleColor(user.role) }}>{user.role}</td>
              <td style={styles.td}>{user.branch}</td>
              <td style={styles.td}>
                <select
                  value={user.role}
                  onChange={e => handleRoleChange(user.id, e.target.value)}
                  style={styles.select}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </td>
              <td style={styles.td}>
                {user.role !== 'ADMIN' && user.role !== 'HQ_MANAGER' ? (
                  <select
                    value={user.branch}
                    onChange={e => handleBranchChange(user.id, e.target.value)}
                    style={styles.select}
                  >
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                ) : (
                  <span style={{ color: '#999' }}>Not Allowed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Role color highlighting
const getRoleColor = (role: string): string => {
  switch (role) {
    case 'ADMIN': return '#d9534f';
    case 'CHEF': return '#f0ad4e';
    case 'CASHIER': return '#0275d8';
    case 'SUPPORT': return '#5bc0de';
    case 'DELIVERY': return '#5cb85c';
    case 'WRITER': return '#9370DB';
    default: return '#333';
  }
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f9f9f9',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px'
  },
  subheading: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#666'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    background: '#fff'
  },
  th: {
    background: '#007BFF',
    color: '#fff',
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '14px'
  },
  td: {
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
    fontSize: '14px'
  },
  tr: {
    transition: 'background 0.2s',
  },
  select: {
    padding: '6px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px'
  }
};

export default AdminPage;
