import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = ({ isOpen }) => {
  // Dummy data for the charts
  const data = [
    { name: 'Jan', sales: 4000, income: 2400, visitors: 2400 },
    { name: 'Feb', sales: 3000, income: 1398, visitors: 2210 },
    { name: 'Mar', sales: 2000, income: 9800, visitors: 2290 },
    { name: 'Apr', sales: 2780, income: 3908, visitors: 2000 },
    { name: 'May', sales: 1890, income: 4800, visitors: 2181 },
    { name: 'Jun', sales: 2390, income: 3800, visitors: 2500 },
    { name: 'Jul', sales: 3490, income: 4300, visitors: 2100 },
  ];

  return (
    <div style={{ marginLeft: isOpen ? '300px' : '0', transition: 'margin-left 0.3s' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#f44336', color: '#fff' }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$123,456</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#2196f3', color: '#fff' }}>
            <Typography variant="h6">Total Income</Typography>
            <Typography variant="h4">$78,910</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#4caf50', color: '#fff' }}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">1,234</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#ff9800', color: '#fff' }}>
            <Typography variant="h6">Total Visitors</Typography>
            <Typography variant="h4">3,456</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales, Income, and Visitors
            </Typography>
            <LineChart width={600} height={300} data={data}>
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="income" stroke="#82ca9d" />
              <Line type="monotone" dataKey="visitors" stroke="#ffc658" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
