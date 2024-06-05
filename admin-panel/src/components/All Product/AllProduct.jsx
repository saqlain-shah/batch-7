import React from 'react';
import ProductTable from './productTable';
import productData from './productData';

const AllProducts = () => {
  const handleDelete = (id) => {
    // Function to delete product by id
  };

  return (
    <div>
      <h1>All Products</h1>
      <ProductTable products={productData} onDelete={handleDelete} />
    </div>
  );
};

export default AllProducts;
