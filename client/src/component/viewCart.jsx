import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './cartContext';

const ViewCart = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);

  const handleProceedToShipping = () => {
    navigate('/shipping', { state: { cartItems, totalPrice } });
  };

  return (
    <>
      <Box width={'100%'} display={'flex'} justifyContent={'center'} marginTop={'12%'}>
        <Box width={'85%'}>
          <Typography variant="h4" marginBottom={'20px'}>Shopping Cart</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell> {/* New Delete column */}
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell><img src={item.image} alt="product" width="50" /></TableCell>
                    <TableCell>{item.brand || 'Adidas'}</TableCell>
                    <TableCell>{item.color}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>${(parseFloat(item.price) || 0).toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary" onClick={() => removeFromCart(index)}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display={'flex'} justifyContent={'flex-end'} marginTop={'20px'}>
            <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} marginTop={'20px'}>
            <Button variant="contained" color="primary" onClick={handleProceedToShipping}>
              Proceed to Shipping
            </Button>
            <Button variant="contained" color="secondary" onClick={clearCart} sx={{ marginLeft: '10px' }}>
              Clear Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewCart;
