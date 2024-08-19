import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const OrderComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleOrders, setVisibleOrders] = useState(10); // Number of initially visible orders

  const orders = [
    { id: 1, product: 'Product A', productId: 'P001', price: 10, quantity: 5 },
{ id: 2, product: 'Product B', productId: 'P002', price: 15, quantity: 8 },
{ id: 3, product: 'Product C', productId: 'P003', price: 20, quantity: 10 },
{ id: 4, product: 'Product D', productId: 'P004', price: 25, quantity: 12 },
{ id: 5, product: 'Product E', productId: 'P005', price: 30, quantity: 15 },
{ id: 6, product: 'Product F', productId: 'P006', price: 35, quantity: 18 },
{ id: 7, product: 'Product G', productId: 'P007', price: 40, quantity: 20 },
{ id: 8, product: 'Product H', productId: 'P008', price: 45, quantity: 22 },
{ id: 9, product: 'Product I', productId: 'P009', price: 50, quantity: 25 },
{ id: 10, product: 'Product J', productId: 'P010', price: 55, quantity: 28 },
{ id: 11, product: 'Product K', productId: 'P011', price: 60, quantity: 30 },
{ id: 12, product: 'Product L', productId: 'P012', price: 65, quantity: 32 },
{ id: 13, product: 'Product M', productId: 'P013', price: 70, quantity: 35 },
{ id: 14, product: 'Product N', productId: 'P014', price: 75, quantity: 38 },
{ id: 15, product: 'Product O', productId: 'P015', price: 80, quantity: 40 },
{ id: 16, product: 'Product P', productId: 'P016', price: 85, quantity: 42 },
{ id: 17, product: 'Product Q', productId: 'P017', price: 90, quantity: 45 },
{ id: 18, product: 'Product R', productId: 'P018', price: 95, quantity: 48 },
{ id: 19, product: 'Product S', productId: 'P019', price: 100, quantity: 50 },
{ id: 20, product: 'Product T', productId: 'P020', price: 105, quantity: 52 },
// Add more orders...
    // Add more orders...
  ];

  const generateDummyImage = () => {
    // Use any dummy image URL here
    return 'https://via.placeholder.com/150';
  };

  const filteredOrders = orders.filter(order =>
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleOrders(prev => prev + 10); // Increase the number of visible orders by 10
  };

  const handleShowLess = () => {
    setVisibleOrders(prev => Math.max(prev - 10, 10)); // Decrease the number of visible orders by 10, but keep it at least 10
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="right" style={{ minHeight: '100vh' }}>
      <Grid item style={{ marginBottom: 30, width: '100%' }}>
        <Typography variant="h5" gutterBottom>Number of Orders </Typography>
        <TextField
          label="Search Product"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <TableContainer component={Paper} style={{ width: '230%' }}>

          <Table style={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '35%' }}>Product</TableCell>
                <TableCell style={{ width: '25%' }}>Product ID</TableCell>
                <TableCell style={{ width: '25%' }}>Price</TableCell>
                <TableCell style={{ width: '25%' }}>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.slice(0, visibleOrders).map(order => (
                <TableRow key={order.id}>
                  <TableCell style={{ width: '30%' }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <img src={generateDummyImage()} alt={order.product} style={{ width: 50, height: 50 }} />
                      </Grid>
                      <Grid item>{order.product}</Grid>
                    </Grid>
                  </TableCell>
                  <TableCell style={{ width: '25%' }}>{order.productId}</TableCell>
                  <TableCell style={{ width: '25%' }}>${order.price.toFixed(2)}</TableCell>
                  <TableCell style={{ width: '25%' }}>{order.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredOrders.length > visibleOrders ? (
            <Grid container justifyContent="center" style={{ margin: '20px 0' }}>
              <Button onClick={handleShowMore} variant="contained" color="primary" style={{ marginRight: 10 }}>Show More</Button>
              <Button onClick={handleShowLess} variant="contained" color="secondary">Show Less</Button>
            </Grid>
          ) : null}
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OrderComponent;


<div style={{ width: '100%', overflowX: 'auto' }}>
      <MaterialReactTable table={table} />
    </div>
