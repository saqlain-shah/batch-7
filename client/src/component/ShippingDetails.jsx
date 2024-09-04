import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShippingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
  });

  const [error, setError] = useState(null);

  console.log("Product Details ",location.state)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      customerDetails,
      cartItems,
      totalPrice,
    };
    console.log(dataToSend)

    try {
      const response = await axios.post('http://localhost:8000/api/invoice/', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        navigate('/thankyou', { state: { cartItems, totalPrice, customerDetails } });
      } else {
        setError('Something went wrong. Please try again later.');
      }
   console.log("Shipping Component",customerDetails)
      navigate('/thankyou', { state: { cartItems, totalPrice, customerDetails } });

    } catch (error) {
      console.error('Error:', error);
      setError('Error processing the request. Please try again later.');
    }
  };

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'90vh'} marginTop={'6.5%'}>
      <Paper elevation={3} sx={{ padding: 4, width: '70%' }}>
        <Typography variant="h5" marginBottom={4}>
          Shipping Details
        </Typography>
        {error && (
          <Typography variant="body1" color="error" marginBottom={2}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Customer Details Form Fields */}
            <Grid item xs={12} sm={6} >
              <TextField
                fullWidth
                label="Customer Name"
                name="name"
                value={customerDetails.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={customerDetails.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={customerDetails.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                value={customerDetails.postalCode}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={customerDetails.address}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
              <Button type="submit" variant="contained" color="primary">
                Process Shipping
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ShippingDetails;
