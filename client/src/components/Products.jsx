// src/components/FeaturedProducts.jsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const products = [
  { name: 'Product 1', price: '$100', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Product 2', price: '$150', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Product 3', price: '$200', imageUrl: 'https://via.placeholder.com/200' },
  { name: 'Product 4', price: '$250', imageUrl: 'https://via.placeholder.com/200' },
];

const FeaturedProducts = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy Now</Button>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedProducts;
