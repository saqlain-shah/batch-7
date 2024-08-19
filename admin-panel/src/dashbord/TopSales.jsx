import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Divider } from '@mui/material';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product 1', id: 'P001', price: 20, sales: 100 },
  { name: 'Product 2', id: 'P002', price: 30, sales: 80 },
  { name: 'Product 3', id: 'P003', price: 25, sales: 120 },
  { name: 'Product 4', id: 'P004', price: 35, sales: 90 },
];

// Function to get top selling products
const getTopSellingProducts = (data, count) => {
  return data
    .slice()
    .sort((a, b) => b.sales - a.sales)
    .slice(0, count);
};

export default function TopSellingProducts({ count }) {
  const topSellingProducts = getTopSellingProducts(data, count);

  // Prepare data for pie chart
  const pieChartData = topSellingProducts.map(product => ({ name: product.name, value: product.sales }));

  return (
    <Grid container spacing={2}>
      {/* Table of top selling products */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Selling Products
            </Typography>
            <Divider />
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Sales</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topSellingProducts.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>${row.price}</TableCell>
                      <TableCell>{row.sales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      
      {/* Bar chart of top selling products */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Selling Products Bar Chart
            </Typography>
            <Divider />
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={topSellingProducts}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Pie chart of sales distribution */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Distribution Pie Chart
            </Typography>
            <Divider />
            <Box height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}