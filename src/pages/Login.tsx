import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './styles/Auth.css';

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

    // Save user to context
    authLogin({
      id: response.user.id,
      username: response.user.username,
      role: response.user.role,
      token: response.token,
    });

    
 if (response.user.role === 'ADMIN') {
  navigate('/admin');
} else if (response.user.role === 'CHEF') {
  navigate('/chef');
} else if (response.user.role === 'CASHIER') {
  navigate('/cashier');
} else if (response.user.role === 'BRANCH_MANAGER') {
  navigate('/manager');
} else if (response.user.role === 'HQ_MANAGER') {
  navigate('/hq');
} else if (response.user.role === 'SUPPORT') {
  navigate('/support');
} else if (response.user.role === 'DELIVERY') {
  navigate('/delivery'); //
} else {
  navigate('/');
}







  } catch (err) {
    setError('Login failed');
  }
};



  return (
    <div className="container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
