// ProductsPage.js
import React, { useState } from 'react';
import ProductList from '../components/Products/ProductList';
import ProductForm from '../components/Products/ProductForm';
import ProductEdit from '../components/Products/ProductEdit';
import ProductDelete from '../components/Products/ProductDelete';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    // Mock data for products
    { id: 1, name: 'Product 1', category: 'Category A', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, stockQuantity: 50 },
    // Add more mock products as needed
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  const handleEditProduct = (editedProduct) => {
    setProducts(products.map(product =>
      product.id === editedProduct.id ? editedProduct : product
    ));
    setEditingProduct(null);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    setSelectedProduct(null);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Product Management</h1>
      {editingProduct ? (
        <ProductEdit product={editingProduct} onSubmit={handleEditProduct} />
      ) : (
        <div>
          <ProductList
            products={products}
            onEdit={handleEdit}
            onDelete={handleDeleteProduct}
          />
          <ProductForm onSubmit={handleAddProduct} />
        </div>
      )}
      {selectedProduct && (
        <ProductDelete
          productId={selectedProduct.id}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  );
};

export default ProductsPage;
