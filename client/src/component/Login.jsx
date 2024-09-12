import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });

      // Assuming the API sends back a token upon successful login
console.log("Response Data ", response.data.Detail.username)
      // Store token and user info in localStorage (or use sessionStorage if preferred)
      localStorage.setItem('user', JSON.stringify(response.data.Detail.username));

      // Navigate to the home page after successful login
      navigate('/');

    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Box p={4} boxShadow={3} borderRadius={2} bgcolor="background.paper">
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          {errorMessage && (
            <Typography color="error" align="center">
              {errorMessage}
            </Typography>
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/register">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
