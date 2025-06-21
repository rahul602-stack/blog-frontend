import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      authLogin({
        id: response.user.id,
        username: response.user.username,
        role: response.user.role,
        token: response.token
      });

      // 🌐 Redirect logic
      if (response.user.role === 'ADMIN') navigate('/admin');
      else if (response.user.role === 'CHEF') navigate('/chef');
      else if (response.user.role === 'CASHIER') navigate('/cashier');
      else if (response.user.role === 'KITCHEN') navigate('/kitchen');
      else if (response.user.role === 'SUPPORT') navigate('/support');
      else if (response.user.role === 'DELIVERY') navigate('/delivery');
      else if (response.user.role === 'BRANCH_MANAGER') navigate('/manager');
      else if (response.user.role === 'HQ_MANAGER') navigate('/hq');
      else navigate('/');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 🍔</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
