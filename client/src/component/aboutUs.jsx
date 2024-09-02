import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img1 from '../../public/aboutImg/img1.jpg';
import img2 from '../../public/aboutImg/img2.jpg';
import img3 from '../../public/aboutImg/img3.jpg';
import img4 from '../../public/aboutImg/img.jpg';


const images = [
  { src: img1, alt: 'Image 1', text: 'Welcome to Our Company' },
  { src: img2, alt: 'Image 2', text: 'We Provide Quality Services' },
  { src: img3, alt: 'Image 3', text: 'Your satisfaction is our top priority ' }
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <Box sx={{ marginTop: '8%' }}>
        {/* Full width container with image carousel */}
        <Box
          sx={{
            margin: 0,
            padding: 0,
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width="100%"
            height="400px"
            style={{ position: 'absolute', transition: 'opacity 0.5s' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              p: 2,
            }}
          >
            <Typography variant="h4">
              {images[currentImageIndex].text}
            </Typography>
          </Box>
        </Box>

        {/* Main content container */}
        <Container sx={{ my: 4 }}>
          <Grid container spacing={2}>
            {/* Right side text box */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2,
                  border: '1px solid #ddd',
                  borderRadius: 1,
                  height: '98%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body1">
                  <div style={{ width: '76%' }}>
                    <Typography variant="h6" component="h4">
                      Our Story
                    </Typography>
                    <Typography paragraph>
                      Welcome to Converse, where passion for fashion meets a commitment to quality and style. Founded in 2024, our journey began with a simple vision: to create a clothing brand that empowers individuals to express themselves confidently through their wardrobe choices. From our humble beginnings, known for our unique designs and exceptional craftsmanship.
                    </Typography>
                    <Typography variant="h6" component="h4">
                      Our Mission
                    </Typography>
                    <Typography paragraph>
                      At Converse, our mission is to provide our customers with a diverse range of high-quality clothing. We believe that fashion is a powerful form of self-expression, and our goal is to help you find pieces that resonate with your personal style, whether you're dressing for a casual day out or a special occasion.
                    </Typography>
                  </div>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                  margin: '10%',
                }}
              >
                <img src={img4} alt="About us" width="80%" height="90%" style={{ borderRadius: '100%' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
