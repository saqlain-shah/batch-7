import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';


const Shop = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', description: 'Description of Product 1', price: '$10.00' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'Description of Product 2', price: '$20.00' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', description: 'Description of Product 3', price: '$15.00' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150', description: 'Description of Product 4', price: '$25.00' },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150', description: 'Description of Product 5', price: '$12.00' },
    { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/150', description: 'Description of Product 6', price: '$18.00' },
    { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/150', description: 'Description of Product 7', price: '$30.00' },
    { id: 8, name: 'Product 8', image: 'https://via.placeholder.com/150', description: 'Description of Product 8', price: '$22.00' },
    { id: 9, name: 'Product 9', image: 'https://via.placeholder.com/150', description: 'Description of Product 9', price: '$17.00' },
    { id: 10, name: 'Product 10', image: 'https://via.placeholder.com/150', description: 'Description of Product 10', price: '$28.00' },
    { id: 11, name: 'Product 11', image: 'https://via.placeholder.com/150', description: 'Description of Product 11', price: '$14.00' },
    { id: 12, name: 'Product 12', image: 'https://via.placeholder.com/150', description: 'Description of Product 12', price: '$21.00' },
    { id: 13, name: 'Product 13', image: 'https://via.placeholder.com/150', description: 'Description of Product 13', price: '$32.00' },
    { id: 14, name: 'Product 14', image: 'https://via.placeholder.com/150', description: 'Description of Product 14', price: '$16.00' },
    { id: 15, name: 'Product 15', image: 'https://via.placeholder.com/150', description: 'Description of Product 15', price: '$23.00' },
  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
