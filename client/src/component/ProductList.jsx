import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

  const BASE_URL = 'http://localhost:8000/'; // Base URL for your images

  useEffect(() => {
    if (category) {
      axios.get("http://localhost:8000/api/product/")
        .then(response => {
          const { products, pagination } = response.data;
          // Process the image URLs
          const processedProducts = products.map(product => ({
            ...product,
            imageUrl: product.imageUrl ? product.imageUrl.map(img => {
              const fixedUrl = `${BASE_URL}${img.replace(/\\/g, '/')}`;
              return fixedUrl;
            }) : [],
          }));

          setProducts(processedProducts); // Update to set processedProducts
          setPagination(pagination);
          setLoading(false);
          console.log("processedProducts",processedProducts)
        })
        .catch(error => {
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
    <Container sx={{ marginTop: '120px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '5%' }}>{category}</Typography>
      <Grid container spacing={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Button
                onClick={() => {
                  const formData = {
                    id: item._id,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    category: item.category,
                    subcategory: item.subCategory,
                    color: item.color,
                    size: item.size,
                    stock: item.stock,
                    brand: item.brand,
                    description: item.description
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
                    {item.imageUrl && item.imageUrl.length > 0 ? (
                      <img
                        src={item.imageUrl[0]}
                        alt={item.name}
                        style={{
                          width: '120%',
                          height: '200px',
                          maxHeight: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        No image available
                      </Typography>
                    )}
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
      {/* Pagination or other UI elements can be added here using pagination state */}
    </Container>
  );
}

export default ProductList;
