import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    phone: '',
    dateOfBirth: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', formData)
      if (response.data.status=true) {

        console.log("Successful", response.data)
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Box p={4} boxShadow={3} borderRadius={2} bgcolor="background.paper">
          <Typography variant="h5" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Street"
            name="street"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address.street}
            onChange={handleAddressChange}
          />
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address.city}
            onChange={handleAddressChange}
          />
          <TextField
            label="State"
            name="state"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address.state}
            onChange={handleAddressChange}
          />
          <TextField
            label="Postal Code"
            name="postalCode"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address.postalCode}
            onChange={handleAddressChange}
          />
          <TextField
            label="Country"
            name="country"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.address.country}
            onChange={handleAddressChange}
          />
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
