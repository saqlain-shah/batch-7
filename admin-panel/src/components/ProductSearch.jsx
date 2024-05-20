import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, CircularProgress, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Autocomplete, Skeleton } from '@mui/material';

// Product component to display individual product details
const Product = ({ product, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <Typography>{product.description}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Category: {product.category}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

// ProductList component to display a list of products
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // Function to handle click on a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the product popup
  const handleClose = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    // Skeleton loading while data is loading
    return (
      <Grid container spacing={2}>
        {[...Array(12)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={250} />
              <CardContent>
                <Typography variant="h6">
                  <Skeleton />
                </Typography>
                <Typography>
                  <Skeleton count={2} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Product List:
      </Typography>
      <Autocomplete
        value={searchQuery}
        onChange={(event, newValue) => {
          setSearchQuery(newValue);
        }}
        freeSolo
        options={products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search Products" variant="outlined" fullWidth />
        )}
      />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>Price: ${product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProduct && <Product product={selectedProduct} onClose={handleClose} />}
    </div>
  );
};

export default ProductList;
