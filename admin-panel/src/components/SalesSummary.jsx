import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const SalesSummary = () => {
  // Dummy sales data
  const salesData = {
    totalSales: 10000,
    totalOrders: 500
    // Add more dummy data as needed
  };

  return (
    <Card className="sales-summary">
      <CardContent>
        <Typography variant="h5" component="h2">
          Sales Summary
        </Typography>
        <Box className="summary">
          <Box className="item">
            <Typography variant="body1" component="span">
              Total Sales
            </Typography>
            <Typography variant="body1" component="span">
              {salesData.totalSales}
            </Typography>
          </Box>
          <Box className="item">
            <Typography variant="body1" component="span">
              Total Orders
            </Typography>
            <Typography variant="body1" component="span">
              {salesData.totalOrders}
            </Typography>
          </Box>
          {/* Add more summary items as needed */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesSummary;
