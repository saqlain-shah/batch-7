import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const LandingPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <h1 >well come</h1>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/login"
        sx={{ mb: 2 }}
      >
        Sign in
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={RouterLink}
        to="/signup"
      >
        Register
      </Button>
      <Link to="/SignIn"  > Sign In </Link>
    </Box>
  );
};

export default LandingPage;
