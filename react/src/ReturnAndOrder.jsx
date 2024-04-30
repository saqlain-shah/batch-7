import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';

const ReturnsAndOrders = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Returns and Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ padding: 20 }}>
        <Grid item xs={12} sm={6}>
          {/* Content for Returns */}
          <Typography variant="h5" gutterBottom>
            Returns
          </Typography>
          <Typography variant="body1">
            Here you can manage your returns.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Content for Orders */}
          <Typography variant="h5" gutterBottom>
            Orders
          </Typography>
          <Typography variant="body1">
            Here you can view your orders and track their status.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReturnsAndOrders;
