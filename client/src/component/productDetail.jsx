import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from './cartContext.jsx';

export const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, price, category, subCategory } = location.state?.formData || {};
  const { addToCart } = useCart();
  const [productDetails, setProductDetails] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [color, setColor] = useState('Blue');
  const [size, setSize] = useState('Medium');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      image: productDetails.imageUrl,
      category,
      subCategory,
      color,
      size,
      price: parseFloat(price),
      name,
      brand: productDetails.brand,
      stock: productDetails.stock,
    });
    setCartOpen(true);
    setSuccessMessage(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(false);
  };

  const sizeOptions = ['Small', 'Medium', 'Large'];
  const colorOptions = ['Blue', 'Green', 'Pink', 'Yellow'];

  return (
    <>
      <Box width="100%" display="flex" justifyContent="center" marginTop="110px">
        <Box height="100vh" width="85%">
          <Grid container spacing={2} display="flex" justifyContent="space-between">
            <Grid item xs={12} md={5.5} sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={productDetails.imageUrl} alt="product" style={{ maxWidth: '100%', maxHeight: '70%', borderRadius: '10%', marginTop: '5%' }} />
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Typography variant="h5" color="black">{name}</Typography>
              <Typography fontSize="15px" color="black" marginTop="8px" marginBottom="5px">
                <strike>$900.00</strike> / {price}
              </Typography>
              <Typography marginTop="6px" sx={{ fontFamily: 'Calibri Light' }}>Sku: {productDetails.sku}</Typography>
              <Typography sx={{ color: 'black', fontWeight: '500' ,marginBottom:'5px' ,marginTop:'4px'}}>Brand: {productDetails.brand}</Typography>
              <Typography sx={{ color: 'black', fontWeight: '500' ,marginBottom:'5px'  }}>Category: {category}</Typography>
              <Typography sx={{ color: 'black', fontWeight: '500', marginBottom:'5px'  }}>Subcategory: {subCategory}</Typography>

              <Typography marginTop="13px" sx={{ color: 'black', fontWeight: '500' }}>Color: {color}</Typography>

              <Typography marginTop="25px">
                {sizeOptions.map((sizeOption) => (
                  <Button
                    key={sizeOption}
                    sx={{
                      border: 'solid 1px lightgray',
                      marginRight: '6px',
                      backgroundColor: size === sizeOption ? 'gray' : 'inherit',
                      color: size === sizeOption ? 'white' : 'black',
                    }}
                    onClick={() => setSize(sizeOption)}
                  >
                    {sizeOption}
                  </Button>
                ))}
              </Typography>

              <Typography marginTop="15px">
                {colorOptions.map((colorOption) => (
                  <Button
                    key={colorOption}
                    value={colorOption}
                    onClick={() => setColor(colorOption)}
                    sx={{
                      border: 'solid 1px lightgray',
                      marginRight: '3px',
                      backgroundColor: color === colorOption ? colorOption.toLowerCase() : 'inherit',
                      color: color === colorOption ? 'white' : 'black',
                      fontSize: '11px',
                    }}
                  >
                    {colorOption}
                  </Button>
                ))}
              </Typography>

              <Typography marginTop="10px">
                <Button variant="contained" sx={{ width: '63%', border: '1px solid gray', color: 'white' }} onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              </Typography>

              <Typography marginTop="30px" sx={{ fontFamily: 'Calibri Light' }}>
                <Typography paragraph>
                  {productDetails?.description}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {cartOpen && (
          <Box
            position="fixed"
            top={115}
            right={15}
            height="72vh"
            width="300px"
            bgcolor="white"
            boxShadow={3}
            zIndex={10}
            p={2}
          >
            <Grid container direction="column" spacing={1}>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Typography variant="h6" textAlign="center">Just added to your Cart</Typography>
                <IconButton onClick={handleCloseCart}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item container justifyContent="center">
                <img src={productDetails?.imageUrl} alt="product" width="80" style={{ borderRadius: '5%' }} />
              </Grid>
              <Grid item>
                <Typography>{name}</Typography>
                <Typography>Brand: {productDetails?.brand}</Typography>
                <Typography>Category: {category}</Typography>
                <Typography>Subcategory: {subCategory}</Typography>
                <Typography>Color: {color}</Typography>
                <Typography>Size: {size}</Typography>
                <Typography>Price: {price}</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: 'darkblue', fontWeight: 'bolder' }}
                  onClick={() => navigate('/viewCart')} 
                >
                  View Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        <Snackbar
          open={successMessage}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          message="Item added to cart successfully!"
        />
      </Box>
    </>
  );
};
