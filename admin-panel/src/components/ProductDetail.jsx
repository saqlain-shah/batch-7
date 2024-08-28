// src/ProductDetails.js
import React from 'react';

// Sample product details
const sampleProduct = {
  name: 'Smartwatch Pro',
  id: 'SW004',
  quantity: 200,
  price: 299.99,
  description: 'A smartwatch with fitness tracking and advanced health monitoring features.',
  category: 'Wearables',
  manufacturer: 'HealthTech',
  dateAdded: '2024-05-10',
};

const ProductDetails = ({ product = sampleProduct, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <div style={styles.container}>
      <h2>Product Details</h2>
      <div style={styles.detail}>
        <strong>Name:</strong> {product.name}
      </div>
      <div style={styles.detail}>
        <strong>ID:</strong> {product.id}
      </div>
      <div style={styles.detail}>
        <strong>Quantity:</strong> {product.quantity}
      </div>
      <div style={styles.detail}>
        <strong>Price:</strong> ${product.price.toFixed(2)}
      </div>
      <div style={styles.detail}>
        <strong>Description:</strong> {product.description || 'No description available.'}
      </div>
      <div style={styles.detail}>
        <strong>Category:</strong> {product.category || 'No category specified.'}
      </div>
      <div style={styles.detail}>
        <strong>Manufacturer:</strong> {product.manufacturer || 'No manufacturer specified.'}
      </div>
      <div style={styles.detail}>
        <strong>Date Added:</strong> {product.dateAdded || 'No date available.'}
      </div>
      <button onClick={onClose} style={styles.button}>
        Close
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'left',
  },
  detail: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default ProductDetails;
