import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password })
      .then((response)=>{
        console.log(response.data)
        navigate('/');

      })
  
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Box p={4} boxShadow={3} borderRadius={2} bgcolor="background.paper">
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
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
