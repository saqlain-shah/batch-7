import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const OrderDetails = () => {
  // Updated dummy data with additional products
  const orderDetails = [
    { id: 1, productName: 'Product A', price: '$10', quantity: 2, customerId: '110' },
    { id: 2, productName: 'Product B', price: '$15', quantity: 1, customerId: '111' },
    { id: 3, productName: 'Product C', price: '$20', quantity: 3, customerId: '112' },
    { id: 4, productName: 'Product D', price: '$12', quantity: 2, customerId: '113' },
    { id: 5, productName: 'Product E', price: '$25', quantity: 1, customerId: '114' },
    { id: 6, productName: 'Product F', price: '$18', quantity: 4, customerId: '115' },
    // { id: 7, productName: 'Product G', price: '$22', quantity: 3, customerId: '116' },
    // { id: 8, productName: 'Product H', price: '$30', quantity: 2, customerId: '117' },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: "200%" }}>
      {/* Table for Order Details */}
      <TableContainer component={Paper} style={{ width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetails.map((row, index) => (
              <React.Fragment key={row.id}>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleToggle(index)}
                    >
                      {openIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.productName}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Additional Details
                        </Typography>
                        <Table size="small" aria-label="additional details">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product</TableCell>
                              <TableCell>Customer ID</TableCell>
                              <TableCell align="right">Quantity</TableCell>
                              <TableCell align="right">Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{row.productName}</TableCell>
                              <TableCell>{row.customerId}</TableCell>
                              <TableCell align="right">{row.quantity}</TableCell>
                              <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Summary, Shipping Address, and Payment Method */}
      <Box sx={{ width: '35%', marginLeft: '5%', display: 'flex', flexDirection: 'column' }}>
        {/* Summary */}
        <Box sx={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <Typography variant="subtitle1" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body2" gutterBottom>
            ID: 123456
          </Typography>
          <Typography variant="body2" gutterBottom>
            Date: 2024-05-13
          </Typography>
          <Typography variant="body2" gutterBottom>
            Total Price: $250
          </Typography>
        </Box>
        {/* Shipping Address */}
        <Box sx={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <Typography variant="subtitle1" gutterBottom>
            Shipping Address
          </Typography>
          <Typography variant="body2" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body2" gutterBottom>
            123 Main St, City
          </Typography>
          <Typography variant="body2" gutterBottom>
            Country: XYZ
          </Typography>
        </Box>
        {/* Payment Method */}
        <Box sx={{ border: '1px solid #ccc', padding: '10px' }}>
          <Typography variant="subtitle1" gutterBottom>
            Payment Method
          </Typography>
          <Typography variant="body2" gutterBottom>
            Card ending in 1234
          </Typography>
          <Typography variant="body2" gutterBottom>
            PayPal
          </Typography>
          <Typography variant="body2" gutterBottom>
            Stripe
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetails;
