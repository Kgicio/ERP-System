// ProductEdit.js
import React, { useState } from 'react';

const ProductEdit = ({ product, onSubmit }) => {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stockQuantity, setStockQuantity] = useState(product.stockQuantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...product, name, category, price, stockQuantity });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required /><br />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /><br />
        <label>Stock Quantity:</label>
        <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required /><br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProductEdit;
