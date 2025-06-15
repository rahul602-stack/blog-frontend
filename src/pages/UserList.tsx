import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/api';
import { User, UsersResponse } from '../types';
import { useAuth } from '../context/AuthContext';
import './styles/UserList.css';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response: UsersResponse = await getAllUsers();
        setUsers(response.users);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>User List</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.username} ({u.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
