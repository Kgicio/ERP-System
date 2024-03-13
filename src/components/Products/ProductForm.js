// ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, price, stockQuantity });
    setName('');
    setCategory('');
    setPrice('');
    setStockQuantity('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required /><br />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /><br />
        <label>Stock Quantity:</label>
        <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
