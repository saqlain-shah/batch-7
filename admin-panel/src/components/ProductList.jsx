import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dummy data for 20 products
  const products = [
    {
      name: 'Product 1',
      id: 'P001',
      price: 20,
      sales: 100,
      stock: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      id: 'P002',
      price: 30,
      sales: 80,
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
    //... Add more products here (up to 20)
    {
      name: 'Product 20',
      id: 'P020',
      price: 48,
      sales: 95,
      stock: 40,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>
      <Paper elevation={3}>
        <List>
          {products.map((product, index) => (
            <ListItem key={index}>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: 100,
                  height: 100,
                  marginRight: 2,
                  borderRadius: 1, // For slightly rounded corners, set to 0 for perfect square
                  cursor: 'pointer',
                }}
                onClick={() => handleClickOpen(product)} // Open dialog with product details on click
              />
              <ListItemText
                primary={product.name}
                secondary={`ID: ${product.id}, Price: $${product.price}, Sales: ${product.sales}, Stock: ${product.stock}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Product Detail Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <div>
              <Typography variant="h6">{selectedProduct.name}</Typography>
              <Typography>ID: {selectedProduct.id}</Typography>
              <Typography>Price: ${selectedProduct.price}</Typography>
              <Typography>Sales: {selectedProduct.sales}</Typography>
              <Typography>Stock: {selectedProduct.stock}</Typography>
              <Box
                component="img"
                src={selectedProduct.image}
                alt="Product"
                sx={{
                  marginTop: 2,
                  width: 150,
                  height: 150,
                  borderRadius: 1, // For slightly rounded corners, set to 0 for perfect square
                }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductList;
