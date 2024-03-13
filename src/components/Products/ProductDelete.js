// ProductDelete.js
import React from 'react';

const ProductDelete = ({ productId, onDelete }) => {
  const handleDelete = () => {
    onDelete(productId);
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete product with ID {productId}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDelete;
