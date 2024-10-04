
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import img1 from '../../public/mens.png';
import img2 from '../../public/kids.png';
import img3 from '../../public/junaid.png';
import kidsImg from '../../public/shirt.png';
import mensImg from '../../public/mjacket.jpeg';
import womensImg from '../../public/wjacket.jpeg';
import CategoryCard from './CategoryCard';

const slider = [
  {image: img1},
  {image: img2},
  { image: img3}
];
const categories = [
  {
    title: 'Kids',
    image: kidsImg,
    description: 'Discover the latest trends in kids\' fashion with a special 5% discount on all items. Perfect for every occasion!',
  },
  {
    title: 'Women',
    image: womensImg,
    description: 'Elegant and stylish, our women\'s collection offers the perfect blend of comfort for any wardrobe.',
  },
  {
    title: 'Men',
    image: mensImg,
    description: 'From casual wear to formal attire, explore our men\'s collection designed for versatility and comfort.',
  }
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'ghostwhite', }}>
      <Box sx={{ width: '100%', height: '500px', position: 'relative' }}>
        <img
          src={slider[currentImageIndex].image}
          alt={slider[currentImageIndex].title}
          width="100%"
          height="500px"
          style={{ position: 'absolute', transition: 'opacity 0.7s' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '90%',
            height: '110%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            p: 2
          }}
        />
      </Box>

      <Container sx={{ flexGrow: 1, padding: '2rem 0' }}>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <CategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>

   
    </Box>
  );
};

export default LandingPage;

