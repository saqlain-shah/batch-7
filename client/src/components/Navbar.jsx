import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Products', 'About', 'Contact'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: 'none' } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My eCommerce
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, justifyContent:'center', alignItems:'center' }}> {/* Use gap for spacing between links */}
                        <MuiLink
                            component={Link}
                            to="/"
                            color="inherit"
                            sx={{ textDecoration: 'none', fontSize: '1.2rem' }}
                        >
                            Home
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/product"
                            color="inherit"
                            sx={{ textDecoration: 'none', fontSize: '1.2rem' }}
                        >
                            Products
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/about"
                            color="inherit"
                            sx={{ textDecoration: 'none', fontSize: '1.2rem' }}
                        >
                            About
                        </MuiLink>
                        <MuiLink
                            component={Link}
                            to="/contact"
                            color="inherit"
                            sx={{ textDecoration: 'none', fontSize: '1.2rem' }}
                        >
                            Contact
                        </MuiLink>

                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                        </IconButton>

                        <MuiLink
                            component={Link}
                            to="/login"
                            color="inherit"
                            sx={{ textDecoration: 'none', fontSize: '1.2rem' }}
                        >
                            Sign In
                        </MuiLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerList}
            </Drawer>
        </>
    );
};

export default Navbar;
