// pages/DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
// Import the CSS file

const DashboardPage = () => {
  // Mock data for demonstration purposes
  const totalProducts = 50;
  const totalOrders = 25;

  return (
    <div className="dashboard-page-container">
      <h1>Dashboard Page</h1>
      <Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />
    </div>
  );
};

export default DashboardPage;
