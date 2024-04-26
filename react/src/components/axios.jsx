import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ImageCard() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from an API
    axios.get('https://fakestoreapi.com/products?_limit=100')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card className={classes.card}>
            <CardMedia
            sx={{minHeight:"400px"}}
              className={classes.media}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageCard;
