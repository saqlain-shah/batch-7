import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import blackShoe from './images/black.png';
import greenShoe from './images/green.png';
import pinkShoe from './images/pink.png';
import brownShoe from './images/brown.png';

const images = {
  Black: blackShoe,
  Green: greenShoe,
  Pink: pinkShoe,
  Brown: brownShoe,
};

export const ProductDetail = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Black');
  const [image, setImage] = useState(images.Black);

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    setImage(images[selectedColor]);
  };

  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'}>
      <Box height={'100vh'} width={'85%'} display="flex">
        <Grid container spacing={1} display={'flex'} justifyContent={'space-between'}>
          <Grid item xs={6} md={12} marginTop={'15px'} marginBottom={'18px'}>
          <Link sx={{ textDecoration:'none','&:hover':{cursor:'pointer' , color:'darkblue'}}} to='/productDetail'>Home</Link>
            <Link sx={{textDecoration:'none','&:hover':{cursor:'pointer' , color:'darkblue'}}} to='/productDetail'>/Women</Link>
            <typography>/Seasonal Color Couck 70</typography>
          </Grid>
          <Grid item xs={12} md={5.9} sx={{ backgroundColor: '#f0f5f5' }}>
            <img src={image} alt="product" />
          </Grid>
          <Grid item xs={12} md={5.9}>
            <Typography variant='h5' color={'black'}>Seasonal Color Couck 70</Typography>
            <Typography fontSize={'15'} color={'black'} marginTop={'8px'} marginBottom={'5px'}><strike>$900.00</strike> / $500.00</Typography>
            <Typography marginTop={'6px'} sx={{ fontFamily: 'Calibri Light' }}>Sku: NJC50968-Black-L</Typography>
            <Typography marginTop={'13px'} sx={{ color: 'black', fontWeight: '500' }}>Color: {color}</Typography>
            <Typography sx={{ color: 'black', fontWeight: '500' }}>Brand: Converse</Typography>
            <Typography>
              <input
                type="number"
                placeholder='Quantity'
                style={{ fontSize: '15px', textAlign: 'left', width: '80px', height: '40px', marginTop: '8px' }}
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Typography>
            <Typography marginTop={"7px"}>
              <Button variant="contained" sx={{ width: '100%', border: '1px solid gray', color: 'white' }} onClick={handleAddToCart}>Add To Cart</Button>
            </Typography>
            <Typography marginTop={'25px'}>
              <Button sx={{ border: 'solid 1px lightgray', marginRight: '3px' }}>L</Button>
              <Button sx={{ border: 'solid 1px lightgray' }}>M</Button>
            </Typography>
            <Typography marginTop={'15px'}>
              <Button value="Pink" onClick={handleImageChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px' }}>Pink</Button>
              <Button value="Green" onClick={handleImageChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px' }}>Green</Button>
              <Button value="Black" onClick={handleImageChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px' }}>Black</Button>
              <Button value="Brown" onClick={handleImageChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px' }}>Brown</Button>
            </Typography>
            <Typography marginTop={'30px'} sx={{ fontFamily: 'Calibri Light' }}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae provident harum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident mollitia eaque asperiores, fuga, optio suscipit magni beatae sapiente voluptas et ducimus.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={6} md={10}>
            <img src={image} width={'200px'} alt="" />
          </Grid>
        </Grid>
      </Box>

      {cartOpen && (
        <Box
          position="fixed"
          top={20}
          right={15}
          height="50vh"
          width="300px"
          bgcolor="white"
          boxShadow={3}
          zIndex={10}
          p={2}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Just added to your Cart</Typography>
              <IconButton onClick={handleCloseCart}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item container justifyContent="center">
              <img src={image} alt="product" width="80" />
            </Grid>
            <Grid item>
              <Typography>Seasonal Color Couck 70</Typography>
              <Typography>Quantity: {quantity}</Typography>
            </Grid>
            <Grid item>
              <Typography>Color : {color}</Typography>
            </Grid>
            <Grid item>
              <Button fullWidth variant="contained" color="primary">View Cart</Button>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">Continue Shopping</Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
