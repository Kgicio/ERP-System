// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'; // Adjust the import path as needed
import Dashboard from './components/Dashboard/Dashboard';

import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import DashboardPage from './pages/DashboardPage';
import OrderCalendarPage from './pages/OrderCalendarPage';
import './App.css';

const App = () => {
  // Mock data for orders
  const orders = [
    { id: 1, customerName: 'Customer A', expectedDeliveryDate: '2024-03-10' },
    { id: 2, customerName: 'Customer B', expectedDeliveryDate: '2024-03-10' },
    { id: 3, customerName: 'Customer C', expectedDeliveryDate: '2024-03-11' },
    // Add more orders as needed
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation /> {/* Include the Navigation component here */}
          <Routes>
           
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />

            {/* Add the Route for the OrderCalendar here */}
            <Route path="/order-calendar" element={<OrderCalendarPage orders={orders} />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
