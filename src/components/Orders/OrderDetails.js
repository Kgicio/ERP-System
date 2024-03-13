// OrderDetails.js
import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Customer Name: {order.customerName}</p>
      <p>Order Date: {order.orderDate}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderDetails;
