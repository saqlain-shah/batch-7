import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Product = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3' },

  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;
