import React from 'react';
import { Box, Grid, Typography, Container, AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import WOMEN_IMG_1 from '../../public/wshirt.jpeg';
import WOMEN_IMG_2 from '../../public/wpent.jpeg';
import WOMEN_IMG_3 from '../../public/wjacket.jpeg';
import WOMEN_IMG_4 from '../../public/wshorts.jpeg';
import MEN_IMG_1 from '../../public/mshirt.jpeg';
import MEN_IMG_2 from '../../public/mpent.jpeg';
import MEN_IMG_3 from '../../public/mjacket.jpeg';
import MEN_IMG_4 from '../../public/mshorts.jpeg';
import KIDS_IMG_1 from '../../public/shorts.jpeg';
import KIDS_IMG_2 from '../../public/shirt.png';
import KIDS_IMG_3 from '../../public/jacket.jpeg';
import KIDS_IMG_4 from '../../public/skirt.webp';

const products = [
  { id: 1, name: 'Women Shirt', imageUrl: WOMEN_IMG_1, price: '$50.00', category: 'Women Collection' },
  { id: 2, name: 'Women Pent', imageUrl: WOMEN_IMG_2, price: '$55.00', category: 'Women Collection' },
  { id: 3, name: 'Women Jacket', imageUrl: WOMEN_IMG_3, price: '$60.00', category: 'Women Collection' },
  { id: 4, name: 'Women Shorts', imageUrl: WOMEN_IMG_4, price: '$40.00', category: 'Women Collection' },
  { id: 5, name: 'Men Shirt', imageUrl: MEN_IMG_1, price: '$45.00', category: 'Men Collection' },
  { id: 6, name: 'Men Pent', imageUrl: MEN_IMG_2, price: '$50.00', category: 'Men Collection' },
  { id: 6, name: 'Men jacket', imageUrl: MEN_IMG_3, price: '$50.00', category: 'Men Collection' },
  { id: 6, name: 'Men short', imageUrl: MEN_IMG_4, price: '$50.00', category: 'Men Collection' },
  { id: 7, name: 'Kids Shorts', imageUrl: KIDS_IMG_1, price: '$40.00', category: 'Kids Collection' },
  { id: 8, name: 'Kids Shirt', imageUrl: KIDS_IMG_2, price: '$45.00', category: 'Kids Collection' },
  { id: 9, name: 'Kids Jacket', imageUrl: KIDS_IMG_3, price: '$50.00', category: 'Kids Collection' },
  { id: 9, name: 'Kids Skirt', imageUrl: KIDS_IMG_4, price: '$50.00', category: 'Kids Collection' },
];

function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

  if (!category) {
    return <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '120px' }}>No category selected.</Typography>;
  }

  // Filtering products by the selected category
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <>

      <Container sx={{ marginTop: '120px' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '5%' }}>{category}</Typography>
        <Grid container spacing={4}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Button
                  onClick={() => {
                    const formData = {
                      name: item.name,
                      imageUrl: item.imageUrl,  // Ensure this is the correct URL
                      price: item.price,
                      category: item.category
                    };
                    navigate('/productDetail', { state: { formData } });
                  }}
                  sx={{ textDecoration: 'none', color: 'inherit' }}
                >

<Box
  sx={{
    textAlign: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    height: '300px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center'
  }}
>
  <Box
    sx={{
      width: '80%',
      height: 'auto',
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
    }}
  >
    <img
      src={item.imageUrl}
      alt={item.name}
      style={{
        width: '120%',
        height: '200px',
        maxHeight: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
  </Box>
  <Box sx={{ height: '50px', width: '100%' }}>
    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
      {item.name}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {item.price}
    </Typography>
  </Box>
</Box>

                </Button>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>No products available in this category.</Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default ProductList;
