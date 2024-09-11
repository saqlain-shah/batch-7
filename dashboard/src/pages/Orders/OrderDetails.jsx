/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,

  
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import { Edit } from '@mui/icons-material';



const OrderDetailsModal = ({ open, handleClose, orderDetails }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        width: '95%', 
        height: '95%',  
         maxWidth: 800, 
         margin: 'auto', 
         mt: 5, p: 2 }}>
        <Card>
          <CardHeader title="Order Details" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Order No: {orderDetails.orderNo}</Typography>
                <Typography>Status: {orderDetails.status}</Typography>
                <Typography>Order Created at: {orderDetails.orderCreatedAt}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>Name: {orderDetails.name}</Typography>
                <Typography>Email: {orderDetails.email}</Typography>
                <Typography>Contact No: {orderDetails.contactNo}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardHeader
                    title="Delivery Address"
                
                  />
                  <CardContent>
                    <Typography>Name: {orderDetails.deliveryAddress.name}</Typography>
                    <Typography>{orderDetails.deliveryAddress.address}</Typography>
                    <Typography>{orderDetails.deliveryAddress.phone}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardHeader
                    title="Billing Address"
                   
                  />
                  <CardContent>
                    <Typography>Name: {orderDetails.billingAddress.name}</Typography>
                    <Typography>{orderDetails.billingAddress.address}</Typography>
                    <Typography>{orderDetails.billingAddress.phone}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.orderItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography>Sub Total: {orderDetails.priceDetails.subTotal}</Typography>
                <Typography>Shipping: {orderDetails.priceDetails.shipping}</Typography>
                <Typography>Tax (18%): {orderDetails.priceDetails.tax}</Typography>
                <Typography>Total: {orderDetails.priceDetails.total}</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Card variant="outlined">
                  <CardHeader title="Invoice" />
                  <CardContent>
                    <Typography>Invoice No: {orderDetails.invoice.invoiceNo}</Typography>
                    <Typography>Seller GST: {orderDetails.invoice.sellerGST}</Typography>
                    <Typography>Purchase GST: {orderDetails.invoice.purchaseGST}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default OrderDetailsModal;
