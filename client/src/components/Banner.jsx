// src/components/Banner.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '400px',
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography color='black' variant="h3" component="h1" gutterBottom>
        Welcome to Our Store
      </Typography>
      <Typography  color='black' variant="h6" component="h2" gutterBottom>
        Discover the best products at unbeatable prices
      </Typography>
      <Button variant="contained" color="primary">
        Shop Now
      </Button>
    </Box>
  );
};

export default Banner;
