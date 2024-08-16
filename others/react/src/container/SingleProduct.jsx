import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Product Details
      </Typography>
      <Card  sx={{marginTop:'5%', width:'400px' ,marginLeft:'32%'}}>
        <CardMedia
         
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body1" component="p">
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" component="p">
            Description: {product.description}
          </Typography>
          {/* You can display other details here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
