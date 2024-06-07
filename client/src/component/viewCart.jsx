import React from 'react';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const ViewCart = ({ cartItems }) => {
  // const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} marginTop={'20px'}>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><img src={item.image} alt="product" width="50" /></TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.color}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display={'flex'} justifyContent={'flex-end'} marginTop={'20px'}>
          <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'flex-end'} marginTop={'20px'}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Continue Shopping</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewCart;
