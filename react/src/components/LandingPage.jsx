import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import footerImg from './footer.png';
import kidsImg from './kids.png';
import junaidImg from './junaid.png'; 
import sirajImg from './siraj.png';
import womensImg from './womens.png';
import mensImg from './mens.png';

const images = [
  { src: kidsImg, alt: 'Image 1', text: 'Welcome to Our Company' },
  { src: junaidImg, alt: 'Image 2', text: 'We Provide Quality Services' },
  { src: mensImg, alt: 'Image 3', text: 'Your satisfaction is our top priority ' }
];

const categories = [
  {
    id: 1,
    title: 'Kids',
    items: [
      { id: 1, name: 'Kids Item 1', imageUrl: kidsImg, price: '$20.00' },
      { id: 2, name: 'junaid Item 2', imageUrl: junaidImg, price: '$25.00' },
      { id: 3, name: 'siraj Item 3', imageUrl: sirajImg, price: '$30.00' },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Womens',
  //   items: [
  //     { id: 1, name: 'Womens Item 1', imageUrl: womensImg, price: '$50.00' },
  //     { id: 2, name: 'Womens Item 2', imageUrl: womensImg, price: '$55.00' },
  //     { id: 3, name: 'Womens Item 3', imageUrl: womensImg, price: '$60.00' },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: 'Mens',
  //   items: [
  //     { id: 1, name: 'Mens Item 1', imageUrl: mensImg, price: '$40.00' },
  //     { id: 2, name: 'Mens Item 2', imageUrl: mensImg, price: '$45.00' },
  //     { id: 3, name: 'Mens Item 3', imageUrl: mensImg, price: '$50.00' },
  //   ],
  // },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '1rem 0',
        borderTop: '1px solid #ddd',
        mt: 4,
      }}
    >
      <img src={footerImg} alt="Footer" style={{ maxWidth: '100%' }} />
    </Box>
  );
};

const dummyImages = {
  men: [
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
    mensImg,
  ],
  women: [
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
    womensImg,
  ],
  children: [
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
    kidsImg,
  ],
};

const ScrollableBox = ({ title, images }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
          padding: 2,
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`${title} ${index + 1}`}
            sx={{
              width: 150,
              height: 150,
              objectFit: 'cover',
              marginRight: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Carousel = () => {
  return (
    <div>
      <ScrollableBox title="Men" images={dummyImages.men} />
      <ScrollableBox title="Women" images={dummyImages.women} />
      <ScrollableBox title="Children" images={dummyImages.children} />
    </div>
  );
};

function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Full width container with image carousel */}
      <Box
        sx={{
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
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            p: 2,
          }}
        >
          <Typography variant="h4">
            {images[currentImageIndex].text}
          </Typography>
        </Box>
      </Box>

      {/* Category section */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {categories.map((category) => (
            <Grid item xs={12} key={category.id} style={{ width: '100%', textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                {category.title}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {category.items.map((item) => (
                  <Grid item xs={12} sm={9} md={9} lg={4} key={item.id}>
                    <Box sx={{ textAlign: 'center' }} onClick={() => handleCategoryClick(`/${category.title.toLowerCase()}`)}>
                      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">{item.price}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Carousel Section */}
      <Carousel />

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;
