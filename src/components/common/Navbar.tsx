import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './styles/Navbar.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Steakz Restaurant</Link>
        <div className="nav-links">
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
                <Link to="/menu">Menu</Link>
                <li><Link to="/customer">Order Now</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                
                 {/* Role-based links */}
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/chef">Chef</Link></li>
        <li><Link to="/cashier">Cashier</Link></li>
        <li><Link to="/kitchen">Kitchen</Link></li>
        <li><Link to="/manager">Manager</Link></li>
        <li><Link to="/hq">HQ Manager</Link></li>
        <li><Link to="/delivery">Delivery</Link></li>
        <li><Link to="/support">Support</Link></li>
            </>
          )}
          {user && (
            <>
              {user.role === 'ADMIN' && <Link to="/admin/users">Admin Panel</Link>}
              {user.role === 'CHEF' && <Link to="/chef">Chef Panel</Link>}
              {user.role === 'KITCHEN' && <Link to="/kitchen">Kitchen</Link>}
              {user.role === 'INVENTORY' && <Link to="/inventory">Inventory</Link>}
              {user.role === 'CASHIER' && <Link to="/cashier">Cashier</Link>}
              {user.role === 'CUSTOMER' && <Link to="/customer">Order Food</Link>}
              {user.role === 'DELIVERY' && <Link to="/delivery">Delivery</Link>}
              {user.role === 'MANAGER' && <Link to="/manager">Manager</Link>}
              {user.role === 'HQMANAGER' && <Link to="/hq">HQ Manager</Link>}
              {user.role === 'SUPPORT' && <Link to="/support">Support</Link>}
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
