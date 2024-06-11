// src/pages/Home.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import FeaturedProducts from './components/Products';
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Banner />
      <Container>
        <Categories />
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
          Featured Products
        </Typography>
        <FeaturedProducts />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
