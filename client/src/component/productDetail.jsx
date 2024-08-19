import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, IconButton, MenuItem, Select, FormControl, InputLabel, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from './cartContext.jsx';

export const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { name, imageUrl, price, category } = location.state?.formData || {};
  const { addToCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [color, setColor] = useState('Blue');
  const [size, setSize] = useState('Medium');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      image: imageUrl,
      category: category,
      color,
      size,
      price: parseFloat(price),
      name: name
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
              <img src={imageUrl} alt="product" style={{ maxWidth: '100%', maxHeight: '70%', borderRadius: '10%', marginTop: '5%' }} />
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Typography variant="h5" color="black">{name}</Typography>
              <Typography fontSize="15px" color="black" marginTop="8px" marginBottom="5px">
                <strike>$900.00</strike> / {price}
              </Typography>
              <Typography marginTop="6px" sx={{ fontFamily: 'Calibri Light' }}>Sku: NJC50968-Black-L</Typography>
              <Typography marginTop="13px" sx={{ color: 'black', fontWeight: '500' }}>Color: {color}</Typography>
              <Typography sx={{ color: 'black', fontWeight: '500' }}>Brand: Converse</Typography>
              <Typography marginTop="10px" marginBottom="10px">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    label="Category"
                  >
                    <MenuItem value={category}>{category}</MenuItem>
                  </Select>
                </FormControl>
              </Typography>

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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae provident harum tenetur.
                </Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident mollitia eaque asperiores, fuga, optio suscipit magni beatae sapiente voluptas et ducimus.
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
            height="42vh"
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
                <img src={imageUrl} alt="product" width="80" style={{ borderRadius: '5%' }} />
              </Grid>
              <Grid item>
                <Typography>{name}</Typography>
                <Typography>Category: {category}</Typography>
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
