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
                
                <Link to="/contact">Contact Us</Link>
                <li><Link to="/feedback">Feedback</Link></li>


            </>
          )}
          {user && (
            <>
            {/* Admin Panel for role-based or specific user */}
      {user.role === 'ADMIN' || user.username === 'rahul123' ? (
        <li><Link to="/admin">Admin Panel</Link></li>
      ) : null}

             {user.role === 'CHEF' && (
  <>
    <span style={{ marginRight: '10px' }}><strong>👨‍🍳 Chef</strong></span>
    <Link to="/chef">Chef Panel</Link>
  </>
)}


{user?.username === "kitchen123" && (
  <Link to="/kitchen">Kitchen</Link>
)}


{user?.role === 'CASHIER' && (
  <>
    <span>💰 Cashier</span>
    <Link to="/cashier">Cashier Panel</Link>
  </>
)}

{user.role === 'MANAGER' && <Link to="/manager">Manager Panel</Link>}

{user.role === 'HQ_MANAGER' && <Link to="/hq">HQ Manager Panel</Link>}

{user.role === 'SUPPORT' && <Link to="/support">Support Panel</Link>}

{user.role === 'DELIVERY' && <Link to="/delivery">Delivery Panel</Link>}




              
              {user.role === 'INVENTORY' && <Link to="/inventory">Inventory</Link>}
              
              {user.role === 'CUSTOMER' && <Link to="/customer">Order Food</Link>}
             
              {user.role === 'MANAGER' && <Link to="/manager">Manager</Link>}
             
              
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
