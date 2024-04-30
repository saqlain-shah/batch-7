import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" paragraph>
        Welcome to our website! We are dedicated to providing high-quality products and services to our customers.
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is committed to excellence and customer satisfaction. We strive to deliver the best experience possible for our users.
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to explore our website and learn more about what we have to offer.
      </Typography>
    </Container>
  );
}

export default About;
