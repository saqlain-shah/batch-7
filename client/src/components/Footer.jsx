// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: 2,
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} E-Commerce Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
