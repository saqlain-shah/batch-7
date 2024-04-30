import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid } from '@mui/material';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Payment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name on Card"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Payment;
