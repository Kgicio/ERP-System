// OrderDelete.js
import React from 'react';

const OrderDelete = ({ orderId, onDelete }) => {
  const handleDelete = () => {
    onDelete(orderId); // Pass orderId to delete
  };

  return (
    <div>
      <h2>Delete Order</h2>
      <p>Are you sure you want to delete order {orderId}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default OrderDelete;
