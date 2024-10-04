import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

  const BASE_URL = 'http://localhost:8000/'; 

  useEffect(() => {
    if (category) {
      axios.get(`${BASE_URL}api/product/`)
        .then(response => {
          const { products } = response.data;

          const processedProducts = products.map(product => {
            const imageUrlArray = Array.isArray(product.imageUrl)
              ? product.imageUrl.map(img => `${BASE_URL}${img.replace(/\\/g, '/')}`)
              : [];
            
            const imagesArray = Array.isArray(product.images)
              ? product.images.map(img => `${BASE_URL}${img.replace(/\\/g, '/')}`)
              : [];

            const combinedImages = [...imageUrlArray, ...imagesArray];

            return {
              ...product,
              images: combinedImages, 
            };
          });

          setProducts(processedProducts);
          setLoading(false);
          console.log('productProccessed :',processedProducts )
        })
        .catch(() => {
          setError('Failed to load products. Please try again later.');
          setLoading(false);
        });
    }
  }, [category]);

  if (!category) {
    return <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '120px' }}>No category selected.</Typography>;
  }

  if (loading) {
    return <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '120px' }}>Loading products...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '120px' }}>{error}</Typography>;
  }

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <Container sx={{  marginBottom:'5%'}}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '5%', }}>{category}</Typography>
      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Button
                onClick={() => {
                  const formData = {
                    id: item._id,
                    name: item.name,
                    images: item.images, // Use images for navigation
                    price: item.price,
                    category: item.category,
                    subCategory: item.subCategory,
                    color: item.color,
                    size: item.size,
                    stock: item.stock,
                    brand: item.brand,
                    description: item.description,
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
                    alignItems: 'center'
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
                    {/* Display the first available image */}
                    <img
                      src={Array.isArray(item.images) && item.images.length > 0 
                        ? item.images[0] 
                        : `${BASE_URL}default-image.png`} // Fallback image
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '200px',
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
  );
}

export default ProductList;
