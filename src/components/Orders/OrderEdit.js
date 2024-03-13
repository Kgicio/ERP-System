// OrderEdit.js
import React, { useState } from 'react';

const OrderEdit = ({ order, onUpdateStatus }) => {
  const [status, setStatus] = useState(order.status);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateStatus(order.id, status); // Pass order id along with new status
  };

  return (
    <div>
      <h2>Update Order Status</h2>
      <label htmlFor="status">Status:</label>
      <input type="text" id="status" value={status} onChange={handleChange} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default OrderEdit;
