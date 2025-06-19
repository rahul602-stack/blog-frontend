import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Home.css';
import { useAuth } from '../context/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div>
      <header className="header">
        <div className="hero-text">
          <h1>Welcome to Steakz Restaurant</h1>
          <p>Delicious Food. Fast Service. Happy Customers.</p>
          <div className="hero-buttons">
            <button className="btn" onClick={() => navigate('/menu')}>Order Now</button>
          </div>
        </div>
      </header>

      {user && (
        <section className="role-panels">
          <h2>Staff Panel</h2>
          <div className="role-buttons">
            {user.role === 'ADMIN' && (
              <button className="panel-btn" onClick={() => navigate('/admin')}>Admin Panel</button>
            )}
            {user.role === 'CHEF' && (
              <button className="panel-btn" onClick={() => navigate('/chef')}>Chef Panel</button>
            )}
            {user.role === 'CASHIER' && (
              <button className="panel-btn" onClick={() => navigate('/cashier')}>Cashier Panel</button>
            )}
            {user.role === 'KITCHEN' && (
              <button className="panel-btn" onClick={() => navigate('/kitchen')}>Kitchen Panel</button>
            )}
            {user.role === 'HQ_MANAGER' && (
              <button className="panel-btn" onClick={() => navigate('/hq')}>HQ Manager Panel</button>
            )}
            {user.role === 'DELIVERY' && (
              <button className="panel-btn" onClick={() => navigate('/delivery')}>Delivery Panel</button>
            )}
            {user.role === 'SUPPORT' && (
              <button className="panel-btn" onClick={() => navigate('/support')}>Support Panel</button>
            )}
          </div>
        </section>
      )}

      <section className="why-section">
        <h2>Why Steakz?</h2>
        <div className="why-cards">
          <div className="card">
            <img src="https://img.icons8.com/fluency/96/ingredients-list.png" alt="Fresh Ingredients"/>
            <h3>Fresh Ingredients</h3>
            <p>Only the finest, freshest ingredients go into every dish.</p>
          </div>
          <div className="card">
            <img src="https://img.icons8.com/fluency/96/delivery-scooter.png" alt="Fast Delivery"/>
            <h3>Fast Delivery</h3>
            <p>Lightning fast delivery service to your doorstep.</p>
          </div>
          <div className="card">
            <img src="https://img.icons8.com/fluency/96/track-order.png" alt="Live Cooking"/>
            <h3>Live Cooking</h3>
            <p>Enjoy live cooking from one of the best chefs in the world.</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>Do you offer delivery?</h3>
          <p>Yes! Fast delivery to your doorstep in all our branches.</p>
        </div>
        <div className="faq-item">
          <h3>Can I reserve a table?</h3>
          <p>Of course. Call your nearest branch or reserve online.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Steakz Restaurant. All rights reserved.</p>
        <p>Clerkenwell Close, London, EC1R 0AY, England</p>
      </footer>
    </div>
  );
};

export default LandingPage;
