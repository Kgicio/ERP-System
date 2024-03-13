// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total number of products: 10</p>
      <p>Total number of orders: 5</p>
      <Link to="/products"><p>Go to Products</p></Link>
      <Link to="/orders">Go to Orders</Link>
    </div>
  );
};

export default Dashboard;
