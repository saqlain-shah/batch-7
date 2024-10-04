import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const MyOrder = () => {
  const location = useLocation();
  const { cartItems, totalPrice, customerDetails } = location.state || {};

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="90vh">
      <Typography variant="h4" gutterBottom>
        Your Order Details
      </Typography>

      {/* Display Customer Details */}
      {customerDetails && (
        <Box marginBottom={4}>
          <Typography variant="h6">Customer Details:</Typography>
          <Typography>Name: {customerDetails.name}</Typography>
          <Typography>Email: {customerDetails.email}</Typography>
          <Typography>Phone: {customerDetails.phone}</Typography>
          <Typography>Address: {customerDetails.address}</Typography>
          <Typography>Postal Code: {customerDetails.postalCode}</Typography>
        </Box>
      )}

      {/* Display Cart Items */}
      <Typography variant="h6">Items Ordered:</Typography>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <Box key={index} display="flex" justifyContent="space-between" width="300px" marginY={1}>
            <Typography>{item.name}</Typography>
            <Typography>${item.price}</Typography>
          </Box>
        ))
      ) : (
        <Typography>No items in the order.</Typography>
      )}

      <Typography variant="h6">Total Price: ${totalPrice}</Typography>
    </Box>
  );
};

export default MyOrder;
