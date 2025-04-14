import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography, Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from './cartContext.jsx';

export const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, price, category, subCategory  } = location.state?.formData || {}; // 
  // Destructure product data from state
  const { addToCart } = useCart();
  const [productDetails, setProductDetails] = useState(location.state?.formData || null); // Use state data if available
  const [cartOpen, setCartOpen] = useState(false);
  const [color, setColor] = useState('Blue');
  const [size, setSize] = useState('Medium');
  const [successMessage, setSuccessMessage] = useState(false);

  // Fetch product details from API if 'id' exists and details are not in state
  useEffect(() => {
    if (id && !productDetails) {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/product/${id}`);
          setProductDetails(response.data);
          console.log('response : ', response.data)
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };

      fetchProductDetails();
    }
  }, [id, productDetails]);

  // Handle Add to Cart logic
  const handleAddToCart = () => {
    if (productDetails) {
      const imageUrl = productDetails.images && productDetails.images.length > 0
        ? productDetails.images[0]  // Select the first image
        : productDetails.imageUrl;
  
      addToCart({
        image: imageUrl,
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
    }
  };
  
  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(false);
  };

  const sizeOptions = ['Small', 'Medium', 'Large'];
  const colorOptions = ['Blue', 'Green', 'Pink', 'Yellow'];

  if (!productDetails) {
    return <Typography variant="h6">Loading product details...</Typography>;
  }

  return (
    <>
      <Box width="100%" display="flex" justifyContent="center" >
        <Box height="150vh" width="85%">
          <Grid container spacing={2} display="flex" justifyContent="space-between">
            <Grid item xs={12} md={5.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              {/* Display multiple images */}
              {productDetails.images && productDetails.images.length > 0 ? (
                productDetails.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Product Image ${index + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '70%', borderRadius: '10%', marginTop: '5%', marginBottom: '15px' }}
                  />
                ))
              ) : (
                <img
                  src={productDetails.imageUrl}
                  alt={productDetails.name}
                  style={{ maxWidth: '100%', maxHeight: '70%', borderRadius: '10%', marginTop: '5%' }}
                />
              )}
            </Grid>

            <Grid item xs={12} md={6.5}>
              <Typography variant="h5" color="black">{name || productDetails.name}</Typography>
              <Typography fontSize="15px" color="black" marginTop="8px" marginBottom="5px">
                <strike>$900.00</strike> / {price || productDetails.price}
              </Typography>
              <Typography marginTop="6px" sx={{ fontFamily: 'Calibri Light' }}>Sku: {productDetails.sku}</Typography>
              <Typography sx={{ color: 'black', fontWeight: '500', marginBottom: '5px', marginTop: '4px' }}>
                Brand: {productDetails.brand}
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: '500', marginBottom: '5px' }}>
                Category: {category || productDetails.category}
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: '500', marginBottom: '5px' }}>
                Subcategory: {subCategory || productDetails.subCategory                }
              </Typography>

              {/* Color and Size Options */}
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
                    sx={{
                      border: 'solid 1px lightgray',
                      marginRight: '3px',
                      backgroundColor: color === colorOption ? colorOption.toLowerCase() : 'inherit',
                      color: color === colorOption ? 'white' : 'black',
                      fontSize: '11px',
                    }}
                    onClick={() => setColor(colorOption)}
                  >
                    {colorOption}
                  </Button>
                ))}
              </Typography>

              {/* Add to Cart Button */}
              <Typography marginTop="10px">
                <Button variant="contained" sx={{ width: '63%', border: '1px solid gray', color: 'white' }} onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              </Typography>

              {/* Product Description */}
              <Typography marginTop="30px" sx={{ fontFamily: 'Calibri Light' }}>
                <Typography paragraph>{productDetails.description}</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Cart Modal */}
{/* Cart Modal */}
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

      {/* Display Image */}
      <Grid item container justifyContent="center">
        <img
          src={productDetails.images?.[0] || productDetails.imageUrl}  // Use the first image or fallback
          alt="product"
          width="80"
          style={{ borderRadius: '5%' }}
        />
      </Grid>

      {/* Product Details */}
      <Grid item>
        <Typography>{name}</Typography>
        <Typography>Brand: {productDetails.brand}</Typography>
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

        {/* Success Snackbar */}
        <Snackbar
          open={successMessage}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          message="Item added to cart"
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>
    </>
  );
};
