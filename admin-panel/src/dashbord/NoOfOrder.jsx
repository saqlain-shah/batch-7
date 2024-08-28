import React from 'react';
import {
  Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Divider,
} from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Sample data representing orders
const data = [
  { orderId: 'O001', product: 'Product 1', quantity: 50, price: 20, date: '2024-08-01' },
  { orderId: 'O002', product: 'Product 2', quantity: 30, price: 30, date: '2024-08-02' },
  { orderId: 'O003', product: 'Product 3', quantity: 70, price: 25, date: '2024-08-03' },
  { orderId: 'O004', product: 'Product 4', quantity: 40, price: 35, date: '2024-08-04' },
];

// Function to calculate the total number of orders
const getTotalOrders = (data) => {
  return data.reduce((acc, order) => acc + order.quantity, 0);
};

export default function OrderDetails() {
  const totalOrders = getTotalOrders(data);

  return (
    <Grid container spacing={2} sx={{ backgroundColor: '#78aaf0', padding: 5 , height:"150%"}}>
      {/* Table of order details */}
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Order Details
            </Typography>
            <Divider />
            <TableContainer>
              <Table aria-label="order table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.orderId}>
                      <TableCell>{row.orderId}</TableCell>
                      <TableCell>{row.product}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>${row.price}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Bar chart of order quantities */}
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Order Quantities Bar Chart
            </Typography>
            <Divider />
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="product" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="quantity" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
