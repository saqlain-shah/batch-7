import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { Box, Grid, Typography, Container } from '@mui/material';

const dummyImages = [
  'https://via.placeholder.com/300x200?text=Cloth+1',
  'https://via.placeholder.com/300x200?text=Cloth+2',
  'https://via.placeholder.com/300x200?text=Cloth+3'
];

const categoryImages = {
  men: [
    'https://via.placeholder.com/300x200?text=Men+Cloth+1',
    'https://via.placeholder.com/300x200?text=Men+Cloth+2',
    'https://via.placeholder.com/300x200?text=Men+Cloth+3'
  ],
  women: [
    'https://via.placeholder.com/300x200?text=Women+Cloth+1',
    'https://via.placeholder.com/300x200?text=Women+Cloth+2',
    'https://via.placeholder.com/300x200?text=Women+Cloth+3'
  ],
  children: [
    'https://via.placeholder.com/300x200?text=Child+Cloth+1',
    'https://via.placeholder.com/300x200?text=Child+Cloth+2',
    'https://via.placeholder.com/300x200?text=Child+Cloth+3'
  ]
};

const Carousel = ({ images, settings }) => (
  <Slider {...settings}>
    {images.map((src, index) => (
      <div key={index}>
        <img src={src} alt={`Slide ${index}`} style={{ width: '100%' }} />
      </div>
    ))}
  </Slider>
);

const CategorySlider = ({ category, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box my={4}>
      <Typography variant="h5" component="h2" gutterBottom>
        {category}
      </Typography>
      <Carousel images={images} settings={settings} />
    </Box>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    style={{ display: 'block', background: 'black', padding: '5px', cursor: 'pointer' }}
    onClick={onClick}
  >
    Next
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    style={{ display: 'block', background: 'black', padding: '5px', cursor: 'pointer' }}
    onClick={onClick}
  >
    Prev
  </div>
);

const App = () => {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Clothing Carousel
        </Typography>
        <Carousel images={dummyImages} settings={mainSliderSettings} />
      </Box>
      <CategorySlider category="Men" images={categoryImages.men} />
      <CategorySlider category="Women" images={categoryImages.women} />
      <CategorySlider category="Children" images={categoryImages.children} />
    </Container>
  );
};

export default App;
