import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ThankYouMessage = () => {
  const location = useLocation();
  const { cartItems, customerDetails } = location.state || { cartItems: [], customerDetails: {} };
console.log("Thank You Component ",location.state  )
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={3} display="flex" justifyContent="center">
              <CheckCircleIcon sx={{ fontSize: '4rem', color: 'green' }} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' } }}>
                Thank You for Your Purchase, {customerDetails.name}!
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ textAlign: { xs: 'center', sm: 'left' }, marginTop: 2 }}>
                Your order has been placed successfully. Here are the details:
              </Typography>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <Typography variant="body2">
                      {item.name} - {item.size} - ${item.price}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="body2" color="textSecondary" sx={{ textAlign: { xs: 'center', sm: 'left' }, marginTop: 1 }}>
                Happy Shopping! 🛒
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ThankYouMessage;
