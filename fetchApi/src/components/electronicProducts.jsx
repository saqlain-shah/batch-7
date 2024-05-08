import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ElectronicProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?_limit=300');
        setProducts(response.data);
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
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ElectronicProducts;
