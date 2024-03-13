// ProductList.js
import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Name:</strong> {product.name}<br />
            <strong>Category:</strong> {product.category}<br />
            <strong>Price:</strong> {product.price}<br />
            <strong>Stock Quantity:</strong> {product.stockQuantity}<br />
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
