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

  useEffect(() => {
    if (category) {
      axios.get("http://localhost:8000/api/product/")
        .then(response => {
          const { products, pagination } = response.data;
          setProducts(products);
          setPagination(pagination);
          setLoading(false);
          console.log("Product Lsit Component",category)
          console.log("Product Lsit Response",response)
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
                    id:item._id,
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
                    <img
                      src={item && item.imageUrl}
                      alt={item && item.name}
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
                      {item && item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item && item.price}
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
