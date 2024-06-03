import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Typography, Button, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import blueShoe from './images/blue.jpg';
import greenShoe from './images/green.jpg';
import pinkShoe from './images/pink.jpg';
import yellowShoe from './images/yellow.jpg';

const images = {
  Blue: blueShoe,
  Green: greenShoe,
  Pink: pinkShoe,
  Yellow: yellowShoe,
};
export const ProductDetail = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [image, setImage] = useState(images.Blue);
  const [category, setCategory] = React.useState('');
    const [color, setColor] = useState('Black');

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };


  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setImage(images[selectedColor]);
    setColor(event.target.value)

  };

   
  
    const handleChange = (event) => {
      setCategory(event.target.value);
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
          <Grid item xs={6} md={5.5} sx={{ backgroundColor: 'white'}}>
            <img src={image} alt="product"  height={'50%'} style={{borderRadius:'80%'}} />
          </Grid>
          <Grid item xs={6} md={6.5}>
            <Typography variant='h5' color={'black'}>Seasonal Color Couck 70</Typography>
            <Typography fontSize={'15'} color={'black'} marginTop={'8px'} marginBottom={'5px'}><strike>$900.00</strike> / $500.00</Typography>
            <Typography marginTop={'6px'} sx={{ fontFamily: 'Calibri Light' }}>Sku: NJC50968-Black-L</Typography>
            <Typography marginTop={'13px'} sx={{ color: 'black', fontWeight: '500' }}>Color: {color}</Typography>
            <Typography sx={{ color: 'black', fontWeight: '500' }}>Brand: Converse</Typography>
            <Typography sx={{marginTop:'10px',marginBottom:'10px'}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Category"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'Men-Jacket'}>Men-Jacket</MenuItem>
          <MenuItem value={'Men-Shirt'}>Men-Shirt</MenuItem>
          <MenuItem value={'Men-Pant'}>Men-Pant</MenuItem>
          <MenuItem value={'Men-Short'}>Men-Short</MenuItem>
          <MenuItem value={'Men-Other'}>Men-Other</MenuItem>
          <MenuItem value={'Women-jacket'}>Women-jacket</MenuItem>
          <MenuItem value={'Women-Shirt'}>Women-Shirt</MenuItem>
          <MenuItem value={'Women-Pant'}>Women-pant</MenuItem>
          <MenuItem value={'Women-Short'}>Women-Short</MenuItem>
          <MenuItem value={'Women-Other'}>Women-Other</MenuItem>
          <MenuItem value={'Child-Jacket'}>Child-Jacket</MenuItem>
          <MenuItem value={'Child-Shirt'}>Child-Shirt</MenuItem>
          <MenuItem value={'Child-Pant'}>Child-Pant</MenuItem>
          <MenuItem value={'Child-Short'}>Child-Short</MenuItem>
          <MenuItem value={'Child-Other'}>Child-Other</MenuItem>
        
        </Select>
      </FormControl>
            </Typography>
           
            <Typography marginTop={'25px'}>
              <Button sx={{ border: 'solid 1px lightgray', marginRight: '6px' }}>Small</Button>
              <Button sx={{ border: 'solid 1px lightgray', marginRight: '6px' }}>Medium</Button>
              <Button sx={{ border: 'solid 1px lightgray' }}>Large</Button>
            </Typography>
            <Typography marginTop={'15px'}>
              <Button value="Blue" onClick={handleColorChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px', '&:hover': { backgroundColor: 'blue', fontWeight: 'bold', color: 'white' } }}>Blue</Button>
              <Button value="Green" onClick={handleColorChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px', '&:hover': { backgroundColor: 'green', fontWeight: 'bold', color: 'white' } }}>Green</Button>
              <Button value="Pink" onClick={handleColorChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px', '&:hover': { backgroundColor: 'pink', fontWeight: 'bold', color: 'white' } }}>Pink</Button>
              <Button value="Yellow" onClick={handleColorChange} sx={{ border: 'solid 1px lightgray', marginRight: '3px', color: 'black', fontSize: '11px', '&:hover': { backgroundColor: 'yellow', color: 'white', fontWeight: 'bold' } }}>Yellow</Button>
            </Typography>
            <Typography marginTop={"10px"}>
              <Button variant="contained" sx={{ width: '63%', border: '1px solid gray', color: 'white' }} onClick={handleAddToCart}>Add To Cart</Button>
            </Typography>
            <Typography marginTop={'30px'} sx={{ fontFamily: 'Calibri Light' }}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae provident harum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident mollitia eaque asperiores, fuga, optio suscipit magni beatae sapiente voluptas et ducimus.
              </p>
            </Typography>
          </Grid>
         
        </Grid>
      </Box>

      {cartOpen && (
        <Box
          position="fixed"
          top={20}
          right={15}
          height="52vh"
          width="300px"
          bgcolor="white"
          boxShadow={3}
          zIndex={10}
          p={2}
        >
          <Grid container direction="column" spacing={1}>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Typography variant="h6" textAlign={'center'}>Just added to your Cart</Typography>
              <IconButton onClick={handleCloseCart}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item container justifyContent="center">
              <img src={image} alt="product" width="80" />
            </Grid>
            <Grid item>
              <Typography>Seasonal Color Couck 70</Typography>
              <Typography>Category: {category}</Typography>
            </Grid>
            <Grid item>
              <Typography>Color: {color}</Typography>
            </Grid>
            <Grid item>
           <Link to='/viewCard'><Button fullWidth variant="contained" color="primary">View Cart</Button></Link>   
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
