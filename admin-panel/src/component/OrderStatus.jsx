import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';

const OrderSummary = () => {
  // Define the columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'product',
        header: 'Product',
        size: 150,
      },
      {
        accessorKey: 'time',
        header: 'Time',
        size: 150,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        size: 150,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 300,
      },
    ],
    []
  );

  // Define the data for the table
  const data = useMemo(
    () => [
      { product: 'Product A', time: '5:40 am', date: 'May 13, 2024', description: 'Receiving Order' },
      { product: 'Product B', time: '12:30 pm', date: 'May 13, 2024', description: 'Order Processing' },
      { product: 'Product C', time: 'Processing', date: 'May 13, 2024', description: 'Being Delivered' },
      { product: 'Product D', time: 'Pending', date: 'May 13, 2024', description: 'Delivered' },
    ],
    []
  );

  // Material React Table hook
  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      <Box sx={{ border: '2px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',marginBottom:"20px" }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Typography variant="body1" gutterBottom>
          Product Name: Product A
        </Typography>
        {/* Replace 'src' with the actual path to the product image */}
        <img src="product_image_url" alt="Product Image" style={{ width: '100%', marginBottom: '10px' }} />
        <Typography variant="body2" gutterBottom>
          Order ID: 123456
        </Typography>
        <Typography variant="body2" gutterBottom>
          Order Place: City, Country
        </Typography>
        <Typography variant="body2" gutterBottom>
          Quantity: 2
        </Typography>
        <Typography variant="body2" gutterBottom>
          Price: $10
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button variant="contained" color="primary" sx={{ width: '40%' }}>
            View Shop
          </Button>
          <Button variant="contained" color="secondary" sx={{ width: '40%' }}>
            View Product
          </Button>
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>
        <Stepper alternativeLabel>
          <Step>
            <StepLabel>Receiving Order - 5:40 am</StepLabel>
          </Step>
          <Step>
            <StepLabel>Order Processing - 12:30 pm</StepLabel>
          </Step>
          <Step>
            <StepLabel>Being Delivered - Processing</StepLabel>
          </Step>
          <Step>
            <StepLabel>Delivered - Pending</StepLabel>
          </Step>
        </Stepper>
      </Box>
      <Box sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
        <MaterialReactTable table={table} />
      </Box>
    </Box>
  );
};

export default OrderSummary;
