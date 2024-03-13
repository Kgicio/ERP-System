// OrderList.js
import React from 'react';

const OrderList = ({ orders, onViewDetails, onUpdateStatus, onDelete }) => {
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}<br />
            Customer Name: {order.customerName}<br />
            Order Date: {order.orderDate}<br />
            Status: {order.status}<br />
            <button onClick={() => onViewDetails(order)}>View Details</button>
         
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
