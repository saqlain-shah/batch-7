import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Form', path: '/formik' },
  { label: 'Table', path: '/table' },
  { label: 'Multistep Form', path: '/Stepper' },
  { label : 'Products', path: 'axios'},
  { label: 'SignIn', path: '/SignIn' },
  { label: 'Register', path: '/SignUp' }
 
];

const navbarStyles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  menuItem: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: 10,
  },
};

const Navbar = () => {
  return (
    <div style={navbarStyles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={navbarStyles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={navbarStyles.title}>
            RinoR
          </Typography>
          {menuItems.map((item, index) => (
            <Button 
              color="inherit" 
              key={index} 
              component={Link} 
              to={item.path} 
              style={navbarStyles.menuItem}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
