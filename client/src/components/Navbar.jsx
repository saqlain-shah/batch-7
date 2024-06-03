import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div"
                sx={{ flexGrow: 1 }}
                >
                    My eCommerce
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
