// ProductDetails.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ProductDetails = ({ product, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{product.name} Details</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Description: {product.description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Price: {product.price}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Quantity: {product.quantity}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sale: {product.sale}
        </Typography>
        {/* Add other fields as needed */}
        <Typography variant="body2" color="textSecondary">
          Warranty: {product.warranty}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetails;
