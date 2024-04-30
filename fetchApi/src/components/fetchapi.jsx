import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const ElectronicProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?_limit=300');
        const productsData = response.data.map(product => ({
          id: product.id,
          name: product.title,
          image: product.image,
          description: product.description,
          price: product.price
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
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
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ElectronicProducts;
