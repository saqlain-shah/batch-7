// src/ProductDetail.js

import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

// Dummy data for 20 products
const products = [
  { name: 'Product 1', id: 'P001', price: 20, sales: 100, stock: 50, image: 'https://via.placeholder.com/300' },
  { name: 'Product 2', id: 'P002', price: 30, sales: 80, stock: 20, image: 'https://via.placeholder.com/300' },
  { name: 'Product 3', id: 'P003', price: 25, sales: 120, stock: 40, image: 'https://via.placeholder.com/300' },
  { name: 'Product 4', id: 'P004', price: 35, sales: 90, stock: 10, image: 'https://via.placeholder.com/300' },
  { name: 'Product 5', id: 'P005', price: 15, sales: 110, stock: 60, image: 'https://via.placeholder.com/300' },
  { name: 'Product 6', id: 'P006', price: 40, sales: 150, stock: 5, image: 'https://via.placeholder.com/300' },
  { name: 'Product 7', id: 'P007', price: 50, sales: 70, stock: 15, image: 'https://via.placeholder.com/300' },
  { name: 'Product 8', id: 'P008', price: 22, sales: 95, stock: 25, image: 'https://via.placeholder.com/300' },
  { name: 'Product 9', id: 'P009', price: 28, sales: 130, stock: 35, image: 'https://via.placeholder.com/300' },
  { name: 'Product 10', id: 'P010', price: 45, sales: 140, stock: 8, image: 'https://via.placeholder.com/300' },
  { name: 'Product 11', id: 'P011', price: 55, sales: 60, stock: 12, image: 'https://via.placeholder.com/300' },
  { name: 'Product 12', id: 'P012', price: 18, sales: 105, stock: 28, image: 'https://via.placeholder.com/300' },
  { name: 'Product 13', id: 'P013', price: 32, sales: 115, stock: 40, image: 'https://via.placeholder.com/300' },
  { name: 'Product 14', id: 'P014', price: 38, sales: 125, stock: 18, image: 'https://via.placeholder.com/300' },
  { name: 'Product 15', id: 'P015', price: 48, sales: 75, stock: 20, image: 'https://via.placeholder.com/300' },
  { name: 'Product 16', id: 'P016', price: 52, sales: 85, stock: 30, image: 'https://via.placeholder.com/300' },
  { name: 'Product 17', id: 'P017', price: 60, sales: 95, stock: 40, image: 'https://via.placeholder.com/300' },
  { name: 'Product 18', id: 'P018', price: 65, sales: 105, stock: 50, image: 'https://via.placeholder.com/300' },
  { name: 'Product 19', id: 'P019', price: 70, sales: 115, stock: 60, image: 'https://via.placeholder.com/300' },
  { name: 'Product 20', id: 'P020', price: 75, sales: 125, stock: 70, image: 'https://via.placeholder.com/300' },
];

const ProductDetail = ({ productId }) => {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID:</strong> {product.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Sales:</strong> {product.sales}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Stock:</strong> {product.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
