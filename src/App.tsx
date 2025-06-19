import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './pages/CartContext';
import Navbar from './components/common/Navbar';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import SeedMenuPage from './pages/SeedMenuPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import CustomerPage from './pages/CustomerPage';
import ContactPage from './pages/ContactPage';


// Role based
import AdminPage from './pages/AdminPage';
import ChefPage from './pages/ChefPage';
import KitchenPage from './pages/KitchenPage';
import InventoryPage from './pages/InventoryPage';
import ReportingPage from './pages/ReportingPage';
import CashierPage from './pages/CashierPage';
import DeliveryPage from './pages/DeliveryPage';
import ManagerPage from './pages/ManagerPage';
import HQManagerPage from './pages/HQManagerPage';
import OpenAreaPage from './pages/OpenAreaPage';
import SupportPage from './pages/SupportPage';
import FeedbackPage from './pages/FeedbackPage';

import './index.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* Public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/seed-menu" element={<SeedMenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />


            {/* Customer */}
            <Route path="/customer" element={<CustomerPage />} />

            {/* Role Based */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/chef" element={<ChefPage />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/report" element={<ReportingPage />} />
            <Route path="/cashier" element={<CashierPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/hq" element={<HQManagerPage />} />
            <Route path="/openarea" element={<OpenAreaPage />} />
            <Route path="/support" element={<SupportPage />} />
            
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
